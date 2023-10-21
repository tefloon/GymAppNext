"use client";

// components/WorkoutForm.js
import { FormEvent, Fragment, useEffect, useState } from "react";
import {
  Workout as PrismaWorkout,
  ExerciseSession as PrismaExerciseRecord,
  Person as PrismaPerson,
} from "@prisma/client";
import MyCustomCard from "../MyCustomCard";
import { Checkbox } from "@nextui-org/checkbox";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";

interface WorkoutFormProps {
  onSubmit: (data: PrismaWorkout) => void;
}

type Exercise = {
  weight: number;
  reps: number;
};

type ExerciseRow = {
  key: string;
  set: string;
  weight: string;
  reps: string;
};

function WorkoutForm() {
  const [exercises, setExercises] = useState<Exercise[]>([
    { weight: 5.0, reps: 2 },
    { weight: 15.0, reps: 6 },
    { weight: 35.0, reps: 10 },
    { weight: 70.0, reps: 20 },
  ]);

  const [indicesToDelete, setIndicesToDelete] = useState<boolean[]>([false]);
  const [selectedKeys, setSelectedKeys] = useState<Set<number>>();

  const columns = [
    {
      key: "set",
      label: "Set",
    },
    {
      key: "weight",
      label: "Weight",
    },
    {
      key: "reps",
      label: "Reps",
    },
  ];

  const rows: ExerciseRow[] = [];

  exercises.forEach((ex, index) => {
    rows.push({
      key: index.toString(),
      set: index.toString(),
      weight: ex.weight.toString() + "kg",
      reps: ex.reps.toString(),
    });
  });

  useEffect(() => {
    rows.length = 0;
    exercises.forEach((ex, index) => {
      rows.push({
        key: index.toString(),
        set: index.toString(),
        weight: ex.weight.toString() + "kg",
        reps: ex.reps.toString(),
      });
    });
    console.log(rows);
  }, [exercises]);

  const handleAddExercise = () => {
    setExercises([...exercises, { weight: 0.0, reps: 0 }]);
    setIndicesToDelete([...indicesToDelete, false]);
  };

  const handleRemoveExercise2 = (index: number) => {
    const newExercises = [...exercises];

    newExercises.splice(index, 1);

    setExercises(newExercises);
  };

  const handleRemoveExercise = () => {
    const newExercises = [...exercises];

    for (var i = newExercises.length - 1; i >= 0; i--) {
      if (indicesToDelete[i]) {
        newExercises.splice(i, 1);
        indicesToDelete.splice(i, 1);
      }
    }
    setExercises(newExercises);
  };

  const handleCheckboxChange = (index: number, value: boolean) => {
    const newIndicesToDelete = [...indicesToDelete];

    newIndicesToDelete[index] = value;
    setIndicesToDelete(newIndicesToDelete);
  };

  const handleInputChange = (
    index: number,
    field: keyof Exercise,
    value: string | number
  ) => {
    const newExercises = [...exercises];
    if (field === "weight") {
      newExercises[index].weight = value as number;
    } else if (field === "reps") {
      newExercises[index].reps = value as number;
    }
    setExercises(newExercises);
  };

  const handleSelectionChange = (keys: Set<number>) => {
    console.log(keys);
  };

  // return (
  //   <div>
  //     <Table
  //       className="w-[50rem]"
  //       // hideHeader
  //       aria-label="Controlled table example with dynamic content"
  //       selectionMode="multiple"
  //       selectedKeys={selectedKeys}
  //       onSelectionChange={(keys) => setSelectedKeys(keys as Set<number>)}
  //     >
  //       <TableHeader columns={columns}>
  //         {(column) => (
  //           <TableColumn key={column.key}>{column.label}</TableColumn>
  //         )}
  //       </TableHeader>
  //       <TableBody items={rows}>
  //         {(item) => (
  //           <TableRow key={item.key}>
  //             {(columnKey) => (
  //               <TableCell>{getKeyValue(item, columnKey)}</TableCell>
  //             )}
  //           </TableRow>
  //         )}
  //       </TableBody>
  //     </Table>
  //     <button onClick={() => handleRemoveExercise2(2)}>Delete</button>
  //   </div>
  // );

  return (
    <MyCustomCard title={"Workout"}>
      {exercises.map((exercise, index) => (
        <div
          key={index}
          className="flex flex-col justify-items-center place-items-center pt-5 gap-3"
        >
          <div>
            <input
              type="number"
              placeholder="Weight"
              value={exercise.weight}
              onChange={(e) =>
                handleInputChange(index, "weight", e.target.value)
              }
            />
            <input
              type="number"
              placeholder="Reps"
              value={exercise.reps}
              onChange={(e) =>
                handleInputChange(index, "reps", parseInt(e.target.value))
              }
            />
            <Checkbox
              isSelected={indicesToDelete[index]}
              onValueChange={(value) => handleCheckboxChange(index, value)}
            />
          </div>
        </div>
      ))}
      <button onClick={handleAddExercise}>+</button>
      <button onClick={handleRemoveExercise}>Delete</button>
    </MyCustomCard>
  );
}

export default WorkoutForm;
