import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id !== "string") {
    return res.status(400).json({ error: "ID is required" });
  }

  switch (req.method) {
    case "GET":
      try {
        const document = await prisma.document.findUnique({
          where: { id: id },
        });

        if (!document) {
          return res.status(404).json({ error: "Documento não encontrado" });
        }

        return res.status(200).json(document);
      } catch (error) {
        return res.status(500).json({ error: (error as Error).message });
      }

    case "DELETE":
      try {
        const document = await prisma.document.delete({
          where: { id: id },
        });

        return res.status(200).json({ message: "Documento deletado com sucesso", document });
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
          return res.status(404).json({ error: "Documento não encontrado" });
        }
        return res.status(500).json({ error: (error as Error).message });
      }

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
