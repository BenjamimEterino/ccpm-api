/*
  Warnings:

  - The primary key for the `categoria_func` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `categoria_func` table. All the data in the column will be lost.
  - The primary key for the `funcionario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `funcionario` table. All the data in the column will be lost.
  - The primary key for the `project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `project` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - The required column `id_categoria_func` was added to the `categoria_func` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id_funcionario` was added to the `funcionario` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id_project` was added to the `project` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id_user` was added to the `user` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE `funcionario` DROP FOREIGN KEY `funcionario_categ_id_fkey`;

-- DropForeignKey
ALTER TABLE `project` DROP FOREIGN KEY `project_user_id_fkey`;

-- AlterTable
ALTER TABLE `categoria_func` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_categoria_func` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_categoria_func`);

-- AlterTable
ALTER TABLE `funcionario` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_funcionario` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_funcionario`);

-- AlterTable
ALTER TABLE `project` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_project` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_project`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_user` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_user`);

-- CreateTable
CREATE TABLE `notification` (
    `id_notification` VARCHAR(191) NOT NULL,
    `mensagem` MEDIUMTEXT NOT NULL,
    `lida` BOOLEAN NOT NULL DEFAULT false,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_notification`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `project` ADD CONSTRAINT `project_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id_user`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionario` ADD CONSTRAINT `funcionario_categ_id_fkey` FOREIGN KEY (`categ_id`) REFERENCES `categoria_func`(`id_categoria_func`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notification` ADD CONSTRAINT `notification_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
