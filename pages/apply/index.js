import Image from "next/image";
import { useRouter } from "next/router";

export default function Apply(props) {
    const router = useRouter()
    return (
        <div className="flex min-h-screen flex-col p-5 bg-blue-950">
            <div className="flex flex-col max-w-sm mt-28 m-auto text-justify p-5 rounded-lg shadow-lg bg-white text-black text-sm">
                <div className="m-auto mb-3">
                    <Image className="rounded-lg" src={"/assets/images/logo.png"} height={80} width={160} alt="logo" />
                </div>
                <h3 onClick={() => {
                    router.push("/apply/2")
                }} className="text-center mb-3 font-medium text-white rounded-lg mt-2 sm:text-xl text-sm bg-blue-950 justify-center items-center cursor-pointer p-4 hover:bg-purple-700">Continue to Application Form</h3>
            </div>
        </div>
    )
}