-- AlterTable
ALTER TABLE `areas_conhecimento` ADD COLUMN `ativo` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `linguagens_programacao` ADD COLUMN `ativo` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `projetos` ADD COLUMN `ativo` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `tecnologias` ADD COLUMN `ativo` BOOLEAN NOT NULL DEFAULT true;
