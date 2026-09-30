import React, { useState } from "react";
import "./PracticeChallenges.css";

const challenges = [
  {
    title: "Convert the first letter of a string to uppercase.",
    solution: `const handleFirstLetter = (str) => {
  if (!str) return "";

  return str[0].toUpperCase() + str.slice(1);
};

console.log(handleFirstLetter("test")); // Test`
  },
  {
    title: "Capitalize one letter at a time in a string using a loop.",
    solution: `const capitalizeEachLetter = (str) => {
  for (let i = 0; i < str.length; i++) {
    console.log(
      str.slice(0, i) +
      str[i].toUpperCase() +
      str.slice(i + 1)
    );
  }
};

capitalizeEachLetter("test");`
  },
  {
    title: "Write a function that gets a random number from an array.",
    solution: `const handleRandomNum=(arr)=>{
  let randomIndex=Math.floor(Math.random()*arr.length);
  return arr[randomIndex];
}

console.log(handleRandomNum([12,32,34,35,26,71]));`
  },
  {
    title: "Find the minimum and maximum values in an array.",
    solution: `const getMinAndMaxValues = (arr) => {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  return [minValue, maxValue];
};

console.log(getMinAndMaxValues([2, 5, 6, 3, 9]));`
  },
  { title: "Write a function that reverses only the alphabets in a string, ignoring special characters." },
  { title: "Sum all even numbers in an array." },
  { title: "Find the second largest number in an array." },
  { title: "Remove all duplicates from an array." },
  { title: "Find the most repeated number in an array." },
  { title: "Check if a given string is a palindrome." },
  { title: "Check if two given strings are anagrams." },
  { title: "Generate a random number between two given numbers." },
  { title: "Generate a random string of characters." },
  { title: "Calculate the factorial of a number (using both a loop and recursion)." },
  { title: "Count the number of palindromes within a string." },
  { title: "Separate the characters of a string based on even and odd indices." },
  { title: "Convert a number to binary and count the consecutive ones." }
];

const PracticeChallenges = () => {
  const [openSolutions, setOpenSolutions] = useState({});

  const toggleSolution = (index) => {
    setOpenSolutions((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <h1 style={{ marginBottom: '0.5rem' }}>Coding Problems</h1>
      <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: '#374151', marginBottom: '2.5rem' }}>
        Test your JavaScript skills with these practice problems. Try to solve them without looking at the solutions!
      </p>

      <div className="challenges-list">
        {challenges.map((challenge, index) => (
          <div key={index} className="challenge-card">
            <div className="challenge-main">
              <div className="challenge-info">
                <div className="challenge-title">{challenge.title}</div>
              </div>
              <div className="challenge-action">
                <button 
                  className="solution-btn"
                  onClick={() => toggleSolution(index)}
                >
                  {openSolutions[index] ? "Close" : "Solution"}
                </button>
              </div>
            </div>
            
            {openSolutions[index] && (
              <div className="challenge-solution">
                {challenge.solution ? (
                  <pre className="solution-code">
                    <code>{challenge.solution}</code>
                  </pre>
                ) : (
                  <p className="no-solution">Solution coming soon...</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default PracticeChallenges;
