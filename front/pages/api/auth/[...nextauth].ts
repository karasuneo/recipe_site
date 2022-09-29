import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      session.accessToken = token.accessToken
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) token.accessToken = account.access_token;
      return token;
    },
  },
});