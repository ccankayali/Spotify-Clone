import {Icon} from "./Icons";
// import {useAudio, useFullscreen, useToggle} from 'react-use';
// import {secondsToTime} from "utils";
// import CustomRange from "../CustomRange";
import {useState, useEffect, useMemo, useRef} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {setControls, setPlaying, setSidebar} from "stores/player";
// import FullScreenPlayer from "../FullScreenPlayer";

function Player() {
    const STEP = 0.1;
    const MIN = 0;
    const MAX = 100;
    const [values, setValues] = useState([0]);
  return (
    
    <div className="flex justify-between items-center h-full">
        <div className="min-w-[11.25rem] w-[30%]">
            sol
        </div>

        <div className="flex flex-col items-center">
        <div className="flex items-center gap-x-2">
                    <button
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="shuffle"/>
                    </button>
                    <button
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="playerPrev"/>
                    </button>
                    <button
                        // onClick={controls[state?.playing ? 'pause' : 'play']}
                        className="w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]">
                        {/* <Icon size={16} name={state?.playing ? 'pause' : 'play'}/> */}
                    </button>
                    <button
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="playerNext"/>
                    </button>
                    <button
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name="repeat"/>
                    </button>
                </div>
        </div>

        <div className="min-w-[11.25rem] w-[30%] flex justify-end">
            sağ
        </div>
    </div>
  )
}

export default Player