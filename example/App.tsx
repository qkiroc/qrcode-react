import React from 'react';
import '../src/QRCode';
import {QRCode} from '../src/index';
import type {QRCodeProps} from '../src/types';
import InputImage from './components/InputImage';
import {Validate} from './Validate';

const initialState: QRCodeProps = {
  value: 'https://qkiroc.github.io/qrcode-react/',
  mode: 'svg',
  config: {
    level: 'L',
    minVersion: 2,
    maxVersion: 40,
    mask: 0,
    boostLevel: false
  },
  styleConfig: {
    size: 200,
    margin: 10,
    pointType: 'default',
    pointSize: 'default',
    pointSizeRandom: false,
    eyeType: 'default',
    eyeBorderSize: 'default',
    color: '#000000',
    bgColor: '#ffffff',
    eyeBorderColor: '',
    eyeInnerColor: ''
  },
  logoConfig: {
    src: ''
  }
};

const reducer = (
  state: typeof initialState,
  action: {
    [key: string]: any;
  }
) => {
  const types = action.type.split('.');
  const value = action.payload;
  switch (types[0]) {
    case 'value':
      return {...state, value: value};
    case 'mode':
      return {
        ...state,
        mode: value
      };
    case 'config':
      return {
        ...state,
        config: {
          ...state.config,
          [types[1]]: value
        }
      };
    case 'styleConfig':
      return {
        ...state,
        styleConfig: {
          ...state.styleConfig,
          [types[1]]: value
        }
      };
    case 'logoConfig':
      return {
        ...state,
        logoConfig: {
          ...state.logoConfig,
          src: state.logoConfig!.src,
          [types[1]]: value
        }
      };
    default:
      return state;
  }
};

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const {value, mode, styleConfig, config, logoConfig} = state;

  return (
    <div className="app">
      <div className="app-header">
        <div className="app-header-title">二维码生成器</div>
        <div className="app-header-link">
          <a
            href="https://github.com/qkiroc/qrcode-react/tree/master"
            target="_blank"
          >
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                fill="#000"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="container-left">
          <div className="form-title">基础配置</div>
          <div className="form-item">
            <label>内容</label>
            <input
              type="text"
              value={value}
              onChange={e => dispatch({type: 'value', payload: e.target.value})}
            />
          </div>
          <div className="form-item">
            <label>模式</label>
            <select
              value={state.mode}
              onChange={e => dispatch({type: 'mode', payload: e.target.value})}
            >
              <option value="svg">SVG</option>
              <option value="canvas">Canvas</option>
            </select>
          </div>
          <div className="form-item">
            <label>纠错级别</label>
            <select
              value={config?.level}
              onChange={e =>
                dispatch({type: 'config.level', payload: e.target.value})
              }
            >
              <option value="L">L</option>
              <option value="M">M</option>
              <option value="Q">Q</option>
              <option value="H">H</option>
            </select>
          </div>
          <div className="form-item">
            <label>最小版本</label>
            <input
              type="number"
              min={1}
              max={40}
              value={config?.minVersion}
              onChange={e =>
                dispatch({
                  type: 'config.minVersion',
                  payload: Number(e.target.value)
                })
              }
            />
          </div>
          <div className="form-item">
            <label>最大版本</label>
            <input
              type="number"
              min={1}
              max={40}
              value={config?.maxVersion}
              onChange={e =>
                dispatch({
                  type: 'config.maxVersion',
                  payload: Number(e.target.value)
                })
              }
            />
          </div>
          <div className="form-item">
            <label>掩码</label>
            <input
              type="number"
              min={-1}
              max={7}
              value={config?.mask}
              onChange={e =>
                dispatch({type: 'config.mask', payload: Number(e.target.value)})
              }
            />
          </div>
          <div className="form-item">
            <label>提升级别</label>
            <input
              type="checkbox"
              checked={config?.boostLevel}
              onChange={e =>
                dispatch({
                  type: 'config.boostLevel',
                  payload: e.target.checked
                })
              }
            />
          </div>
          <div className="form-title">样式配置</div>
          <div className="form-item">
            <label>尺寸</label>
            <input
              type="number"
              value={styleConfig?.size}
              onChange={e =>
                dispatch({
                  type: 'styleConfig.size',
                  payload: Number(e.target.value)
                })
              }
            />
          </div>
          <div className="form-item">
            <label>码颜色</label>
            <input
              type="color"
              value={styleConfig?.color}
              onChange={e =>
                dispatch({type: 'styleConfig.color', payload: e.target.value})
              }
            />
          </div>
          <div className="form-item">
            <label>背景颜色</label>
            <input
              type="color"
              value={styleConfig?.bgColor}
              onChange={e =>
                dispatch({type: 'styleConfig.bgColor', payload: e.target.value})
              }
            />
          </div>
          <div className="form-item">
            <label>码眼边框颜色</label>
            <input
              type="color"
              value={styleConfig?.eyeBorderColor}
              onChange={e =>
                dispatch({
                  type: 'styleConfig.eyeBorderColor',
                  payload: e.target.value
                })
              }
            />
          </div>
          <div className="form-item">
            <label>码眼内部颜色</label>
            <input
              type="color"
              value={styleConfig?.eyeInnerColor}
              onChange={e =>
                dispatch({
                  type: 'styleConfig.eyeInnerColor',
                  payload: e.target.value
                })
              }
            />
          </div>
          <div className="form-item">
            <label>码点类型：</label>
            <select
              value={styleConfig?.pointType}
              onChange={e =>
                dispatch({
                  type: 'styleConfig.pointType',
                  payload: e.target.value
                })
              }
            >
              <option value="default">默认</option>
              <option value="circle">圆形</option>
            </select>
          </div>
          <div className="form-item">
            <label>码点大小</label>
            <select
              value={styleConfig?.pointSize}
              onChange={e =>
                dispatch({
                  type: 'styleConfig.pointSize',
                  payload: e.target.value
                })
              }
            >
              <option value="default">默认</option>
              <option value="sm">小</option>
              <option value="xs">最小</option>
            </select>
          </div>
          <div className="form-item">
            <label>码点大小增加随机</label>
            <input
              type="checkbox"
              checked={styleConfig?.pointSizeRandom}
              onChange={e =>
                dispatch({
                  type: 'styleConfig.pointSizeRandom',
                  payload: e.target.checked
                })
              }
            />
          </div>

          <div className="form-item">
            <label>码眼类型：</label>
            <select
              value={styleConfig?.eyeType}
              onChange={e =>
                dispatch({type: 'styleConfig.eyeType', payload: e.target.value})
              }
            >
              <option value="default">默认</option>
              <option value="rounded">圆角</option>
              <option value="circle">圆形</option>
            </select>
          </div>
          <div className="form-item">
            <label>码眼边框粗细</label>
            <select
              value={styleConfig?.eyeBorderSize}
              onChange={e =>
                dispatch({
                  type: 'styleConfig.eyeBorderSize',
                  payload: e.target.value
                })
              }
            >
              <option value="default">默认</option>
              <option value="sm">小</option>
              <option value="xs">最小</option>
            </select>
          </div>
          <div className="form-item">
            <label>码边距</label>
            <input
              type="number"
              value={styleConfig?.margin}
              min="0"
              onChange={e =>
                dispatch({
                  type: 'styleConfig.margin',
                  payload: Number(e.target.value)
                })
              }
            />
          </div>
          <div className="form-title">LOGO配置</div>
          <div className="form-item">
            <label>Logo</label>
            <InputImage
              onChange={image =>
                dispatch({type: 'logoConfig.src', payload: image})
              }
            />
          </div>
          <div className="form-item">
            <label>Logo x</label>
            <input
              type="number"
              value={logoConfig?.x}
              onChange={e =>
                dispatch({
                  type: 'logoConfig.x',
                  payload: Number(e.target.value)
                })
              }
            />
          </div>
          <div className="form-item">
            <label>Logo y</label>
            <input
              type="number"
              value={logoConfig?.y}
              onChange={e =>
                dispatch({
                  type: 'logoConfig.y',
                  payload: Number(e.target.value)
                })
              }
            />
          </div>
          <div className="form-item">
            <label>Logo 宽度</label>
            <input
              type="number"
              value={logoConfig?.width}
              onChange={e =>
                dispatch({
                  type: 'logoConfig.width',
                  payload: Number(e.target.value)
                })
              }
            />
          </div>
          <div className="form-item">
            <label>Logo 高度</label>
            <input
              type="number"
              value={logoConfig?.height}
              onChange={e =>
                dispatch({
                  type: 'logoConfig.height',
                  payload: Number(e.target.value)
                })
              }
            />
          </div>
        </div>
        <div className="container-right">
          <div className="container-right-inner">
            <QRCode
              value={value}
              mode={mode}
              styleConfig={styleConfig}
              config={config}
              logoConfig={logoConfig}
            />
            <Validate
              value={value}
              styleConfig={styleConfig}
              config={config}
              logoConfig={logoConfig}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
