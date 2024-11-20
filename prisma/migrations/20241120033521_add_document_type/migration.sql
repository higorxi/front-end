-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('NF_SERVICE', 'NF_ELECTRONIC', 'RECEIPT');

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sender" TEXT NOT NULL,
    "totalValue" TEXT NOT NULL,
    "netValue" TEXT NOT NULL,
    "type" "DocumentType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);
