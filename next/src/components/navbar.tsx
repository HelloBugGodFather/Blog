import HomeSVG from '@/svg/HomeSVG'
import DocsSVG from '@/svg/DocsSVG'
import AboutSVG from '@/svg/AboutSVG'
import GithubSVG from '@/svg/GithubSVG'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className="navbar w-fit bg-base-100 shadow-xl rounded-full fixed top-0 left-1/2 -translate-x-1/2 z-100 px-5 gap-5">
            <Link href={'/home'} className="btn btn-info btn-circle btn-ghost">
                <HomeSVG />
            </Link>
            <Link href={'/docs'} className="btn btn-success btn-circle btn-ghost">
                <DocsSVG />
            </Link>
            <Link href={'/about'} className="btn btn-warning btn-circle btn-ghost">
                <AboutSVG />
            </Link>
            <Link
                href={'https://github.com/HelloBugGodFather'}
                target="_blank"
                className="btn btn-error btn-circle btn-ghost"
            >
                <GithubSVG />
            </Link>
        </div>
    )
}
