import React, { useState, useEffect } from "react";
import data from "./accordionData.json";
import "./Accordion.scss";

const Accordion = () => {
  const [accordionData, setAccordionData] = useState([]);

  useEffect(() => {
    setAccordionData(data);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <h1 className="accordion-title"> Transcript</h1>
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <h3>{item.question}</h3>
            <span>{openIndex === index ? "▲" : "▼"}</span>
          </div>
          {openIndex === index && (
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
