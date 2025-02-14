import React, {useEffect} from 'react';
import QRCodeSvg from './QRCodeSvg';
import {QRCodeProps} from './types';

function QRCode(props: QRCodeProps) {
  return (
    <div>
      <QRCodeSvg {...props} />
    </div>
  );
}

export default QRCode;
