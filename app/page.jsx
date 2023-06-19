import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Home() {
 
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="min-h-screen flex flex-col gap-3 items-center justify-center">
        <h1 className="font-semibold text-2xl">Welcome To Shoply</h1>
        <p className="text-center">The place where shopping becomes a second character</p>
        <Link href="/products" className="bg-[mediumseagreen] p-2 rounded text-white mt-4">Start Shopping</Link>
      </div>
    </main>
  )
}
