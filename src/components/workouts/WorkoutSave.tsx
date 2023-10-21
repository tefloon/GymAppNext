import prisma from "@/lib/prisma";
import React from "react";
import {
  Workout as PrismaWorkout,
  Person as PrismaPerson,
} from "@prisma/client";

type WorkoutSaveProps = {
  person: PrismaPerson;
  workouts: PrismaWorkout[];
};

export default async function WorkoutSave() {
  const currentWorkouts = await prisma.person.findFirst({
    where: {
      name: "Antek",
    },
    include: {
      workouts: {
        include: {
          exercises: true,
        },
      },
    },
  });

  if (!currentWorkouts) {
    return <div>Dupa</div>;
  }

  console.log(currentWorkouts.workouts);

  const workouts = currentWorkouts.workouts;

  return workouts.length > 0 ? (
    <ul className="notes-list">
      {workouts.map((w) => (
        <li key={w.id}>{w.date.toString()}</li>
      ))}
    </ul>
  ) : (
    <div className="notes-empty">Loading...</div>
  );

  return <div>WorkoutSave</div>;
}
