import Image from "next/image";
import { useContext, useState } from "react";
import { GeneralProvider } from "../layout/DefaultLayout";

const proficiencyLevels = ["Expert", "Advanced", "Intermediate"];
const yearsOfExperience = [
  "7 years",
  "6 years",
  "5 years",
  "4 years",
  "3 years",
  "2 years",
];

export default function DraggableItem(props) {
  const { data, setData } = useContext(GeneralProvider);

  const handleYrExperience = (event, id, key) => {
    let techStackData = data.techStack;
    let currentTechStack = techStackData.find((stack) => stack.id === id);
    currentTechStack[`${key}`] = event.target.value;
    setData((prevState) => {
      return {
        ...prevState,
        techStack: techStackData,
      };
    });
  };

  const handleDragStart = (event) => {
    const data = {
      id: props.data.id,
      name: props.data.name,
      image: props.data.image,
    };
    event.dataTransfer.setData("text/plain", data.id);
    event.dataTransfer.setData("text/plain", data.name);
    event.dataTransfer.setData("text/uri-list", data.image);
    event.dataTransfer.setData("application/json", JSON.stringify(data));
  };

  return (
    <>
      <div draggable onDragStart={handleDragStart} style={{ cursor: "move" }}>
        <div className="flex mt-5 justify-between">
          <div>
            <i className="bi bi-list sm:text-lg text-sm"></i>
          </div>
          <div className="flex p-2 rounded-lg -mt-2 space-x-1 bg-slate-100">
            <Image
              className="mt-1"
              src={props.data.image}
              width={25}
              height={12}
              alt="react"
            />
            <span className="text-gray font-medium text-sm mt-1">
              {props.data.name}
            </span>
          </div>
          <select
            onChange={(event) =>
              handleYrExperience(event, props.data.id, "yearsOfExperience")
            }
            className="flex p-2 w-20 sm:w-24 text-sm rounded-lg -mt-2 space-x-3 bg-white border border-slate-300"
          >
            <option className="text-sm" value="">
              5 years
            </option>
            {yearsOfExperience.map((year, idx) => (
              <option key={idx} className="text-sm" value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            onChange={(event) =>
              handleYrExperience(event, props.data.id, "proficiencyLevel")
            }
            className="flex p-2 text-sm rounded-lg -mt-2 space-x-3 bg-white border border-slate-300"
          >
            <option className="text-sm" value="">
              Profeciency level
            </option>
            {proficiencyLevels.map((level, idx) => (
              <option key={idx} className="text-sm" value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
