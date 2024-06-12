-- CreateTable
CREATE TABLE `categoria_prod` (
    `id_categoria_prod` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_categoria_prod`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto` (
    `id_produto` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `marca` VARCHAR(191) NULL,
    `preco` DOUBLE NULL,
    `categoria_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `produto` ADD CONSTRAINT `produto_categoria_id_fkey` FOREIGN KEY (`categoria_id`) REFERENCES `categoria_prod`(`id_categoria_prod`) ON DELETE RESTRICT ON UPDATE CASCADE;
