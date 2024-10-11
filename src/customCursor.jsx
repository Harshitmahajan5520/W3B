import React, { useEffect, useState } from "react";
import "./App.css"; // Tailwind is imported via index.css

const CustomCursor = () => {
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  const [circles, setCircles] = useState(
    Array(8).fill({ x: 0, y: 0 }) // 8 circles
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoord({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateCircles = () => {
      let newCircles = [...circles];
      let x = coord.x;
      let y = coord.y;

      newCircles = newCircles.map((circle, index) => {
        // Move the circle towards the current mouse coordinates
        let updatedCircle = { ...circle };
        updatedCircle.x = x - 12; // Offset to center the circles
        updatedCircle.y = y - 12;

        // Get the next circle or wrap around to the first circle
        const nextCircle = newCircles[index + 1] || newCircles[0];

        // Smooth transition towards the next circle's position
        x += (nextCircle.x - x) * 0.4;
        y += (nextCircle.y - y) * 0.4;

        return updatedCircle;
      });

      setCircles(newCircles);
    };

    const interval = setInterval(animateCircles, 20); // Smooth the animation
    return () => clearInterval(interval);
  }, [coord, circles]);

  return (
    <>
      {circles.map((circle, index) => (
        <div
          key={index}
          className="circle absolute rounded-full bg-black pointer-events-none"
          style={{
            left: `${circle.x}px`,
            top: `${circle.y}px`,
            transform: `scale(${1 - index * 0.1})`, // Scale decreases for each circle
          }}
        ></div>
      ))}
    </>
  );
};


export default CustomCursor;
