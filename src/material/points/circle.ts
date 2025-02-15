import type {PointGeneratorProps} from '../../types';
import {createCirclePath} from '../../utils/svgPath';

function generateCirclePointsPath(props: PointGeneratorProps) {
  const {x, y, margin, pointSize, size} = props;
  let path = '';
  let r = (margin / 2 - size) * pointSize;
  let cx = x * margin + (margin - r * 2) / 2 + r;
  let cy = y * margin + (margin - r * 2) / 2 + r;

  path += createCirclePath(cx, cy, r);
  return path;
}

export default generateCirclePointsPath;
