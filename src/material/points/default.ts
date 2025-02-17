import type {PointGeneratorProps} from '../../types';
import {createSquarePath} from '../../utils/svgPath';

function generateDefaultPointsPath(props: PointGeneratorProps) {
  const {x, y, dotSize, pointSize, size, margin} = props;
  let path = '';
  const width = (dotSize - size * 2) * pointSize;
  path += createSquarePath(
    x * dotSize + (dotSize - width) / 2 + margin,
    y * dotSize + (dotSize - width) / 2 + margin,
    width
  );
  return path;
}

export default generateDefaultPointsPath;
