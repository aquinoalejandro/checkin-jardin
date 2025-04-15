"use client"
import React, { useRef, useEffect } from 'react';
import QRCode from 'qrcode';

const QRCodeCanvas = ({ text }: { text: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    QRCode.toCanvas(canvasRef.current, text, { errorCorrectionLevel: 'H' }, (err) => {
      if (err) console.error(err);
    });
  }, [text]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default QRCodeCanvas;
