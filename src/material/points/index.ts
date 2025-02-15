import generateDefaultPointsPath from './default';
import generateCirclePointsPath from './circle';
import {isQrCodeEye} from '../../utils/helper';
import type {PointFactoryProps, PointGeneratorProps} from '../../types';

export const pointsMap = {
  default: generateDefaultPointsPath,
  circle: generateCirclePointsPath
};

function factory(generator: (props: PointGeneratorProps) => string) {
  const pointSizeMap = {
    default: 1,
    sm: 0.8,
    xs: 0.5
  };
  return (options: PointFactoryProps) => {
    const {modules, margin, pointSize, pointSizeRandom} = options;
    let path = '';

    for (let y = 0; y < modules.length; y++) {
      for (let x = 0; x < modules.length; x++) {
        if (modules[y][x] && !isQrCodeEye(modules, x, y)) {
          let size = 0;
          if (pointSizeRandom) {
            size = Math.random() < 0.5 ? 0 : Number((margin / 8).toFixed(2));
          }
          path += generator({
            x,
            y,
            margin,
            pointSize: pointSizeMap[pointSize],
            size
          });
        }
      }
    }
    return path;
  };
}

function getPoints(type: keyof typeof pointsMap) {
  const generator = pointsMap[type];
  return factory(generator);
}
export default getPoints;
