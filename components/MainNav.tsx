import Image from "next/image";
import Link from "next/link";

export default function MainNav() {
  return (
    <div>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/users">Users</Link>
    </div>
  );
}
