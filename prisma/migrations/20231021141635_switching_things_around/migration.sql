/*
  Warnings:

  - You are about to drop the column `typeId` on the `ExerciseSet` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `ExerciseSession` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ExerciseSet" DROP CONSTRAINT "ExerciseSet_typeId_fkey";

-- AlterTable
ALTER TABLE "ExerciseSession" ADD COLUMN     "typeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExerciseSet" DROP COLUMN "typeId";

-- AddForeignKey
ALTER TABLE "ExerciseSession" ADD CONSTRAINT "ExerciseSession_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ExerciseType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
