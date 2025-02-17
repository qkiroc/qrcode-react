import React, {useEffect} from 'react';
import type {QRCodeProps} from './types';
import useQrCode from './hooks/useQrCode';

function drawLogo({
  ctx,
  bgColor = '#fff',
  logo
}: {
  ctx: CanvasRenderingContext2D;
  bgColor?: string;
  logo: {
    src: string;
    width: number;
    height: number;
    x: number;
    y: number;
    bg: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  };
}) {
  const {src, width, height, x, y, bg} = logo || {};
  if (!src) {
    return;
  }
  const image = new Image();
  image.src = src;
  image.onload = () => {
    ctx.fillStyle = bgColor;
    ctx.fillRect(bg.x, bg.y, bg.width, bg.height);
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
  size: number;
}) {
  const {ctx, path, styleConfig} = options;
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
}

function QRCodeCanvas(props: QRCodeProps) {
  const {value, config, styleConfig, logoConfig} = props;
  const {size = 200, bgColor} = styleConfig || {};
  const {path, logo} = useQrCode({config, styleConfig, logoConfig, value});
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (path && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')!;
      drawCanvasByPath({ctx, path, styleConfig, size});
      logo && drawLogo({ctx, bgColor, logo});
    }
  }, [path, logoConfig, styleConfig]);

  return (
    <canvas
      width={size}
      height={size}
      ref={canvasRef}
      className="qr-canvas"
    ></canvas>
  );
}

export default QRCodeCanvas;
