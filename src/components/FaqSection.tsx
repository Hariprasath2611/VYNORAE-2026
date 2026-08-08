import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/faqs";

export const FaqSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="details-header-wrapper">
        <h2 className="details-header">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="section-tagline">
          Resolve your queries regarding registration, participation logistics, fee parameters, and event flow.
        </p>
      </div>

      <div className="faq-container">
        {FAQ_ITEMS.map((faq) => {
          const isActive = activeId === faq.id;
          return (
            <div key={faq.id} className={`faq-item ${isActive ? "active" : ""}`}>
              <button className="faq-question" onClick={() => toggleFaq(faq.id)}>
                <span>
                  {faq.num} // {faq.question}
                </span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
