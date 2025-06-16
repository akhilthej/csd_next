import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("https://cyberspacedigital.in/csd_next/login.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        const user = await res.json();

        if (user.success) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            phone_number: user.phone_number,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.email = user.email;
        token.phone_number = user.phone_number;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.phone_number = token.phone_number;
      return session;
    },
  },
   session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,  // 24 hours in seconds
  },
  jwt: {
    maxAge: 24 * 60 * 60,  // 24 hours in seconds
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
