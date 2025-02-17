import React from 'react';
import '../src/index';
import QRCode from '../src/index';
import type {QRCodeProps} from '../src/types';
import InputImage from './components/InputImage';
import {Validate} from './Validate';

const initialState: QRCodeProps = {
  value: 'test',
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
      <div className="app-title">二维码生成器</div>
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
