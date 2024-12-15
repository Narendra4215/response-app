import React, { useEffect, useState } from "react";
import data from "./data.json";
import "./FetchData.scss"; // Import SCSS file

const FetchData = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    setJsonData(data);
  }, []);
  const getConicGradient = (skills) => {
    const colors = ["#1a83ce", "#0a182a", "#f3b409", "#5e4672","#1762a4"]; // Define colors
    let currentPercentage = 0;

    const gradientParts = Object.entries(skills).map(([skill, value], index) => {
      const percentage = parseFloat(value);
      const start = currentPercentage;
      const end = currentPercentage + percentage;
      currentPercentage += percentage;

      return `${colors[index % colors.length]} ${start}%, ${colors[index % colors.length]} ${end}%`;
    });

    return `conic-gradient(${gradientParts.join(", ")})`;
  };

  return (
    <div className="fetch">
      <div className="fetch-form">
        <div className="interview">
          <div>Interview Analysis Report</div>
        </div>
        <div className="interview-text">
          <div>
            <span className="color-add">Analysis ID :</span>
            <span> 8451f2c7-d8bd-4add-916bc0c04a0dbf9c</span>
          </div>
          <div>
            <span className="color-add">Domain: Administration: </span>
            <span> _HR_Compliance</span>
          </div>
          <div>
            <span className="color-add">Created At: </span>
            <span> 2024-12-11T08:01:31.998000</span>
          </div>
        </div>
      </div>

      <div className="fetch-data">
        <h1>ABSTRACT SUMMARY</h1>
        {jsonData ? (
          <>
            {/* Abstract Summary */}
            <div className="abstract-summary">
              <div className="section">
                <h2 className="overview">OVERVIEW</h2>
                <p>{jsonData.abstractSummary.overview}</p>
              </div>
              <div className="section">
                <h2 className="key-insights">KEY INSIGHTS</h2>
                <ul>
                  {jsonData.abstractSummary.keyInsights.map((insight, index) => (
                    <li key={index}>{insight}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tab Switching Analysis */}
            <div className="tab-analysis">
              <h2>TAB SWITCHING ANALYSIS</h2>
              <div className="tab-analysis-score">
                <div className="score">Quality Score:</div>
                <div className="tab-analysis-score-point">
                  <p>
                    <span className="penalt">Penalt...</span>
                    <span className="point"> Penalty Points </span>
                    <span>------></span>
                    <span> {jsonData.tabSwitchingAnalysis.penaltyPoints}</span>
                  </p>
                  <p>
                    <span className="tabs">Tabssw...</span>
                    <span className="point"> Tab Switches </span>
                    <span>------></span>
                    <span> {jsonData.tabSwitchingAnalysis.tabSwitches} </span>
                  </p>
                  <p>
                    <span className="window">Windoo...</span>
                    <span className="point"> Window Blurs </span>
                    <span>------></span>
                    <span> {jsonData.tabSwitchingAnalysis.windowBlurs}</span>
                  </p>
                </div>
                <div className="tab-analysis-score-board">
                  <span className="quality-score">QUALITY SCORE</span>
                  <span style={{ color: "green", textAlign: "center" }}>
                    {jsonData.tabSwitchingAnalysis.qualityScore}
                  </span>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="key-points">
              <h2>KEY POINTS</h2>
              <ol>
                {jsonData.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ol>
            </div>

            {/* Interview Assessment */}
            <div className="interview-assessment">
              <h2>INTERVIEW ASSESSMENT</h2>
              <div className="radial">

              <div className="skills-radial">
              <div
              className="radial-chart"
              style={{
                background: getConicGradient(jsonData.interviewAssessment.skills),
              }}
            >
              <span className="radial-text">Skills</span>

              {/* Skill Names Around the Circle */}
              <div className="names-circle">
                {Object.entries(jsonData.interviewAssessment.skills).map(([skill, value], index) => {
                  const angle = (index / Object.keys(jsonData.interviewAssessment.skills).length) * 360;

                  return (
                    <span
                      key={index}
                      className="skill-name"
                      style={{
                        transform: `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`,
                      }}
                    >
                      {skill.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                  );
                })}
              </div>
            </div>
            </div>

            <div className="soft-skills">
              <p>
                <strong>Soft Skills:</strong> {jsonData.interviewAssessment.softSkills}
                <strong>Correctness:</strong> {jsonData.interviewAssessment.correctness}
                <strong>Total Score:</strong> {jsonData.interviewAssessment.total}
              </p>
              <p>{jsonData.interviewAssessment.evaluation}</p>
            </div>
            </div>
            </div>


          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default FetchData;
