import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, DocumentType } from "@prisma/client";

const prisma = new PrismaClient();

const generateId = () => {
  const randomId = Math.floor(Math.random() * 10000);
  return randomId.toString().padStart(4, '0'); 
};

const generateUniqueId = async (): Promise<string> => {
  let uniqueId = generateId();
  let existingDocument = await prisma.document.findUnique({
    where: { id: uniqueId },
  });

  while (existingDocument) {
    uniqueId = generateId();
    existingDocument = await prisma.document.findUnique({
      where: { id: uniqueId },
    });
  }

  return uniqueId;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, sender, totalValue, netValue, type, id } = req.body;

  if (!Object.values(DocumentType).includes(type)) {
    return res.status(400).json({ error: "Invalid document type" });
  }

  try {
    if (id) {
      const existingDocument = await prisma.document.findUnique({
        where: { id },
      });

      if (existingDocument) {
        return res.status(400).json({ error: "Document with this ID already exists" });
      }

      const document = await prisma.document.create({
        data: {
          id,
          name,
          sender,
          totalValue,
          netValue,
          type,
        },
      });
      return res.status(201).json(document);
    }

    const uniqueId = await generateUniqueId(); 

    const document = await prisma.document.create({
      data: {
        id: uniqueId,
        name,
        sender,
        totalValue,
        netValue,
        type,
      },
    });

    res.status(201).json(document);

  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
