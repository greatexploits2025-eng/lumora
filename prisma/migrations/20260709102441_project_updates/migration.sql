-- CreateEnum
CREATE TYPE "AssetType" AS ENUM ('IMAGE', 'VIDEO', 'AUDIO', 'MUSIC', 'SUBTITLE', 'DOCUMENT');

-- CreateEnum
CREATE TYPE "ExportStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ProjectStatus" ADD VALUE 'RENDERING';
ALTER TYPE "ProjectStatus" ADD VALUE 'ARCHIVED';

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "duration" INTEGER,
ADD COLUMN     "outputVideo" TEXT,
ADD COLUMN     "prompt" TEXT,
ADD COLUMN     "style" TEXT,
ADD COLUMN     "thumbnail" TEXT,
ALTER COLUMN "title" SET DEFAULT 'Untitled Project';

-- CreateTable
CREATE TABLE "Script" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "content" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Script_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scene" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "order" INTEGER NOT NULL,
    "prompt" TEXT,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Scene_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "appearance" TEXT,
    "voice" TEXT,
    "imageUrl" TEXT,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
    "id" TEXT NOT NULL,
    "type" "AssetType" NOT NULL,
    "name" TEXT,
    "url" TEXT NOT NULL,
    "provider" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GenerationJob" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "model" TEXT,
    "prompt" TEXT,
    "status" "JobStatus" NOT NULL DEFAULT 'PENDING',
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "error" TEXT,
    "projectId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "GenerationJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Export" (
    "id" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "resolution" TEXT,
    "url" TEXT,
    "status" "ExportStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "projectId" TEXT NOT NULL,

    CONSTRAINT "Export_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Script" ADD CONSTRAINT "Script_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scene" ADD CONSTRAINT "Scene_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asset" ADD CONSTRAINT "Asset_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GenerationJob" ADD CONSTRAINT "GenerationJob_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GenerationJob" ADD CONSTRAINT "GenerationJob_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Export" ADD CONSTRAINT "Export_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
