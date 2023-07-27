import { useEffect, useState } from "react";
import ActionBtn from "./ActionBtn";

export default function ProgressBar({ value }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(value > 100 ? 100 : value < 0 ? 0 : value);
  }, [value]);

  const handleMinusClick = () => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress - 10;
      return newProgress < 0 ? 0 : newProgress;
    });
  };

  const handlePlusClick = () => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress + 10;
      return newProgress > 100 ? 100 : newProgress;
    });
  };
  return (
    <div className="flex flex-col mt-12 w-full ml-0">
      <div
        style={{
          width: `${progress}%`,
        }}
        className="flex w-0 h-1 mb-3 bg-blue-950"
      />
      <ActionBtn
        handleMinusClick={handleMinusClick}
        handlePlusClick={handlePlusClick}
      />
    </div>
  );
}
