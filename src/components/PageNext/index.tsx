import React, { useState, useEffect } from 'react';

const LoadingAnimation: React.FC = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const randomTime = Math.random() * 5;
    setRandomNumber(randomTime);

    const timer = setTimeout(() => {
      setShowCheckmark(true);
      setOpacity(1);
    }, randomTime * 1000);

    const opacityTimer = setTimeout(() => {
      setOpacity(0);
    }, (randomTime * 1000) + 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(opacityTimer);
    };
  }, []);

  return (
    <div>
      {!showCheckmark ? (
        <div
          style={{
            position: 'absolute',
            width: '38px',
            height: '38px',
            left: '20px',
            top: '20px',
            opacity: opacity,
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          {/* Property 1=Frame 2 */}
          <div
            style={{
              position: 'absolute',
              width: '38px',
              height: '38px',
              left: '0px',
              top: '0px'
            }}
          >
            {/* 圆环 */}
            <div
              style={{
                position: 'absolute',
                left: '0%',
                right: '0%',
                top: '0%',
                bottom: '0%',
                background: '#FFFFFF'
              }}
            >
              {/* Group 1 */}
              <div
                style={{
                  position: 'absolute',
                  left: '0%',
                  right: '0%',
                  top: '0%',
                  bottom: '0%'
                }}
              >
                {/* 环 */}
                <div
                  style={{
                    position: 'absolute',
                    left: '0%',
                    right: '0%',
                    top: '0%',
                    bottom: '0%',
                    background:
                      'conic-gradient(from 180.16deg at 50% 50%, #D9D9D9 0deg, rgba(217, 217, 217, 0) 1.8deg, #D9D9D9 360deg)'
                  }}
                />
                {/* ⚪ */}
                <div
                  style={{
                    position: 'absolute',
                    left: '43.56%',
                    right: '44.66%',
                    top: '88.22%',
                    bottom: '0%',
                    background: '#D9D9D9'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="checkmark"
          style={{
            /* Group 19 */
            position: 'absolute',
            width: '38px',
            height: '38px',
            left: '20px',
            top: '20px'
          }}
        >
          {/* Ellipse 19 */}
          <div
            style={{
              position: 'absolute',
              left: '0%',
              right: '0%',
              top: '0%',
              bottom: '0%',
              background: '#58FF49'
            }}
          />
          {/* Rectangle 39 */}
          <div
            style={{
              position: 'absolute',
              left: '28.76%',
              right: '44.49%',
              top: '47.27%',
              bottom: '43.88%',
              background: '#FFFFFF',
              borderRadius: '2px',
              transform: 'rotate(45deg)'
            }}
          />
          {/* Rectangle 40 */}
          <div
            style={{
              position: 'absolute',
              left: '36.13%',
              right: '10.04%',
              top: '65.56%',
              bottom: '25.59%',
              background: '#FFFFFF',
              borderRadius: '2px',
              transform: 'rotate(-45deg)'
            }}
          />
        </div>
      )}
    </div>
  );
};

const Page: React.FC = () => {
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    const checkAllChecked = () => {
      const loadingAnimations = document.querySelectorAll('.loading-animation');
      const allChecked = Array.from(loadingAnimations).every(
        (animation) => animation.querySelector('.checkmark')
      );
      setAllChecked(allChecked);
    };

    const observer = new MutationObserver(checkAllChecked);
    const loadingAnimations = document.querySelectorAll('.loading-animation');
    loadingAnimations.forEach((animation) => {
      observer.observe(animation, { childList: true });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="loading-animation">
        <LoadingAnimation />
      </div>
      <div className="loading-animation">
        <LoadingAnimation />
      </div>
      <div className="loading-animation">
        <LoadingAnimation />
      </div>
      <button
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: allChecked ? '#58FF49' : '#D9D9D9',
          color: allChecked ? '#fff' : '#888',
          border: 'none',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: allChecked ? 'pointer' : 'not-allowed'
        }}
      >
        下一步
      </button>
    </div>
  );
};

export default Page;