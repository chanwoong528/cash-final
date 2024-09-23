//@ts-nocheck
// import { Session } from "inspector";
import NextAuth from "next-auth/next";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import { loginApi } from "../../(services)/apiUser";

const handler = NextAuth({
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID ?? "",
      clientSecret: process.env.NAVER_CLIENT_SECRET ?? "",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID ?? "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      // console.log("signIn", user, account, profile);

      if (account.provider === "naver") {
        await loginApi.postNaver({
          id: user.email,
          dkey: user.id,
          name: user.name,
        });
        return true;
      }
      if (account.provider === "kakao") {
        await loginApi.postKakao({
          id: user.email,
          dkey: user.id,
          name: user.name,
        });
        return true;
      }

      //** User */
      // id: '29530692',
      // name: undefined,
      // email: 'cksdnd004@naver.com',
      // image: undefined

      //** Account */
      // provider: 'naver',
      // type: 'oauth',
      // providerAccountId: '29530692',
      // access_token:
      // refresh_token:
      // token_type: 'bearer',
      // expires_at: 1727106016

      //** Profile */
      // {
      //   resultcode: '00',
      //   message: 'success',
      //   response: { id: '29530692', email: 'cksdnd004@naver.com' }
      // }

      // signIn ->
      // 1. if user exists, return user
      // 2. if user does not exist, return false -> redirect to sign up page
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("redirect", url, baseUrl);
      return baseUrl;
    },
    async session({ session, token }) {
      // console.log("session", session, token, user);
      // getSession(), useSession(), /api/auth/session을 호출할 때 session()이 호출된다.

      if (token.provider === "naver") {
        const naverPostLogin = await loginApi.postNaver({
          id: token.email,
          dkey: !!token.id ? token.id : token.sub,
          name: token.name,
        });

        return { ...session, ...naverPostLogin, provider: token.provider };
      }

      if (token.provider === "kakao") {
        const kakaoPostLogin = await loginApi.postKakao({
          id: token.email,
          dkey: !!token.id ? token.id : token.sub,
          name: token.name,
        });

        return { ...session, ...kakaoPostLogin, provider: token.provider };
      }
    },
    async jwt({ token, account }) {
      if (account) {
        token.provider = account.provider;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
