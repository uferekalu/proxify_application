import { useContext } from "react";
import { GeneralProvider } from "../layout/DefaultLayout";

export default function TechStackCaption(props) {
  const { data } = useContext(GeneralProvider);
  return (
    <>
      <div className="flex flex-col sm:hidden m-auto justify-center items-center">
        <div className="text-xl text-white font-bold">
          {"What's your teck stack?"}
        </div>
        <p className="text-sm text-black text-white font-medium mt-2">
          Select at least 5 technologies
        </p>
        <div className="flex space-x-4 mt-2 w-full">
          <span className="text-sm mt-1 text-white">Your role:</span>
          {data.coreCompetentSkills.slice(0, 2).map((dt, idx) => (
            <button
              key={idx}
              className="flex py-1 px-2 mt-1 bg-purple-600 justify-center items-center rounded-full border-none text-sm text-white font-medium hover:bg-white hover:text-black"
            >
              {dt.name}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col sm:mt-56 sm:block hidden">
        <div className="text-5xl text-white font-bold">
          {"What's your teck stack?"}
        </div>
        <p className="text-xl text-black text-white font-medium mt-3">
          Select at least 5 technologies
        </p>
        <div className="flex space-x-4 mt-2 w-full">
          <span className="text-lg text-white">Your role:</span>
          {data.coreCompetentSkills.slice(0, 2).map((dt, idx) => (
            <button
              key={idx}
              className="flex py-1 px-2 mt-1 bg-purple-600 justify-center items-center rounded-full border-none text-sm text-white font-medium hover:bg-white hover:text-black"
            >
              {dt.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
