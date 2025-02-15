import type {EyeGeneratorProps} from '../../types';
import {
  createCirclePath,
  createRoundedSquareBorderPath
} from '../../utils/svgPath';

function generateRoundedEyePath(options: EyeGeneratorProps) {
  const {size, margin, borderSize, x, y} = options;

  const eyeBorder = createRoundedSquareBorderPath(
    x,
    y,
    size,
    margin * borderSize,
    margin
  );

  const eyeInner = createCirclePath(
    x + size / 2,
    y + size / 2,
    size / 2 - margin * 2
  );

  return {
    eyeBorder,
    eyeInner
  };
}

export default generateRoundedEyePath;
