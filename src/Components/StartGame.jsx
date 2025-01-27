import React from "react";
import Dice from "../assets/dices.png";
import GamePlay from "./GamePlay";

export default function Home({toggle}) {
  return (
    <div className="flex justify-center items-center h-screen gap-4 whitespace-nowrap">
      <div>
        <img src={Dice} alt="Dice Img" className="h-[800px] w-[900px]" />
      </div>
      
      <div className="font-bold">
        <h1 className="text-9xl ">DICE GAME</h1>

        <button className="border bg-black text-white rounded-xl text-4xl mt-6 ml-56 py-3 px-10  hover:bg-white hover:text-black cursor-pointer duration-300 ease-in-out" onClick={toggle}>
          Play Now
        </button>
      </div>
    </div>
  );
}
