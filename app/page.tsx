import DashChart from "@/components/DashChart";
import DashRecentTickets from "@/components/DashRecentTickets";
import prisma from "@/prisma/db";

export default async function Dashboard() {
  const tickets = await prisma.ticket.findMany({
    where: {
      NOT: [{ status: "CLOSED" }],
    },
    orderBy: {
      updatedAt: "desc",
    },
    skip: 0,
    take: 5,
    include: {
      assignedToUser: true,
    },
  });

  const groupTickets = prisma.ticket.groupBy({
    by: ["status"],
    _count: { id: true },
  });
  return (
    <div>
      <div className="grid gap-4  md:grid-cols-2 px-2">
        <div>
          <DashRecentTickets tickets={tickets} />
        </div>
        <div>
          <DashChart />
        </div>
      </div>
    </div>
  );
}
