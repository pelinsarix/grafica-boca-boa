import { getServerSession } from "next-auth";
import ButtonLogout from "@/components/ButtonLogout/page";
import { redirect } from "next/navigation";

export default async function Dash() {
    const session = await getServerSession();

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="w-[100] h-[100vh] flex justify-center items-center">
            <h1>Olá {session?.user?.name}</h1>
            <img src={session?.user?.image ?? ""} alt="teste" />
            <ButtonLogout />
        </div>
    );
}