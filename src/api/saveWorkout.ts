// pages/api/workout.js
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
// import { getSession } from "next-auth/client";

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const session = await getSession({ req });
  // if (!session) {
  //   res.status(401).json({ error: "Unauthorized" });
  //   return;
  // }
  // if (req.method === "POST") {
  //   const { exercise, reps } = req.body;
  //   try {
  //     const newWorkout = await prisma.workout.create({
  //       data: {
  //         workout
  //         reps: Number(reps),
  //         // userId: session.user.id, // assuming a user ID is available in the session
  //       },
  //     });
  //     res.status(200).json(newWorkout);
  //   } catch (error) {
  //     res.status(500).json({ error: "Failed to save workout" });
  //   }
  // } else {
  //   res.status(405).json({ error: "Method not allowed" });
  // }
}
