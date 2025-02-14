import getEye from '../material/eyes';
import generateDefaultEyePath from '../material/eyes/default';
import getPoints from '../material/points';
import generateDefaultPointsPath from '../material/points/default';
import qrcodegen from '../third-party/qrcodegen';
import {EYE_SIZE, EYE_TYPES, POINT_SIZE, POINT_TYPES} from '../types';
const QRC = qrcodegen.QrCode;

type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

type ERROR_LEVEL_TYPE = {
  [index in ErrorCorrectionLevel]: qrcodegen.QrCode.Ecc;
};

const ERROR_LEVEL_MAP: ERROR_LEVEL_TYPE = {
  L: qrcodegen.QrCode.Ecc.LOW,
  M: qrcodegen.QrCode.Ecc.MEDIUM,
  Q: qrcodegen.QrCode.Ecc.QUARTILE,
  H: qrcodegen.QrCode.Ecc.HIGH
} as const;

/**
 * 根据提供的值和选项生成二维码。
 *
 * @param value - 要编码到二维码中的字符串值。
 * @param options - 生成二维码的选项。
 * @param options.level - 纠错级别（'L'，'M'，'Q'，'H'）。
 * @param options.minVersion - 二维码的最小版本。
 * @param options.maxVersion - 二维码的最大版本。
 * @param options.mask - 要使用的掩码模式。
 * @param options.boostLevel - 是否提升纠错级别。
 * @returns 表示二维码模块的二维布尔数组。
 */
export function generateQRCode(
  value: string,
  options?: {
    level?: ErrorCorrectionLevel;
    minVersion?: number;
    maxVersion?: number;
    mask?: number;
    boostLevel?: boolean;
  }
) {
  const {
    level = 'L',
    minVersion = 1,
    maxVersion,
    mask,
    boostLevel
  } = options || {};
  const segs = qrcodegen.QrSegment.makeSegments(value);
  const qr = QRC.encodeSegments(
    segs,
    ERROR_LEVEL_MAP[level],
    minVersion,
    maxVersion,
    mask,
    boostLevel
  );
  const modules: boolean[][] = [];

  for (let y = 0; y < qr.size; y++) {
    modules.push([]);
    for (let x = 0; x < qr.size; x++) {
      modules[y].push(qr.getModule(x, y));
    }
  }
  return modules;
}

/**
 * 获取码眼的大小和位置。
 *
 * @param size - 二维码的大小。
 * @param margin - 码眼的边距。
 * @returns 码眼的大小和位置。
 */
export function getSizeAndPositions(size: number, margin: number) {
  const eyeBorderSize = margin * 7;
  const positions = [
    {x: 0, y: 0},
    {x: 0, y: size - eyeBorderSize},
    {x: size - eyeBorderSize, y: 0}
  ];
  return {
    eyeBorderSize,
    positions
  };
}

/**
 * 判断是否是码眼
 * @param modules
 * @param x
 * @param y
 */
export function isQrCodeEye(modules: boolean[][], x: number, y: number) {
  const size = modules.length;
  const margin = 8;
  return (
    (x < margin && y < margin) ||
    (x < margin && y > size - margin) ||
    (x > size - margin && y < margin)
  );
}

/**
 * 根据提供的二维码矩阵生成路径。
 * @param modules
 * @param size
 * @returns 返回路径
 */
export function generatePath(options: {
  modules: boolean[][];
  size: number;
  eyeType?: EYE_TYPES;
  eyeBorderSize?: EYE_SIZE;
  pointType?: POINT_TYPES;
  pointSizeRandom?: boolean;
  pointSize?: POINT_SIZE;
}) {
  const {
    modules,
    size,
    eyeType = 'default',
    eyeBorderSize = 'default',
    pointType = 'default',
    pointSizeRandom,
    pointSize = 'default'
  } = options;
  let path = '';
  const margin = Number((size / modules.length).toFixed(2));
  const pointSizeNumber = {
    default: 1,
    sm: 0.8,
    xs: 0.5
  }[pointSize];

  const eyeBorderSizeNumber = {
    default: 1,
    sm: 0.8,
    xs: 0.5
  }[eyeBorderSize];

  path += getPoints(pointType)(
    modules,
    margin,
    pointSizeNumber,
    pointSizeRandom
  );
  path += getEye(eyeType)(size, margin, eyeBorderSizeNumber);

  return path;
}

export function toFixedNumber(num: number, decimalPlaces = 2) {
  return (
    Math.round(num * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces)
  );
}
