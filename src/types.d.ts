import {eyeMap} from './material/eyes';
import {pointsMap} from './material/points';

export type EYE_TYPES = keyof typeof eyeMap;
export type POINT_TYPES = keyof typeof pointsMap;

export type POINT_SIZE = 'xs' | 'sm' | 'default';
export type EYE_SIZE = 'xs' | 'sm' | 'default';

export interface EyeGeneratorProps {
  size: number;
  margin: number;
  borderSize: number;
  x: number;
  y: number;
}

export interface EyeFactoryProps {
  size: number;
  margin: number;
  borderSize: EYE_SIZE;
}

export interface PointGeneratorProps {
  x: number;
  y: number;
  margin: number;
  pointSize: number;
  size: number;
}

export interface PointFactoryProps {
  modules: boolean[][];
  margin: number;
  pointSize: POINT_SIZE;
  pointSizeRandom?: boolean;
}

export interface PathProps {
  eyeBorder: string;
  eyeInner: string;
  points: string;
}

interface QRCodeStyleConfig {
  size?: number;
  eyeType?: EYE_TYPES;
  eyeBorderSize?: EYE_SIZE;
  pointType?: POINT_TYPES;
  pointSize?: POINT_SIZE;
  pointSizeRandom?: boolean;
  color?: string;
  bgColor?: string;
  eyeBorderColor?: string;
  eyeInnerColor?: string;
}

interface QRCodeConfig {
  level?: ErrorCorrectionLevel;
  minVersion?: number;
  maxVersion?: number;
  mask?: number;
  boostLevel?: boolean;
}

interface QrCodeLogoConfig {
  src: string;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
}

export interface QRCodeProps {
  value: string;
  mode?: 'svg' | 'canvas';
  config?: QRCodeConfig;
  styleConfig?: QRCodeStyleConfig;
  logoConfig?: QrCodeLogoConfig;
}

export type Modules = boolean[][];
