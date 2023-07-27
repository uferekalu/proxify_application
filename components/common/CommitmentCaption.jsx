import { useContext } from "react";
import { GeneralProvider } from "../layout/DefaultLayout";

export default function CommitmentCaption(props) {
  const { data } = useContext(GeneralProvider);
  return (
    <>
      <div className="flex flex-col sm:hidden m-auto justify-center items-center">
        <div className="text-sm text-white font-bold">
          {"What kind of commitment are you looking for?"}
        </div>
        <span className="flex text-sm text-white mt-4 mr-auto">You can select multiple</span>
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
          {"What kind of commitment are you looking for?"}
        </div>
        <span className="flex text-lg text-white mt-4">You can select multiple</span>
        <div className="flex space-x-4 mt-1 w-full">
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
