import Todo from "@/components/Todo";
import prisma from "@/lib/prisma";
import React from "react";
import {
  Projects as PrismaProjects,
  Task as PrismaTask,
  PrismaPromise,
} from "@prisma/client";

export default async function Todos() {
  const projects = await prisma.projects.findMany({
    include: {
      Tasks: true,
    },
  });

  const people = await prisma.person.findMany({
    include: {
      workouts: true,
    },
  });

  const tasks = projects[0].Tasks;
  console.log(projects);

  return projects.length > 0 ? (
    <ul className="notes-list">
      {tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  ) : (
    <div className="notes-empty">Loading...</div>
  );
}
