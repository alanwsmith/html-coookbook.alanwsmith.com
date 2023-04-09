// this started from here: 
// https://css-tricks.com/making-an-audio-waveform-visualizer-with-vanilla-javascript/


window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
let currentBuffer = null;

const init = () => {
  visualizeAudio("sample.mp3")
}


const visualizeAudio = url => {
  fetch(url)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
    .then(audioBuffer => visualize(audioBuffer));
};


const visualize = (audioBuffer) => {
  const filteredData = filterData(audioBuffer)
  const normalizedData = normalizeData(filteredData)
  draw(normalizedData)

}


const filterData = audioBuffer => {
  const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
  const samples = 1000; // Number of samples we want to have in our final data set
  const blockSize = Math.floor(rawData.length / samples); // the number of samples in each subdivision
  const filteredData = [];
  for (let i = 0; i < samples; i++) {
    let blockStart = blockSize * i; // the location of the first sample in the block
    let sum = 0;
    for (let j = 0; j < blockSize; j++) {
      sum = sum + Math.abs(rawData[blockStart + j]) // find the sum of all the samples in the block
    }
    filteredData.push(sum / blockSize); // divide the sum by the block size to get the average
  }
  return filteredData;
}

const normalizeData = filteredData => {
  const multiplier = Math.pow(Math.max(...filteredData), -1);
  return filteredData.map(n => n * multiplier);
}

const drawLineSegment = (ctx, x, y, width, isEven) => {
  ctx.lineWidth = 1; // how thick the line is
  ctx.strokeStyle = "#fff"; // what color our line is
  ctx.beginPath();
  y = isEven ? y : -y;
  ctx.moveTo(x, 0);
  ctx.lineTo(x, y);
  ctx.arc(x + width / 2, y, width / 2, Math.PI, 0, isEven);
  ctx.lineTo(x + width, 0);
  ctx.stroke();
};


const draw = normalizedData => {
  // Set up the canvas
  const canvas = document.querySelector("canvas");
  const dpr = window.devicePixelRatio || 1;
  const padding = 0;
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = (canvas.offsetHeight + padding * 2) * dpr;
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  ctx.translate(0, canvas.offsetHeight / 2 + padding); // Set Y = 0 to be in the middle of the canvas
  // draw the line segments
  const width = canvas.offsetWidth / normalizedData.length;
  for (let i = 0; i < normalizedData.length; i++) {
    const x = width * i;
    let height = normalizedData[i] * canvas.offsetHeight - padding;
    if (height < 0) {
        height = 0;
    } else if (height > canvas.offsetHeight / 2) {
        height = height > canvas.offsetHeight / 2;
    }
    drawLineSegment(ctx, x, height, width, (i + 1) % 2);
  }
};




// const filterData = audioBuffer => {
//   const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
//   const samples = 70; // Number of samples we want to have in our final data set
//   const blockSize = Math.floor(rawData.length / samples); // Number of samples in each subdivision
//   const filteredData = [];
//   for (let i = 0; i < samples; i++) {
//     filteredData.push(rawData[i * blockSize]); 
//   }
//   return filteredData;
// }




// let analyser;
// let ctx;
// let dataArray;
// let width = 600;
// let height = 400;
// let bufferLength;
// let canvas;


// const init = () => {
//   canvas = document.querySelector('canvas');
//   ctx = canvas.getContext('2d');
//   ctx.fillStyle = 'green';
//   ctx.fillRect(0, 0, width, height);
//   loadTrack();
// }

//async function loadTrack() {
//  const audioCtx = new AudioContext();
//  analyser = audioCtx.createAnalyser();
//  const response = await fetch("sample.mp3");
//  const arrayBuffer = await response.arrayBuffer();
//  const track = await audioCtx.decodeAudioData(arrayBuffer);
//  // const source = new AudioBufferSourceNode(audioCtx, {
//  //   buffer: track
//  // });
//  // analyser.fftSize = 2048;
//  // bufferLength = analyser.frequencyBinCount;
//  // dataArray = new Uint8Array(bufferLength);
//   //draw();
//}


// const filterData = audioBuffer => {
//   const rawData = audioBuffer.getChannelData(0); // We only need to work with one channel of data
//   const samples = 70; // Number of samples we want to have in our final data set
//   const blockSize = Math.floor(rawData.length / samples); // Number of samples in each subdivision
//   const filteredData = [];
//   for (let i = 0; i < samples; i++) {
//     filteredData.push(rawData[i * blockSize]); 
//   }
//   return filteredData;
// }



// function draw() {
//   // const drawVisual = requestAnimationFrame(draw);
//   // analyser.getByteTimeDomainData(dataArray);
//   // ctx.fillStyle = "rgb(200, 200, 200)";
//   // ctx.fillRect(0, 0, width, height);
//   // ctx.lineWidth = 2;
//   // ctx.strokeStyle = "rgb(0, 0, 0)";
//   // ctx.beginPath();
//   // const sliceWidth = width / bufferLength;
//   // let x = 0;
//   // for (let i = 0; i < bufferLength; i++) {
//   //   const v = dataArray[i] / 128.0;
//   //   const y = v * (height / 2);
//   //   if (i === 0) {
//   //     ctx.moveTo(x, y);
//   //   } else {
//   //     ctx.lineTo(x, y);
//   //   }
//   //   x += sliceWidth;
//   //   ctx.lineTo(width, height / 2);
//   //   ctx.stroke();
//   // }
// }


// track.gainNode = state.audioCtx.createGain();
// track.analyserNode = state.audioCtx.createAnalyser();
// track.analyserNode.fftSize = 2048;
// track.bufferLength = track.analyserNode.frequencyBinCount;
// track.dataArray = new Uint8Array(track.bufferLength);
// track.source.connect(track.gainNode).connect(state.audioCtx.destination);
// state.numberOfTracksLoaded += 1
// if (state.numberOfTracksLoaded == tracks.length) {
//   window.startButton.addEventListener("click", play);
//   window.startButton.innerHTML = "Play";
// }


document.addEventListener('DOMContentLoaded', init)
