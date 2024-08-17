import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//paraGenerator
function App() {
  return (
    <>
      <TheComponent />
    </>
  );
}

function TheComponent() {
  const [numberOfWords, setNumberofWords] = useState(0);
  const [paragraph, setParagraph] = useState("");

  function handler(e) {
    setNumberofWords(e.target.value);
  }

  function BtnHandler() {
    const words = generateRandomWords(numberOfWords);
    setParagraph(words.join(" "));
  }

  function generateRandomWords(num) {
    const wordList = [
      "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
      "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
      "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
      "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea",
      "commodo", "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit",
      "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
      "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident",
      "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id",
      "est", "laborum"
    ];
    let result = [];
    for (let i = 0; i < num; i++) {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      result.push(wordList[randomIndex]);
    }
    return result;
  }

  return (
    <>
      <div>
        <h2>ParaGenerator</h2>
        <input
          type="number"
          placeholder="Enter the Number of Words"
          onInput={handler}
        />
        <div>
          <br />
          <button onClick={BtnHandler}>Generate</button>
        </div>
        <div>
          <p>{paragraph}</p>
        </div>
      </div>
    </>
  );
}

export default App;

