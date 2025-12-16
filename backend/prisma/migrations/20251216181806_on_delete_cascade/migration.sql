-- DropForeignKey
ALTER TABLE `RolePermission` DROP FOREIGN KEY `RolePermission_permissionId_fkey`;

-- DropForeignKey
ALTER TABLE `RolePermission` DROP FOREIGN KEY `RolePermission_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `Ticket` DROP FOREIGN KEY `Ticket_teamId_fkey`;

-- DropForeignKey
ALTER TABLE `TicketComment` DROP FOREIGN KEY `TicketComment_ticketId_fkey`;

-- DropForeignKey
ALTER TABLE `TicketLog` DROP FOREIGN KEY `TicketLog_ticketId_fkey`;

-- DropForeignKey
ALTER TABLE `UserTeam` DROP FOREIGN KEY `UserTeam_teamId_fkey`;

-- DropForeignKey
ALTER TABLE `UserTeam` DROP FOREIGN KEY `UserTeam_userId_fkey`;

-- DropIndex
DROP INDEX `RolePermission_permissionId_fkey` ON `RolePermission`;

-- DropIndex
DROP INDEX `Ticket_teamId_fkey` ON `Ticket`;

-- DropIndex
DROP INDEX `TicketComment_ticketId_fkey` ON `TicketComment`;

-- DropIndex
DROP INDEX `TicketLog_ticketId_fkey` ON `TicketLog`;

-- DropIndex
DROP INDEX `UserTeam_teamId_fkey` ON `UserTeam`;

-- AlterTable
ALTER TABLE `User` ALTER COLUMN `updatedAt` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `UserTeam` ADD CONSTRAINT `UserTeam_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserTeam` ADD CONSTRAINT `UserTeam_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Team`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TicketComment` ADD CONSTRAINT `TicketComment_ticketId_fkey` FOREIGN KEY (`ticketId`) REFERENCES `Ticket`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TicketLog` ADD CONSTRAINT `TicketLog_ticketId_fkey` FOREIGN KEY (`ticketId`) REFERENCES `Ticket`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RolePermission` ADD CONSTRAINT `RolePermission_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `Permission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
