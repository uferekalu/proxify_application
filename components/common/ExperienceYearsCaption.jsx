import { useContext } from "react";
import { GeneralProvider } from "../layout/DefaultLayout";

export default function ExperienceYearsCaption(props) {
  const { data } = useContext(GeneralProvider);
  return (
    <>
      <div className="flex flex-col sm:hidden m-auto justify-center items-center">
        <div className="text-lg text-white font-bold">
          {"Commercial and freelance experience?"}
        </div>
        <div className="flex w-full justify-between gap-2 mt-1 p-4">
          <div className="flex flex-col w-2/4 border border-slate-200 p-2 rounded-lg">
            <h4 className="font-medium text-white text-sm">Commercial Experience</h4>
            <div className="flex space-x-2 mt-4">
              <span className="text-sm text-white">{"=>"}</span>
              <p className="text-sm text-white">
                Real world experience paid by a commercial entity
              </p>
            </div>
            <div className="flex space-x-2 mt-4">
              <span className="text-sm text-white">{"=>"}</span>
              <p className="text-sm text-white">
                Skills applied in a business environment
              </p>
            </div>
            <div className="flex space-x-2 mt-4">
              <span className="text-sm text-white">{"=>"}</span>
              <p className="text-sm text-white">
                Typical fulltime commitment (+/- 40hrs per week)
              </p>
            </div>
          </div>
          <div className="flex flex-col w-2/4 border border-slate-200 p-2 rounded-lg">
            <h4 className="font-medium text-white text-sm">Freelance Experience</h4>
            <div className="flex space-x-2 mt-4">
              <span className="text-sm text-white">{"=>"}</span>
              <p className="text-sm text-white">
                Working for yourself / Independently
              </p>
            </div>
            <div className="flex space-x-2 mt-4">
              <span className="text-sm text-white">{"=>"}</span>
              <p className="text-sm text-white">
                Personally take care of all time tracking and taxes
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-2 w-full p-2">
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
      <div className="flex flex-col sm:mt-20 sm:block hidden pr-3">
        <div className="text-5xl text-white font-bold">
          {"Commercial and freelance experience?"}
        </div>
        <div className="flex w-full justify-between gap-2 mt-10">
          <div className="flex flex-col w-2/4 border border-slate-200 p-2 rounded-lg">
            <h4 className="font-medium text-white">Commercial Experience</h4>
            <div className="flex space-x-2 mt-4">
              <span className="text-sm text-white">{"=>"}</span>
              <p className="text-sm text-white">
                Real world experience paid by a commercial entity
              </p>
            </div>
            <div className="flex space-x-2 mt-4">
              <span className="text-sm text-white">{"=>"}</span>
              <p className="text-sm text-white">
                Skills applied in a business environment
              </p>
            </div>
            <div className="flex space-x-2 mt-4">
              <span className="text-sm text-white">{"=>"}</span>
              <p className="text-sm text-white">
                Typical fulltime commitment (+/- 40hrs per week)
              </p>
            </div>
          </div>
          <div className="flex flex-col w-2/4 border border-slate-200 p-2 rounded-lg">
            <h4 className="font-medium text-white">Freelance Experience</h4>
            <div className="flex space-x-2 mt-4">
              <span className="text-sm text-white">{"=>"}</span>
              <p className="text-sm text-white">
                Working for yourself / Independently
              </p>
            </div>
            <div className="flex space-x-2 mt-4">
              <span className="text-sm text-white">{"=>"}</span>
              <p className="text-sm text-white">
                Personally take care of all time tracking and taxes
              </p>
            </div>
          </div>
        </div>
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
