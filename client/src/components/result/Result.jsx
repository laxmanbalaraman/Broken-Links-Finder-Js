import React, { useState } from "react";
import "./result.css";
import magnifyimage from "./Magnify.svg";

export default function Result({
  brokenLinks,
  crawledCount,
  brokenLinksCount,
}) {
  const [foundResult, setFoundResult] = useState(false);

  //   blf && setFoundResult(true);
  return (
    <div className="result">
      <h1>Results</h1>
      <div className="progressCount">
        <div className="crawledCount">
          Crawled Count: <span>{crawledCount}</span>
        </div>
        <div className="brokenCount">
          Broken Count: <span>{brokenLinksCount}</span>
        </div>
      </div>

      <div className="resultContent">
        {!brokenLinks && (
          <div className="loadingWrapper">
            <div className="loading">
              <img src={magnifyimage} alt="Finding your broken links" />
            </div>
            <div className="loadingCaption">
              <p>Please wait till our bot scans through your website...</p>
            </div>
          </div>
        )}
        {brokenLinks && (
          <table className="resultTable">
            <thead>
              <td>Link</td>
            </thead>
            <tbody>
              {brokenLinks.split(" ").map((link) => (
                <tr key={link}>
                  <a href={link} target="_blank">
                    {link}
                  </a>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
