import {eyeMap} from './material/eyes';
import {pointsMap} from './material/points';

export type EYE_TYPES = keyof typeof eyeMap;
export type POINT_TYPES = keyof typeof pointsMap;

export type POINT_SIZE = 'xs' | 'sm' | 'default';
export type EYE_SIZE = 'xs' | 'sm' | 'default';

export interface QRCodeProps {
  value: string;
  size?: number;
  eyeType?: EYE_TYPES;
  eyeBorderSize?: EYE_SIZE;
  pointType?: POINT_TYPES;
  pointSize?: POINT_SIZE;
  // 码点大小是否随机
  pointSizeRandom?: boolean;
}

export type Modules = boolean[][];
