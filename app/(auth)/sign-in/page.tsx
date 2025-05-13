"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  const handleSignIn = async () => {
    return await authClient.signIn.social({ provider: "google" });
  };

  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href={"/"}>
          <Image
            src={"/assets/icons/logo.svg"}
            width={32}
            height={32}
            alt="logo"
          />
          <h1>recordThing</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, i) => (
                <Image
                  key={i}
                  src={"/assets/icons/star.svg"}
                  width={20}
                  height={20}
                  alt="star"
                />
              ))}
            </figure>
            <p>
              <span className="text-pink-100">recordThing</span> makes the
              screen recording and sharing easy. From quick walkthrough to full
              presentations, it's fast, smooth and sharable in seconds.
            </p>
            <Image
              src={"/assets/images/jason.png"}
              width={64}
              height={64}
              alt="jason"
              className="rounded-full aspect-square"
            />
            <div className="">
              <h2>Jason Smith</h2>
              <p>Product Designer, Boom</p>
            </div>
          </section>
        </div>
        <p>© {new Date().getFullYear()} recordThing. All rights reserved.</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="SnapChat Logo"
              width={40}
              height={40}
            />
            <h1>recordThing</h1>
          </Link>
          <p>
            Create and share your very first <span>recordThing video</span> in
            no time!
          </p>

          <button onClick={handleSignIn}>
            <Image
              src="/assets/icons/google.svg"
              alt="Google Icon"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
    </main>
  );
};

export default SignIn;
