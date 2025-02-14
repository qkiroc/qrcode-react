import {isQrCodeEye} from '../../utils/helper';
import {createCirclePath} from '../../utils/svgPath';

/**
 * 生成圆点路径
 */
function generateCirclePointsPath(
  modules: boolean[][],
  margin: number,
  pointSizeNumber: number,
  pointSizeRandom?: boolean
) {
  let path = '';
  for (let y = 0; y < modules.length; y++) {
    for (let x = 0; x < modules.length; x++) {
      if (modules[y][x] && !isQrCodeEye(modules, x, y)) {
        let r = (margin / 2) * pointSizeNumber;
        let cx = x * margin + r;
        let cy = y * margin + r;
        if (pointSizeRandom) {
          r = Math.random() < 0.5 ? r : Number((r / 1.3).toFixed(2));
        }

        path += createCirclePath(cx, cy, r);
      }
    }
  }
  return path;
}

export default generateCirclePointsPath;
