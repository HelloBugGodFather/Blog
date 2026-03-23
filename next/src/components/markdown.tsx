'use client'

import MarkDownPreview from '@uiw/react-markdown-preview'

export default function MarkDown({ source }: { source: string }) {
    return (
        <MarkDownPreview
            source={source}
            wrapperElement={{ 'data-color-mode': 'dark' }}
            className="rounded-xl p-10 bg-primary"
        />
    )
}
