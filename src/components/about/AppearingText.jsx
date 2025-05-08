import { useEffect, useRef, useState } from 'react';

const AppearingText = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out  ${
        isVisible ? 'opacity-100 translate-y-0 text-animate' : 'opacity-0 translate-y-10'
      } `}
    >
      <h1 className="md:text-7xl sm:text-4xl max-w[400px] lg:max-w-[800px] text-3xl Appearing-text-size floating-text font-bold text-[#D3D3D3]">I AM A SYSTEMS ANALYST AND DEVELOPER WITH <span className='text-[#4682B4] text-shadow-cyan-400 text-shadow-2xs'>A PASSION FOR PROGRAMMING.</span></h1>
    </div>
  );
}

export default AppearingText;