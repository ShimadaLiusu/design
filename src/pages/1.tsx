import React from 'react';
import { useNavigate } from 'react-router-dom';
import paiBaoBackground from '/src/assets/paitan.svg';

import './2.css'

const PaiBao: React.FC = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/baogao');
  };

  const handleNoClick = () => {
    navigate('/paitan');
  };

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: 1,
        }}
      />
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
            是否要结束当前治疗，<br/>并查看治疗报告?
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
    </div>
  );
};

export default PaiBao;