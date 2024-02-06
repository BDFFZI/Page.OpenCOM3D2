import { Collapse, CollapseProps, Typography, Space, Card } from 'antd'

const MenuItem = {
    label: "建站宗旨",
    key: "/Communication/Purpose",
    page: () => {
        return <div>
            <Typography.Title>建站宗旨</Typography.Title>

            <Typography.Paragraph>
                <blockquote>
                    为什么下东西前要加群关注？为什么非得用百度云盘？为什么一个Mod不能单独拆开来下？东西都是转载的为什么不给出处？
                </blockquote>
                我受不了这些，所以建立了本站，我希望我能最大程度的减少信息差并提供最大的自由度，这也促使我选择用以下几点约束自己的网站。
            </Typography.Paragraph>

            <Typography.Paragraph>
                <Card>
                    <Space direction="vertical">
                        <div><Typography.Text keyboard>提供直链</Typography.Text>：这里不需要加群，兑换，交易等任何多余条件，所有链接都是直取直达。</div>
                        <div><Typography.Text keyboard>标记源头</Typography.Text>：所有东西尽可能标记来源，并以源头链接为准，非必要不做中间商行为。</div>
                        <div><Typography.Text keyboard>没有捆绑</Typography.Text>：提供的资源尽可能原子化，不绑定下载软件，密码，多余文件等，简单干净不臃肿。</div>
                        <div><Typography.Text keyboard>无信息差</Typography.Text>：分享教程或整合资源应与编写论文相同，要尽可能记录出处，使其有迹可循，以便举一反三。</div>
                    </Space>
                </Card>
            </Typography.Paragraph>

            <Typography.Paragraph>
                {/* 原本我的终极目标是希望建立一个github版的zod论坛，但那是不可能的，这个网站终究只是一个个人网站，一个寿命短暂的网站。 */}
            </Typography.Paragraph>
        </div>
    }
}

export default MenuItem;