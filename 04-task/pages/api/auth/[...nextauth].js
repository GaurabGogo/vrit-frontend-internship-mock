import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Hardcoded user
        const user = { id: 1, name: "User", email: "user@example.com" };
        if (
          credentials.username === "user" &&
          credentials.password === "pass"
        ) {
          return user;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token, user }) {
      // Customize session object
      session.user.id = token.id; // Add user ID to session
      return session;
    },
    async jwt({ token, user }) {
      // Persist user id in the token if available
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});
