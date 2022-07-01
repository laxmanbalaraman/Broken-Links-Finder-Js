import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import { useState } from "react";
import Result from "./components/result/Result";
import { ssEvents } from "./config/config";

function App() {
  const [crawledCount, setCrawledCount] = useState(0);
  const [brokenLinksCount, setbrokenLinksCount] = useState(0);
  const [brokenLinks, setBrokenLinks] = useState("");
  const [showResult, setShowResult] = useState(false);

  ssEvents.addEventListener("crawled", (e) => {
    console.log(e.data);
    setCrawledCount(e.data);
  });

  ssEvents.addEventListener("broken", (e) => {
    console.log(e.data);
    setbrokenLinksCount(e.data);
  });

  ssEvents.onerror = (e) => {
    console.log("error occured", e);
  };

  console.log(crawledCount);
  return (
    <div className="App">
      <Navbar />
      <Search setBrokenLinks={setBrokenLinks} setShowResult={setShowResult} />
      {showResult && (
        <Result
          brokenLinks={brokenLinks}
          crawledCount={crawledCount}
          brokenLinksCount={brokenLinksCount}
        />
      )}
      {/* {console.log("the ans is ", brokenLinks)} */}
    </div>
  );
}

export default App;
