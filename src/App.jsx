import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handlecount = (count) => {
    setCount(count + 1);
  };

  return (
    <>
    <div className="bg-green-300 w-[420px] h-[480px] md:w-[540px] md:h-[330px] flex items-center rounded-xl shadow-md">
      <div className="max-w-xs rounded-xl shadow-md bg-white mx-auto overflow-hidden md:max-w-md">
        <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="./image.jpg" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-widest text-purple-600 text-sm font-semibold">case study</div>
          <a href="#" className="block mt-1 text-lg leading-tight hover:underline hover:text-green-500 text-black font-medium ">Finding customers for your new business</a>
          <p className="mt-2 text-gray-500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
