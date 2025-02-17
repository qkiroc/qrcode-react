import React from 'react';
import QRCodeSvg from './QRCodeSvg';
import QRCodeCanvas from './QRCodeCanvas';
import {QRCodeProps} from './types';

function QRCode(props: QRCodeProps) {
  const {mode = 'canvas'} = props;
  return mode === 'svg' ? (
    <QRCodeSvg {...props} />
  ) : (
    <QRCodeCanvas {...props} />
  );
}

export default QRCode;
