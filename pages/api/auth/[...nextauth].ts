import NextAuth, {AuthOptions} from "next-auth"
import Githubprovider from "next-auth/providers/github";

export const authOption: AuthOptions={
    providers : [
        Githubprovider({
            clientId : process.env.GITHUB_ID || "",
            clientSecret : process.env.GITHUB_SECRET || ""
        })
    ],
};
export default NextAuth(authOption);