import React from 'react';
import type {QRCodeProps} from './types';
import useQrCode from './hooks/useQrCode';

function QRCodeSvg(props: QRCodeProps) {
  const {value, config, styleConfig, logoConfig} = props;
  const {
    size = 200,
    margin = 0,
    color = '#000',
    bgColor = '#fff',
    eyeBorderColor,
    eyeInnerColor
  } = styleConfig || {};
  const {
    src,
    width = size / 5,
    height = size / 5,
    x = size / 2 - width / 2,
    y = size / 2 - height / 2
  } = logoConfig || {};

  const path = useQrCode({config, styleConfig, value});

  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size + margin} ${size + margin}`}
        style={{
          backgroundColor: bgColor
        }}
      >
        <g fill={color} transform={`translate(${margin / 2}, ${margin / 2})`}>
          <path fill={eyeBorderColor || color} d={path.eyeBorder} />
          <path fill={eyeInnerColor || color} d={path.eyeInner} />
          <path d={path.points} />
          {src && (
            <>
              <rect fill={bgColor} x={x} y={y} width={width} height={height} />
              <image href={src} width={width} height={height} x={x} y={y} />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}

export default QRCodeSvg;
