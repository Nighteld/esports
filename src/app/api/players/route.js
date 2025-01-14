import prisma from "@/lib/client";

export async function GET(request, res) {
  try {
    const players = await prisma.users.findMany();
    console.log("players", players);
    return new Response(
      JSON.stringify({ status: "Data Fetched Successfully", data: players }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching players:", error);
  }

  // Return an error response
  return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
}
export async function POST(request) {
  const formData = await request.formData();
  console.log("Tested", formData);
  try {
    const res = await prisma.users.create({
      data: {
        name: formData.get("name"),
        address: formData.get("address"),
        phone: formData.get("phone"),
        ign: formData.get("ign"),
        mmr: formData.get("mmr"),
        role: formData.get("role"),
        profile: formData.get("profile"),
        status: "active", // Default status
        notes: formData.get("notes"),
      },
    });

    console.log("Player created:", res);
    return new Response(
      JSON.stringify({ status: "Player Has been Added", code: 0 }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error creating player:", error);
    throw error;
  }

  // Return an error response
  return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
}
