-- CreateTable
CREATE TABLE `categoria_func` (
    `id` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionario` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `morada` VARCHAR(191) NULL,
    `contacto` VARCHAR(191) NULL,
    `categ_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `funcionario_categ_id_key`(`categ_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `funcionario` ADD CONSTRAINT `funcionario_categ_id_fkey` FOREIGN KEY (`categ_id`) REFERENCES `categoria_func`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
