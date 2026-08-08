import { useEffect, useRef } from "react";

class Spark {
  x: number = 0;
  y: number = 0;
  size: number = 0;
  speedY: number = 0;
  speedX: number = 0;
  alpha: number = 0;
  fadeRate: number = 0;
  colorBase: string = "";

  constructor(width: number, height: number) {
    this.reset(width, height);
  }

  reset(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = height + Math.random() * 50;
    this.size = Math.random() * 2 + 0.8;
    this.speedY = Math.random() * 1.2 + 0.4;
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.alpha = Math.random() * 0.5 + 0.2;
    this.fadeRate = Math.random() * 0.003 + 0.001;
    const colors = [
      "rgba(0, 255, 102, ",
      "rgba(32, 143, 74, ",
      "rgba(122, 194, 149, ",
      "rgba(240, 255, 150, ",
    ];
    this.colorBase = colors[Math.floor(Math.random() * colors.length)];
  }

  update(width: number, height: number, velocity: number = 0) {
    const boost = Math.min(Math.abs(velocity) * 0.12, 4);
    this.y -= (this.speedY + boost);
    this.x += this.speedX;
    this.alpha -= this.fadeRate;

    if (this.alpha <= 0 || this.y < -10 || this.x < -10 || this.x > width + 10) {
      this.reset(width, height);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.colorBase + this.alpha + ")";
    ctx.shadowBlur = this.size * 3;
    ctx.shadowColor = "rgba(0, 255, 102, 0.8)";
    ctx.fill();
    ctx.restore();
  }
}

export function useSparksCanvas(canvasRef: React.RefObject<HTMLCanvasElement>) {
  const sparksRef = useRef<Spark[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const sparkCount = 45;
    const sparks: Spark[] = [];
    for (let i = 0; i < sparkCount; i++) {
      const spark = new Spark(width, height);
      spark.y = Math.random() * height;
      sparks.push(spark);
    }
    sparksRef.current = sparks;

    let animFrameId: number | null = null;
    let canvasVisible = true;

    const animate = () => {
      if (!canvasVisible || document.hidden) {
        animFrameId = null;
        return;
      }
      ctx.clearRect(0, 0, width, height);
      const vel = (window as any).__lenisVelocity || 0;
      for (let i = 0; i < sparks.length; i++) {
        sparks[i].update(width, height, vel);
        sparks[i].draw(ctx);
      }
      animFrameId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (!animFrameId && canvasVisible && !document.hidden) {
        animFrameId = requestAnimationFrame(animate);
      }
    };

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            canvasVisible = entry.isIntersecting;
            if (canvasVisible) {
              startAnimation();
            }
          });
        },
        { threshold: 0.01 }
      );
      observer.observe(canvas);
    }

    const handleVisibilityChange = () => {
      if (!document.hidden && canvasVisible) {
        startAnimation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    startAnimation();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (observer) observer.disconnect();
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [canvasRef]);
}
