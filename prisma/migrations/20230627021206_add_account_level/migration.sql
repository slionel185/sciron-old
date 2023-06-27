-- CreateEnum
CREATE TYPE "AccountLevel" AS ENUM ('STARTER', 'HOBBYIST', 'PROFESSIONAL');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accountLevel" "AccountLevel" NOT NULL DEFAULT 'STARTER';
