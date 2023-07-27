import Head from "next/head";
import CheckBox from "@/components/common/CheckBox";
import Input from "@/components/common/Input";
import Welcome from "@/components/common/Welcome";
import ApplicationLeftDesktop from "@/components/desktop/ApplicationLeftDesktop";
import ApplicationLeftMobile from "@/components/mobile/ApplicationLeftMobile";
import ProgressBar from "@/components/common/ProgressBar";
import { useContext } from "react";
import { GeneralProvider } from "@/components/layout/DefaultLayout";
import CoreCompetencies from "@/components/common/CoreCompetencies";
import TechStack from "@/components/common/TechStack";
import SkillsInformation1 from "@/components/common/SkillsInformation1";
import SkillsInformation2 from "@/components/common/SkillsInformation2";
import ExperienceYears from "@/components/common/ExperienceYears";
import Commitment from "@/components/common/Commitment";
import EnglishLevel from "@/components/common/EnglishLevel";

export default function ApplicationForm({ title = "Application Form" }) {
    const { generalState, data, setData, } = useContext(GeneralProvider)
    console.log("all data", data)
    let titleView;
    if (title !== null) {
        titleView = process.env.title + " | " + title;
    } else {
        titleView = process.env.title + " | " + process.env.titleDescription;
    }

    return (
        <>
            <Head>
                <title>{titleView}</title>
            </Head>
            <div className="min-h-screen grid sm:grid-cols-2 grid-cols-1">
                <div className="flex flex-col sm:bg-blue-950 sm:py-3 sm:px-3">
                    <div className="flex sm:hidden bg-blue-950 m-0 h-50 w-full">
                        <ApplicationLeftMobile />
                    </div>
                    <div className="flex flex-col sm:hidden bg-white-950 m-0 min-h-screen w-full">
                        {generalState.currentlyBasedOn && (
                            <>
                                <Welcome />
                                <Input name="country" value={data.country} onChange={(event) => setData((prevState) => {
                                    return {
                                        ...prevState,
                                        country: event.target.value
                                    }
                                })} caption="Country" placeholder="Your country" mt="mt-5" />
                                <Input name="city" value={data.city} onChange={(event) => setData((prevState) => {
                                    return {
                                        ...prevState,
                                        city: event.target.value
                                    }
                                })} caption="City" placeholder="Your city" mt="mt-2" />
                                <CheckBox
                                    name="changeTimeZone"
                                    checked={data.changeTimeZone || ""}
                                    onChange={(event) => setData((prevState) => {
                                        return {
                                            ...prevState,
                                            changeTimeZone: event.target.checked
                                        }
                                    })}
                                />
                            </>
                        )}
                        {generalState.coreCompetencies && (
                            <CoreCompetencies />
                        )}
                        {generalState.techStack && (
                            <TechStack />
                        )}
                        {generalState.skillsInformation1 && (
                            <SkillsInformation1 />
                        )}
                        {generalState.skillsInformation2 && (
                            <SkillsInformation2 />
                        )}
                        {generalState.experienceYears && (
                            <ExperienceYears />
                        )}
                        {generalState.commitment && (
                            <Commitment />
                        )}
                        {generalState.englishLevel && (
                            <EnglishLevel />
                        )}
                        <ProgressBar value={generalState.currentlyBasedOn ? 10
                            : generalState.coreCompetencies ? 20
                                : generalState.techStack ? 30
                                    : generalState.skillsInformation1 ? 40
                                        : generalState.skillsInformation2 ? 50
                                            : generalState.experienceYears ? 60
                                                : generalState.commitment ? 70
                                                    : generalState.englishLevel ? 80
                                                        : generalState.startDateProxify ? 90
                                                            : generalState.additionalInformation ? 100
                                                                : undefined}
                        />
                    </div>
                    <div className="sm:flex hidden">
                        <ApplicationLeftDesktop />
                    </div>
                </div>
                <div className="flex-col sm:block hidden bg-white w-full pr-2">
                    {generalState.currentlyBasedOn && (
                        <>
                            <Welcome />
                            <Input name="country" value={data.country} onChange={(event) => setData((prevState) => {
                                return {
                                    ...prevState,
                                    country: event.target.value
                                }
                            })} caption="Country" placeholder="Your country" mt="mt-20" mtd="mt-20" />
                            <Input name="city" value={data.city} onChange={(event) => setData((prevState) => {
                                return {
                                    ...prevState,
                                    city: event.target.value
                                }
                            })} caption="City" placeholder="Your city" mt="mt-2" />
                            <CheckBox
                                name="changeTimeZone"
                                checked={data.changeTimeZone || ""}
                                onChange={(event) => setData((prevState) => {
                                    return {
                                        ...prevState,
                                        changeTimeZone: event.target.checked
                                    }
                                })}
                            />
                        </>
                    )}
                    {generalState.coreCompetencies && (
                        <CoreCompetencies />
                    )}
                    {generalState.techStack && (
                        <TechStack />
                    )}
                    {generalState.skillsInformation1 && (
                        <SkillsInformation1 />
                    )}
                    {generalState.skillsInformation2 && (
                        <SkillsInformation2 />
                    )}
                    {generalState.experienceYears && (
                        <ExperienceYears />
                    )}
                    {generalState.commitment && (
                        <Commitment />
                    )}
                    {generalState.englishLevel && (
                        <EnglishLevel />
                    )}
                    <ProgressBar value={generalState.currentlyBasedOn ? 10
                        : generalState.coreCompetencies ? 20
                            : generalState.techStack ? 30
                                : generalState.skillsInformation1 ? 40
                                    : generalState.skillsInformation2 ? 50
                                        : generalState.experienceYears ? 60
                                            : generalState.commitment ? 70
                                                : generalState.englishLevel ? 80
                                                    : generalState.startDateProxify ? 90
                                                        : generalState.additionalInformation ? 100
                                                            : undefined}
                    />
                </div>
            </div>
        </>
    )
}