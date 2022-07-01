import React, { useState } from "react";
import axios from "axios";
import "./form.css";
export default function Form({ setBrokenLinks, setShowResult }) {
  const [link, setLink] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowResult(true);
    try {
      const brokenLinks = await axios.get(
        `http://localhost:5000/find/?link=${link}`,
        {}
      );
      // console.log(brokenLinks);
      setBrokenLinks(brokenLinks.data);
      console.log(brokenLinks.data);
    } catch (error) {
      console.log(error);
    }
    console.log(link);
  };
  return (
    <div className="form">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="link"></label>
        <input
          type="text"
          placeholder="Enter a URL..."
          onChange={(e) => setLink(e.target.value)}
          name="link"
          id="link"
        />
        <button type="submit">Find</button>
      </form>
    </div>
  );
}
