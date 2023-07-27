import { useContext, useState } from "react";
import Input from "./Input";
import Welcome from "./Welcome";
import { GeneralProvider } from "../layout/DefaultLayout";
import SelectedTechStack from "./SelectedTechStack";

const techStackData = [
  "JQuery",
  "Java",
  "Bootstrap",
  "Python",
  "Typescript",
  "React",
  "Node Js",
  "React Native",
  "C#",
  "PHP",
  "Flutter",
  "C++",
  "C++20",
  "Dart",
  "Go",
  "Kotlin",
  "Lua",
  "Objective-C",
  "Pascal",
  "Perl",
  "Ruby",
  "Scala",
  "Swift",
  "Visual Basic",
];

export default function TechStack(props) {
  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);
  const { data, setData } = useContext(GeneralProvider);

  const handleTechStack = (data, img) => {
    setData((prevState) => {
      const newData = {};
      newData.id = prevState.techStack.length + 1;
      newData.name = data;
      newData.image = img;
      const allTechStach = [...prevState.techStack];
      allTechStach.push(newData);
      return {
        ...prevState,
        techStack: allTechStach,
      };
    });
  };

  const removeTechStack = (id) => {
    setData((prevState) => {
      const allTechStach = [...prevState.techStack];
      const techData = allTechStach.find((dt) => dt.id === id);
      const techDataIndex = allTechStach.findIndex((dt) => dt.id === id);
      if (techData) {
        allTechStach.splice(techDataIndex, 1);
      }
      return {
        ...prevState,
        techStack: allTechStach,
      };
    });
  };

  const filterTechStack = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return techStackData.filter((item) => regex.test(item));
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    //debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterTechStack(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };
  return (
    <>
      <Welcome />
      <div className="flex flex-col w-full sm:mt-20 mt-5 m-auto sm:p-5 p-4">
        <Input
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Feel free to search the skill you are looking for"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-2 px-2">
          {data.techStack.map((dt) => (
            <SelectedTechStack
              key={dt.id}
              dt={dt}
              removeTechStack={removeTechStack}
            />
          ))}
        </div>
        <p className="sm:ml-9 ml-2 mt-6 text-sm font-medium">
          {"Based on our client's popular demand:"}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-2 px-2">
          {searchText
            ? searchedResults.map((techData, idx) => (
                <button
                  style={
                    data.techStack.find((dt) => dt.name === techData)
                      ? {
                          background: "transparent",
                          color: "#D3D3D3",
                          border: "1px solid #D3D3D3",
                        }
                      : undefined
                  }
                  disabled={data.techStack.find((dt) => dt.name === techData)}
                  onClick={() =>
                    handleTechStack(
                      techData,
                      techData === "JQuery"
                        ? "/assets/images/jquery.png"
                        : techData === "Java"
                        ? "/assets/images/java.png"
                        : techData === "Bootstrap"
                        ? "/assets/images/bootstrap.png"
                        : techData === "Python"
                        ? "/assets/images/python.jpg"
                        : techData === "Typescript"
                        ? "/assets/images/typescript.png"
                        : techData === "React"
                        ? "/assets/images/react.png"
                        : techData === "Node Js"
                        ? "/assets/images/nodejs.png"
                        : techData === "React Native"
                        ? "/assets/images/reactnative.png"
                        : techData === "C#"
                        ? "/assets/images/csharp.png"
                        : techData === "PHP"
                        ? "/assets/images/php.png"
                        : techData === "Flutter"
                        ? "/assets/images/flutter.png"
                        : undefined
                    )
                  }
                  key={idx}
                  className="flex py-1 px-2 mt-3 space-x-3 bg-transparent justify-center w-30 sm:ml-7 ml-1 items-center rounded-full border border-gray-200 text-sm text-gray font-medium"
                >
                  <span>{"+"}</span>
                  <span>{techData}</span>
                </button>
              ))
            : techStackData.map((techData, idx) => (
                <button
                  style={
                    data.techStack.find((dt) => dt.name === techData)
                      ? {
                          background: "transparent",
                          color: "#D3D3D3",
                          border: "1px solid #D3D3D3",
                        }
                      : undefined
                  }
                  disabled={data.techStack.find((dt) => dt.name === techData)}
                  onClick={() =>
                    handleTechStack(
                      techData,
                      techData === "JQuery"
                        ? "/assets/images/jquery.png"
                        : techData === "Java"
                        ? "/assets/images/java.png"
                        : techData === "Bootstrap"
                        ? "/assets/images/bootstrap.png"
                        : techData === "Python"
                        ? "/assets/images/python.jpg"
                        : techData === "Typescript"
                        ? "/assets/images/typescript.png"
                        : techData === "React"
                        ? "/assets/images/react.png"
                        : techData === "Node Js"
                        ? "/assets/images/nodejs.png"
                        : techData === "React Native"
                        ? "/assets/images/reactnative.png"
                        : techData === "C#"
                        ? "/assets/images/csharp.png"
                        : techData === "PHP"
                        ? "/assets/images/php.png"
                        : techData === "Flutter"
                        ? "/assets/images/flutter.png"
                        : undefined
                    )
                  }
                  key={idx}
                  className="flex py-1 px-2 mt-3 space-x-3 bg-transparent justify-center w-30 sm:ml-7 ml-1 items-center rounded-full border border-gray-200 text-sm text-gray font-medium"
                >
                  <span>{"+"}</span>
                  <span>{techData}</span>
                </button>
              ))}
        </div>
      </div>
    </>
  );
}
