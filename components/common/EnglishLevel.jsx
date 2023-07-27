import { useContext } from "react";
import { GeneralProvider } from "../layout/DefaultLayout";
import Welcome from "./Welcome";

const englishLevelData = [
  {
    id: 1,
    name: "Beginner",
    desc: "I can only communicate effectively in written form. Verbal communication with an English speaking engineering manager would be slow and inefficient",
  },
  {
    id: 2,
    name: "Intermediate",
    desc: "I can communicate with an English speaking engineering manager if we both speak slowly and ocassionally repeat things the other person didn't understand",
  },
  {
    id: 3,
    name: "Advanced",
    desc: "I can communicate effectively with an English speaking enginering manager and on a technical level without a need for the to repeat themselves.",
  },
];

function CommitmentContent(props) {
  return (
    <>
      <div
        style={props.style}
        className="flex flex-col p-4 rounded-lg border border-gray-400 sm:w-2/4 w-full m-auto h-17 space-x-7"
      >
        <input
          onChange={props.onChange}
          className="flex w-4 h-4 mt-1"
          type="radio"
          checked={props.checked}
        />
        <div className="flex flex-col -mt-5 space-y-2">
          <div id={props.id1}>{props.caption}</div>
          <div id={props.id2}>{props.desc}</div>
        </div>
      </div>
    </>
  );
}

export default function EnglishLevel(props) {
  const { data, setData } = useContext(GeneralProvider);

  const handleEnglishLeve = (event, name, desc) => {
    setData((prevState) => {
      let engLevel = prevState.englishComLevel;
      engLevel.name = name;
      engLevel.description = desc;
      return {
        ...prevState,
        englishComLevel: engLevel,
      };
    });
  };
  return (
    <>
      <Welcome />
      <div className="flex flex-col w-full sm:mt-8 mt-5 m-auto sm:p-5 p-4 space-y-3">
        {englishLevelData.map((dt) => (
          <CommitmentContent
            onChange={(event) =>
              handleEnglishLeve(
                event,
                document.getElementById(`${dt.id}xd`).textContent,
                document.getElementById(`${dt.id}xz`).textContent
              )
            }
            key={dt.id}
            id1={`${dt.id}xd`}
            id2={`${dt.id}xz`}
            caption={dt.name}
            desc={dt.desc}
          />
        ))}
      </div>
    </>
  );
}
