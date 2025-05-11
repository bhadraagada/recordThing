"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const user = {};

export const Navbar = () => {
  const router = useRouter();

  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src={"/assets/icons/logo.svg"}
            width={32}
            height={32}
            alt={"logo"}
          />
          <h1>recordThing</h1>
        </Link>

        {user && (
          <figure>
            <button onClick={() => router.push(`/profile/15416`)}>
              <Image
                src={"/assets/images/dummy.jpg"}
                alt={""}
                width={36}
                height={36}
                className="rounded-full aspect-square"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src={"/assets/icons/logout.svg"}
                alt={"logout"}
                width={24}
                height={24}
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};
