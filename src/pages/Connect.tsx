import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './2.css';
import Group71 from '/src/assets/Group 71.svg';
import Group72 from '/src/assets/Group 72.svg';
import Group73 from '/src/assets/Group 73.svg';
import Logo from '/src/assets/indexlogo.svg';
import CheckmarkIcon from '/src/assets/green.svg';
import LoadingGif from '/src/assets/loading.gif';

const Connect: React.FC = () => {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setState1(true);
      setLoading1(false);
    }, 2000);

    const timer2 = setTimeout(() => {
      setState2(true);
      setLoading2(false);
    }, 4000);

    const timer3 = setTimeout(() => {
      setState3(true);
      setLoading3(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleNextClick = () => {
    if (state1 && state2 && state3) {
      setIsLoading(true);
      navigate('/number');
    }
  };

  const handleImageClick = (index: number) => {
    switch (index) {
      case 1:
        setState1((prev) => !prev);
        setLoading1((prev) => !prev);
        break;
      case 2:
        setState2((prev) => !prev);
        setLoading2((prev) => !prev);
        break;
      case 3:
        setState3((prev) => !prev);
        setLoading3((prev) => !prev);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="next-page-container"
      style={{
        justifyContent: 'space-between',
      }}
    >
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '15px 80px',
          gap: '10px',
          position: 'absolute',
          width: '280px',
          height: '86px',
          left: '986px',
          top: '848px',
          background: state1 && state2 && state3 ? 'linear-gradient(275.71deg, #6DC5D9 -3.09%, #9EE2FF 192.8%)' : isLoading ? '#BEBEBE' : '#BEBEBE',
          border: state1 && state2 && state3 ? '2px solid rgba(109, 197, 217, 0.5)' : isLoading ? '2px solid #AFAFAF' : '2px solid #AFAFAF',
          boxShadow: state1 && state2 && state3 ? '-4px -4px 15px #FFFFFF, 4px 4px 10px #9CC6D9' : isLoading ? '-4px -4px 15px #FFFFFF, 4px 4px 10px #D9D9D9' : '-4px -4px 15px #FFFFFF, 4px 4px 10px #D9D9D9',
          borderRadius: '15px',
          cursor: state1 && state2 && state3 ? 'pointer' : isLoading ? 'not-allowed' : 'not-allowed',
        }}
        onClick={handleNextClick}
      >
        <div
          style={{
            width: '120px',
            height: '56px',
            fontFamily: 'PingFang SC Heavy',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '40px',
            lineHeight: '56px',
            textAlign: 'center',
            color: '#FFFFFF',
            flex: 'none',
            order: '0',
            flexGrow: '0',
          }}
        >
          {isLoading ? (
            <div
              className="loading-animation"
              style={{
                position: 'absolute',
                width: '41px',
                height: '38px',
                left: '70px',
                top: '24px',
              }}
            >
              <div className="circle-container">
                <div className="circle-bottom" />
                <div className="circle-ring" />
                <div className="circle-dot" />
              </div>
            </div>
          ) : (
            '下一步'
          )}
        </div>
      </div>
      <div>
        <div
          style={{
            position: 'absolute',
            width: '832px',
            height: '90px',
            left: '100px',
            top: '135px',
            fontFamily: 'PingFang SC Heavy',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '64px',
            lineHeight: '90px',
            color: '#7C7C7C',
          }}
        >
          欢迎使用高频震动排吸痰系统
        </div>
        <div
          style={{
            position: 'absolute',
            width: '240px',
            height: '67px',
            left: '100px',
            top: '250px',
            fontFamily: 'PingFang SC Heavy',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '48px',
            lineHeight: '67px',
            color: '#4999BC',
          }}
        >
          请连接配件
        </div>
      </div>
      <div>
        <img
          src={Group71}
          alt="Group 71"
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            left: '100px',
            top: '348px',
          }}
          onClick={() => handleImageClick(1)}
        />
        <img
          src={Group72}
          alt="Group 72"
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            left: '533px',
            top: '348px',
          }}
          onClick={() => handleImageClick(2)}
        />
        <img
          src={Group73}
          alt="Group 73"
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            left: '966px',
            top: '348px',
          }}
          onClick={() => handleImageClick(3)}
        />
      </div>
      <img
        src={Logo}
        alt="logo"
        style={{
          position: 'absolute',
          width: '236px',
          height: '49.5px',
          top: '90px',
          left: '100px',
        }}
      />
      <div
        style={{
          width: '38px',
          height: '38px',
          position: 'absolute',
          top: '668px',
          left: '231px',
          gap: '0px',
          opacity: loading1 ? '1' : '0',
          animation: loading1 ? 'fade-in 0.5s ease-in-out' : 'none',
        }}
      >
        <img src={LoadingGif} alt="loading" style={{

position: 'absolute',
width: '38px',
height: '38px',
left: '231px',
top: '668px',

}}/>
      </div>
      <div
        style={{
          width: '38px',
          height: '38px',
          position: 'absolute',
          top: '668px',
          left: '664px',
          gap: '0px',
          opacity: loading2 ? '1' : '0',
          animation: loading2 ? 'fade-in 0.5s ease-in-out' : 'none',
        }}
      >
        <img src={LoadingGif} alt="loading" style={{

position: 'absolute',
width: '38px',
height: '38px',
left: '664px',
top: '668px',

}} />
      </div>
      <div
        style={{
          width: '38px',
          height: '38px',
          position: 'absolute',
          top: '668px',
          left: '1097px',
          gap: '0px',
          opacity: loading3 ? '1' : '0',
          animation: loading3 ? 'fade-in 0.5s ease-in-out' : 'none',
        }}
      >
        <img src={LoadingGif} alt="loading" style={{

position: 'absolute',
width: '38px',
height: '38px',
left: '1097px',
top: '668px',

}} />
      </div>
      {state1 && (
        <div
          style={{
            width: '38px',
            height: '38px',
            position: 'absolute',
            top: '668px',
            left: '231px',
            gap: '0px',
            opacity: '1',
            animation: 'fade-in 0.5s ease-in-out',
          }}
        >
          <img src={CheckmarkIcon} alt="checkmark" />
        </div>
      )}
      {state2 && (
        <div
          style={{
            width: '38px',
            height: '38px',
            position: 'absolute',
            top: '668px',
            left: '664px',
            gap: '0px',
            opacity: '1',
            animation: 'fade-in 0.5s ease-in-out',
          }}
        >
          <img src={CheckmarkIcon} alt="checkmark" />
        </div>
      )}
      {state3 && (
  <div
    style={{
      width: '38px',
      height: '38px',
      position: 'absolute',
      top: '668px',
      left: '1097px',
      gap: '0px',
      opacity: '1',
      animation: 'fade-in 0.5s ease-in-out',
    }}
  >
    <img src={CheckmarkIcon} alt="checkmark" />
  </div>
)}
</div>
); };
export default Connect;