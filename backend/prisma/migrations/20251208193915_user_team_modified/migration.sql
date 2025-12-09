/*
  Warnings:

  - You are about to drop the column `roleId` on the `UserTeam` table. All the data in the column will be lost.
  - Added the required column `roleName` to the `UserTeam` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `UserTeam` DROP FOREIGN KEY `UserTeam_roleId_fkey`;

-- DropIndex
DROP INDEX `UserTeam_roleId_fkey` ON `UserTeam`;

-- AlterTable
ALTER TABLE `User` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AlterTable
ALTER TABLE `UserTeam` DROP COLUMN `roleId`,
    ADD COLUMN `roleName` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `UserTeam` ADD CONSTRAINT `UserTeam_roleName_fkey` FOREIGN KEY (`roleName`) REFERENCES `Role`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
