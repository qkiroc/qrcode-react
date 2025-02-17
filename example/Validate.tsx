import jsQR from 'jsqr';
import {QRCodeProps} from '../src/types';
import React, {useEffect} from 'react';
import QRCode from '../src';
import './css/validate.css';

export function Validate(props: QRCodeProps) {
  const {value, styleConfig, config, logoConfig} = props;
  const [error, setError] = React.useState<string | null>(null);
  useEffect(() => {
    const canvas = document.getElementsByClassName(
      'qr-canvas'
    )[0] as HTMLCanvasElement;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d')!;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    console.log(code);
    if (code?.data !== value) {
      setError('二维码可能解析失败，请尝试提高纠错级别，或调整二维码样式');
    } else {
      setError(null);
    }
  });

  return (
    <div className="validate">
      <QRCode
        value={value}
        mode={'canvas'}
        styleConfig={styleConfig}
        config={config}
        logoConfig={logoConfig}
        className="validate-qr"
      />
      {error && <div className="validate-error">{error}</div>}
    </div>
  );
}
