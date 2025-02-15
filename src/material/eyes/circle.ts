import type {EyeGeneratorProps} from '../../types';
import {createCirclePath, createRingPath} from '../../utils/svgPath';

function generateCircleEyePath(options: EyeGeneratorProps) {
  const {size, margin, borderSize, x, y} = options;

  const eyeBorder = createRingPath(
    x + size / 2,
    y + size / 2,
    size / 2,
    margin * borderSize
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

export default generateCircleEyePath;
