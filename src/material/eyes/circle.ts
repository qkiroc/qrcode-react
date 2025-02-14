import {getSizeAndPositions} from '../../utils/helper';
import {
  createCirclePath,
  createRingPath,
  createRoundedSquareBorderPath
} from '../../utils/svgPath';

function generateCircleEyePath(
  size: number,
  margin: number,
  eyeBorderSizeNumber: number
) {
  const {eyeBorderSize, positions} = getSizeAndPositions(size, margin);

  let path = '';
  for (const pos of positions) {
    // 绘制边框
    path += createRingPath(
      pos.x + eyeBorderSize / 2,
      pos.y + eyeBorderSize / 2,
      eyeBorderSize / 2,
      margin * eyeBorderSizeNumber
    );
    // 绘制内部;
    path += createCirclePath(
      pos.x + eyeBorderSize / 2,
      pos.y + eyeBorderSize / 2,
      eyeBorderSize / 2 - margin * 2
    );
  }

  return path;
}

export default generateCircleEyePath;
