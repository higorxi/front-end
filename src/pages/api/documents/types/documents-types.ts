export enum DocumentType {
    NF_SERVICE = "NF_SERVICE",
    NF_ELECTRONIC = "NF_ELECTRONIC",
    RECEIPT = "RECEIPT",
  }
  
  export interface Document {
    id: string;
    name: string;
    sender: string;
    totalValue: string;
    netValue: string;
    type: DocumentType;
    createdAt: string;
    updatedAt: string;
  }
  