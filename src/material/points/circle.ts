import type {PointGeneratorProps} from '../../types';
import {createCirclePath} from '../../utils/svgPath';

function generateCirclePointsPath(props: PointGeneratorProps) {
  const {x, y, dotSize, pointSize, size} = props;
  let path = '';
  let r = (dotSize / 2 - size) * pointSize;
  let cx = x * dotSize + (dotSize - r * 2) / 2 + r;
  let cy = y * dotSize + (dotSize - r * 2) / 2 + r;

  path += createCirclePath(cx, cy, r);
  return path;
}

export default generateCirclePointsPath;
