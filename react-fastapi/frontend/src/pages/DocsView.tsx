import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MarkDownPreview from '@uiw/react-markdown-preview'

function DocsView() {
    const { index } = useParams<{ index: string }>()
    const [markdown, setMarkdown] = useState('')
    const [colorMode, setColorMode] = useState<'light' | 'dark'>('dark')
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        fetch(`/api/docs/${index}`, { method: 'GET' })
            .then((response) => response.json())
            .then((data) => setMarkdown(data.content))
            .catch((err) => console.error(err))
    }, [index])

    useEffect(() => {
        const updateColorMode = () => {
            const currentTheme = document.documentElement.getAttribute('data-theme')
            const mappedMode: 'light' | 'dark' = currentTheme === 'latte' ? 'light' : 'dark'
            setColorMode(mappedMode)
        }

        updateColorMode()

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    updateColorMode()
                }
            })
        })

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        })

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const calculateProgress = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const scrollHeight =
                document.documentElement.scrollHeight - document.documentElement.clientHeight
            const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
            setScrollProgress(Math.min(progress, 100))
        }
        window.addEventListener('scroll', calculateProgress, { passive: true })
        calculateProgress()
        return () => window.removeEventListener('scroll', calculateProgress)
    }, [markdown])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const radius = 24
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

    return (
        <>
            <div id="#"></div>

            <button
                onClick={scrollToTop}
                className="fixed bottom-10 right-10"
                aria-label="返回顶部"
            >
                <div className="relative w-16 h-16">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 60 60">
                        <circle
                            cx="30"
                            cy="30"
                            r={radius}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="text-base-300"
                        />
                        <circle
                            cx="30"
                            cy="30"
                            r={radius}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            className="text-info"
                            style={{
                                strokeDasharray: circumference,
                                strokeDashoffset: strokeDashoffset
                            }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-info">
                            <svg
                                className="fill-current"
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                            >
                                <path d="M765.378185 437.02322C769.074576 145.083317 528.884137 12.06322 510.402185 0.974049 495.6416 8.366829 251.754771 141.386927 255.426185 437.02322 207.398088 470.290732 155.6736 525.71161 163.041405 621.79278c7.39278 96.081171 103.473951 162.59122 140.437854 158.89483 36.963902-3.69639 25.849756-29.571122 25.849756-29.571122l11.08917-51.724488s55.445854 81.29561 70.231415 81.29561h199.555122c18.456976 0 70.181463-81.29561 70.181463-81.29561l11.089171 51.724488s-11.089171 25.874732 25.874732 29.571122c36.963902 3.69639 133.020098-62.813659 140.412878-158.89483 7.39278-96.081171-44.331707-151.502049-92.384781-184.76956z m-254.976-3.696391c-7.367805 0-96.081171-3.69639-107.145365-107.145366 3.69639-99.802537 99.777561-107.170341 107.145365-110.891707 7.39278 0 103.473951 11.089171 107.170342 110.891707-11.089171 103.448976-99.777561 107.145366-107.145366 107.145366z"></path>
                                <path d="M454.981307 939.582439c0 11.089171-11.089171 22.178341-22.178341 22.178341s-22.153366-11.089171-22.153366-22.178341v-107.145366c0-11.114146 11.064195-22.178341 22.153366-22.178341s22.178341 11.064195 22.178341 22.153366v107.170341zM536.276917 995.028293c0 11.064195-11.089171 22.153366-22.178341 22.153366-11.064195 0-22.153366-11.089171-22.153366-22.153366v-158.919805c0-11.064195 11.089171-22.153366 22.153366-22.153366 11.089171 0 22.178341 11.089171 22.178341 22.153366v158.919805zM610.179746 913.707707c0 11.089171-11.089171 22.178341-22.153366 22.178342-11.089171 0-22.178341-11.089171-22.178341-22.178342v-77.599219c0-11.064195 11.089171-22.153366 22.178341-22.153366 11.064195 0 22.153366 11.089171 22.153366 22.153366v77.599219z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </button>

            <div className="w-3/5 mx-auto mt-20 bg-base-100 shadow-xl">
                <Link to={'/docs'} className="btn btn-soft btn-info">
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
                <MarkDownPreview
                    source={markdown}
                    wrapperElement={{ 'data-color-mode': colorMode }}
                    className="rounded-xl p-10 bg-primary"
                />
            </div>
        </>
    )
}

export default DocsView
