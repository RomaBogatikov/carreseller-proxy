import React, { Component } from 'react';
import styled from 'styled-components';

// const StyledLoadingRing = styled.div`
//   --offset: 187;
//   --duration: 1.4s;

//   .spinner {
//     animation: rotator var(- duration) linear infinite;
//   }

//   @keyframes rotator {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(270deg); }
//   }

//   .path {
//     stroke-dasharray: var(- offset);
//     stroke-dashoffset: 0;
//     transform-origin: center;
//     animation:
//       dash $duration ease-in-out infinite,
//       colors (var(- duration)*4) ease-in-out infinite;
//   }

//   @keyframes colors {
//     0% { stroke: #4285F4; }
//     25% { stroke: #DE3E35; }
//     50% { stroke: #F7C223; }
//     75% { stroke: #1B9A59; }
//     100% { stroke: #4285F4; }
//   }

//   @keyframes dash {
//    0% { stroke-dashoffset: var(- offset); }
//    50% {
//      stroke-dashoffset: var(- offset)/4;
//      transform:rotate(135deg);
//    }
//    100% {
//      stroke-dashoffset: var(- offset);
//      transform:rotate(450deg);
//    }
//   }

//   & {
//     display: flex;
//     flex-flow: column;
//     justify-content: center;
//     align-items: center;
//     height: 55vh;
//   }
// `

const LoadingRing = (props) => {
  return (
    <div className="loadingRingContainer">
      <div>Loading...</div>
      <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
    </div>
  )
}

export default LoadingRing;
