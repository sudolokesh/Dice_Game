import { React, useState } from "react";
import dice_1 from "../assets/dice_1.png";
import dice_2 from "../assets/dice_2.png";
import dice_3 from "../assets/dice_3.png";
import dice_4 from "../assets/dice_4.png";
import dice_5 from "../assets/dice_5.png";
import dice_6 from "../assets/dice_6.png";
import Rules from "./Rules";

export default function GamePlay() {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  const diceImages = {
    1: dice_1,
    2: dice_2,
    3: dice_3,
    4: dice_4,
    5: dice_5,
    6: dice_6,
  };

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      alert("Please select a number first!");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 1);
    }
    
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <main >
      <div className="flex justify-between m-16 text-5xl font-bold">
        <div>
          <h1 className="text-7xl pl-14">{score}</h1>
          <p className="text-3xl">Total Score</p>
        </div>

        <div className="flex gap-8">
          {arrNumber.map((value, i) => (
            <div
              key={i}
              onClick={() => setSelectedNumber(value)}
              className={`border p-7 px-8 rounded-xl hover:bg-black hover:text-white cursor-pointer duration-300 ease-in-out ${
                value === selectedNumber
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {value}
            </div>
          ))}
        </div>
      </div>

      <div className="grid items-center justify-center text-2xl font-medium gap-4">
        <img
          onClick={rollDice}
          src={diceImages[currentDice]}
          alt="Spin Dice"
          className="h-[250px] w-[250px] cursor-pointer"
        />
        <h1 className="ml-3">Click On Dice To Roll</h1>
        <button
          onClick={resetScore}
          className="border bg-black text-white rounded-xl py-3 px-10 hover:bg-white hover:text-black cursor-pointer duration-300 ease-in-out"
        >
          Reset Score
        </button>
        <button onClick={() => setShowRules((prev) => !showRules)} className="border bg-black text-white rounded-xl py-3 px-10 hover:bg-white hover:text-black cursor-pointer duration-300 ease-in-out">
        {showRules ? "Hide" : "Show"} Show Rules
        </button>
      </div>
      {showRules && <Rules />}
    </main>
  );
}
