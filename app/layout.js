import localFont from "next/font/local"
import "./globals.css"
import SessionWrapper from "./component/SessionWrapper"

export const metadata = {
  title: "StudLodge",
  description: "Find your perfect home away from home"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
      <body>
        {children}
      </body>
      </SessionWrapper>
    </html>
  )
}
