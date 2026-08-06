document.addEventListener('DOMContentLoaded', () => {
    // 0. Lazy-loading videos & Hero video deferral
    // Defer hero video loading until window load to prioritize critical styling, scripting, and React rendering
    window.addEventListener('load', () => {
        const heroVideo = document.querySelector('video.hero-lazy-video');
        if (heroVideo) {
            const source = heroVideo.querySelector('source');
            if (source && source.dataset.src) {
                source.src = source.dataset.src;
                heroVideo.load();
                heroVideo.play().catch(err => {
                    console.warn("Hero video autoplay failed/blocked:", err);
                });
            }
        }
    });

    // Intersection Observer for below-the-fold lazy background videos
    if ('IntersectionObserver' in window) {
        const lazyVideoObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    const sources = video.querySelectorAll('source');
                    sources.forEach(source => {
                        if (source.dataset.src) {
                            source.src = source.dataset.src;
                        }
                    });
                    video.load();
                    video.play().catch(err => {
                        console.warn("Lazy video autoplay failed/blocked:", err);
                    });
                    video.classList.remove('lazy-video');
                    observer.unobserve(video);
                }
            });
        }, {
            rootMargin: '200px 0px', // Load videos 200px before they enter the viewport
            threshold: 0.1
        });

        const lazyVideos = document.querySelectorAll('video.lazy-video');
        lazyVideos.forEach(video => {
            lazyVideoObserver.observe(video);
        });
    } else {
        // Fallback for older browsers
        const lazyVideos = document.querySelectorAll('video.lazy-video');
        lazyVideos.forEach(video => {
            const sources = video.querySelectorAll('source');
            sources.forEach(source => {
                if (source.dataset.src) {
                    source.src = source.dataset.src;
                }
            });
            video.load();
        });
    }

    // 1. Particle / Sparks Canvas Animation
    const canvas = document.getElementById('sparksCanvas');
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    class Spark {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = height + Math.random() * 50;
            this.size = Math.random() * 2 + 0.8;
            this.speedY = Math.random() * 1.2 + 0.4;
            this.speedX = (Math.random() - 0.5) * 0.6;
            this.alpha = Math.random() * 0.5 + 0.2;
            this.fadeRate = Math.random() * 0.003 + 0.001;
            // Palette matches color theme: neon green to pale yellow-green
            const colors = [
                'rgba(0, 255, 102, ',
                'rgba(32, 143, 74, ',
                'rgba(122, 194, 149, ',
                'rgba(240, 255, 150, '
            ];
            this.colorBase = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.y -= this.speedY;
            this.x += this.speedX;
            this.alpha -= this.fadeRate;

            if (this.alpha <= 0 || this.y < -10 || this.x < -10 || this.x > width + 10) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.colorBase + this.alpha + ')';
            // Subtle glow
            ctx.shadowBlur = this.size * 3;
            ctx.shadowColor = 'rgba(0, 255, 102, 0.8)';
            ctx.fill();
            ctx.restore();
        }
    }

    const sparkCount = 45;
    const sparks = [];
    for (let i = 0; i < sparkCount; i++) {
        sparks.push(new Spark());
        // Stagger initial Y positions so they don't all rise from bottom at once
        sparks[i].y = Math.random() * height;
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < sparkCount; i++) {
            sparks[i].update();
            sparks[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();

    // 2. Navigation Link Activation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });



    // 4. Pagination / Slide indicators
    const indicators = document.querySelectorAll('.indicator-dot');
    indicators.forEach(dot => {
        dot.addEventListener('click', () => {
            indicators.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            console.log(`Slide ${dot.dataset.slide} active.`);

            // Subtle portal halo ripple effect
            const halo = document.querySelector('.portal-halo');
            if (halo) {
                halo.style.transform = 'scale(1.05)';
                halo.style.boxShadow = '0 0 50px rgba(0, 255, 102, 0.9), inset 0 0 50px rgba(0, 255, 102, 0.9)';
                setTimeout(() => {
                    halo.style.transform = '';
                    halo.style.boxShadow = '';
                }, 400);
            }
        });
    });

    // 5. Video Play Modal
    const playBtn = document.querySelector('.play-btn');
    const videoModal = document.getElementById('videoModal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');

    if (playBtn && videoModal) {
        playBtn.addEventListener('click', () => {
            videoModal.classList.add('active');
        });

        const closeModal = () => {
            videoModal.classList.remove('active');
            // Pause/reset iframe src to stop playback when closing
            const iframe = videoModal.querySelector('iframe');
            if (iframe) {
                const src = iframe.src;
                iframe.src = src;
            }
        };

        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);
    }

    // 6. Refresh Button
    const refreshBtn = document.querySelector('.refresh-btn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            // Pulse the page and reload
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                window.location.reload();
            }, 500);
        });
    }

    // 7. Add Crew Button Interaction
    const addCrewBtn = document.querySelector('.add-crew-btn');
    if (addCrewBtn) {
        addCrewBtn.addEventListener('click', () => {
            // Add a temporary animation class
            addCrewBtn.style.transform = 'scale(0.85)';
            setTimeout(() => {
                addCrewBtn.style.transform = 'scale(1)';
                
                // Show a quick visual indication (e.g. log or message)
                console.log('Open crew invite popup.');
                
                // Dynamically spawn a burst of sparks around button
                const btnRect = addCrewBtn.getBoundingClientRect();
                const btnX = btnRect.left + btnRect.width / 2;
                const btnY = btnRect.top + btnRect.height / 2;
                
                for (let i = 0; i < 15; i++) {
                    const extraSpark = new Spark();
                    extraSpark.x = btnX;
                    extraSpark.y = btnY;
                    extraSpark.speedY = (Math.random() - 0.5) * 5;
                    extraSpark.speedX = (Math.random() - 0.5) * 5;
                    extraSpark.alpha = 1;
                    extraSpark.fadeRate = 0.02;
                    extraSpark.size = Math.random() * 3 + 1.5;
                    sparks.push(extraSpark);
                }
            }, 100);
        });
    }

    // 8. Scroll Down Button Interaction
    const scrollDownBtn = document.getElementById('scrollDownBtn');
    const heroCtaBtn = document.getElementById('heroCtaBtn');
    const scrollToDetails = () => {
        const detailsSection = document.getElementById('details');
        if (detailsSection) {
            detailsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', scrollToDetails);
    }
    // 9. Judging Criteria Dashboard Interaction
    function initJudgingDashboard() {
        const rows = document.querySelectorAll('.dashboard-row');
        const gaugeFill = document.getElementById('mainGaugeFill');
        const percentText = document.getElementById('mainGaugePercent');
        const displayTag = document.getElementById('displayTag');
        const displayTitle = document.getElementById('displayTitle');
        const displayDesc = document.getElementById('displayDesc');
        const displayCard = document.querySelector('.display-content-card');
        const dashboard = document.querySelector('.judging-dashboard');

        if (!rows.length || !gaugeFill) return;

        const CIRCUMFERENCE = 2 * Math.PI * 40; // 251.327
        gaugeFill.style.strokeDasharray = `${CIRCUMFERENCE}`;

        let currentPercent = 0;
        let animatedCounter = null;
        let isUserInteracting = false;
        let currentIndex = 0;

        function updateGauge(percent) {
            const offset = CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;
            gaugeFill.style.strokeDashoffset = `${offset}`;
        }

        function animateNumber(targetPercent) {
            if (animatedCounter) clearInterval(animatedCounter);

            let startPercent = currentPercent || parseInt(percentText.textContent) || 0;
            if (startPercent === targetPercent) {
                percentText.textContent = `${targetPercent}%`;
                return;
            }

            const duration = 350; // ms
            const steps = 18;
            const increment = (targetPercent - startPercent) / steps;
            let currentStep = 0;

            animatedCounter = setInterval(() => {
                currentStep++;
                startPercent += increment;
                percentText.textContent = `${Math.round(startPercent)}%`;

                if (currentStep >= steps) {
                    percentText.textContent = `${targetPercent}%`;
                    currentPercent = targetPercent;
                    clearInterval(animatedCounter);
                }
            }, duration / steps);
        }

        function selectRow(row, userTriggered = false) {
            if (userTriggered) {
                isUserInteracting = true;
            }

            const index = Array.from(rows).indexOf(row);
            if (index !== -1) currentIndex = index;

            rows.forEach(r => r.classList.remove('active'));
            row.classList.add('active');

            const tag = row.getAttribute('data-tag');
            const title = row.getAttribute('data-title');
            const weight = parseInt(row.getAttribute('data-weight')) || 0;
            const desc = row.getAttribute('data-desc');

            if (displayCard) {
                displayCard.classList.add('switching');
                setTimeout(() => {
                    if (displayTag) displayTag.textContent = `[ ${tag} ]`;
                    if (displayTitle) displayTitle.textContent = title;
                    if (displayDesc) displayDesc.textContent = desc;
                    displayCard.classList.remove('switching');
                }, 120);
            } else {
                if (displayTag) displayTag.textContent = `[ ${tag} ]`;
                if (displayTitle) displayTitle.textContent = title;
                if (displayDesc) displayDesc.textContent = desc;
            }

            animateNumber(weight);
            updateGauge(weight);
        }

        // Initialize sync with active row (or first row)
        const initialRow = document.querySelector('.dashboard-row.active') || rows[0];
        if (initialRow) {
            const initialWeight = parseInt(initialRow.getAttribute('data-weight')) || 25;
            currentPercent = initialWeight;
            percentText.textContent = `${initialWeight}%`;
            updateGauge(initialWeight);
            selectRow(initialRow);
        }

        rows.forEach(row => {
            row.addEventListener('mouseenter', () => selectRow(row, true));
            row.addEventListener('click', () => selectRow(row, true));
        });

        // Auto-cycle through criteria when user is not hovering over the dashboard
        if (dashboard) {
            dashboard.addEventListener('mouseenter', () => { isUserInteracting = true; });
            dashboard.addEventListener('mouseleave', () => { isUserInteracting = false; });
        }

        setInterval(() => {
            if (!isUserInteracting) {
                currentIndex = (currentIndex + 1) % rows.length;
                selectRow(rows[currentIndex]);
            }
        }, 4000);
    }
    initJudgingDashboard();

    // 10. Cyber Countdown Timer Logic
    function initCountdownTimer() {
        const daysEl = document.getElementById('timerDays');
        const hoursEl = document.getElementById('timerHours');
        const minutesEl = document.getElementById('timerMinutes');
        const secondsEl = document.getElementById('timerSeconds');

        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

        // Target Date: August 21, 2026 10:00:00 AM IST
        const targetDate = new Date(2026, 7, 21, 10, 0, 0).getTime();

        function updateTimer() {
            const now = Date.now();
            const distance = targetDate - now;

            if (distance <= 0) {
                daysEl.textContent = '00';
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                secondsEl.textContent = '00';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysEl.textContent = days < 10 ? `0${days}` : days;
            hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
            minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
            secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;

            requestAnimationFrame(updateTimer);
        }

        requestAnimationFrame(updateTimer);
    }
    initCountdownTimer();

    // 12. Mobile Hamburger Menu
    const hamburgerBtn = document.getElementById('navHamburger');
    const navbar = document.getElementById('mainNavbar');
    const navMenuEl = document.getElementById('navLinks');

    if (hamburgerBtn && navbar) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navbar.classList.toggle('nav-open');
            hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close menu when a nav link is clicked (smooth scroll then close)
        if (navMenuEl) {
            navMenuEl.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navbar.classList.remove('nav-open');
                    hamburgerBtn.setAttribute('aria-expanded', 'false');
                });
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navbar.classList.contains('nav-open') && !navbar.contains(e.target)) {
                navbar.classList.remove('nav-open');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
});
