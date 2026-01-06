/*
  Warnings:

  - The primary key for the `RolePermission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `permissionId` on the `RolePermission` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `RolePermission` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Permission` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `permissionName` to the `RolePermission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleName` to the `RolePermission` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `RolePermission` DROP FOREIGN KEY `RolePermission_permissionId_fkey`;

-- DropForeignKey
ALTER TABLE `RolePermission` DROP FOREIGN KEY `RolePermission_roleId_fkey`;

-- DropIndex
DROP INDEX `RolePermission_permissionId_fkey` ON `RolePermission`;

-- AlterTable
ALTER TABLE `RolePermission` DROP PRIMARY KEY,
    DROP COLUMN `permissionId`,
    DROP COLUMN `roleId`,
    ADD COLUMN `permissionName` VARCHAR(191) NOT NULL,
    ADD COLUMN `roleName` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`roleName`, `permissionName`);

-- AlterTable
ALTER TABLE `User` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX `Permission_name_key` ON `Permission`(`name`);

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_roleName_fkey` FOREIGN KEY (`roleName`) REFERENCES `Role`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_permissionName_fkey` FOREIGN KEY (`permissionName`) REFERENCES `Permission`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;
