import React, { useRef } from 'react'
import styled from 'styled-components';

// REACT HOOKS
// import useVideoPlayer from './useVideoPlayer';

// REACT VIDEO PLAYER COMPONENT
import YouTube from 'react-youtube';

// --- ICONS ------
import Play from 'public/images/dashboard/VideoControls/Play.svg'
import Rewind from 'public/images/dashboard/VideoControls/Rewind.svg'
import Forward from 'public/images/dashboard/VideoControls/Forward.svg'
import Volume from 'public/images/dashboard/VideoControls/Volume.svg'
import Comment from 'public/images/dashboard/VideoControls/Comment.svg'
import PlaySpeed from 'public/images/dashboard/VideoControls/PlaySpeed.svg'
import FullScreen from 'public/images/dashboard/VideoControls/FullScreen.svg'
// ----------------

import videoBG from 'public/images/dashboard/VideoControls/videoBG.png'

export const VideoPlayerWrapper = styled.section`
    /* width: 100%;
    height: 100%;

    img.video_icons {
      width: 10px;
      height: 10px;
    } */
`;

const VideoPlayerStyle = styled.div`
    width: 100%;
    height: 400px;
    border-radius: 32px;
    display: flex;
    flex-direction: column;

    .video {
      width: 100%;
    height: 400px;
    border-radius: 32px;
    /* object-fit:contain;     */
    }
    @media screen and (max-width: 480px){
      height: 300px;
    }
`;

const VideoControlWrapper = styled.div`
    width: 100%;
    height: 80px;
    border-radius: 32px;
    background: transparent;
    padding: 10px 20px;
    align-self: flex-end;
    margin-top: -73px;
    z-index: 4;

    input{
      width: 100%;
      background: #fff;
      margin-top: 5px;
      outline: none;
      border: none;

      transition: opacity .2s;
       :hover { cursor: pointer; }
    }
    input [type="range" i]{
      background-color: #5832DA;
      -webkit-appearance: none;
    }
    /* ACCESS THE WHOLE SLIDER CONTAINER */
  /* .slider::-webkit-slider-runnable-track { background: #5832DA;  }
  .slider::-moz-range-track { background: #5832DA;  }
  .slider::-ms-track { background: #5832DA;  }     */

  .slider::-webkit-slider-thumb { background: #5832DA !important; }
  .slider::-moz-range-thumb { background: #5832DA !important; }
  .slider::-ms-thumb { background: #5832DA !important; } 

  .slider::-webkit-progress-bar { background: #5832DA; }
  .slider::-moz-progress-bar{ background: #5832DA; }
  .slider::-ms-progress-bar { background: #5832DA; }

    .video_actions_div{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: -7.5px;

      .video_actions_left{
        width: 30%;
        display: flex;
        justify-content: flex-start;
      }
      .video_actions_right{
        width: 20%;
        display: flex;
        justify-content: flex-end;      
      }
      img {
        margin-right:5px;
        :hover { cursor: pointer; }
      }
    }
`;

export default function VideoPlayer({videoSrc}) {

  // const videoElement = useRef(null);
  // const {
  //   playerState,
  //   togglePlay,
  //   handleOnTimeUpdate,
  //   handleVideoProgress,
  //   handleVideoSpeed,
  //   toggleMute,
  // } = useVideoPlayer(videoElement);

  // HANDLE VIDEO ACTIONS
  // const []


  // REACT YOUTUBE OPTIONS
    const opts = {
      height: '400',
      width: '100%',
      // borderRadius: '32px',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };  
    const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  return (
    <VideoPlayerStyle>
        <img className="video" src={videoBG?.src} alt="Video"/>
        {/* <video
          src={videoSrc}
          // ref={videoElement}
          // onTimeUpdate={handleOnTimeUpdate}
        /> */}
        <VideoControlWrapper>
          {/* <YouTube 
            videoId="2g811Eo7K8U" 
            opts={opts} 
            onReady={onReady} 
          /> */}
          <input
            className="slider"
            type="range"
            min="0"
            max="100"
            // value={playerState.progress}
            // onChange={(e) => handleVideoProgress(e)}
          />
          <div className="video_actions_div">
            <div className="video_actions_left">
              <img src={Play?.src} alt="" />
              <img src={Rewind?.src} alt="" />
              <img src={Forward?.src} alt="" />
              <img src={Volume?.src} alt="" />
            </div>
            <div className="video_actions_right">
              <img src={Comment?.src} alt="" />
              <img src={PlaySpeed?.src} alt="" />
              <img src={FullScreen?.src} alt="" />
            </div>
          </div>
        </VideoControlWrapper>
    </VideoPlayerStyle>
  )
}