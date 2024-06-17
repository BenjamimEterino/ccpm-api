-- CreateTable
CREATE TABLE `requisicao` (
    `id_requisicao` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `motivo` VARCHAR(191) NULL,
    `status` ENUM('pendente', 'aceite', 'resolvido') NOT NULL DEFAULT 'pendente',
    `project_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_requisicao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `requisicao` ADD CONSTRAINT `requisicao_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `project`(`id_project`) ON DELETE RESTRICT ON UPDATE CASCADE;
