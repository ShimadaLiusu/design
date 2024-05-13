import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import paiBaoBackground from '/src/assets/paitan.svg';

const PaiWei: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleYesClick = () => {
    navigate('/weihu');
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    setShowInput(true);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
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
      <div
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          backgroundImage: `url(${paiBaoBackground})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '616px',
            height: '320px',
            left: 'calc(50% - 616px / 2)',
            top: 'calc(50% - 320px / 2)',
            background: '#FFFFFF',
            borderRadius: '50px',
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '252px',
              height: '50px',
              left: '80px',
              top: '40px',
              fontFamily: 'PingFang SC Heavy',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '36px',
              lineHeight: '50px',
              textAlign: 'center',
              color: '#7C7C7C',
            }}
          >
            请输入维修工码
          </div>
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
                fontFamily: 'PingFang SC Heavy',
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
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '15px 80px',
              gap: '10px',
              position: 'absolute',
              width: '456px',
              height: '69px',
              left: '80px',
              top: '109px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid rgba(217, 217, 217, 0.5)',
              boxShadow: '-4px -4px 15px #FFFFFF, 4px 4px 10px #D9D9D9',
              borderRadius: '15px',
              cursor: 'pointer',
            }}
            onClick={() => handleInputChange('10')}
          >
          </div>
          {showInput && (
            <div
              style={{
                position: 'absolute',
                left: '95px',
                top: '115px',
                fontFamily: 'PingFang SC Heavy',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '40px',
                lineHeight: '56px',
                color: '#4999BC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'fadeIn 0.5s ease-in-out',
              }}
            >
              {inputValue || '10'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaiWei;
