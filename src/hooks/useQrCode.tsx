import React from 'react';
import {generatePath, generateQRCode, toFixedNumber} from '../utils/helper';
import {QRCodeProps} from '../types';

export default function useQrCode(props: {
  config: QRCodeProps['config'];
  styleConfig: QRCodeProps['styleConfig'];
  logoConfig: QRCodeProps['logoConfig'];
  value: string;
}) {
  const {config, styleConfig, logoConfig, value} = props;
  const {
    size = 200,
    margin = 0,
    eyeType,
    eyeBorderSize,
    pointType,
    pointSize,
    pointSizeRandom
  } = styleConfig || {};
  const modules = React.useMemo(
    () => generateQRCode(value, config),
    [value, config]
  );

  const dotSize = React.useMemo(
    () => toFixedNumber((size - margin * 2) / modules.length),
    [modules, size, margin]
  );

  const path = React.useMemo(
    () =>
      generatePath({
        modules,
        margin,
        size,
        dotSize,
        eyeType,
        eyeBorderSize,
        pointType,
        pointSize,
        pointSizeRandom
      }),
    [modules, dotSize, styleConfig]
  );

  const logo = React.useMemo(() => {
    if (!logoConfig) {
      return undefined;
    }
    let containerSize = size - margin * 2;
    let {
      src,
      width = containerSize / 5,
      height = containerSize / 5,
      x = containerSize / 2 - width / 2 + margin,
      y = containerSize / 2 - height / 2 + margin
    } = logoConfig || {};

    const len = modules.length;
    // 计算出网格的坐标
    const list = Array.from({length: len}, (_, i) => i * dotSize + margin);

    const bgX = list[list.findIndex(v => v > x) - 2] - 0.5 || x;
    const bgY = list[list.findIndex(v => v > y) - 2] - 0.5 || y;
    const bgWidth = width + (x - bgX) * 2;
    const bgHeight = height + (y - bgY) * 2;

    return {
      src,
      width,
      height,
      x,
      y,
      bg: {
        x: bgX,
        y: bgY,
        width: bgWidth,
        height: bgHeight
      }
    };
  }, [modules, dotSize, margin, logoConfig]);

  return {logo, path};
}
