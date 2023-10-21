import SessionForm from "@/components/workouts/SessionForm";
import React from "react";

export default function Session() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center align-middle gap-5">
        <SessionForm />
      </div>
    </div>
  );
}
