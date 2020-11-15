import { useState, useEffect } from 'react';

function usePageTop(topOffset = 0) {
  const [top, setTop] = useState(true);
  useEffect(() => {
    function handleScroll() {
      const isTop = topOffset >= document.documentElement.scrollTop;
      setTop(isTop);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [topOffset]);

  return top;
}

export default usePageTop;
