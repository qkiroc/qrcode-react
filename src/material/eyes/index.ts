import generateDefaultEyePath from './default';
import generateRoundedEyePath from './rounded';
import generateCircleEyePath from './circle';

export const eyeMap = {
  default: generateDefaultEyePath,
  rounded: generateRoundedEyePath,
  circle: generateCircleEyePath
};

function getEye(type: keyof typeof eyeMap) {
  return eyeMap[type];
}
export default getEye;
