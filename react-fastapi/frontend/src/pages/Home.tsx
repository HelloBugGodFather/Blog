import Logo from '../components/LogoLoop'

function Home() {
    return (
        <>
            {/* 主页信息 */}
            <div className="w-full h-screen flex justify-center items-center flex-col gap-6 z-0">
                {/* 头像 */}
                <div className="avatar">
                    <div className="w-36 rounded-full">
                        <img src="/avatar.png" />
                    </div>
                </div>

                {/* 个人介绍 */}
                <p>
                    人,你好! 我是
                    <span className="text-2xl text-info"> HelloBug</span> (=｀ω´=)
                </p>
                <p>
                    一个普通的
                    <span className="text-xl text-error">React / Vue / FastAPI</span>
                    开发者
                </p>
                <p>也是个一直在找寻工作机会的苦逼大四牲 (≖_≖ )</p>
                <p>欢迎来到我的博客主页 ( ◜‿◝ )♡</p>
                <p>这里我将留下我的技术文档</p>

                {/* Logo循环 */}
                <Logo />
            </div>
        </>
    )
}

export default Home
