/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import Script from 'next/script';
import { useState } from 'react';

declare const confetti: (config: any) => void;

export default function Home() {
  const [isConfettiScriptLoading, setIsConfettiScriptLoading] = useState(true);

  function triggerConfetti() {
    // @ts-ignore
    const confettiA = confetti.shapeFromPath({
      path: 'M27.9856 0.638649L17.5965 4.56622C18.3756 6.68959 24.52 25.6794 0.848906 37.5998L5.84415 47.5156C32.4025 34.144 31.9399 11.0077 27.9856 0.638649Z',
    });

    // @ts-ignore
    const confettiB = confetti.shapeFromPath({
      path: 'M21.2959 10.9868C21.2959 16.7548 16.6199 21.4321 10.8506 21.4321C5.08261 21.4321 0.405273 16.7548 0.405273 10.9868C0.405273 5.21747 5.08261 0.540121 10.8506 0.540121C16.6199 0.540121 21.2959 5.21747 21.2959 10.9868Z',
    });

    // @ts-ignore
    const confettiC = confetti.shapeFromPath({
      path: 'M12.7311 19.1601L7.96768 21.0254L0.707275 2.49873L5.46981 0.632065L12.7311 19.1601Z',
    });

    confetti({
      shapes: [confettiA, confettiB, confettiC],
      spread: 100,
      colors: [
        '#CFFCF7',
        '#7CDCD8',
        '#FFCE45',
        '#FE5E9A',
        '#65EF82',
        '#B67DDB',
      ],
      scalar: 2,
      startVelocity: 55,
    });
  }

  return (
    <>
      <Script
        src='https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/dist/confetti.browser.min.js'
        onLoad={() => {
          setIsConfettiScriptLoading(false);
        }}
      />

      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <button
          className='h-12 w-32 rounded border-[1px] border-white text-xl hover:cursor-pointer disabled:opacity-50'
          onClick={triggerConfetti}
          disabled={isConfettiScriptLoading}
        >
          🎉 🎉 🎉
        </button>
      </main>
    </>
  );
}
