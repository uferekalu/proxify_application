import Image from "next/image";
import { useContext } from "react";
import CurrentlyBased from "../common/CurrentlyBased";
import { GeneralProvider } from "../layout/DefaultLayout";
import CoreCompetenciesCaption from "../common/CoreCompetenciesCaption";
import TechStackCaption from "../common/TechStackCaption";
import SkillsInformationCaption from "../common/SkillsInformationCaption";
import ExperienceYearsCaption from "../common/ExperienceYearsCaption";
import CommitmentCaption from "../common/CommitmentCaption";
import EnglishLevelCaption from "../common/EnglishLevelCaption";

export default function ApplicationLeftMobile(props) {
    const { generalState } = useContext(GeneralProvider)
  return (
    <>
      <div className="flex flex-col m-auto justify-center items-center space-y-3 py-3">
        <Image
          className="rounded-lg"
          src={"/assets/images/logo.png"}
          height={80}
          width={160}
          alt="logo"
        />
        {generalState.currentlyBasedOn && <CurrentlyBased />}
        {generalState.coreCompetencies && <CoreCompetenciesCaption />}
        {generalState.techStack && <TechStackCaption />}
        {generalState.skillsInformation1 && <SkillsInformationCaption />}
        {generalState.skillsInformation2 && <SkillsInformationCaption />}
        {generalState.experienceYears && <ExperienceYearsCaption />}
        {generalState.commitment && <CommitmentCaption />}
        {generalState.englishLevel && <EnglishLevelCaption />}
      </div>
    </>
  );
}
