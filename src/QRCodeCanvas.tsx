import React, {useEffect} from 'react';
import type {QRCodeProps} from './types';
import useQrCode from './hooks/useQrCode';

function drawLogo({
  ctx,
  size,
  bgColor,
  logoConfig
}: {
  ctx: CanvasRenderingContext2D;
  size: number;
  bgColor: string;
  logoConfig: QRCodeProps['logoConfig'];
}) {
  const {
    src,
    width = size / 5,
    height = size / 5,
    x = size / 2 - width / 2,
    y = size / 2 - height / 2
  } = logoConfig || {};
  if (!src) {
    return;
  }
  const image = new Image();
  image.src = src;
  image.onload = () => {
    ctx.fillStyle = bgColor;
    ctx.fillRect(x, y, width, height);
    const aspectRatio = image.width / image.height;
    let drawWidth = width;
    let drawHeight = height;

    if (aspectRatio > 1) {
      drawHeight = width / aspectRatio;
    } else {
      drawWidth = height * aspectRatio;
    }

    ctx.drawImage(
      image,
      x + (width - drawWidth) / 2,
      y + (height - drawHeight) / 2,
      drawWidth,
      drawHeight
    );
  };
}

/**
 * 通过path绘制canvas
 */
function drawCanvasByPath(options: {
  ctx: CanvasRenderingContext2D;
  path: any;
  styleConfig: QRCodeProps['styleConfig'];
  logoConfig: QRCodeProps['logoConfig'];
  size: number;
}) {
  const {ctx, path, styleConfig, logoConfig, size} = options;
  const {
    color = '#000',
    bgColor = '#fff',
    eyeBorderColor,
    eyeInnerColor
  } = styleConfig || {};

  // 先清空画布
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = eyeBorderColor || color;
  ctx.fill(new Path2D(path.eyeBorder));
  ctx.fillStyle = eyeInnerColor || color;
  ctx.fill(new Path2D(path.eyeInner));
  ctx.fillStyle = color;
  ctx.fill(new Path2D(path.points));

  drawLogo({ctx, size, bgColor, logoConfig});
}

function QRCodeCanvas(props: QRCodeProps) {
  const {value, config, styleConfig, logoConfig} = props;
  const {size = 200} = styleConfig || {};
  const path = useQrCode({config, styleConfig, value});
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (path && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')!;
      drawCanvasByPath({ctx, path, styleConfig, logoConfig, size});
    }
  }, [path, logoConfig, styleConfig]);

  return <canvas width={size} height={size} ref={canvasRef}></canvas>;
}

export default QRCodeCanvas;
