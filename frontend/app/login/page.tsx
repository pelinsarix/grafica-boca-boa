"use client"

import { signIn } from "next-auth/react";

export default function Login() {

    async function handleGoToLogin () {
        return await signIn("google", { callbackUrl: "/dashboard" });
    }

    return (
        <main className="w-[100] h-[100vh] flex justify-center items-center">
            <button className="w-[30vw] border-2 pl-[10vw] pr-[10vw] pt-5 pb-5 rounded-[10px]" onClick={handleGoToLogin}>
            </button>
            <img onClick={handleGoToLogin} style={{cursor:"pointer", position: "absolute", width: "2.3vw"}} src="https://t.ctcdn.com.br/lvns56iaSMyHvyTur4JeYS_NYeY=/i606944.png"/>
        </main>
    );
}
