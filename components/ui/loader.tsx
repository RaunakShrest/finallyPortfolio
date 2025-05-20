import { Loader2 } from "lucide-react"

interface LoaderProps {
  text?: string
}

export function Loader({ text = "Loading..." }: LoaderProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <Loader2 className="h-12 w-12 animate-spin text-blue-500 mb-4" />
      <p className="text-lg text-gray-400">{text}</p>
    </div>
  )
}
