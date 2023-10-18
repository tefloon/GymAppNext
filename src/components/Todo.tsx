import React from "react";
import { Task as PrismaTask } from "@prisma/client";

type TodoProps = {
  todo: PrismaTask;
};

export default function Todo({ todo }: TodoProps) {
  return <div>Todo name: {todo.name}</div>;
}
