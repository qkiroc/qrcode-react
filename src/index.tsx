import React from 'react';
import QRCodeSvg from './QRCodeSvg';
import QRCodeCanvas from './QRCodeCanvas';
import {QRCodeProps} from './types';

function QRCode(props: QRCodeProps) {
  const {mode = 'svg'} = props;
  return (
    <div>
      {mode === 'svg' ? <QRCodeSvg {...props} /> : <QRCodeCanvas {...props} />}
    </div>
  );
}

export default QRCode;
