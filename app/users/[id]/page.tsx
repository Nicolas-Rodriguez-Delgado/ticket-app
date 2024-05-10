import React from "react";
import prisma from "@/prisma/db";
import UserForm from "@/components/UserForm";

interface Props {
  params: { id: string };
}

const EditUser = async ({ params }: Props) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user) {
    return <p className="text-destructive">User not found!</p>;
  }

  user.password = "";
  return (
    <div>
      <UserForm user={user} />
    </div>
  );
};

export default EditUser;
