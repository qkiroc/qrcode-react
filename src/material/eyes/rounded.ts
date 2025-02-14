import {getSizeAndPositions} from '../../utils/helper';
import {
  createCirclePath,
  createRoundedSquareBorderPath
} from '../../utils/svgPath';

function generateRoundedEyePath(
  size: number,
  margin: number,
  eyeBorderSizeNumber: number
) {
  const {eyeBorderSize, positions} = getSizeAndPositions(size, margin);

  let path = '';
  for (const pos of positions) {
    // 绘制边框
    path += createRoundedSquareBorderPath(
      pos.x,
      pos.y,
      eyeBorderSize,
      margin * eyeBorderSizeNumber,
      margin
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

export default generateRoundedEyePath;
