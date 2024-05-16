import Link from "next/link";
import ToggleMode from "./ToggleMode";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import MainNavLinks from "./MainNavLinks";

export default async function MainNav() {
  const session = await getServerSession(options);
  console.log(session);
  return (
    <div className="flex justify-between">
      <MainNavLinks />
      <div className="flex items-center gap-2">
        {session ? (
          <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
        ) : (
          <Link href="/api/auth/signin">Login</Link>
        )}

        <ToggleMode />
      </div>
    </div>
  );
}
