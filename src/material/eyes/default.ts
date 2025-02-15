import type {EyeGeneratorProps} from '../../types';
import {createSquareBorderPath, createSquarePath} from '../../utils/svgPath';

function generateDefaultEyePath(options: EyeGeneratorProps) {
  const {size, margin, borderSize, x, y} = options;

  const eyeBorder = createSquareBorderPath(x, y, size, margin * borderSize);

  const eyeInner = createSquarePath(
    x + margin * 2,
    y + margin * 2,
    size - margin * 4
  );
  return {
    eyeBorder,
    eyeInner
  };
}

export default generateDefaultEyePath;
