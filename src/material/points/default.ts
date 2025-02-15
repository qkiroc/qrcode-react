import type {PointGeneratorProps} from '../../types';
import {createSquarePath} from '../../utils/svgPath';

function generateDefaultPointsPath(props: PointGeneratorProps) {
  const {x, y, dotSize, pointSize, size} = props;
  let path = '';
  const width = (dotSize - size * 2) * pointSize;
  path += createSquarePath(
    x * dotSize + (dotSize - width) / 2,
    y * dotSize + (dotSize - width) / 2,
    width
  );
  return path;
}

export default generateDefaultPointsPath;
