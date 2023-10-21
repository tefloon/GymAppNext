// pages/index.js
import WorkoutForm from "@/components/workouts/WorkoutForm";

import {
  Workout as PrismaWorkout,
  Person as PrismaPerson,
} from "@prisma/client";

function HomePage() {
  const handleFormSubmit = async (workoutData: PrismaWorkout) => {
    try {
      const response = await fetch("/api/workout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workoutData),
      });

      const data = await response.json();
      if (data.error) {
        console.error(data.error);
      } else {
        console.log("Workout saved!", data);
      }
    } catch (error) {
      console.error("Failed to save workout", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center align-middle">
        <h1 className="text-2xl self-center p-5">Workout App</h1>
        <WorkoutForm />
      </div>
    </div>
  );
}

export default HomePage;
