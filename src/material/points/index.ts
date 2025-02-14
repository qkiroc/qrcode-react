import generateDefaultPointsPath from './default';
import generateCirclePointsPath from './circle';

export const pointsMap = {
  default: generateDefaultPointsPath,
  circle: generateCirclePointsPath
};

function getPoints(type: keyof typeof pointsMap) {
  return pointsMap[type];
}
export default getPoints;
