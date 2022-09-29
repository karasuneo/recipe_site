import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      console.log(user);
      return session;
    },
  },
  events: {
    createUser: async ({ user }) => {
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          mobile: "090-1111-1111",
        },
      });
    },
  },
  secret: "secret",
});
