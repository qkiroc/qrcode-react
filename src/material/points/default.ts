import type {PointGeneratorProps} from '../../types';
import {createSquarePath} from '../../utils/svgPath';

function generateDefaultPointsPath(props: PointGeneratorProps) {
  const {x, y, dotSize, dotScale, margin} = props;
  let path = '';
  const width = dotSize * dotScale;
  path += createSquarePath(
    x * dotSize + (dotSize - width) / 2 + margin,
    y * dotSize + (dotSize - width) / 2 + margin,
    width
  );
  return path;
}

export default generateDefaultPointsPath;
