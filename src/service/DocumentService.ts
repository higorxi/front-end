import { del, get, post } from "./apiService";

export const getDocumentById = async (id: string) => {
  return await get(`/api/documents/${id}`);
};

export const createDocument = async (data: any) => {
    return await post(`/api/documents/create`, data);
};

export const deleteDocumentById = async (id: string) => {
    return await del(`/api/documents/${id}`);
};
  

