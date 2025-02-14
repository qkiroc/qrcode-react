import {isQrCodeEye} from '../../utils/helper';
import {createSquarePath} from '../../utils/svgPath';

function generateDefaultPointsPath(
  modules: boolean[][],
  margin: number,
  pointSizeNumber: number,
  pointSizeRandom?: boolean
) {
  let path = '';
  for (let y = 0; y < modules.length; y++) {
    for (let x = 0; x < modules.length; x++) {
      if (modules[y][x] && !isQrCodeEye(modules, x, y)) {
        let size = 0;
        if (pointSizeRandom) {
          size = Math.random() < 0.5 ? 0 : Number((margin / 8).toFixed(2));
        }
        path += createSquarePath(
          x * margin + size,
          y * margin + size,
          (margin - size * 2) * pointSizeNumber
        );
      }
    }
  }
  return path;
}

export default generateDefaultPointsPath;
