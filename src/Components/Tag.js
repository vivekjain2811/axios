import React, { useState } from "react";
import Spinner from "./Spinner";
import UseGif from "../hooks/UseGif";

const Tag = () => {
  const [inputTag, setInputTag] = useState("");
  const { gif, loading, fetchData } = UseGif();

  const clickHandler = () => {
    fetchData(inputTag);
  };

  const changeHandler = (event) => {
    setInputTag(event.target.value);
  };

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        RANDOM GIF
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="Random Gif" width="450" />}

      <input
        value={inputTag}
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={changeHandler}
      />
      <button
        onClick={clickHandler}
        className="w-10/12 bg-yellow-400 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
