import Image from "next/image";
import { useRouter } from "next/router";

export default function Header(props) {
  const router = useRouter();
  return (
    <>
      <div className="flex bg-white justify-between py-3 px-4 h-16 w-full">
        <Image
          onClick={() => router.push("/")}
          className="rounded-lg cursor-pointer"
          src={"/assets/images/logo.png"}
          height={30}
          width={140}
          alt="logo"
        />
        <div className="flex space-x-4">
          <button
            onClick={() => router.push("/signup")}
            className="px-2 py-2 h-9 text-sm w-20 text-purple-600 font-medium rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Sign Up
          </button>
          <button
            onClick={() => router.push("/login")}
            className="px-2 py-2 h-9 bg-black text-sm w-20 text-white font-medium rounded-full hover:text-black hover:bg-white hover:border-slate-500 hover:border focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Log In
          </button>
        </div>
      </div>
    </>
  );
}
