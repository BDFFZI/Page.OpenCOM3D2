import { ReactNode } from "react";

const Log: { time: string; content: ReactNode }[] = [
    {
        time: "2024.2.4",
        content: "个人博客改为自建，故更新教程文章链接。",
    },
    {
        time: "2024.1.31",
        content: "添加Mod制作教程衣服部分的文章链接。",
    },
    {
        time: "2024.1.22",
        content: "修复官方预设文件的链接失效问题；调整部分栏目的说明文案。",
    },
    {
        time: "2024.1.10",
        content: "将汉化补丁转存到了3DM并调整相关链接；微调了一些界面的显示效果。",
    },
    {
        time: "2023.12.5",
        content: "去除了原有的“常见问题”和“已知漏洞”版块，所有类似的东西都已迁移到Issue处理。",
    },
    {
        time: "2023.11.1",
        content: "更新了主页内容，为退坑游戏做准备。",
    },
    {
        time: "2023.10.16",
        content: "修复了汉化补丁v3中说明文件的快捷键文案错误。",
    },
    {
        time: "2023.9.25",
        content: "增加2023终极版COM3D2游戏本体整合链接，并优化相关文案，这似乎可以解决一个致命的已知漏洞。",
    },
    {
        time: "2023.9.19",
        content: "修复了“COM3D2社区_Discord”链接无法使用的问题。",
    },
    {
        time: "2023.9.11",
        content: "增加了Mod制作教程配套视频。然后要暂时要弃坑几个月。",
    },
    {
        time: "2023.9.10",
        content: "完成Mod制作教程第一期。",
    },
    {
        time: "2023.9.6",
        content: "部分文案优化完善。",
    },
    {
        time: "2023.8.27",
        content: "Mod分享栏目调整，发现国外一款高质量Mod整合包。Mod制作教程新增两章。",
    },
    {
        time: "2023.8.21",
        content: "感谢网友分享，多了两种已知漏洞以及解决方案。另外3DMMod站投稿功能确认功能可用，这下就有公共的Mod分享平台了，欧耶！",
    },
    {
        time: "2023.8.17",
        content: "更新部分文案描述，修复了缓存导致页面不更新的问题。",
    },
    {
        time: "2023.8.16",
        content: "增加“已知漏洞”分栏，增加Mod教程序章。",
    },
    {
        time: "2023.8.11",
        content: (
            <ul>
                <li>感谢群友的分享，增加了两条找资源的链接。</li>
                <li>新增了“赛马娘-米浴”的Mod一份。</li>
            </ul>
        ),
    },
    {
        time: "2023.8.9",
        content: (
            <ul>
                <li>感谢燃烛大佬的捐赠，已验证Mod增加了10个。</li>
                <li>9，10月份要备考，所以Mod制作教程可能会出的很迟。</li>
            </ul>
        ),
    },
    {
        time: "2023.8.7",
        content: (
            <ul>
                <li>成功用小号在b站重新补档，故视频换源。</li>
                <li>后续开始制作Mod教程，网站较长一段时间不会更新。</li>
            </ul>
        ),
    },
    {
        time: "2023.8.2",
        content: "使用OneDrive进行了视频补档，支持在线观看。",
    },
    {
        time: "2023.7.30",
        content: "本站的第一个教学视频，一晚上播放量破万，后遭恶意举报限流，存活时间不足一天，我记下了，后续研究解决方案，和倒狗一起互相进步。",
    },
    {
        time: "2023.7.29",
        content: "紧急修了些Bug",
    },
    {
        time: "2023.7.28",
        content: (
            <ul>
                <li>取消了v3.5汉化的开发，将其功能拆分到v3和v4中实现。</li>
                <li>网站内容优化。</li>
            </ul>
        ),
    },
    {
        time: "2023.7.27",
        content: (
            <div>
                <ul>
                    <li>发现栏增加了最新游戏和相关链接栏目。</li>
                    <li>取消了吃力不讨好的精装房计划（社区交互功能）。</li>
                </ul>
            </div>
        ),
    },
    {
        time: "2023.7.26",
        content: (
            <div>
                <ul>
                    <li>对入门分栏的内容进行了优化和补充。</li>
                    <li>发现栏增加了汉化插件项目。</li>
                </ul>
            </div>
        ),
    },
    { time: "2023.7.24", content: "毛坯房变简装房啦！" },
];
export default Log;
