import { useEffect, useState } from 'react'

interface IndexItem {
    index: string
    title: string
    tags: Array<string>
    update: string
}

function Docs() {
    const [index, setIndex] = useState<IndexItem[]>([])

    useEffect(() => {
        fetch('/api/docs/index', { method: 'GET' })
            .then((response) => response.json())
            .then((data) => setIndex(data.index))
            .catch((err) => console.error(err))
    }, [])

    return (
        <>
            <ul className="list w-1/2 mx-auto flex justify-center items-center gap-5 mt-20">
                {index.map((indexitem) => (
                    <a
                        key={indexitem.index}
                        href={`/docs/${indexitem.index}`}
                        className="list-row w-full bg-base-100 shadow-xl flex"
                    >
                        {/* 文章信息 */}
                        <div className="w-1/2 flex flex-col gap-2">
                            {/* 文章链接 */}
                            <div className="text-xl">{indexitem.title}</div>

                            {/* 修改时间 */}
                            <div>
                                <span>最新修改时间: </span>
                                <span className="text-error">{indexitem.update}</span>
                            </div>
                        </div>

                        {/* 标签徽章 */}
                        <div className="w-1/2 flex justify-center items-center gap-2">
                            {indexitem.tags.map((tag) => (
                                <div className="badge badge-soft badge-warning">{tag}</div>
                            ))}
                        </div>
                    </a>
                ))}
            </ul>
        </>
    )
}

export default Docs
