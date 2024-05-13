import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '../components/Slider';
import { CSSTransition } from 'react-transition-group';
import './pages.css'

import svgBackground from '/src/assets/xitan.png';
import ModePic from '/src/assets/mode.svg';
import Mask from '/src/assets/Mask.svg';
import YAPONODI from '/src/assets/YAPONODI.svg';
import aoxian from '/src/assets/aoxian.svg';
import apaitan from '/src/assets/apaitan.png';
import axitan from '/src/assets/axitan.png';
import abaogao from '/src/assets/abaogao.png';
import aweihu from '/src/assets/aweihu.png';

const Xitan: React.FC = () => {
  const [suction, setSuction] = useState(0.2);
  const navigate = useNavigate();

  const handleSuctionChange = (value: number) => {
    setSuction(value);
  };

  const handlePaitanClick = () => {
    navigate('/paitan');
  };
  const handleBaogaoClick = () => {
    navigate('/1');
  };
  const handleWeihuClick = () => {
    navigate('/2');
  };

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
          //border: '2px solid #ccc',
        }}
      >
               <div
            style={{position: 'absolute',
                  width: '100vw',
                  height: '100vh',
                  backgroundImage: `url(${svgBackground})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transform: 'translateY(58px)',}}>
                    </div>
        <div className="top-rectangle">
        </div>
        <img src={aoxian} alt="aoxian" style={{
          position:'absolute',
          width: '120px',
          height: '120px',
          top: '15px',
          left: '193px',
        }} />
        <div onClick={handlePaitanClick}>
        <img
          src={apaitan}
          alt="paitan"
          style={{
            position: 'absolute',
            width: '62px',
            height: '62px',
            left: '80px',
            top: '37px',
            opacity:'0.3',
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
            opacity:'0.3',
          }}
        >
          排痰
        </div>
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
            left: 'calc(50% - 608px/2 + 329px)', //居中显示
            top: '624px',
            border: '0.2px solid rgba(109, 197, 217, 0.5)',
          }}
        >
          {/* Line 8 */}
        </div>
        <div>
        <img
          src={axitan}
          alt="xitan"
          style={{
            position: 'absolute',
            width: '62px',
            height: '62px',
            left: '222px',
            top: '37px',
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
            color: '#4999BC',
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
            opacity:'0.3',
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
            opacity:'0.3',
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

        /* 以下是本页面特殊内容 */
        {/* <div
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
          实时吸力
        </div> */}

        <div
          style={{
            position: 'absolute',
            top: '254px',
            left: '733px',
            width: '583px',
          }}
        >
          <Slider
            title="吸力预调节"
            min={0.1}
            max={0.8}
            step={0.001}
            defaultValue={suction}
            unit="kPa"
            onChange={handleSuctionChange}
          />
        </div>

        {/* <div
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
        </div> */}
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

export default Xitan;