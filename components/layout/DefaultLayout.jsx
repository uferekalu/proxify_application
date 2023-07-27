import Head from "next/head";
import { createContext, useState } from "react";

export const GeneralProvider = createContext(null);

export default function DefaultLayout({ children, title }) {
  const [data, setData] = useState({
    country: "",
    city: "",
    changeTimeZone: false,
    coreCompetentSkills: [],
    techStack: [],
    commitment: [],
    englishComLevel: {}
  });
  const [generalState, setGeneralState] = useState({
    currentlyBasedOn: true,
    coreCompetencies: false,
    techStack: false,
    skillsInformation1: false,
    skillsInformation2: false,
    experienceYears: false,
    commitment: false,
    englishLevel: false,
    startDateProxify: false,
    additionalInformation: false,
  });
  let titleView;
  if (title !== undefined) {
    titleView = process.env.title + " | " + title;
  } else {
    titleView = process.env.title + " | " + process.env.titleDescription;
  }

  const handleCurrentlyBasedOn = () => {
    setGeneralState({
      currentlyBasedOn: true,
      coreCompetencies: false,
      techStack: false,
      skillsInformation1: false,
      skillsInformation2: false,
      experienceYears: false,
      commitment: false,
      englishLevel: false,
      startDateProxify: false,
      additionalInformation: false,
    });
  };

  const handleCoreCompetencies = () => {
    setGeneralState({
      currentlyBasedOn: false,
      coreCompetencies: true,
      techStack: false,
      skillsInformation1: false,
      skillsInformation2: false,
      experienceYears: false,
      commitment: false,
      englishLevel: false,
      startDateProxify: false,
      additionalInformation: false,
    });
  };

  const handleTechStack = () => {
    setGeneralState({
      currentlyBasedOn: false,
      coreCompetencies: false,
      techStack: true,
      skillsInformation1: false,
      skillsInformation2: false,
      experienceYears: false,
      commitment: false,
      englishLevel: false,
      startDateProxify: false,
      additionalInformation: false,
    });
  };

  const handleSkillsInformation1 = () => {
    setGeneralState({
      currentlyBasedOn: false,
      coreCompetencies: false,
      techStack: false,
      skillsInformation1: true,
      skillsInformation2: false,
      experienceYears: false,
      commitment: false,
      englishLevel: false,
      startDateProxify: false,
      additionalInformation: false,
    });
  };

  const handleSkillsInformation2 = () => {
    setGeneralState({
      currentlyBasedOn: false,
      coreCompetencies: false,
      techStack: false,
      skillsInformation1: false,
      skillsInformation2: true,
      experienceYears: false,
      commitment: false,
      englishLevel: false,
      startDateProxify: false,
      additionalInformation: false,
    });
  };

  const handleExperienceYears = () => {
    setGeneralState({
      currentlyBasedOn: false,
      coreCompetencies: false,
      techStack: false,
      skillsInformation1: false,
      skillsInformation2: false,
      experienceYears: true,
      commitment: false,
      englishLevel: false,
      startDateProxify: false,
      additionalInformation: false,
    });
  };

  const handleCommitment = () => {
    setGeneralState({
      currentlyBasedOn: false,
      coreCompetencies: false,
      techStack: false,
      skillsInformation1: false,
      skillsInformation2: false,
      experienceYears: false,
      commitment: true,
      englishLevel: false,
      startDateProxify: false,
      additionalInformation: false,
    });
  };

  const handleEnglishLevel = () => {
    setGeneralState({
      currentlyBasedOn: false,
      coreCompetencies: false,
      techStack: false,
      skillsInformation1: false,
      skillsInformation2: false,
      experienceYears: false,
      commitment: false,
      englishLevel: true,
      startDateProxify: false,
      additionalInformation: false,
    });
  };

  const handleStartDateProxify = () => {
    setGeneralState({
      currentlyBasedOn: false,
      coreCompetencies: false,
      techStack: false,
      skillsInformation1: false,
      skillsInformation2: false,
      experienceYears: false,
      commitment: false,
      englishLevel: false,
      startDateProxify: true,
      additionalInformation: false,
    });
  };

  const handleAdditionalInformation = () => {
    setGeneralState({
      currentlyBasedOn: false,
      coreCompetencies: false,
      techStack: false,
      skillsInformation1: false,
      skillsInformation2: false,
      experienceYears: false,
      commitment: false,
      englishLevel: false,
      startDateProxify: false,
      additionalInformation: true,
    });
  };

  return (
    <>
      <Head>
        <title>{titleView}</title>
        <meta name="description" content="ProxifyJobForm" />
      </Head>
      <GeneralProvider.Provider
        value={{
          generalState,
          setGeneralState,
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
          setData,
        }}
      >
        <div>{children}</div>
      </GeneralProvider.Provider>
    </>
  );
}
