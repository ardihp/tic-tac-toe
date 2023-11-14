import React from "react";

interface PlayerProps {
  name: string;
  avatar: string;
  object: string;
}

export default function PlayerCard({ name, avatar, object }: PlayerProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative bg-white border-2 border-pink-600/30 w-[180px] h-[185px] rounded-[65px] shadow-xl shadow-pink-600/10">
        <div className="flex flex-col gap-3 items-center justify-center pt-[82px]">
          <div className="absolute -top-10 h-[108px] w-[108px] rounded-full border-[6px] border-white overflow-hidden shadow-md shadow-pink-600/40 flex items-center">
            <img
              src={avatar}
              alt="Avatar Player"
              className="w-[120px] h-[120px] object-cover object-top"
            />
          </div>
          <p
            className="text-[18px] text-black font-bold whitespace-nowrap max-w-[100px] overflow-hidden text-ellipsis"
            title={name}
          >
            {name}
          </p>
          <div className="bg-[#f34954] w-[90px] h-[40px] rounded-3xl flex flex-col items-center justify-center">
            <p className="font-bold text-2xl text-yellow-300">{object}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-transparent border-2 border-yellow-400 rounded-full w-full py-2">
        <p className="text-md font-bold text-yellow-400 mt-[1px]">Win Rounds: 0</p>
      </div>
    </div>
  );
}
