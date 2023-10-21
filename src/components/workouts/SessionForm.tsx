"use client";

// components/WorkoutForm.js
import {
  FormEvent,
  Fragment,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import {
  Workout as PrismaWorkout,
  ExerciseSession as PrismaExerciseSession,
  ExerciseSet as PrismaExerciseSet,
  ExerciseType as PrismaExerciseType,
} from "@prisma/client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

interface WorkoutFormProps {
  onSubmit: (data: PrismaWorkout) => void;
}

type Set = Pick<
  PrismaExerciseSet,
  "order" | "reps" | "weight" | "wasCompleted"
>;
type Session = Pick<PrismaExerciseSession, "order">;

type SessionControls = {
  sets: Set[];
  selectedSets: number[];

  toggleCompletedSet: (setNo: number) => void;
  toggleSelectedSet: (setNo: number) => void;
  deleteSets: () => void;
  addSet: (set: Set) => void;
};

type SessionState = Session & SessionControls;

// ==========================================

const initState: SessionState = {
  order: 1,
  sets: [],
  selectedSets: [],

  toggleSelectedSet: () => {},
  toggleCompletedSet: () => {},
  deleteSets: () => {},
  addSet: () => {},
}; // Initial state of the session

type ReducerAction =
  | { type: "ADD"; set: Set }
  | { type: "TOGGLE_SELECTED"; ids: number[] }
  | { type: "TOGGLE_COMPLETED"; ids: number[] }
  | { type: "DELETE" };

const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case "ADD": {
      console.log("Adding a set");
      const newSets = [...state.sets, action.set].sort((a, b) => {
        return a.order - b.order;
      });
      return { ...state, sets: newSets };
    }
    case "DELETE": {
      console.log("Deleting marked sets");
      const newSets = [...state.sets];

      for (var i = newSets.length - 1; i >= 0; i--) {
        if (state.selectedSets[i]) {
          newSets.splice(i, 1);
          state.selectedSets.splice(i, 1);
        }
      }
      return { ...state, sets: newSets };
    }
    case "TOGGLE_SELECTED": {
      console.log("Deleting marked sets");
    }
    default:
      throw new Error();
  }
};

function WorkoutForm2() {
  const [state, dispatch] = useReducer(reducer, initState);
  const repsRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);

  const [sets, setSets] = useState<Set[]>([]);

  const handleClick = () => {
    const reps = repsRef.current?.value ?? 0;
    const weight = weightRef.current?.value ?? 0;

    const newSet: Set = {
      order: 1,
      reps: +reps,
      weight: +weight,
      wasCompleted: false,
    };

    const newSets = [...sets, newSet];
    setSets(newSets);
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <Input type="number" ref={repsRef} label="reps" placeholder="reps" />
        <Input
          type="number"
          ref={weightRef}
          label="weight"
          placeholder="weight"
        />
        <Button onPress={handleClick}>Add</Button>
      </div>
      <div className="mt-5">
        {sets.length > 0 && (
          <ul className="notes-list">
            {sets.map((set, index) => (
              <li key={index}>{`${set.weight}kg x ${set.reps}`}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default WorkoutForm2;
