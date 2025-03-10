/*
  Warnings:

  - You are about to drop the column `projetoId` on the `areas_conhecimento` table. All the data in the column will be lost.
  - You are about to drop the column `projetoId` on the `linguagens_programacao` table. All the data in the column will be lost.
  - You are about to drop the column `projetoId` on the `tecnologias` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `areas_conhecimento` DROP FOREIGN KEY `areas_conhecimento_projetoId_fkey`;

-- DropForeignKey
ALTER TABLE `linguagens_programacao` DROP FOREIGN KEY `linguagens_programacao_projetoId_fkey`;

-- DropForeignKey
ALTER TABLE `tecnologias` DROP FOREIGN KEY `tecnologias_projetoId_fkey`;

-- DropIndex
DROP INDEX `areas_conhecimento_projetoId_fkey` ON `areas_conhecimento`;

-- DropIndex
DROP INDEX `linguagens_programacao_projetoId_fkey` ON `linguagens_programacao`;

-- DropIndex
DROP INDEX `tecnologias_projetoId_fkey` ON `tecnologias`;

-- AlterTable
ALTER TABLE `areas_conhecimento` DROP COLUMN `projetoId`;

-- AlterTable
ALTER TABLE `linguagens_programacao` DROP COLUMN `projetoId`;

-- AlterTable
ALTER TABLE `tecnologias` DROP COLUMN `projetoId`;

-- CreateTable
CREATE TABLE `tecnologias_projetos` (
    `projetoId` CHAR(36) NOT NULL,
    `tecnologiaId` CHAR(36) NOT NULL,

    PRIMARY KEY (`projetoId`, `tecnologiaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `linguagens_programacao_projetos` (
    `projetoId` CHAR(36) NOT NULL,
    `linguagemId` CHAR(36) NOT NULL,

    PRIMARY KEY (`projetoId`, `linguagemId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `areas_conhecimento_projetos` (
    `projetoId` CHAR(36) NOT NULL,
    `areaId` CHAR(36) NOT NULL,

    PRIMARY KEY (`projetoId`, `areaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tecnologias_projetos` ADD CONSTRAINT `tecnologias_projetos_projetoId_fkey` FOREIGN KEY (`projetoId`) REFERENCES `projetos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tecnologias_projetos` ADD CONSTRAINT `tecnologias_projetos_tecnologiaId_fkey` FOREIGN KEY (`tecnologiaId`) REFERENCES `tecnologias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `linguagens_programacao_projetos` ADD CONSTRAINT `linguagens_programacao_projetos_projetoId_fkey` FOREIGN KEY (`projetoId`) REFERENCES `projetos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `linguagens_programacao_projetos` ADD CONSTRAINT `linguagens_programacao_projetos_linguagemId_fkey` FOREIGN KEY (`linguagemId`) REFERENCES `linguagens_programacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `areas_conhecimento_projetos` ADD CONSTRAINT `areas_conhecimento_projetos_projetoId_fkey` FOREIGN KEY (`projetoId`) REFERENCES `projetos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `areas_conhecimento_projetos` ADD CONSTRAINT `areas_conhecimento_projetos_areaId_fkey` FOREIGN KEY (`areaId`) REFERENCES `areas_conhecimento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
