-- AlterTable
ALTER TABLE `users` ADD COLUMN `level` ENUM('user', 'admin', 'superadmin') NOT NULL DEFAULT 'user';
