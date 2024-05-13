import { useEffect, useState, useCallback } from 'react';
import { useTimer } from 'react-use-precision-timer';
import CircleProgress from '../components/CircleProgress';
import Minus from './assets/minus.svg';
import Plus from './assets/plus.svg';
import './Timer.css';

export interface TimerProps {
  totalSeconds: number;
}

export default function Timer(props: TimerProps) {
  const [value, setValue] = useState(props.totalSeconds);
  const [running, setRunning] = useState(false);
  const [max, setMax] = useState(props.totalSeconds);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')} : ${seconds
      .toString()
      .padStart(2, '0')}`;
  };
  const [curTime, setCurTime] = useState(formatTime(value));

  const callback = useCallback(() => {
    setValue((prev) => {
      const next = prev - 0.01;
      if (next <= 0) {
        timer.stop();
        setRunning(false); // 将running设置为false
        return 0;
      }
      setCurTime(formatTime(next));
      return next;
    });
  }, []);

  // The callback will be called every 1000 milliseconds.
  const timer = useTimer({ delay: 10 }, callback);

  const clickHandler = () => {
    setRunning((prev) => !prev);
  };

  const addHandler = (sec: number) => {
    timer.stop();
    setValue((prev) => {
      setCurTime(formatTime(prev + sec));
      return prev + sec;
    });
    setMax((prevMax) => prevMax + sec);
    running && timer.start();
  };

  const subHandler = (sec: number) => {
    timer.stop();
    setValue((prev) => {
      setCurTime(formatTime((prev - sec) < 0 ? 0 : (prev - sec)));
      return (prev - sec) < 0 ? 0 : (prev - sec);

    });
    setMax((prevMax) => (prevMax - sec) < 0 ? 0 : (prevMax - sec));
    running && timer.start();
  };
  
  useEffect(() => {
    if (running) {
      timer.start();
    } else {
      timer.stop();
    }
  }, [running]);

  return (
    <>
      <button className="subButton" onClick={() => subHandler(60)}><img src={Minus} alt="Minus Button" ></img></button>
      <button className="startButton" onClick={clickHandler}> <img src={running ? 'src/assets/pause.svg' : 'src/assets/start.svg'} alt="Start Button"  style={{transform: 'rotate(-180deg) translateX(3px)'}}></img></button>
      <button className="addButton" onClick={() => addHandler(60)}><img src={Plus} alt="Plus Button" ></img></button>
      <CircleProgress
        min={0}
        max={max}
        value={value}
        label="剩余时间"
        showValue={curTime}
      />
    </>
  );
}
