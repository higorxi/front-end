import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getDocuments(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { page = 1, limit = 7 } = req.query;

    const skip = (Number(page) - 1) * Number(limit);

    const documents = await prisma.document.findMany({
        skip,
        take: Number(limit),
        orderBy: { createdAt: "desc" },
      });
    
      const totalDocuments = await prisma.document.count();
    
      return res.status(200).json({
        data: documents,
        total: totalDocuments,
        totalPages: Math.ceil(totalDocuments / Number(limit)),
        currentPage: Number(page),
      });
    } catch (error) {
      console.error("Erro ao buscar documentos:", error);
      return res.status(500).json({ error: (error as Error).message });
    }
}
