import type {PointGeneratorProps} from '../../types';
import {createCirclePath} from '../../utils/svgPath';

function generateCirclePointsPath(props: PointGeneratorProps) {
  const {x, y, dotSize, dotScale, margin} = props;
  let path = '';
  let r = (dotSize / 2) * dotScale;
  let cx = x * dotSize + (dotSize - r * 2) / 2 + r + margin;
  let cy = y * dotSize + (dotSize - r * 2) / 2 + r + margin;

  path += createCirclePath(cx, cy, r);
  return path;
}

export default generateCirclePointsPath;
