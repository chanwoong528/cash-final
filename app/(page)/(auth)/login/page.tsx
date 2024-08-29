"use client"; // 필수!
import { signIn, signOut, useSession } from "next-auth/react";

import Image from "next/image";

import "./pageAuth.scss"

export default function Page() {

  const { data } = useSession();

  return (
    <main className="main-login">
      <div className="login-container">
        <div className="login-header">
          <h2>
            <Image
              src="/asset/images/login-title.png"
              alt="캐시나무 타이틀"
              width={230}
              height={45}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </h2>
          <p>로그인 후 더 많은 혜택을 누리세요 :)</p>
        </div>
        <div className="login-body">
          <Image
            src="/asset/images/login-banner.png"
            alt="캐시나무 타이틀"
            width={392}
            height={151}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        <div className="login-footer">
          <h2>간편 로그인</h2>
          <button
            className="login-btn-naver"
            onClick={() => signIn('naver', { callbackUrl: "/" })}>
            네이버 아이디로 로그인
          </button>
          <button
            className="login-btn-kakao"
            onClick={() => signIn('kakao', { callbackUrl: "/" })}>
            카카오 아이디로 로그인
          </button>
        </div>
      </div>
    </main>
  )
}
