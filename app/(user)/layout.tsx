import Header from "@/components/Header"
import "../../styles/globals.css"
import Banner from "@/components/Banner"

export const metadata = {
  title: 'Homepage',
  description: 'Blog for post config Mikrotik, Linux, and Cisco Packet tracer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="p-0 sm:p-10 sm:max-w-6xl mx-auto">
        <Header/>
        <Banner/>
        {children}
      </body>
    </html>
  )
}
