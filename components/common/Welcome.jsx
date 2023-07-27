import Image from "next/image";

export default function Welcome(props) {
    return (
        <div className="flex mt-4 ml-3 w-full space-x-2">
            <div className="flex w-10 h-10 rounded-full bg-blue-950 border-none justify-center items-center text-white font-bold">
                U
            </div>
            <div className="flex mt-2 font-medium text-sm text-black">
                Hi Ufere
            </div>
            {/* <Image src={"/assets/images/greet.png"} height={12} width={12} alt="greet"/> */}
        </div>
    )
}