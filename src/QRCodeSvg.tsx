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

  const {path, logo} = useQrCode({config, styleConfig, logoConfig, value});
  const {src, x, y, width, height, bg} = logo || {};

  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          backgroundColor: bgColor
        }}
      >
        <g fill={color}>
          <path fill={eyeBorderColor || color} d={path.eyeBorder} />
          <path fill={eyeInnerColor || color} d={path.eyeInner} />
          <path d={path.points} />
          {src && (
            <>
              <rect
                fill={bgColor}
                x={bg?.x}
                y={bg?.y}
                width={bg?.width}
                height={bg?.height}
              />
              <image href={src} width={width} height={height} x={x} y={y} />
            </>
          )}
        </g>
      </svg>
    </div>
  );
}

export default QRCodeSvg;
