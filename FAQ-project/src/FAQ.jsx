
import { useState } from "react";
import "./component/FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library used to build user interfaces."
    },
    {
      question: "Is React easy to learn?",
      answer:
        "Yes! You can learn React step by step with regular practice."
    },
    {
      question: "What is an FAQ?",
      answer:
        "FAQ means Frequently Asked Questions. It provides answers to common questions."
    },
    {
      question: "Do I need to know JavaScript to learn React?",
      answer:
        "Yes, basic knowledge of JavaScript will help you understand React."
    },
    {
      question: "How can I contact you?",
      answer:
        "You can contact us through our email or contact page."
    }
  ];

  function toggleQuestion(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      <p className="faq-subtitle">
        Find answers to some common questions below.
      </p>

      <div className="faq-list">
        {questions.map((item, index) => (
          <div className="faq-item" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleQuestion(index)}
              aria-expanded={openIndex === index}
            >
              <span>{item.question}</span>

              <span className="faq-icon">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
