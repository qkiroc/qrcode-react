import type {EyeGeneratorProps} from '../../types';
import {createSquareBorderPath, createSquarePath} from '../../utils/svgPath';

function generateDefaultEyePath(options: EyeGeneratorProps) {
  const {size, dotSize, borderSize, x, y} = options;

  const eyeBorder = createSquareBorderPath(x, y, size, dotSize * borderSize);

  const eyeInner = createSquarePath(
    x + dotSize * 2,
    y + dotSize * 2,
    size - dotSize * 4
  );
  return {
    eyeBorder,
    eyeInner
  };
}

export default generateDefaultEyePath;
