import { ModeToggle } from "@/components/glopal/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Navigation() {
  return (
    <div className="relative flex items-center justify-between p-4">
      <aside className="flex items-center gap-2">
        <Image
          src={"./assets/plura-logo.svg"}
          alt="plura logo"
          width={40}
          height={40}
        ></Image>
        <span className="text-xl font-bold">Plura.</span>
      </aside>

      <nav className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] transform md:block">
        <ul className="flex items-center justify-center gap-8">
          <Link href="#">Pricing</Link>
          <Link href="#">About </Link>
          <Link href="#">Documentation</Link>
          <Link href="#">Features</Link>
        </ul>
      </nav>

      <aside className="flex items-center gap-2">
        <Link
          href="/agency"
          className="rounded-md bg-primary p-2 px-4 text-white hover:bg-primary/80"
        >
          Login
        </Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  );
}

export default Navigation;
