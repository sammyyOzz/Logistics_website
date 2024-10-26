import React, { useState } from "react";
import "./OurFAQ.scss";
export const OurFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is the shipment process?",
      answer:
        "Our shipment process includes 4 steps: What are you shipping, choose your speed, Book a pick up and track.",
    },
    {
      question: "How do I book a pick up? Do I need to register first?",
      answer:
        "For individual collections, you can book online with no registration required. For more frequent shipping, registering maybe more suitable. Contact us if you need assistance choosing the right solution for your business.",
    },
    {
      question: "Where can I find prices for your services?",
      answer:
        " For more accurate pricing, contact us and we'll be happy to help.",
    },
    {
      question: "How long will it take to deliver my shipment?",
      answer:
        "This depends on the service requested and the pick-up and delivery locations.",
    },
    {
      question: "What if I don't know the destination postcode?",
      answer:
        "If you don't know the destination postcode, please check with the receiver or contact us. Incorrect postcodes can cause transit delays and may incur unnecessary charges.",
    },
    {
      question: "How do I change or cancel a booking request?",
      answer: "To change or cancel your booking, please contact us.",
    },
    {
      question: "Are there any items I cannot send?",
      answer:
        "Nimble provides a business-to-business package delivery service for business mail, documents and parcels. Certain dangerous goods and hazardous materials can be shipped under appropriate conditions. Contact Us for more info.",
    },
    {
      question: "How do I make a complaint?",
      answer:
        "Your satisfaction is of utmost importance to us. Please contact us to submit a Complaint form",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the dropdown
  };
  return (
    <div className="ourfaq">
      <div className="ourfaqtitle">Our Faqs.</div>
      <p>The most common questions we get asked.</p>

      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => handleToggle(index)}>
              {item.question}
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
