"use client";

import React from "react";

interface BoardProps {
  handleSelectedIndex: (val: number) => void;
  selectedIndex: number[];
}

export default function Board({
  handleSelectedIndex,
  selectedIndex,
}: BoardProps) {
  return (
    <div className="rounded-[35px] overflow-hidden border-2 border-dashed border-[#f34954] p-3">
      <div className="grid grid-cols-3 grid-rows-3 rounded-[24px] overflow-hidden border border-solid border-white">
        {Array.from({ length: 9 }, (item, key) => (
          <div
            key={key}
            onClick={() => {
              if (!selectedIndex?.includes(key)) {
                handleSelectedIndex(key);
              }
            }}
            className="flex items-center justify-center h-[125px] w-[125px] bg-[#f34954] border-white border border-dashed hover:bg-[#f34954]/80 hover:cursor-pointer"
          >
            <p className="text-6xl font-bold">
              {selectedIndex?.includes(key)
                ? selectedIndex?.findIndex((item) => item === key) % 2 === 0
                  ? "X"
                  : "O"
                : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
