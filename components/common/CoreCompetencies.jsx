import { useContext, useState } from "react";
import Welcome from "./Welcome";
import { GeneralProvider } from "../layout/DefaultLayout";

const coreCompetencies = [
  "Frontend",
  "Backend",
  "Fullstack (BE-heavy)",
  "Fullstack (FE-Heavy)",
  "Fullstack (balanced)",
  "Mobile",
  "QA",
  "DevOps",
  "Data Science",
  "Data Engineering",
  "Machine Learning",
  "Game Development",
  "Business Intelligence",
];

export default function CoreCompetencies(props) {
  const { data, setData } = useContext(GeneralProvider);
  
  const handleCoreCompetency = (data, idx) => {
    setData((prevState) => {
      const newData = {};
      newData.id = prevState.coreCompetentSkills.length + 1;
      newData.name = data;
      const allCoreCompetentSkills = [...prevState.coreCompetentSkills];
      const alreadExists = allCoreCompetentSkills.find((dt) => dt.name === data) 
      const dataIndex = allCoreCompetentSkills.findIndex((dt) => dt.name === data)
      if (alreadExists) {
        allCoreCompetentSkills.splice(dataIndex, 1)
      } else {
        allCoreCompetentSkills.push(newData)
      }
      return {
        ...prevState,
        coreCompetentSkills: allCoreCompetentSkills,
      };
    });
  };
  return (
    <>
      <Welcome />
      <div className="grid sm:grid-cols-3 grid-cols-2 sm:mt-20 mt-10 justify-center items-center m-auto gap-2 sm:p-5 p-4">
        {coreCompetencies.map((competency, idx) => (
          <button
            style={
                data.coreCompetentSkills.find((dt) => dt.name === competency)
                ? {
                    background: "#2a4365",
                    color: "white"
                  }
                : undefined
            }
            onClick={() => handleCoreCompetency(competency, idx)}
            className={`flex bg-transparent p-2 text-sm border border-gray-100 justify-center items-center rounded-full hover:bg-blue-950 hover:text-white`}
            key={`${competency}-${idx}`}
          >
            {competency}
          </button>
        ))}
      </div>
    </>
  );
}
