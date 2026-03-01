import "./App.css";
import "./components/jelly.css";
import JellyButton from "./components/jelly-components/jelly-button";
import { JellyEmail, JellyHeart } from "./components/jelly-icons/jelly-icon-svgs";

function App() {
  return (
    <>
      <div className="relative w-[1000px] h-[400px]">

        <JellyButton variant="primary" circular={true}>c
        </JellyButton>
        <JellyEmail />
        <JellyHeart />
        {/* <div className="bg-surface w-10 h-10"> </div>
        <div className="bg-surface-dark w-10 h-10"></div>


        <div className="jelly-surface squishy w-70 h-7.5 absolute top-8 left-8 flex items-center justify-center z-10">
          <p className="text-white font-semibold text-2xl relative z-10">
            Test
          </p>
     
          <svg
            className="jelly-shine z-9"
            viewBox="0 0 200 300"
            preserveAspectRatio="none"
          >
            <defs>
              <radialGradient id="shineGradient">
                <stop offset="0%" stopColor="white" stopOpacity="0.75" />
                <stop offset="45%" stopColor="white" stopOpacity="0.35" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>

              <filter id="softBlur">
                <feGaussianBlur stdDeviation="10" />
              </filter>
            </defs>
            <ellipse
              cx="100"
              cy="125"
              rx="90"
              ry="80"
              fill="url(#shineGradient)"
              filter="url(#softBlur)"
            />
          </svg>
        </div> */}
      </div>
    </>
  );
}

export default App;
