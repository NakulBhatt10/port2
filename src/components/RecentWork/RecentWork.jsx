import React from "react";
import data from "../../data.json";
import "./RecentWork.css";

import finquest from "../../assets/images/nakul-assets/finquest.png";

export default function RecentWork() {
  if (!data.recentWork || data.recentWork.length === 0) return null;

  const work = data.recentWork[0];

  return (
    <section id="recent" className="section">
      <div className="section-head">
        <span className="section-num mono">06 / recent work</span>
        <span className="section-rule" />
      </div>

      <h2>Recent</h2>

      <div className="recent__card card">

        <div className="recent__image">
          <img
            src={finquest}
            alt="FinQuest"
            className="recent__img"
          />
        </div>

        <div className="recent__body">

          <span className="recent__meta mono">
            🚀 AI • FinTech • Real-Time Data • Gamified Learning
          </span>

          <h3>{work.title}</h3>

          <p>{work.description}</p>

          <div className="recent__highlights">
            <span className="pill">📈 Live Market Data</span>
            <span className="pill">🤖 AI Buy/Sell Prediction</span>
            <span className="pill">🎮 Virtual Trading Coins</span>
            <span className="pill">📊 Candlestick Analysis</span>
            <span className="pill">🧠 Learn While Trading</span>
            <span className="pill">💼 Portfolio Simulator</span>
          </div>

          <p className="recent__search mono">
            {work.searchName}
          </p>

<div className="recent__links">
  <a
    href="https://finquest1.netlify.app/"
    target="_blank"
    rel="noreferrer"
  >
    🌐 Live Demo ↗
  </a>
</div>
        </div>

      </div>
    </section>
  );
}