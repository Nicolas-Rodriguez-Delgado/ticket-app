import UserForm from "@/components/UserForm";
import DataTable from "./DataTable";
import prisma from "@/prisma/db";

export default async function Users() {
  const users = await prisma.user.findMany();
  return (
    <div>
      <UserForm />
      <DataTable users={users} />
    </div>
  );
}
