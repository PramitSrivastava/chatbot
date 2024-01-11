import React, { useState } from "react";
import "./Account.css";

const Account = () => {
  const [placeholderText, setPlaceholderText] = useState("Enter your query here");

  const handleButtonClick = (text) => {
    setPlaceholderText(text);
  };

  return (
    <div className=" flex flex-col items-center justify-end fixed bottom-0 w-full bg-gray-800 p-4">
      <div class="max-w-full">
        <br />
        {/* <div class="w-screen h-screen flex justify-center items-center">
  <img src="https://cdn.dribbble.com/users/2050398/screenshots/6882219/vialzmascot2_4x.png?resize=1000x750&vertical=center" alt=""  />
</div> */}
      </div>

      <div className="mb-4 flex flex-wrap justify-center">
      <button
  className="text-white hover:text-gray-300 hover:bg-sky-500 ml-2 border border-white rounded px-3 py-1 mb-2"
  onClick={() =>
    handleButtonClick(
      "Can you help me debug this Javascript code snippet?"
    )
  }
>
  JavaScript Debug
</button>

<button
  className="text-white hover:text-gray-300 hover:bg-sky-500 ml-2 border border-white rounded px-3 py-1 mb-2"
  onClick={() =>
    handleButtonClick("Can you help me debug this Python code snippet?")
  }
>
  Python Debug
</button>

<button
  className="text-white hover:text-gray-300 hover:bg-sky-500 ml-2 border border-white rounded px-3 py-1 mb-2"
  onClick={() =>
    handleButtonClick("Can you tell me java oops concepts?")
  }
>
  Java oop
</button>

<button
  className="text-white hover:text-gray-300 hover:bg-sky-500 ml-2 border border-white rounded px-3 py-1 mb-2"
  onClick={() =>
    handleButtonClick("Can you help me debug this Java code snippet?")
  }
>
  Java Debug
</button>

<button
  className="text-white hover:text-gray-300 hover:bg-sky-500 ml-2 border border-white rounded px-3 py-1 mb-2"
  onClick={() => handleButtonClick("What is the capital of Germany?")}
>
  Capital of Germany
</button>

<button
  className="text-white hover:text-gray-300 hover:bg-sky-500 ml-2 border border-white rounded px-3 py-1 mb-2"
  onClick={() =>
    handleButtonClick(
      "How to create an HTML, CSS, and JavaScript home page?"
    )
  }
>
  Create a Web Page
</button>

        {/* Repeat the pattern for additional buttons */}
      </div>

      <div className="flex items-center w-full max-w-md p-3 mb-5 rounded relative">
        <input
          className="flex-1 min-w-0 w-full p-3 rounded outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400 mb-2"
          type="text"
          placeholder={placeholderText}
          maxLength="100"
        />
        <button className="bg-blue-500 hover:bg-blue-600 px-4 ml-2 py-2 rounded text-white ">
          Send
        </button>
      </div>
    </div>
  );
};

export default Account;
