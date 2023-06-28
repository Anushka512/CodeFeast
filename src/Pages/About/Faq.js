import React, { useState } from 'react';
import './Faq.scss';
import FAQ from '../../Components/Faq/Faqi';

const Faq = () => {
  const faqData = [
    {
      question: 'What is FAQ?',
      answer:
        'FAQ stands for Frequently Asked Questions. It is a collection of common questions and their respective answers.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach our customer support team through email or phone. Visit our Contact Us page for more information.',
    },
    {
      question: 'Can I return my order?',
      answer: 'Yes, you can return your order within 30 days of purchase. Please refer to our Return Policy for more details.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-page">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <p className="faq-description">Find answers to common questions about our products and services.</p>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <FAQ
            key={index}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
