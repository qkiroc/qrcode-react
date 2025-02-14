import React from 'react';
import '../src/index';
import QRCode from '../src/index';

const App: React.FC = () => {
  const [value, setValue] = React.useState<string>('test');
  const [pointType, setPointType] = React.useState<any>('default');
  const [pointSize, setPointSize] = React.useState<any>('default');
  const [pointSizeRandom, setPointSizeRandom] = React.useState<boolean>(false);
  const [eyeType, setEyeType] = React.useState<any>('rounded');
  const [eyeBorderSize, seteyeBorderSize] = React.useState<any>('default');
  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text to generate QR code"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <div>
        <label>码点类型：</label>
        <select value={pointType} onChange={e => setPointType(e.target.value)}>
          <option value="default">默认</option>
          <option value="circle">圆形</option>
        </select>
      </div>
      <div>
        <label>码点大小</label>
        <select value={pointSize} onChange={e => setPointSize(e.target.value)}>
          <option value="default">默认</option>
          <option value="sm">小</option>
          <option value="xs">最小</option>
        </select>
      </div>
      <div>
        <label>码点大小增加随机</label>
        <input
          type="checkbox"
          checked={pointSizeRandom}
          onChange={e => setPointSizeRandom(e.target.checked)}
        />
      </div>

      <div>
        <label>码眼类型：</label>
        <select value={eyeType} onChange={e => setEyeType(e.target.value)}>
          <option value="default">默认</option>
          <option value="rounded">圆角</option>
          <option value="circle">圆形</option>
        </select>
      </div>
      <div>
        <label>码眼边框粗细</label>
        <select
          value={eyeBorderSize}
          onChange={e => seteyeBorderSize(e.target.value)}
        >
          <option value="default">默认</option>
          <option value="sm">小</option>
          <option value="xs">最小</option>
        </select>
      </div>
      <QRCode
        value={value}
        pointType={pointType}
        pointSize={pointSize}
        pointSizeRandom={pointSizeRandom}
        eyeType={eyeType}
        eyeBorderSize={eyeBorderSize}
      />
    </div>
  );
};

export default App;
