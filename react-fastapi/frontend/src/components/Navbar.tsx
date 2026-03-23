import { Link } from 'react-router-dom'
import HomeSVG from '../svg/HomeSVG'
import DocsSVG from '../svg/DocsSVG'
import AboutSVG from '../svg/AboutSVG'
import GithubSVG from '../svg/GithubSVG'
import { useEffect, useState } from 'react'

function Navbar() {
    const [theme, setTheme] = useState<'latte' | 'mocha'>(
        () => (localStorage.getItem('theme') as 'latte' | 'mocha') || 'mocha'
    )
    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return (
        <div className="navbar gap-5 bg-base-100 shadow-xl rounded-full w-fit px-5 fixed top-0 left-1/2 -translate-x-1/2 z-100">
            <Link to="/home" className="btn btn-primary btn-circle btn-ghost">
                <HomeSVG />
            </Link>
            <Link to="/docs" className="btn btn-info btn-circle btn-ghost">
                <DocsSVG />
            </Link>
            <Link to="/about" className="btn btn-warning btn-circle btn-ghost">
                <AboutSVG />
            </Link>
            <a
                href="https://github.com/HelloBugGodFather"
                target="_blank"
                className="btn btn-error btn-circle btn-ghost"
            >
                <GithubSVG />
            </a>
            <label className="toggle text-primary">
                <input
                    type="checkbox"
                    value="mocha"
                    className="theme-controller"
                    checked={theme === 'mocha'}
                    onChange={(e) => setTheme(e.target.checked ? 'mocha' : 'latte')}
                />
                <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                    </g>
                </svg>
                <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </g>
                </svg>
            </label>
        </div>
    )
}

export default Navbar
