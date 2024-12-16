import { Session } from "inspector/promises";
import { getSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

export default function ProtectedPage ({user}:{user : any}) {
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl font-bold">
                Protected Page - Welcome {user.name}
            </h1>
        </div>
    )

};

export async function getServerSideProps (context : any) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect : {
                destination : "/auth",
                permanent : false
            }
        }
    }
    return {
        props : {user : session.user}
    }
}