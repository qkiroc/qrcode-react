import type {EyeGeneratorProps} from '../../types';
import {
  createCirclePath,
  createRoundedSquareBorderPath
} from '../../utils/svgPath';

function generateRoundedEyePath(options: EyeGeneratorProps) {
  const {size, dotSize, borderSize, x, y} = options;

  const eyeBorder = createRoundedSquareBorderPath(
    x,
    y,
    size,
    dotSize * borderSize,
    dotSize
  );

  const eyeInner = createCirclePath(
    x + size / 2,
    y + size / 2,
    size / 2 - dotSize * 2
  );

  return {
    eyeBorder,
    eyeInner
  };
}

export default generateRoundedEyePath;
