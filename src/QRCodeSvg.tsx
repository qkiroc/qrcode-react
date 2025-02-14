import React, {useEffect} from 'react';
import {generatePath, generateQRCode} from './utils/helper';
import type {QRCodeProps} from './types';

function QRCodeSvg(props: QRCodeProps) {
  const {
    value,
    size = 200,
    eyeType,
    eyeBorderSize,
    pointType,
    pointSizeRandom,
    pointSize
  } = props;
  const [path, setPath] = React.useState<string>('');
  useEffect(() => {
    if (value) {
      const modules = generateQRCode(value);
      const path = generatePath({
        modules,
        size,
        eyeType,
        eyeBorderSize,
        pointType,
        pointSizeRandom,
        pointSize
      });
      setPath(path);
    }
  }, [
    value,
    size,
    eyeType,
    eyeBorderSize,
    pointType,
    pointSize,
    pointSizeRandom
  ]);

  return (
    <div>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <path d={path} />
      </svg>
    </div>
  );
}

export default QRCodeSvg;
