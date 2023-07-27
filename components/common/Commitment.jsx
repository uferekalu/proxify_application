import { useContext, useState } from "react";
import Welcome from "./Welcome";
import { GeneralProvider } from "../layout/DefaultLayout";

const commitmentData = [
  "Full-time",
  "Part-time",
  "As needed",
  "I prefer to start part time at a company then ramp up to full-time if it feels good",
];

function CommitmentContent(props) {
  return (
    <>
      <div
        style={props.style}
        className="flex p-4 rounded-lg border border-gray-400 sm:w-2/4 w-full m-auto h-17 space-x-2"
      >
        <input
          onChange={props.onChange}
          className="flex w-4 h-4 mt-1"
          type="checkbox"
          checked={props.checked}
        />
        <div id={props.id}>{props.caption}</div>
      </div>
    </>
  );
}

export default function Commitment(props) {
  const { data, setData } = useContext(GeneralProvider);
  const [captionContents, setCaptionContents] = useState([]);

  const handleCommitment = (event, caption) => {
    if (event.target.checked) {
      setData((prevState) => {
        let newCommitment = {};
        newCommitment.id = prevState.commitment.length + 1;
        newCommitment.name = caption;
        newCommitment.checked = true;
        let allCommitment = [...prevState.commitment];
        allCommitment.push(newCommitment);
        return {
          ...prevState,
          commitment: allCommitment,
        };
      });
      setCaptionContents((prevState) => [...prevState, caption]);
    } else {
      setData((prevState) => {
        let newCommitment = {};
        newCommitment.id = prevState.commitment.length + 1;
        newCommitment.name = caption;
        let allCommitment = [...prevState.commitment];
        const alreadExists = allCommitment.find((dt) => dt.name === caption);
        const dataIndex = allCommitment.findIndex((dt) => dt.name === caption);
        if (alreadExists) {
          allCommitment.splice(dataIndex, 1);
        }
        return {
          ...prevState,
          commitment: allCommitment,
        };
      });
      setCaptionContents((prevState) => {
        let allState = prevState;
        const alreadExists = allState.find((dt) => dt === caption);
        const dataIndex = allState.findIndex((dt) => dt === caption);
        if (alreadExists) {
          allState.splice(dataIndex, 1);
        }
        return allState;
      });
    }
  };

  return (
    <>
      <Welcome />
      <div className="flex flex-col w-full sm:mt-8 mt-5 m-auto sm:p-5 p-4 space-y-3">
        {commitmentData.map((dt, idx) => (
          <CommitmentContent
            style={
              data.commitment.filter((caption) => caption.name === dt)[0]
                ? {
                    border: "2px solid blue",
                    borderRadius: "6px",
                  }
                : {
                    border: "1px solid gray",
                    borderRadius: "6px",
                  }
            }
            key={idx}
            onChange={(event) =>
              handleCommitment(
                event,
                document.getElementById(`${idx}capt`).textContent
              )
            }
            caption={dt}
            id={`${idx}capt`}
            checked={data.commitment.filter((caption) => caption.name === dt)[0] || ""}
          />
        ))}
      </div>
    </>
  );
}
