import Header from "@/components/header/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login({ title = "Login" }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    let titleView;
    if (title !== null) {
        titleView = process.env.title + " | " + title;
    } else {
        titleView = process.env.title + " | " + process.env.titleDescription;
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        router.push("/apply")
    }
    return (
        <>
            <Head>
                <title>{titleView}</title>
            </Head>
            <Header />
            <div className="flex min-h-screen flex-col p-5 bg-blue-950">
                <div className="flex flex-col max-w-sm sm:mt-20 rounded-lg shadow-lg p-4 m-auto mt-6 bg-slate-100">
                    <h2 className="flex justify-center items-center text-xl text-black  font-medium">Login</h2>
                    <div className="flex space-x-2 italic mt-4 text-green-700">
                        <h4 className="font-medium text-sm">{"Don't have an account?"} </h4>
                        <button
                            onClick={() => router.push("/signup")}
                            className="flex text-sm text-black py-1 px-2 -mt-1 w-30 bg-white w-30 h rounded-lg ">Register</button>
                    </div>
                    <form onSubmit={handleLogin} className="mt-3">
                        <div className="flex justify-center items-center mb-3 m-auto">
                            <p className="flex text-sm text-center text-black mt-3">{message}</p>
                        </div>
                        <input className="p-3 w-full rounded-lg bg-slate-50 mb-2"
                            value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required />
                        <input className="p-3 w-full rounded-lg bg-slate-50 mb-2"
                            value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                        {loading ? (
                            <div className="flex justify-center items-center m-auto">
                                <button className="flex mt-4 justify-center items-center m-auto text-black w-44 bg-purple-300 rounded-lg p-2" type="submit">
                                    Logging in
                                </button>
                            </div>
                        ) : (
                            <div className="flex justify-center items-center m-auto">
                                <button type="submit" className="mt-4 justify-center items-center m-auto text-white w-44 bg-purple-600 rounded-lg p-2 hover:bg-white hover:text-black hover:border hover:border-slate-600">Login</button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </>
    )
}