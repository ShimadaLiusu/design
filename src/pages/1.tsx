import { useNavigate } from 'react-router-dom';
import paiBaoBackground from '/src/assets/paitan.svg';

import React, { useState, useEffect } from 'react';
import Slider from '../components/Slider';
import Timer from '../demo/Timer';
import { CSSTransition } from 'react-transition-group';
import './pages.css'
import ModePic from '/src/assets/mode.svg';
import Mask from '/src/assets/Mask.svg';
import YAPONODI from '/src/assets/YAPONODI.svg';
import aoxian from '/src/assets/aoxian.svg';
import apaitan from '/src/assets/apaitan.png';
import axitan from '/src/assets/axitan.png';
import abaogao from '/src/assets/abaogao.png';
import aweihu from '/src/assets/aweihu.png';

import './2.css'

const PaiBao: React.FC = () => {
  const handleYesClick = () => {
    navigate('/baogao');
  };

  const handleNoClick = () => {
    navigate('/paitan');
  };

  const [pressure, setPressure] = useState(10);
  const [frequency, setFrequency] = useState(10);
  const [totalSeconds, setTotalSeconds] = useState(300);
  const navigate = useNavigate();

  const handlePressureChange = (value: number) => {
    setPressure(value);
  };

  const handleFrequencyChange = (value: number) => {
    setFrequency(value);
  };

  const handleTimerFinish = () => {
    // Handle timer finish, e.g., navigate to a different page
    navigate('/final');
  };
  const handleXitanClick = () => {
    navigate('/xitan');
  };
  const handleBaogaoClick = () => {
    navigate('/1');
  };
  const handleWeihuClick = () => {
    navigate('/2');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <CSSTransition
      in={true}
      timeout={300}
      classNames="page-transition"
      unmountOnExit
    >
      <div
        className="next-page-container"
        style={{
          justifyContent: 'space-between',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: 1,
        }}
      >
        <div>
          <div
            style={{
              position: 'absolute',
              width: '616px',
              height: '320px',
              left: 'calc(50% - 616px / 2)',
              top: 'calc(50% - 320px / 2)',
              background: '#FFFFFF',
              borderRadius: '50px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '516px',
                height: '110px',
                left: '50px',
                top: '60px',
                fontFamily: 'PingFang SC Heavy',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '36px',
                lineHeight: '50px',
                textAlign: 'center',
                color: '#7C7C7C',
              }}
            >
              是否要结束当前治疗，<br />并查看治疗报告?
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                width: '172px',
                height: '66px',
                left: '364px',
                top: '214px',
                background: 'linear-gradient(275.71deg, #6DC5D9 -3.09%, #9EE2FF 192.8%)',
                border: '2px solid rgba(109, 197, 217, 0.5)',
                boxShadow: '-4px -4px 15px #FFFFFF, 4px 4px 10px #9CC6D9',
                borderRadius: '15px',
                cursor: 'pointer',
              }}
              onClick={handleYesClick}
            >
              <div
                style={{
                  width: '36px',
                  height: '50px',
                  fontFamily: 'PingFang SC heavy',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '36px',
                  lineHeight: '50px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                }}
              >
                是
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                width: '172px',
                height: '66px',
                left: '80px',
                top: '214px',
                background: '#BEBEBE',
                border: '2px solid #AFAFAF',
                boxShadow: '-4px -4px 15px #FFFFFF, 4px 4px 10px #D9D9D9',
                borderRadius: '15px',
                cursor: 'pointer',
              }}
              onClick={handleNoClick}
            >
              <div
                style={{
                  width: '36px',
                  height: '50px',
                  fontFamily: 'PingFang SC Heavy',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '36px',
                  lineHeight: '50px',
                  textAlign: 'center',
                  color: '#FFFFFF',
                }}
              >
                否
              </div>
            </div>
          </div>
        </div>
        <div className="top-rectangle">
        </div>
        <img src={aoxian} alt="aoxian" style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          top: '15px',
          left: '50px',
        }} />
        <img
          src={apaitan}
          alt="paitan"
          style={{
            position: 'absolute',
            width: '62px',
            height: '62px',
            left: '80px',
            top: '37px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '36px',
            height: '25px',
            left: '92px',
            top: '104px',
            fontFamily: 'PingFang SC',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '25px',
            color: '#4999BC',
          }}
        >
          排痰
        </div>
        <img
          src={ModePic}
          alt="mode"
          style={{
            position: 'absolute',
            top: '160px',
            right: '50px',
            filter: 'grayscale(100%)',
          }}
        />

        <img
          src={Mask}
          alt="mask"
          style={{
            position: 'absolute',
            left: '850px',
            top: '27px',
          }}
        />
        <img
  src={YAPONODI}
  alt="YAPONODI"
  style={{
    position: 'absolute',
    width: '390px',
    height: '79px',
    right: '50px',
    top: '35px',
  }}
