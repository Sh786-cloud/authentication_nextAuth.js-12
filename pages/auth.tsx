import {signIn, signOut, useSession} from "next-auth/react"

export default function AuthPage () {
    const {data :session} = useSession()
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md max-w-md w-full text-center">
                <h1 className="text-2xl font-bold mb-4">
                    {session? "Welcome Back!" : "LogIn or SignUp"}
                </h1>
                {session? (
                    <>
                      <p className="mb-4">Hello {session.user?.name || "User"}!</p>
                      <button
                      onClick={()=> signOut()}
                      className="bg-red-500 text-white px-4 py-2 rounded">Sign Out
                      </button>
                    </>
                ):(
                    <>
                      <p>Need to signIn!</p>
                      <button
                      onClick={()=>signIn("github")}
                      className="bg-gray-800 text-white px-4 py-2 rounded mb-4 w-full">
                        SignIn with github
                      </button>
                    </>
                )}
            </div>
        </div>
    )
}