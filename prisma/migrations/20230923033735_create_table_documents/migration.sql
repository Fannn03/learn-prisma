-- CreateTable
CREATE TABLE `documents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `nik` VARCHAR(100) NULL,
    `fullname` VARCHAR(100) NOT NULL,
    `photo` VARCHAR(255) NULL,
    `number` VARCHAR(15) NOT NULL,
    `gender` ENUM('male', 'female') NULL,
    `birth_date` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `documents_user_id_key`(`user_id`),
    UNIQUE INDEX `documents_nik_key`(`nik`),
    UNIQUE INDEX `documents_photo_key`(`photo`),
    UNIQUE INDEX `documents_number_key`(`number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `documents` ADD CONSTRAINT `documents_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
