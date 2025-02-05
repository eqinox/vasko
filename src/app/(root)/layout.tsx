"use client";
import MouseFollower from "@/components/mouse-effect/mouse-follower";
import Header from "@/components/shared/header";
import { useEffect, useRef, useState } from "react";

export default function ClientLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollHeight, setScrollHeight] = useState(0);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollbarRef = useRef<HTMLDivElement | null>(null);

  const [showMouseEffect, setShowMouseEffect] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowMouseEffect(window.innerWidth >= 1024); // `lg` breakpoint in Tailwind
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateScrollHeight = () => {
      if (scrollRef.current) {
        setScrollHeight(scrollRef.current.scrollHeight);
      }
    };

    updateScrollHeight();
    window.addEventListener("resize", updateScrollHeight);

    return () => {
      window.removeEventListener("resize", updateScrollHeight);
    };
  }, []);

  useEffect(() => {
    const handleWheelScroll = (event: WheelEvent) => {
      if (!scrollRef.current || !scrollbarRef.current) return;

      // Prevent default page scroll
      event.preventDefault();

      // Scroll content and sync with the right scrollbar
      scrollRef.current.scrollTop += event.deltaY;
      scrollbarRef.current.scrollTop = scrollRef.current.scrollTop;
    };

    const syncScrollFromScrollbar = () => {
      if (scrollRef.current && scrollbarRef.current) {
        scrollRef.current.scrollTop = scrollbarRef.current.scrollTop;
      }
    };

    // Listen for scrolling events
    window.addEventListener("wheel", handleWheelScroll, { passive: false });

    // Sync when dragging the right scrollbar
    if (scrollbarRef.current) {
      scrollbarRef.current.addEventListener("scroll", syncScrollFromScrollbar);
    }

    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
      if (scrollbarRef.current) {
        scrollbarRef.current.removeEventListener(
          "scroll",
          syncScrollFromScrollbar,
        );
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Radial Mouse Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-all duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Main Wrapper */}
      <div
        ref={scrollRef}
        className="hide-scrollbar overflow-auto max-md:p-5 lg:flex lg:justify-between lg:gap-4"
      >
        <Header />

        {showMouseEffect && <MouseFollower />}
        {/* The only scrollable area */}
        <div className="relative h-screen lg:w-[52%]">
          <main className="overflow-visible pt-24 lg:py-24">{children}</main>
        </div>

        {/* Right Scrollbar (Only this one is visible) */}
        <div
          ref={scrollbarRef}
          className="fixed right-0 top-0 h-screen w-4 overflow-y-auto"
          style={{
            pointerEvents: "auto",
            scrollbarWidth: "auto",
          }}
        >
          {/* Dynamically adjust height to match content */}
          <div className="w-full" style={{ height: scrollHeight }}></div>

          {/* Custom Scrollbar for Webkit Browsers */}
          <style jsx>{`
            div::-webkit-scrollbar {
              width: 12px;
              background: transparent;
            }

            div::-webkit-scrollbar-thumb {
              background-color: #4b5563;
              border-radius: 6px;
              border: 3px solid transparent;
            }

            div::-webkit-scrollbar-thumb:hover {
              background-color: #6b7280;
            }

            div {
              scrollbar-color: #4b5563 transparent;
            }
          `}</style>
        </div>
      </div>
    </>
  );
}