/>
<div
  style={{
    position: 'absolute',
    width: '213px',
    height: '34px',
    left: '50px',
    top: '170px',
    fontFamily: 'PingFang SC Heavy',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '34px',
    color: '#7C7C7C',
  }}
>
  2024 年 5 月 11 日
</div>
<div
  style={{
    position: 'absolute',
    width: '124px',
    height: '34px',
    left: '283px',
    top: '170px',
    fontFamily: 'PingFang SC Heavy',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '34px',
    color: '#7C7C7C',
  }}
>
  下午 5：00
</div>
<div
  style={{
    position: 'absolute',
    width: '608px',
    height: '0px',
    left: 'calc(50% - 608px/2 + 329px)',
    top: '624px',
    border: '0.2px solid rgba(109, 197, 217, 0.5)',
  }}
>
  {/* Line 8 */}
</div>
<div onClick={handleXitanClick}>
  <img
    src={axitan}
    alt="xitan"
    style={{
      position: 'absolute',
      width: '62px',
      height: '62px',
      left: '222px',
      top: '37px',
      opacity: '0.3',
    }}
  />
  <div
    style={{
      position: 'absolute',
      width: '36px',
      height: '25px',
      left: '235px',
      top: '104px',
      fontFamily: 'PingFang SC',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '25px',
      color: '#A0CAD6',
    }}
  >
    吸痰
  </div>
</div>
<div onClick={handleBaogaoClick}>
  <img
    src={abaogao}
    alt="paitan"
    style={{
      position: 'absolute',
      width: '62px',
      height: '62px',
      left: '364px',
      top: '37px',
      opacity: '0.3',
    }}
  />
  <div
    style={{
      position: 'absolute',
      width: '36px',
      height: '25px',
      left: '371px',
      top: '104px',
      fontFamily: 'PingFang SC',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '25px',
      color: '#A0CAD6',
    }}
  >
    报告
  </div>
</div>
<div onClick={handleWeihuClick}>
  <img
    src={aweihu}
    alt="weihu"
    style={{
      position: 'absolute',
      width: '62px',
      height: '62px',
      left: '506px',
      top: '37px',
      opacity: '0.3',
    }}
  />
  <div
    style={{
      position: 'absolute',
      width: '36px',
      height: '25px',
      left: '519px',
      top: '104px',
      fontFamily: 'PingFang SC',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '25px',
      color: '#A0CAD6',
    }}
  >
    维护
  </div>
</div>
{/* 以下是本页面特殊内容 */}
<div
  style={{
    position: 'absolute',
    width: '160px',
    height: '56px',
    left: '50px',
    top: '254px',
    fontFamily: 'PingFang SC Heavy',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '40px',
    lineHeight: '56px',
    color: '#5E5E5E',
  }}
>
  治疗时间
</div>

<div>
  <Timer totalSeconds={totalSeconds} />
</div>
<div
  style={{
    position: 'absolute',
    top: '254px',
    left: '733px',
    width: '583px',
  }}
>
  <Slider
    title="压力调节"
    min={5}
    max={15}
    step={0.01}
    defaultValue={pressure}
    unit="mmHg"
    onChange={handlePressureChange}
  />
</div>
<div
  style={{
    position: 'absolute',
    top: '654px',
    left: '733px',
    width: '583px',
  }}
>
  <Slider
    title="频率调节"
    min={5}
    max={20}
    step={0.01}
    defaultValue={frequency}
    unit="hz"
    onChange={handleFrequencyChange}
  />
</div>
<div
  style={{
    position: 'absolute',
    width: '96px',
    height: '34px',
    left: '292px',
    top: '885.81px',
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '34px',
    color: '#7C7C7C',
  }}
>
  结束治疗
</div>
<div
  style={{
    position: 'absolute',
    width: '1266px',
    height: '0px',
    left: 'calc(50% - 1266px/2)',
    top: '224px',
    border: '0.2px solid rgba(109, 197, 217, 0.5)',
  }}
/>
<div
  style={{
    position: 'absolute',
    width: '729px',
    height: '0px',
    left: '50%',
    top: '613.5px',
    border: '0.2px solid rgba(109, 197, 217, 0.5)',
    transform: 'translateX(-50%) rotate(90deg)',
  }}
/>
</div>
</CSSTransition>
);
};

export default PaiBao;