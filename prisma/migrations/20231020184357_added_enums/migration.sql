/*
  Warnings:

  - You are about to drop the column `reps` on the `ExerciseRecord` table. All the data in the column will be lost.
  - You are about to drop the column `rir` on the `ExerciseRecord` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `ExerciseRecord` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `ExerciseRecord` table. All the data in the column will be lost.
  - Added the required column `type` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstValue` to the `ExerciseRecord` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ExerciseType" AS ENUM ('WeightReps', 'DistanceTime');

-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "type" "ExerciseType" NOT NULL;

-- AlterTable
ALTER TABLE "ExerciseRecord" DROP COLUMN "reps",
DROP COLUMN "rir",
DROP COLUMN "time",
DROP COLUMN "weight",
ADD COLUMN     "firstValue" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "secondValue" DOUBLE PRECISION;
