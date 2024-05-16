import UserForm from "@/components/UserForm";
import DataTable from "./DataTable";
import prisma from "@/prisma/db";
import { getServerSession } from "next-auth";
import options from "../api/auth/[...nextauth]/options";

export default async function Users() {
  // const session = await getServerSession(options);
  // if (session?.user.role !== "ADMIN") {
  //   return <p className="text-destructive">Admin access required!</p>;
  // }

  const users = await prisma.user.findMany();

  return (
    <div>
      <UserForm />
      <DataTable users={users} />
    </div>
  );
}
