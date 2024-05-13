import List, { ListData } from '../components/List';
import { useNavigate } from 'react-router-dom';
import './button.css';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function ListPage() {
  const navigate = useNavigate();
  const [showPage, setShowPage] = useState(true);

  const listData: ListData[] = [
    {
      date: '2023年10月26日',
      time: '上午11:00',
      modeName: '自动模式',
      modeInfo: '10mmHg压力 10hz频率',
      no: '9床',
    },
    {
      date: '2023年11月3日',
      time: '上午11:00',
      modeName: '儿童模式',
      modeInfo: '10mmHg压力 10hz频率',
      no: '9床',
    },
    {
      date: '2023年11月5日',
      time: '上午8:00',
      modeName: '老年模式',
      modeInfo: '10mmHg压力 10hz频率',
      no: '9床',
    },
    {
      date: '2023年11月30日',
      time: '上午11:00',
      modeName: '老年模式',
      modeInfo: '10mmHg压力 10hz频率',
      no: '9床',
    },
    {
      date: '2023年12月1日',
      time: '下午16:00',
      modeName: '老年模式',
      modeInfo: '10mmHg压力 10hz频率',
      no: '9床',
    },
  ];

  return (
    <div>
      <CSSTransition
        in={showPage}
        timeout={300}
        classNames="page-transition"
        unmountOnExit
      >
        <div>
          <div className="hintContent">
            已经查询到该床使用记录，<br />
            是否延续使用？
          </div>
          <div style={{ position: 'absolute', top: '274px', left: '100px' }}>
            <List data={listData} />
          </div>
          <div className="buttonYes" onClick={() => navigate('/paitan')}>
            <div className="buttonContentYes">是</div>
          </div>
          <div className="buttonNo" onClick={() => navigate('/paitan')}>
            <div className="buttonContentNo">否，为新用户</div>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}