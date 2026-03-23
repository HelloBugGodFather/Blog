import '@/style/global.css'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
    title: "HelloBug's Blog",
    description: "HelloBug's Blog create by NEXT.JS"
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html data-theme="mocha">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
