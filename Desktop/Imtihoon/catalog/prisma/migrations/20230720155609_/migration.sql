/*
  Warnings:

  - Added the required column `sectionId` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `catalogId` to the `section` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product" ADD COLUMN     "sectionId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "section" ADD COLUMN     "catalogId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "section" ADD CONSTRAINT "section_catalogId_fkey" FOREIGN KEY ("catalogId") REFERENCES "catalog"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "section"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
