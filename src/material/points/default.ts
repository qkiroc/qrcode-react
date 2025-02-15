import type {PointGeneratorProps} from '../../types';
import {createSquarePath} from '../../utils/svgPath';

function generateDefaultPointsPath(props: PointGeneratorProps) {
  const {x, y, margin, pointSize, size} = props;
  let path = '';
  const width = (margin - size * 2) * pointSize;
  path += createSquarePath(
    x * margin + (margin - width) / 2,
    y * margin + (margin - width) / 2,
    width
  );
  return path;
}

export default generateDefaultPointsPath;
