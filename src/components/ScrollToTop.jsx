import { useLocation } from "react-router-dom";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useIsomorphicLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;