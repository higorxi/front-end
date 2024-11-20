export interface Document {
    id: string;
    name: string;
    sender: string;
    totalValue: string;
    netValue: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface DocumentSend {
    name: string;
    sender: string;
    totalValue: string;
    netValue: string;
  }
  