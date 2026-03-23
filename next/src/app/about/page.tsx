import Logo from '@/components/logoloop'

function Hero() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-base-100 gap-10">
            <div className="text-6xl">👋 (oﾟvﾟ)ノ</div>
            <div className="text-4xl">嗨, 你好呀~人!</div>

            <div className="flex justify-center gap-5">
                <span className="badge badge-info badge-lg">正在求职的大四牲</span>
                <span className="badge badge-success badge-lg">人在杭州, 又活了一天</span>
                <span className="badge badge-warning badge-lg">FastAPI / React / Vue / Electron / MySQL</span>
            </div>

            <div className="text-center">
                <p>电话: 19550112627</p>
                <p>邮箱: 2323981342@qq.com</p>
            </div>
        </div>
    )
}

function Technology() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-base-300 gap-10">
            <div className="text-6xl">💻 (￣▽￣)ノ</div>
            <div className="text-4xl">我的技术栈</div>

            <Logo />

            <div className="alert alert-error alert-soft">
                <span className="text-md">
                    😤😤😤 // 做过网站, 爬虫, 可视化大屏, 桌面软件... 就是不会做LeetCode笔试题 (≖_≖ ) //
                </span>
            </div>
        </div>
    )
}

function Life() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-base-100 gap-10">
            <div className="text-6xl">🎮 (´-ω-`)</div>
            <div className="text-4xl">死宅的日常</div>

            <div className="flex flex-col gap-3">
                {[
                    { icon: '🍜', text: '饿了去吃饭, 困了去睡觉, 不是写代码, 就在打游戏' },
                    { icon: '🏠', text: '有点社恐, 喜欢一个人安安静静独处' },
                    { icon: '💬', text: '只有跟熟悉的人才像个话痨' },
                    { icon: '📱', text: '看着朋友圈别人旅游、美食、秀恩爱的照片, 我只觉得吵闹' },
                    { icon: '💻', text: '每天打开电脑却不知道做什么, 然后发呆一整天' }
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-base-200 shadow-xl rounded-xl p-5">
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

function Learn() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-base-300 gap-10">
            <div className="text-6xl">🚀 (¬‿¬)</div>
            <div className="text-4xl">大学四年进化史</div>

            <ul className="steps w-full">
                <li data-content="●" className="step step-info">
                    大一上
                    <hr />
                    C入门编程
                </li>
                <li data-content="●" className="step step-info">
                    大一下
                    <hr />
                    Html, CSS, JavaScript
                </li>
                <li data-content="●" className="step step-success">
                    大二上
                    <hr />
                    Vue, SpringBoot(这辈子再不碰Java)
                </li>
                <li data-content="●" className="step step-success">
                    大二下
                    <hr />
                    Django(好庞大的配置), PyQt
                </li>
            </ul>

            <ul className="steps w-full">
                <li data-content="●" className="step step-warning">
                    大三上
                    <hr />
                    Scrapy, JS逆向(被淘宝拒之门外)
                </li>
                <li data-content="●" className="step step-warning">
                    大三下
                    <hr />
                    FastAPI(爱死), Electron, TypeScript
                </li>
                <li data-content="●" className="step step-error">
                    大四上
                    <hr />
                    React, TailWindCSS(彻底不会CSS)
                </li>
                <li data-content="●" className="step step-error">
                    大四下
                    <hr />
                    正在Go
                </li>
            </ul>

            <ul className="steps w-full">
                <li data-content="●" className="step step-primary">
                    入门VSCode(这玩意儿怎么配置)
                </li>
                <li data-content="●" className="step step-primary">
                    转PyCharm, IDEA(专业IDE吗, 启动好慢)
                </li>
                <li data-content="●" className="step step-primary">
                    个性化VSCode(匠心打造, 耗时半年)
                </li>
                <li data-content="●" className="step step-primary">
                    VSCode自制插件(还是自己写的好使)
                </li>
            </ul>
        </div>
    )
}

function Future() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-base-100 gap-10">
            <div className="text-6xl">📚 (｡•́︿•̀｡)</div>
            <div className="text-4xl">学不完, 根本学不完</div>

            <div className="grid grid-cols-4 gap-5">
                {[
                    'Celery',
                    'RabbitMQ',
                    'Kafka',
                    'PostgresSQL',
                    'Prisma',
                    'Drizzle',
                    'GORM',
                    'Redis',
                    'NextJS',
                    'NuxtJS',
                    'Astro',
                    'Rust',
                    'NestJS',
                    'Gin',
                    'Kubernetes',
                    'Langchain'
                ].map((tech, index) => {
                    {
                        /* 
                            Tailwind safelist: 
                            badge-info badge-success badge-warning badge-error 
                        */
                    }
                    const columnColors = ['info', 'success', 'warning', 'error']
                    const color = columnColors[index % 4]
                    return (
                        <span key={tech} className={`badge badge-soft w-full text-xl rounded-xl badge-${color} p-5`}>
                            {tech}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

function About() {
    return (
        <>
            <Hero />
            <Technology />
            <Life />
            <Learn />
            <Future />
        </>
    )
}

export default About
