import {getSizeAndPositions} from '../../utils/helper';
import {createSquareBorderPath, createSquarePath} from '../../utils/svgPath';

function generateDefaultEyePath(
  size: number,
  margin: number,
  eyeBorderSizeNumber: number
) {
  const {eyeBorderSize, positions} = getSizeAndPositions(size, margin);

  let path = '';
  for (const pos of positions) {
    // 绘制边框
    path += createSquareBorderPath(
      pos.x,
      pos.y,
      eyeBorderSize,
      margin * eyeBorderSizeNumber
    );
    // 绘制内部
    path += createSquarePath(
      pos.x + margin * 2,
      pos.y + margin * 2,
      eyeBorderSize - margin * 4
    );
  }
  return path;
}

export default generateDefaultEyePath;
