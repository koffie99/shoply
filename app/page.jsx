import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Home() {
 
  return (
    <main className="min-h-screen bg-[#f1f1f1]">
      <Navbar />
      <div className="min-h-screen flex flex-col gap-3 items-center justify-center p-20">
        <h1 className="font-semibold text-2xl text-[#242424]">Welcome To Shoply</h1>
        <p className="text-center text-[#818181]">The place where shopping becomes a second character</p>
        <Link href="/products" className="bg-[mediumseagreen] p-2 rounded text-white mt-4">Start Shopping</Link>
      </div>
    </main>
  )
}
