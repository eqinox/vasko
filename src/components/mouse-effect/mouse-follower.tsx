"use client";
import React, { useEffect, useState } from "react";

const MouseFollower = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [showDot, setShowDot] = useState(true); // Show dot when cursor is default
  const [isPointer, setIsPointer] = useState(false); // Track if we're over a pointer element
  const circleSize = 80;

  useEffect(() => {
    setDotPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    setCirclePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      // Instantly update the dot position
      setDotPosition({ x, y });

      // Move the circle so that the dot remains in its exact center
      setTimeout(() => {
        setCirclePosition({ x, y });
      }, 100); // Adjust delay (100-200ms) for cool transition

      // Check if the hovered element has a pointer cursor
      const element = document.elementFromPoint(x, y);
      if (element) {
        const computedStyle = window.getComputedStyle(element);
        const newIsPointer = computedStyle.cursor === "pointer";
        // If we're hovering a pointer element, show pointer and hide dot
        // Executing every time when some change happen so from dot to pointer or vice versa
        if (newIsPointer !== isPointer) {
          setIsPointer(newIsPointer);
          document.documentElement.style.cursor = newIsPointer
            ? "pointer"
            : "none";
          setShowDot(false);
        } else {
          // This is executed every time after the if is executed
          if (isPointer) {
            setShowDot(false);
            setIsPointer(true);
          } else {
            setShowDot(true);
          }
          document.documentElement.style.cursor = "none";
        }
      } else {
        // If hovering over nothing, reset cursor and show dot
        // This never execute
        setShowDot(true);
        document.documentElement.style.cursor = "none";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.style.cursor = "none"; // Restore cursor on unmount
    };
  }, [isPointer]);

  return (
    <>
      {/* Small dot as default cursor (hidden when hovering over pointer elements) */}
      {showDot && (
        <div
          style={{
            position: "fixed",
            left: dotPosition.x,
            top: dotPosition.y,
            transform: "translate(-50%, -50%)",
            width: "8px",
            height: "8px",
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 10000,
          }}
        />
      )}

      {/* Smooth trailing circle (always follows the dot) */}
      <div
        style={{
          position: "fixed",
          left: circlePosition.x,
          top: circlePosition.y,
          transform: "translate(-50%, -50%)",
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          border: "2px solid rgba(255, 255, 255, 0.7)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default MouseFollower;
