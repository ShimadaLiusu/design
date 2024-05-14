import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from '../components/Slider';
import { CSSTransition } from 'react-transition-group';
import './pages.css'

import svgBackground from '/src/assets/baogao.png';
import ModePic from '/src/assets/mode.svg';
import Mask from '/src/assets/Mask.svg';
import YAPONODI from '/src/assets/YAPONODI.svg';
import aoxian from '/src/assets/aoxian.svg';
import apaitan from '/src/assets/apaitan.png';
import axitan from '/src/assets/axitan.png';
import abaogao from '/src/assets/abaogao.png';
import aweihu from '/src/assets/aweihu.png';

const Baogao: React.FC = () => {
  const [suction, setSuction] = useState(0.2);
  const navigate = useNavigate();

  const handleSuctionChange = (value: number) => {
    setSuction(value);
  };

  const handlePaitanClick = () => {
    navigate('/paitan');
  };

  const handleXitanClick = () => {
    navigate('/xitan');
  };

  const handleWeihuClick = () => {
    navigate('/weihu');
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
          left: '328px',
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
            opacity:'0.3',
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
            opacity:'0.3',
          }}
        >
          吸痰
        </div>
        </div>
        <div>
        <img
          src={abaogao}
          alt="paitan"
          style={{
            position: 'absolute',
            width: '62px',
            height: '62px',
            left: '364px',
            top: '37px',
            
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
            color: '#4999BC',
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
        
      </div>
    </CSSTransition>
  );
};

export default Baogao;