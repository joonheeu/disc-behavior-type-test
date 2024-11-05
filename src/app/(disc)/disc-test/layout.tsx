import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function DiscLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mx-auto px-4 py-8 container">{children}</main>
      <Footer />
    </div>
  )
}
