import { Alert, Button, Typography } from "antd";
import { ButtonLink } from "../../Data/Components";
import Links from "../../Data/Links";

const MenuItem = {
    label: <Typography.Text type="success">新人必读</Typography.Text>,
    key: "/Introduction/ReadMe",
    page: () => <div>
        <Typography.Title>入门前的说明</Typography.Title>
        <Typography.Paragraph>
            本站是一个说明书式的网站，用于记录我在这条游戏路上遇上的坑坑绕绕。
            <br></br>
            作为一个新人，当前的“入门”栏目是你必读的内容，它将引导你获取游玩本游戏所有基本知识。
            <br></br>
            此外针对本栏目我专门出了期视频教程，通过手把手实操的方式教学使用本栏目，建议小白配合使用。
        </Typography.Paragraph>
        <Alert showIcon type="warning"
            message="必须要注意的几点"
            description={
                <ol>
                    <li>请务必确保认真阅读文章中的每个内容，绝大部分坑点或建议在文章中都有注明。</li>
                    <li>小白玩家请严格按照视频和文章中的内容进行，可以说目前99%的问题都是自己误操作造成的。</li>
                    <li>如果确实遵守了上述要求但依旧遇上问题，请查看同栏目的<Typography.Text type="danger">常见问题</Typography.Text>板块，并按照指引查看或发布Issue。</li>
                </ol>
            }
        />
        <Typography.Title>开始入门</Typography.Title>
        <Typography.Paragraph>
            <div>
                本站是一个完整的网站，不需要任何多余的操作比如依赖特定软件，加群等，你完全可以仅借助本站就满足对游戏的基本需求。
                <br />
                那接下来，就请按顺序阅读入门专栏中的余下几篇文章，这样你就能踏出第一步，完成COM3D2游戏的基本入门操作了。
            </div>
        </Typography.Paragraph>
        <Alert showIcon type="success"
            message={
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    我已制作COM3D2的入门教程，辅助你阅读余下的文章，这样即使是小白也不用太担心了。
                    <Button type="primary" href="https://www.bilibili.com/video/BV1yp4y1V7Ej" target="_Black" >观看视频</Button>
                </div>
            }
        />
    </div>

}
export default MenuItem;