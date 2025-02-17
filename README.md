# 二维码生成器

一款基于 react 的二维码生成器

demo 试用地址：https://qkiroc.github.io/qrcode-react/

# 安装

```bash
npm install qrcode-react-next
```

# 使用示例

```js
import {QRCode} from 'qrcode-react-next';

function component() {
  return <QRCode value="test" />;
}
```

# 配置说明

| 参数        | 类型              | 默认值 | 是否必填 | 说明                                         |
| ----------- | ----------------- | ------ | -------- | -------------------------------------------- |
| value       | string            | -       | 是       | 二维码的内容                                 |
| mode        | 'svg' \| 'canvas' | 'canvas'| 否       | 二维码的渲染模式                             |
| config      | QRCodeConfig      | -       | 否       | 二维码的配置，包括纠错级别、版本等           |
| styleConfig | QRCodeStyleConfig | -       | 否       | 二维码的样式配置，包括大小、颜色、边距等     |
| logoConfig  | QrCodeLogoConfig  | -       | 否       | 二维码中间的 logo 配置，包括图片路径、宽高等 |
| className   | string            | -       | 否       | 自定义样式类名                               |

## QRCodeConfig 配置说明

| 参数       | 类型               | 默认值 | 是否必填 | 说明             |
| ---------- | ------------------ | ------ | -------- | ---------------- |
| level      | 'L'\|'M'\|'Q'\|'H' | 'L'    | 否       | 纠错级别         |
| minVersion | number             | 1      | 否       | 最小版本         |
| maxVersion | number             | 40     | 否       | 最大版本         |
| mask       | number             | -      | 否       | 掩码模式（-1~7） |
| boostLevel | boolean            | false  | 否       | 是否提升纠错级别 |

## QRCodeStyleConfig 配置说明

| 参数            | 类型                              | 默认值    | 是否必填 | 说明               |
| --------------- | --------------------------------- | --------- | -------- | ------------------ |
| size            | number                            | 200       | 否       | 二维码的大小       |
| margin          | number                            | 4         | 否       | 二维码的边距       |
| color           | string                            | '#000000' | 否       | 二维码的颜色       |
| bgColor         | string                            | '#FFFFFF' | 否       | 二维码的背景颜色   |
| eyeType         | 'default'\| 'rounded' \| 'circle' | 'default' | 否       | 码眼的类型         |
| eyeBorderSize   | 'default' \| 'sm' \| 'xs'         | 'default' | 否       | 码眼边框的大小 |
| eyeBorderColor  | string                            | -         | 否       | 码眼边框的颜色     |
| eyeInnerColor   | string                            | -         | 否       | 码眼内部的颜色     |
| pointType       | 'default' \| 'circle'             | 'default' | 否       | 码点的类型         |
| pointSize       | 'default' \| 'sm' \| 'xs'         | 'default' | 否       | 码点的大小         |
| pointSizeRandom | boolean                           | false     | 否       | 码点的大小是否随机 |

## QrCodeLogoConfig 配置说明

| 参数   | 类型   | 默认值           | 是否必填 | 说明               |
| ------ | ------ | ---------------- | -------- | ------------------ |
| src    | string | -                | 是       | logo 图片的路径    |
| width  | number | 二维码大小的 1/5 | 否       | logo 图片的宽度    |
| height | number | 二维码大小的 1/5 | 否       | logo 图片的高度    |
| x      | number | 居中             | 否       | logo 图片的 x 坐标 |
| y      | number | 居中             | 否       | logo 图片的 y 坐标 |
