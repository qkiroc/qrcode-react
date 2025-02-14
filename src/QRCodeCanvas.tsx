import React, {useEffect} from 'react';
import {generateQRCode} from './utils/helper';
import type {QRCodeProps} from './types';

function QRCodeCanvas(props: QRCodeProps) {
  const {value, size} = props;

  const [modules, setModules] = React.useState<boolean[][]>([]);

  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (value) {
      const modules = generateQRCode(value);
      setModules(modules);
    }
  }, [value]);

  return <canvas width={size} height={size} ref={canvasRef}></canvas>;
}

export default QRCodeCanvas;
