import React, { useEffect, useRef, useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa6';

interface IProps {
  open?: boolean;
  title: string;
}

const Collapsible: React.FC<IProps> = ({ open, children, title }) => {
  const [isOpen, setIsOpen] = useState();
  const [height, setHeight] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  return (
    <>
      <div className='card'>
        <div className='collapsable'>
          <div className='collapsable-wrapper' onClick={handleFilterOpening}>
            <h1 className='font-weight-bold'>{title}</h1>
            <button type='button' className='btn' onClick={handleFilterOpening}>
              {!isOpen ? (
                <FaChevronDown onClick={handleFilterOpening} />
              ) : (
                <FaChevronUp onClick={handleFilterOpening} />
              )}
            </button>
          </div>
        </div>
        <div className='border-bottom my-collapse' style={{ height }}>
          <div ref={ref}>
            <div className='collapsable-content'>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
