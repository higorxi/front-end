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

  export interface createDoc {
    sender: string
    totalValue: string,
    netValue: string,
    name: string,
    id: string,
    type: string,
  }
  