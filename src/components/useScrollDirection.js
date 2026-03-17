import { useEffect,  useState } from "react";

// 1. scroll direction "up" or "down"
// 2. current scroll position
// 3. last scroll position
//
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  // Because lastScrollY is inside useEffect, it resets only when the effect re-runs.
  // If you want a more stable solution, you’d use useRef() instead of let. Avoids closure issues.
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    
    const updateScrollDirection = () => {
      let scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";

      // if discrepancy by 10 or more, update scroll direction
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    // runs on user scrolls
    window.addEventListener("scroll", updateScrollDirection);

    // clean up
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  });
  return scrollDirection;
}

export default useScrollDirection;
