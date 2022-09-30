import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
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
    CredentialsProvider({
      // サインインフォームに表示する名前 (例: "Sign in with...")
      name: "Credentials POC",
      // 認証情報は、サインインページに適切なフォームを生成するために使用されます。
      // 送信されることを期待するフィールドを何でも指定することができます。
      // 例: ドメイン、ユーザー名、パスワード、2FAトークンなど。
      // オブジェクトを通して、任意の HTML 属性を <input> タグに渡すことができます。
      credentials: {
        username: { label: "ユーザー名", type: "text", placeholder: "ユーザー名" },
        password: {  label: "パスワード", type: "password" }
      },
      async authorize(credentials, req) {
        const { username, password } = credentials
        // ここにロジックを追加して、提供されたクレデンシャルからユーザーを検索します。
        const user = { id: 1, name: "太郎", email: "tarou@example.com" }

        if (user) {
          // 返されたオブジェクトはすべて、JWTの `user` プロパティに保存されます。
          return user
        } else {
          // もし、NULLを返した場合は、ユーザーに詳細を確認するよう促すエラーが表示されます。
          return null

          // また、このコールバックをエラーで拒否することもできます。この場合、ユーザーはエラーメッセージをクエリパラメータとして持つエラーページに送られます。
        }
      }
    }),
  ],

  callbacks: {
    async session({ session, user, token }) {
      console.log(user);
      return session;
    },
  },
  secret: "secret",
});
