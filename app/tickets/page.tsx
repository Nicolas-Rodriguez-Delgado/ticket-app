import prisma from "@/prisma/db";

import React from "react";
import DataTable from "./DataTable";

const Tickets = async () => {
  const tickets = await prisma.ticket.findMany();
  console.log(tickets);
  return (
    <div>
      <DataTable tickets={tickets}></DataTable>
    </div>
  );
};

export default Tickets;
