// src/FAQ.jsx
import React, { useState } from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`py-4 px-8 ${isOpen ? 'bg-gray-100 rounded-2xl' : ''}`}>
      <div
        onClick={onClick}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        <button className="text-2xl text-gray-600">
          {isOpen ? "-" : "+"}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen mt-2' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Does BoxCar own the cars I see online or are they owned by others?",
      answer: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
    },
    {
      question: "How do you choose the cars that you sell?",
      answer: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
    },
    {
      question: "Can I save my favorite cars to a list I can view later?",
      answer: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
    },
    {
      question: "Can I be notified when cars I like are added to your inventory?",
      answer: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
    },
    {
      question: "What tools do you have to help me find the right car for me and my budget?",
      answer: "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="flex flex-col px-4 sm:px-12 lg:px-48 my-24 gap-2">
      <p className="font-dmSans text-4xl font-bold self-center ">
        Frequently Asked Questions
      </p>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};
