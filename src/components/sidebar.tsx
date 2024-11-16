import { File, X } from "lucide-react"
import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="flex h-[90vh] w-12 flex-col items-center gap-4 bg-white py-4">
      <Link
        href="#"
        className="text-sm font-medium text-zinc-400 hover:text-zinc-100"
      >
        06
      </Link>
      <nav className="flex flex-1 flex-col items-center gap-4">
        <Link
          href="#"
          className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-100"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Link>
        <Link
          href="#"
          className="rounded-md p-1.5 text-emerald-500 hover:bg-zinc-700 hover:text-emerald-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v3H8v2h3v3h2v-3h3v-2h-3V7h-2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">WhatsApp</span>
        </Link>
        <Link
          href="#"
          className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-100"
        >
          <File className="h-5 w-5" />
          <span className="sr-only">Files</span>
        </Link>
      </nav>
    </aside>
  )
}