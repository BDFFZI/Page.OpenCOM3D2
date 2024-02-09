import { Alert, Card, Divider, Space, Typography } from "antd";

const MenuItem = {
  label: "Mod制作",
  key: "/Research/MakeMod",
  page: () => (
    <Typography.Paragraph>
      <Space direction="vertical">
        <Alert type="info" showIcon message="这个是教程不是WIKI，只会讲述教程中用到部分功能，更完整深入的资料请查询WIKI。"></Alert>
        <Card title="入门">
          <blockquote>搞定动漫角色最重要的特征点，让别人看了能直呼老婆！</blockquote>
          <Card title="文字教程" type="inner">
            <Space direction="vertical">
              <Typography.Link href="https://bdffzi.gitee.io/page.blog/posts/2633666094.html" target="_blank">
                【COM3D2Mod 制作教程（1）】教程简介（含前置要求，必读！！！）
              </Typography.Link>
              <Typography.Link href="https://bdffzi.gitee.io/page.blog/posts/4079335571.html" target="_blank">
                【COM3D2Mod 制作教程（2）】Mod 底层原理
              </Typography.Link>
              <Typography.Link href="https://bdffzi.gitee.io/page.blog/posts/41755669.html" target="_blank">
                【COM3D2Mod 制作教程（3）】Mod 制作概要
              </Typography.Link>
              <Typography.Link href="https://bdffzi.gitee.io/page.blog/posts/2178139815.html" target="_blank">
                【COM3D2Mod 制作教程（4）】实战！制作身体部分（上）
              </Typography.Link>
              <Typography.Link href="https://bdffzi.gitee.io/page.blog/posts/4213549019.html" target="_blank">
                【COM3D2Mod 制作教程（5）】实战！制作身体部分（中）
              </Typography.Link>
              <Typography.Link href="https://bdffzi.gitee.io/page.blog/posts/3074968628.html" target="_blank">
                【COM3D2Mod 制作教程（6）】实战！制作身体部分（下）
              </Typography.Link>
            </Space>
          </Card>
          <Card title="配套视频" type="inner">
            <Space direction="vertical">
              <Typography.Link href="https://www.bilibili.com/video/BV148411i7uy/" target="_blank">
                【COM3D2】Mod制作教程（一）基础知识与工具准备（第1章~第4章内容）
              </Typography.Link>
              <Typography.Link href="https://www.bilibili.com/video/BV1w8411z7ee/" target="_blank">
                【COM3D2】Mod制作教程（二）制作第一个帽子Mod（第5章内容）
              </Typography.Link>
              <Typography.Link href="https://www.bilibili.com/video/BV1MV411P7Q2/" target="_blank">
                【COM3D2】Mod制作教程（三）制作剩余的头发和眼睛（第6章内容）
              </Typography.Link>
            </Space>
          </Card>
        </Card>
        <Divider dashed></Divider>
        <Card title="进阶">
          <blockquote>让老婆能穿上自己的原设衣装，让别人看了能直呼大佬！</blockquote>
          <Card title="文字教程" type="inner">
            <Space direction="vertical">
              <Typography.Link href="https://bdffzi.gitee.io/page.blog/posts/4186352253.html" target="_blank">
                【COM3D2Mod 制作教程（7）】实战！制作衣服部分（上）
              </Typography.Link>
              <Typography.Link href="https://bdffzi.gitee.io/page.blog/posts/440186531.html" target="_blank">
                【COM3D2Mod 制作教程（8）】实战！制作衣服部分（下）
              </Typography.Link>
            </Space>
          </Card>
          <Card title="配套视频" type="inner">
            <Space direction="vertical">
              <Typography.Link href="https://www.bilibili.com/video/BV16m411Q7r5/" target="_blank">
                【COM3D2】Mod制作教程（四）制作第一件裙子Mod（第7章内容）
              </Typography.Link>
              <Typography.Link href="https://www.bilibili.com/video/BV1fJ4m147EH/" target="_blank">
                【COM3D2】Mod制作教程（五）制作剩下的袜子和鞋子（第8章内容）
              </Typography.Link>
            </Space>
          </Card>
        </Card>
      </Space>
    </Typography.Paragraph>
  ),
};
export default MenuItem;
