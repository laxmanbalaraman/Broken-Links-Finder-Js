import React from "react";
import "./search.css";
import brokenImage from "./BrokenImage.svg";
import Form from "../form/Form";
export default function Search({ setBrokenLinks, setShowResult }) {
  return (
    <div className="search">
      <div className="searchBox">
        <div className="searchBoxItem">
          <div className="title">Broken Links Finder</div>
        </div>
        <div className="searchBoxItem">
          <p className="caption">
            Find broken links in your website by using our uninque web crawling
            bot.
          </p>
        </div>
        <div className="searchBoxItem">
          <Form setBrokenLinks={setBrokenLinks} setShowResult={setShowResult} />
        </div>
      </div>
      <div className="brokenImage">
        <div>
          <img src={brokenImage} alt="broken404" />
        </div>
      </div>
    </div>
  );
}
