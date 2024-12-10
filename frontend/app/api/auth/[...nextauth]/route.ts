import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";

const AuthOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }), 
        CredentialProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials) {
                const user = { id: "1", name: "Test User", email: "admin@example.com", password: "1", role: "admin" }

                const isValidEmail = (credentials?.email === user.email);
                const isValidPassword = (credentials?.password === user.password);
            
                if (!isValidEmail || !isValidPassword) {
                    return null;
                }

                return user;
            }
        })
    ]
}

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };