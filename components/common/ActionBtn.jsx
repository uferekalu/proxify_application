import { useContext } from "react";
import { GeneralProvider } from "../layout/DefaultLayout";

export default function ActionBtn(props) {
  const {
    generalState,
    handleCurrentlyBasedOn,
    handleCoreCompetencies,
    handleTechStack,
    handleSkillsInformation1,
    handleSkillsInformation2,
    handleExperienceYears,
    handleCommitment,
    handleEnglishLevel,
    handleStartDateProxify,
    handleAdditionalInformation,
    data,
  } = useContext(GeneralProvider);
  return (
    <div className="flex justify-between mt-2">
      <button
        onClick={
          generalState.additionalInformation
            ? () => handleStartDateProxify()
            : generalState.startDateProxify
            ? () => handleEnglishLevel()
            : generalState.englishLevel
            ? () => handleCommitment()
            : generalState.commitment
            ? () => handleExperienceYears()
            : generalState.experienceYears
            ? () => handleSkillsInformation2()
            : generalState.skillsInformation2
            ? () => handleSkillsInformation1()
            : generalState.skillsInformation1
            ? () => handleTechStack()
            : generalState.techStack
            ? () => handleCoreCompetencies()
            : generalState.coreCompetencies
            ? () => handleCurrentlyBasedOn()
            : undefined
        }
        className="flex bg-transparent text-sm p-3 w-20 justify-center items-center text-black font-medium"
      >
        BACK
      </button>
      <button
        disabled={
          (generalState.currentlyBasedOn && (!data.country || !data.city)) ||
          (generalState.coreCompetencies && !data.coreCompetentSkills.length) ||
          (generalState.techStack && data.techStack.length < 5) ||
          (generalState.commitment && data.commitment.length < 1)
        }
        onClick={
          generalState.currentlyBasedOn
            ? () => handleCoreCompetencies()
            : generalState.coreCompetencies
            ? () => handleTechStack()
            : generalState.techStack
            ? () => handleSkillsInformation1()
            : generalState.skillsInformation1
            ? () => handleSkillsInformation2()
            : generalState.skillsInformation2
            ? () => handleExperienceYears()
            : generalState.experienceYears
            ? () => handleCommitment()
            : generalState.commitment
            ? () => handleEnglishLevel()
            : generalState.englishLevel
            ? () => handleStartDateProxify()
            : generalState.startDateProxify
            ? () => handleAdditionalInformation()
            : undefined
        }
        className={`flex ${
          (generalState.currentlyBasedOn && (!data.country || !data.city)) ||
          (generalState.coreCompetencies && !data.coreCompetentSkills.length) ||
          (generalState.techStack && data.techStack.length < 5) ||
          (generalState.commitment && data.commitment.length < 1)
            ? "bg-blue-300"
            : "bg-blue-950"
        } text-sm p-3 w-20 justify-center items-center text-white font-medium rounded-full border-none`}
      >
        NEXT
      </button>
    </div>
  );
}
