import { useEffect, useState } from 'react';
import './index.css';

export interface CircleProgressProps {
  min: number;
  max: number;
  value: number;
  label: string;
  showValue: string;
}

export default function CircleProgress(props: CircleProgressProps) {
  const { min, max, value, label, showValue } = props;
  const [percentage, setPercentage] = useState(
    ((value - min) / (max - min)) * 98
  );
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setPercentage(((value - min) / (max - min)) * 98);
    if (isFirstRender) {
      setIsFirstRender(false);
    }
  }, [min, max, value, label, showValue]);

  return (
    <div className="circle-progress">
      <div className="circle-track"></div>
      <div className="track-container">
        <div
          className="circle-fill"
          style={{
            background: `conic-gradient(#6dc5d9 0deg, #bee9e6 342deg, #ffffff00 342deg 360deg)`,
          }}
        ></div>
        {(value !== max || isFirstRender) && <div className="start-point"></div>}
      </div>
      <div
        className="rotate-wrapper"
        style={{
          transform: `rotate(${isFirstRender ? 352.8 : percentage * 3.6}deg)`,
        }}
      >
        <div className="end-point"></div>
      </div>

      <div className="value-panel">
        <div className="value-content">
          <div className="label">{label}</div>
          <span>{showValue}</span>
        </div>
      </div>

      <div className="value-fill"></div>
    </div>
  );
}