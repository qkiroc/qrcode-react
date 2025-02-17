import generateDefaultEyePath from './default';
import generateRoundedEyePath from './rounded';
import generateCircleEyePath from './circle';
import type {EyeFactoryProps, EyeGeneratorProps} from '../../types';
import {getEyeSizeAndPositions} from '../../utils/helper';

export const eyeMap = {
  default: generateDefaultEyePath,
  rounded: generateRoundedEyePath,
  circle: generateCircleEyePath
};

function factory(
  generator: (props: EyeGeneratorProps) => {eyeBorder: string; eyeInner: string}
) {
  const eyeBorderSizeMap = {
    default: 1,
    sm: 0.8,
    xs: 0.5
  };
  return (options: EyeFactoryProps) => {
    const {size, dotSize, borderSize, margin} = options;
    const {eyeSize, positions} = getEyeSizeAndPositions(size, dotSize, margin);
    let eyeBorder = '';
    let eyeInner = '';

    for (const pos of positions) {
      const {eyeBorder: border, eyeInner: inner} = generator({
        size: eyeSize,
        dotSize,
        borderSize: eyeBorderSizeMap[borderSize],
        x: pos.x,
        y: pos.y
      });
      eyeBorder += border;
      eyeInner += inner;
    }
    return {
      eyeBorder,
      eyeInner
    };
  };
}

function getEye(type: keyof typeof eyeMap) {
  const generator = eyeMap[type];
  return factory(generator);
}
export default getEye;
