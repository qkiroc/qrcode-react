/**
 * 绘制圆形路径
 * @param x 圆心x坐标
 * @param y 圆心y坐标
 * @param r 半径
 * @returns d属性值
 */
import {toFixedNumber} from './helper';

export function createCirclePath(x: number, y: number, r: number): string {
  r = toFixedNumber(r);
  return `M ${toFixedNumber(x - r)}, ${toFixedNumber(y)} a ${r},${r} 0 1,0 ${
    2 * r
  },0 a ${r},${r} 0 1,0 ${-2 * r},0`;
}

/**
 * 绘制正方形路径
 * @param x 起始点x坐标
 * @param y 起始点y坐标
 * @param size 边长
 * @returns d属性值
 */
export function createSquarePath(x: number, y: number, size: number): string {
  x = toFixedNumber(x);
  y = toFixedNumber(y);
  const xSize = toFixedNumber(x + size);
  const ySize = toFixedNumber(y + size);
  return `M ${x}, ${y} L ${xSize}, ${y} L ${xSize}, ${ySize} L ${x}, ${ySize} Z `;
}

/**
 * 绘制圆角正方形路径
 * @param x 起始点x坐标
 * @param y 起始点y坐标
 * @param size 边长
 * @param radius 圆角半径
 * @returns d属性值
 */

export function createRoundedSquarePath(
  x: number,
  y: number,
  size: number,
  radius: number
): string {
  x = toFixedNumber(x);
  y = toFixedNumber(y);
  radius = toFixedNumber(radius);
  const xRadius = toFixedNumber(x + radius);
  const xRadiusSize = toFixedNumber(x + size - radius);
  const yRadius = toFixedNumber(y + radius);
  const yRadiusSize = toFixedNumber(y + size - radius);
  const xSize = toFixedNumber(x + size);
  const ySize = toFixedNumber(y + size);
  return `M${xRadius} ${y}L${xRadiusSize} ${y}A${radius} ${radius} 0 0 1 ${xSize} ${yRadius}L${xSize} ${yRadiusSize}A${radius} ${radius} 0 0 1 ${xRadiusSize} ${ySize}L${xRadius} ${ySize}A${radius} ${radius} 0 0 1 ${x} ${yRadiusSize}L${x} ${yRadius}A${radius} ${radius} 0 0 1 ${xRadius} ${y} Z`;
}

/**
 * 绘制正方形边框路径
 * @param x 起始点x坐标
 * @param y 起始点y坐标
 * @param size 边长
 * @param borderWidth 边框宽度
 * @returns d属性值
 */
export function createSquareBorderPath(
  x: number,
  y: number,
  size: number,
  borderWidth: number
): string {
  x = toFixedNumber(x);
  y = toFixedNumber(y);
  const xBorder = toFixedNumber(x + borderWidth);
  const yBorder = toFixedNumber(y + borderWidth);
  const xBorderSize = toFixedNumber(x + size - borderWidth);
  const yBorderSize = toFixedNumber(y + size - borderWidth);
  const xSize = toFixedNumber(x + size);
  const ySize = toFixedNumber(y + size);
  return `M${xBorder} ${y}L${xSize} ${y}L${xSize} ${ySize}L${x} ${ySize}L${x} ${y}L${xBorder} ${y}L${xBorder} ${yBorderSize}L${xBorderSize} ${yBorderSize}L${xBorderSize} ${yBorder}L${xBorder} ${yBorder}Z `;
}

/**
 * 绘制圆角正方形路径
 * @param x 起始点x坐标
 * @param y 起始点y坐标
 * @param size 边长
 * @param borderWidth 边框宽度
 * @param radius 圆角半径
 * @returns d属性值
 */

export function createRoundedSquareBorderPath(
  x: number,
  y: number,
  size: number,
  borderWidth: number,
  radius: number
): string {
  x = toFixedNumber(x);
  y = toFixedNumber(y);
  radius = toFixedNumber(radius);
  const xRadius = toFixedNumber(x + radius);
  const xRadiusSize = toFixedNumber(x + size - radius);
  const yRadius = toFixedNumber(y + radius);
  const yRadiusSize = toFixedNumber(y + size - radius);
  const xBorder = toFixedNumber(x + borderWidth);
  const yBorder = toFixedNumber(y + borderWidth);
  const xBorderSize = toFixedNumber(x + size - borderWidth);
  const yBorderSize = toFixedNumber(y + size - borderWidth);
  const xSize = toFixedNumber(x + size);
  const ySize = toFixedNumber(y + size);
  const innerRadius = toFixedNumber(radius - borderWidth / 2);
  const xBorderInnerRadius = toFixedNumber(xBorder + innerRadius);
  const yBorderInnerRadius = toFixedNumber(yBorder + innerRadius);
  const xBorderSizeInnerRadius = toFixedNumber(xBorderSize - innerRadius);
  const yBorderSizeInnerRadius = toFixedNumber(yBorderSize - innerRadius);
  const xRadiusInnerRadius = toFixedNumber(xRadius + innerRadius);

  return `M${xRadius} ${y}L${xRadiusSize} ${y}A${radius} ${radius} 0 0 1 ${xSize} ${yRadius}L${xSize} ${yRadiusSize}A${radius} ${radius} 0 0 1 ${xRadiusSize} ${ySize}L${xRadius} ${ySize}A${radius} ${radius} 0 0 1 ${x} ${yRadiusSize}L${x} ${yRadius}A${radius} ${radius} 0 0 1 ${xRadius} ${y}L${xRadius} ${y}L${xRadiusInnerRadius} ${yBorderSize}L${xBorderSizeInnerRadius} ${yBorderSize}A${innerRadius} ${innerRadius} 0 0 0 ${xBorderSize} ${yBorderSizeInnerRadius}L${xBorderSize} ${yBorderInnerRadius}A${innerRadius} ${innerRadius} 0 0 0 ${xBorderSizeInnerRadius} ${yBorder}L${xBorderInnerRadius} ${yBorder}A${innerRadius} ${innerRadius} 0 0 0 ${xBorder} ${yBorderInnerRadius}L${xBorder} ${yBorderSizeInnerRadius}A${innerRadius} ${innerRadius} 0 0 0 ${xBorderInnerRadius} ${yBorderSize}L${xRadiusInnerRadius} ${yBorderSize}Z`;
}

/**
 * 绘制圆环路径
 * @param x 圆心x坐标
 * @param y 圆心y坐标
 * @param r 半径
 * @param w 圆环宽度
 * @returns d属性值
 */
export function createRingPath(
  x: number,
  y: number,
  r: number,
  w: number
): string {
  const outerRadius = toFixedNumber(r);
  const innerRadius = toFixedNumber(r - w);
  y = toFixedNumber(y);
  x = toFixedNumber(x);
  const yOuterRadius = toFixedNumber(y - outerRadius);
  const yInnerRadius = toFixedNumber(y - innerRadius);
  const ySize = toFixedNumber(y + outerRadius);
  const yInnerSize = toFixedNumber(y + innerRadius);
  return `M${x},${yOuterRadius} A${outerRadius},${outerRadius} 0 1,1 ${x},${ySize} A${outerRadius},${outerRadius} 0 1,1 ${x},${yOuterRadius} M${x},${yInnerRadius} A${innerRadius},${innerRadius} 0 1,0 ${x},${yInnerSize} A${innerRadius},${innerRadius} 0 1,0 ${x},${yInnerRadius} Z`;
}
