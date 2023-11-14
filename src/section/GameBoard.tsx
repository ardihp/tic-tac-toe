"use client";

import Board from "@/components/Board";
import PlayerCard from "@/components/PlayerCard";
import { LogicWinning } from "@/data/LogicWinning";
import React, { useState, useEffect } from "react";

export default function GameBoard() {
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);
  const [selectedMap, setSelectedMap] = useState(Array(9).fill(""));

  useEffect(() => {
    if (selectedIndex?.length >= 1) {
      if (selectedIndex?.length === 9) {
        setTimeout(() => {
          alert("Reset");
          setSelectedIndex([]);
        }, 1000);
      }

      if (LogicWinning(selectedMap) !== "") {
        setTimeout(() => {
          alert(`${LogicWinning(selectedMap)} Win`);
          setSelectedIndex([]);
          setSelectedMap(Array(9).fill(""));
        }, 200);
      }
    }
  }, [selectedIndex]);

  function handleSelectedIndex(val: number) {
    setSelectedIndex([...selectedIndex, val]);

    setSelectedMap((prev) => {
      prev.splice(val, 1, selectedIndex?.length % 2 === 0 ? "X" : "O");

      return prev;
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col grow bg-white/50 w-full rounded-[40px] overflow-hidden py-12 px-16 shadow-pink-500/10 shadow-xl">
        <p className="flex text-4xl font-bold gap-2">
          <span className="text-black">TIC</span>
          <span className="text-pink-600">TAC</span>
          <span className="text-black">TOE</span>
        </p>

        <div className="flex grow items-center justify-center gap-24">
          <PlayerCard
            name="Jamilah"
            avatar="./images/player-a.jpg"
            object="X"
          />
          <Board
            handleSelectedIndex={handleSelectedIndex}
            selectedIndex={selectedIndex}
          />
          <PlayerCard
            name="Jamidun"
            avatar="./images/player-b.jpg"
            object="O"
          />
        </div>

        <div className="flex items-center justify-center mx-auto bg-yellow-400/60 w-[180px] h-[60px] rounded-full">
          <p className="text-[#f34954] font-bold text-xl">
            {selectedIndex?.length % 2 === 0 ? "X" : "O"} TURN
          </p>
        </div>
      </div>
    </main>
  );
}
