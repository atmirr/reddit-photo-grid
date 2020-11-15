import { useState, useEffect } from 'react';

function usePageBottom(bottomOffset = 0) {
  const [bottom, setBottom] = useState(false);
  useEffect(() => {
    function handleScroll() {
      const isBottom =
        window.innerHeight +
          Math.ceil(document.documentElement.scrollTop) +
          bottomOffset >=
        document.documentElement.offsetHeight;
      setBottom(isBottom);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [bottomOffset]);

  return bottom;
}

export default usePageBottom;
