import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, DocumentType } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, sender, totalValue, netValue, type } = req.body;

  if (!Object.values(DocumentType).includes(type)) {
    return res.status(400).json({ error: "Invalid document type" });
  }

  try {
    const document = await prisma.document.create({
      data: {
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
