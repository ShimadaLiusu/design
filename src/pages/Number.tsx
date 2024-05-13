import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './2.css';

const Number: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // 只允许输入数字,并限制最大长度为5
    if (/^\d*$/.test(value) && value.length <= 5) {
      setInputValue(value || '');
      setShowInput(true);
    }
  };

  const handleNextClick = () => {
    navigate('/list');
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
          background: 'linear-gradient(275.71deg, #6DC5D9 -3.09%, #9EE2FF 192.8%)',
          border: '2px solid rgba(109, 197, 217, 0.5)',
          boxShadow: '-4px -4px 15px #FFFFFF, 4px 4px 10px #9CC6D9',
          borderRadius: '15px',
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
          下一步
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          width: '240px',
          height: '67px',
          left: '563px',
          top: '290px',
          fontFamily: 'PingFang SC Heavy',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '48px',
          lineHeight: '67px',
          color: '#4999BC',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        请输入床号
      </div>
      <input
        type="number"
        pattern="[0-9]*"
        maxLength={5}
        value={inputValue}
        onChange={handleInputChange}
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '15px 80px',
          gap: '10px',
          position: 'absolute',
          width: '456px',
          height: '69px',
          left: '460px',
          top: '397px',
          background: 'rgba(255, 255, 255, 0.2)',
          border: '2px solid rgba(217, 217, 217, 0.5)',
          boxShadow: '-4px -4px 15px #FFFFFF, 4px 4px 10px #D9D9D9',
          borderRadius: '15px',
          cursor: 'pointer',
          fontFamily: 'PingFang SC Heavy',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '48px',
          lineHeight: '67px',
          color: '#4999BC',
          textAlign: 'left',
          paddingLeft: '15px',
        }}
      />
    </div>
  );
};

export default Number;