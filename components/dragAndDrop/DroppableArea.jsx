import { useContext, useEffect, useState } from "react";
import { GeneralProvider } from "../layout/DefaultLayout";

export default function DroppableArea(props) {
  const { data } = useContext(GeneralProvider);
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const itemId = event.dataTransfer.getData("text/plain");
    const droppedItem = {
      id: itemId,
      text: `Item ${itemId}`,
    };
    setDroppedItems((prevItems) => [...prevItems, droppedItem]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="flex justify-between">
        <h4 className="text-sm text-black mb-3">{"I'm best at:"}</h4>
        <h4 className="text-sm text-black mb-3">0/2</h4>
      </div>
      <div
        className="flex flex-col m-auto bg-white w-full border border-dashed p-3 rounded-lg text-sm justify-center align-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <span className="flex text-blue font-medium text-sm m-auto text-center">
          <span></span>Drag your top two{" "}
          {`(${data.coreCompetentSkills.filter((dt) => dt.name)[0].name})`}{" "}
          skils here
        </span>
        <p className="m-auto text-center">
          Later in the process, these are the skills you will be tested for. If
          you are accepted to join Proxify, you will be able to test more skills
          at a later point
        </p>
        {/* {droppedItems.map((item) => (
          <div key={item.id}>{item.text}</div>
        ))} */}
      </div>
    </>
  );
}
