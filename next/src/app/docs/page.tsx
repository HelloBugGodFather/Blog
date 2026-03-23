import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import matter from 'gray-matter'
import Link from 'next/link'

interface DocsListItem {
    index: string
    title: string
    tags: string[]
    update: string
}

async function getDocsList(directoryPath: string, relativeBasePath: string = ''): Promise<DocsListItem[]> {
    const docsList: DocsListItem[] = []
    const directoryEntries = await fs.readdir(directoryPath, {
        encoding: 'utf-8',
        withFileTypes: true
    })

    for (const entry of directoryEntries) {
        const fullEntryPath = path.join(directoryPath, entry.name)
        const relativeEntryPath = relativeBasePath ? `${relativeBasePath}/${entry.name}` : entry.name

        if (entry.isDirectory()) {
            const subItems = await getDocsList(fullEntryPath, relativeEntryPath)
            docsList.push(...subItems)
        } else if (entry.name.endsWith('.md')) {
            const documentIndex = Buffer.from(relativeEntryPath.replace(/\.md$/, '')).toString('base64url')

            const fileContent = await fs.readFile(fullEntryPath, 'utf-8')
            const { data } = matter(fileContent)

            const fileStats = await fs.stat(fullEntryPath)
            const formattedUpdate = `${fileStats.mtime.getFullYear()}-${String(fileStats.mtime.getMonth() + 1).padStart(2, '0')}-${String(fileStats.mtime.getDate()).padStart(2, '0')} ${String(fileStats.mtime.getHours()).padStart(2, '0')}:${String(fileStats.mtime.getMinutes()).padStart(2, '0')}:${String(fileStats.mtime.getSeconds()).padStart(2, '0')}`

            docsList.push({
                index: documentIndex,
                title: data.title || 'Untitled',
                tags: data.tags || [],
                update: formattedUpdate
            })
        }
    }

    return docsList
}

async function Docs() {
    const docsList = await getDocsList(path.join(process.cwd(), 'docs'))
    return (
        <>
            <ul className="list w-3/5 mx-auto flex justify-center items-center gap-5 mt-20">
                {docsList.map((docs) => (
                    <Link
                        key={docs.index}
                        href={`/docs/${docs.index}`}
                        className="list-row w-full bg-base-100 shadow-xl flex"
                    >
                        {/* 文章信息 */}
                        <div className="w-1/2 flex flex-col gap-2">
                            {/* 文章链接 */}
                            <div className="text-xl">{docs.title}</div>

                            {/* 修改时间 */}
                            <div>
                                <span>最新修改时间: </span>
                                <span className="text-error">{docs.update}</span>
                            </div>
                        </div>

                        {/* 标签徽章 */}
                        <div className="w-1/2 flex justify-center items-center gap-2">
                            {docs.tags.map((tag) => (
                                <div key={`${docs.index}-${tag}`} className="badge badge-soft badge-warning">
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </Link>
                ))}
            </ul>
        </>
    )
}

export default Docs
