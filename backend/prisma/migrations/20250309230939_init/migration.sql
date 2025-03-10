-- CreateTable
CREATE TABLE `projetos` (
    `id` CHAR(36) NOT NULL,
    `titulo` VARCHAR(255) NOT NULL,
    `descricao` VARCHAR(500) NOT NULL,
    `ano` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `projetos_titulo_key`(`titulo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tecnologias` (
    `id` CHAR(36) NOT NULL,
    `projetoId` CHAR(36) NOT NULL,
    `nome` CHAR(255) NOT NULL,
    `versao` CHAR(50) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `linguagens_programacao` (
    `id` CHAR(36) NOT NULL,
    `projetoId` CHAR(36) NOT NULL,
    `nome` CHAR(255) NOT NULL,
    `versao` CHAR(50) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `areas_conhecimento` (
    `id` CHAR(36) NOT NULL,
    `projetoId` CHAR(36) NOT NULL,
    `nome` CHAR(255) NOT NULL,
    `versao` CHAR(50) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tecnologias` ADD CONSTRAINT `tecnologias_projetoId_fkey` FOREIGN KEY (`projetoId`) REFERENCES `projetos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `linguagens_programacao` ADD CONSTRAINT `linguagens_programacao_projetoId_fkey` FOREIGN KEY (`projetoId`) REFERENCES `projetos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `areas_conhecimento` ADD CONSTRAINT `areas_conhecimento_projetoId_fkey` FOREIGN KEY (`projetoId`) REFERENCES `projetos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
