import React from 'react';
import {generatePath, generateQRCode} from '../utils/helper';
import {QRCodeProps} from '../types';

export default function useQrCode(props: {
  config: QRCodeProps['config'];
  styleConfig: QRCodeProps['styleConfig'];
  value: string;
}) {
  const {config, styleConfig, value} = props;
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

  const path = React.useMemo(
    () =>
      generatePath({
        modules,
        margin,
        size,
        eyeType,
        eyeBorderSize,
        pointType,
        pointSize,
        pointSizeRandom
      }),
    [modules, styleConfig]
  );

  return path;
}
