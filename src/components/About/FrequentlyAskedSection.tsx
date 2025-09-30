import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services saoirse provide ?",
      answer: "Saoirse provides comprehensive business solutions including consulting, strategic planning, digital transformation, and custom software development to help organizations achieve their goals."
    },
    {
      question: "How do i get started?",
      answer: "Getting started is simple! Contact our team through the website, schedule a consultation, and we'll assess your needs to create a customized plan tailored to your business objectives."
    },
    {
      question: "What kind of support will i get?",
      answer: "You'll receive 24/7 dedicated support from our expert team, including onboarding assistance, training resources, regular check-ins, and ongoing technical support throughout your journey with us."
    },
    {
      question: "Can i scacle my team up or down?",
      answer: "Absolutely! Our flexible engagement models allow you to scale your team up or down based on your project requirements and business needs, ensuring optimal resource allocation at all times."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-gray-200 flex items-center justify-center px-6 sm:px-8 lg:px-8 py-10 lg:py-18 font-satoshi text-[#484a5e]">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Section - Title */}
          <div className="flex items-start lg:items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
              Frequently Asked<br />Questions
            </h1>
          </div>

          {/* Right Section - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-400 pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-base sm:text-lg text-indigo-600 font-normal pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 mt-3' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}