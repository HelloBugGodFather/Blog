import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import matter from 'gray-matter'
import Link from 'next/link'
import MarkDown from '@/components/markdown'

export async function generateStaticParams() {
    async function getDocsIndex(directoryPath: string, relativeBasePath: string = ''): Promise<string[]> {
        const result: string[] = []
        const directoryEntries = await fs.readdir(directoryPath, {
            encoding: 'utf-8',
            withFileTypes: true
        })

        for (const entry of directoryEntries) {
            const relativeEntryPath = relativeBasePath ? `${relativeBasePath}/${entry.name}` : entry.name
            if (entry.isDirectory()) {
                const subItems = await getDocsIndex(path.join(directoryPath, entry.name), relativeEntryPath)
                result.push(...subItems)
            } else if (entry.name.endsWith('.md')) {
                result.push(Buffer.from(relativeEntryPath.replace(/\.md$/, '')).toString('base64url'))
            }
        }
        return result
    }
    return (await getDocsIndex(path.join(process.cwd(), 'docs'))).map((index) => ({ index }))
}

async function DocsPage({ params }: { params: { index: string } }) {
    const { index } = await params
    const filePath = path.join(process.cwd(), 'docs', Buffer.from(index, 'base64url').toString('utf-8') + '.md')
    const fileContent = await fs.readFile(filePath, { encoding: 'utf-8' })
    const { content } = matter(fileContent)
    return (
        <>
            <div className="w-3/5 mx-auto mt-20 bg-base-100 shadow-xl">
                <Link href={'/docs'} className="btn btn-soft btn-info">
                    <svg
                        className="fill-current"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg "
                        width="16"
                        height="16"
                    >
                        <path d="M853.333333 245.333333H245.333333l93.866667-93.866666c12.8-12.8 12.8-34.133333 0-46.933334-12.8-12.8-34.133333-12.8-46.933333 0l-145.066667 145.066667c-12.8 12.8-12.8 34.133333 0 46.933333l145.066667 145.066667c6.4 6.4 14.933333 10.666667 23.466666 10.666667s17.066667-4.266667 23.466667-10.666667c12.8-12.8 12.8-34.133333 0-46.933333L256 311.466667h597.333333c6.4 0 10.666667 4.266667 10.666667 10.666666v426.666667c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667V320c0-40.533333-34.133333-74.666667-74.666667-74.666667z"></path>
                    </svg>
                    返回文档页
                </Link>
                <MarkDown source={content} />
            </div>
        </>
    )
}

export default DocsPage
