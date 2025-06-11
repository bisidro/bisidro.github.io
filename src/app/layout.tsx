import React from "react"
import "./globals.css"
import ThemeProvider from "../components/theme-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <title>John Doe | Personal Website</title>
        <meta name="description" content="Personal website of John Doe, Full Stack Developer & UI/UX Designer" />
      </head>
      <body className="font-sans bg-background text-foreground">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
