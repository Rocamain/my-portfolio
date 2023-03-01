import { useState, useEffect } from 'react';
import useConfettiSize from '../../../hooks/useConfettiSize';
import Confetti from 'react-confetti';

export default function Confirmation() {
  const { width, height, top } = useConfettiSize();
  const [recycle, setRecycle] = useState(true);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setRecycle(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {active && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={400}
          initialVelocityY={11}
          recycle={recycle}
          confettiSource={{ x: 0, y: 0, w: width, h: 0 }}
          onConfettiComplete={() => setActive(false)}
          style={{ top: top }}
        />
      )}
      <div className="flex__j_center gap-1" style={{ flexDirection: 'column' }}>
        <h3>Form sent!!</h3>
        <h3>We will be in touch soon.</h3>
      </div>
    </>
  );
}
