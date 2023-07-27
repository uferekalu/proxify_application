import Welcome from "./Welcome";
import DroppableArea from "../dragAndDrop/DroppableArea";
import DraggableItem from "../dragAndDrop/DraggableItem";
import { useContext, useEffect, useState } from "react";
import { GeneralProvider } from "../layout/DefaultLayout";

export default function SkillsInformation1(props) {
  const { data } = useContext(GeneralProvider);

  return (
    <>
      <Welcome />
      <div className="flex flex-col w-full sm:mt-8 mt-5 m-auto sm:p-5 p-4">
        <DroppableArea/>
        <h4 className="text-sm text-black mt-6 font-medium">
          {"Selected Skills"}
        </h4>
        {data.techStack.map((dt) => (
          <DraggableItem
            key={dt.id}
            data={dt}
          />
        ))}
      </div>
    </>
  );
}
