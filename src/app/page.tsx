import { DocumentTable } from "@/components/document-table";
import { Header } from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <DocumentTable/>
    </>
  );
}
