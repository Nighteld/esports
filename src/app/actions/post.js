"use server";
import prisma from "@/lib/client";


export async function handlePlayerAction(formData) {
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
    return res;
  } catch (error) {
    console.error("Error creating player:", error);
    throw error;
  }
}
