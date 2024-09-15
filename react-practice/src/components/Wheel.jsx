import { useEffect, useMemo, useState, useRef } from "react";
import tickingSound from "/spin-wheel-sound.mp3?url";
import "../css/wheel.css";

const ticTicSound =
  typeof window !== "undefined" ? new Audio(tickingSound) : new Audio();

export const SpinWheel = ({
  segments,
  onFinished,
  primaryColor = "black",
  contrastColor = "white",
  buttonText = "Spin",
  isOnlyOnce = true,
  size = 290,
  upDuration = 100,
  downDuration = 600,
  fontFamily = "Arial",
  arrowLocation = "center",
  showTextOnSpin = false,
  isSpinSound = true,
}) => {
  const canvasRef = useRef(null);
  const wheelRef = useRef(null);
  // Separate arrays without nullish values
  const segmentTextArray = segments
    .map((segment) => segment.segmentText)
    .filter(Boolean);
  const segColorArray = segments
    .map((segment) => segment.segColor)
    .filter(Boolean);

  const [isFinished, setFinished] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [needleText, setNeedleText] = useState("");

  let currentSegment = "";
  let timerHandle = 0;
  const timerDelay = segmentTextArray.length;
  let angleCurrent = 0;
  let angleDelta = 0;
  let canvasContext = null;
  let maxSpeed = Math.PI / segmentTextArray.length;
  const upTime = segmentTextArray.length * upDuration;
  const downTime = segmentTextArray.length * downDuration;
  let spinStart = 0;
  const centerX = size;
  const centerY = size;

  useEffect(() => {
    wheelInit();
    setTimeout(() => {
      window.scrollTo(0, 1);
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const wheelInit = () => {
    initCanvas();
    wheelDraw();
  };

  const initCanvas = () => {
    const canvas = canvasRef.current;

    if (!canvas) {
      // Create a new canvas if it doesn't exist
      canvas.setAttribute("width", `${size * 2}`);
      canvas.setAttribute("height", `${size * 2}`);
    }
    canvasContext = canvas.getContext("2d");

    canvas.style.borderRadius = "50%"; // Set border radius for a circular shape

    canvas?.addEventListener("click", spin, false);
  };

  const spin = () => {
    setIsStarted(true);
    if (timerHandle === 0) {
      spinStart = new Date().getTime();
      maxSpeed = Math.PI / segmentTextArray.length;
      timerHandle = setInterval(onTimerTick, timerDelay);
    }
  };

  const onTimerTick = () => {
    wheelDraw();
    const duration = new Date().getTime() - spinStart;
    let progress = 0;
    let finished = false;

    if (duration < upTime) {
      progress = duration / upTime;
      angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2);
    } else {
      progress = duration / downTime;
      angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2);
      if (progress >= 1) finished = true;
    }

    angleCurrent += angleDelta;
    while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2;
    if (finished) {
      setFinished(true);
      onFinished(currentSegment);
      clearInterval(timerHandle);
      timerHandle = 0;
      angleDelta = 0;
      ticTicSound.pause(); // Pause tic-tic sound when the wheel stops spinning
      ticTicSound.currentTime = 0; // Reset the tic-tic sound to the beginning
    }
  };

  useMemo(() => {
    ticTicSound.currentTime = 0;
    if (needleText && isSpinSound && isStarted) {
      ticTicSound.play();
    } else {
      ticTicSound.pause(); // Pause tic-tic sound when the wheel stops spinning
      ticTicSound.currentTime = 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needleText, isSpinSound]);

  const wheelDraw = () => {
    clear();
    drawWheel();
    drawNeedle();
  };

  const drawSegment = (key, lastAngle, angle) => {
    const ctx = canvasContext;
    const value = segmentTextArray[key];
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, size, lastAngle, angle, false);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.fillStyle = segColorArray[key];
    ctx.fill();
    ctx.stroke();
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((lastAngle + angle) / 2);
    ctx.fillStyle = contrastColor;
    ctx.font = "bold 1em " + fontFamily;
    ctx.fillText(value.substring(0, 21), size / 2 + 20, 0);
    ctx.restore();
  };

  const drawWheel = () => {
    const ctx = canvasContext;
    let lastAngle = angleCurrent;
    const len = segmentTextArray.length;
    const PI2 = Math.PI * 2;
    ctx.lineWidth = 1;
    ctx.strokeStyle = primaryColor;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.font = "1em " + fontFamily;
    for (let i = 1; i <= len; i++) {
      const angle = PI2 * (i / len) + angleCurrent;
      drawSegment(i - 1, lastAngle, angle);
      lastAngle = angle;
    }

    // Draw a center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, PI2, false);
    ctx.closePath();
    ctx.fillStyle = primaryColor;
    ctx.lineWidth = 2;
    ctx.strokeStyle = contrastColor;
    ctx.fill();
    ctx.font = "bold 1em " + fontFamily;
    ctx.fillStyle = contrastColor;
    ctx.textAlign = "center";
    ctx.fillText(buttonText, centerX, centerY + 3);
    ctx.stroke();

    // Draw outer circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, PI2, false);
    ctx.closePath();

    ctx.lineWidth = 4;
    ctx.strokeStyle = primaryColor;
    ctx.stroke();
  };

  const drawNeedle = () => {
    const ctx = canvasContext;
    ctx.lineWidth = 1;
    ctx.strokeStyle = contrastColor;
    ctx.fileStyle = contrastColor;
    ctx.beginPath();

    if (arrowLocation === "top") {
      ctx.moveTo(centerX + 20, centerY / 15);
      ctx.lineTo(centerX - 20, centerY / 15);
      ctx.lineTo(centerX, centerY - centerY / 1.35);
    } else {
      ctx.moveTo(centerX + 20, centerY - 30);
      ctx.lineTo(centerX - 20, centerY - 30);
      ctx.lineTo(centerX, centerY - centerY / 2.5);
    }

    ctx.closePath();
    ctx.fill();
    const change = angleCurrent + Math.PI / 2;
    let i =
      segmentTextArray.length -
      Math.floor((change / (Math.PI * 2)) * segmentTextArray.length) -
      1;
    if (i < 0) i = i + segmentTextArray.length;
    else if (i >= segmentTextArray.length) i = i - segmentTextArray.length;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = primaryColor;
    ctx.font = "bold 1.5em " + fontFamily;
    currentSegment = segmentTextArray[i];
    setNeedleText(segmentTextArray[i]);
  };

  const clear = () => {
    const ctx = canvasContext;
    ctx.clearRect(0, 0, size * 2, size * 2);
  };

  return (
    <div ref={wheelRef}>
      <canvas
        ref={canvasRef}
        width={size * 2}
        height={size * 2}
        style={{
          pointerEvents: isFinished && isOnlyOnce ? "none" : "auto",
        }}
      />
      {showTextOnSpin && isStarted && (
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            fontWeight: "bold",
            fontSize: "1.5em",
            fontFamily: fontFamily,
          }}
        >
          {needleText}
        </div>
      )}
    </div>
  );
};
