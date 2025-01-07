import { useEffect, useRef } from "react";

const Plane = ({ className }) => (
  <svg className={className} viewBox="0 0 307 257" fill="currentColor">
    <path d="M84.5 1c-2.2.4-3.5.8-3 .9.6.1.3.6-.5 1.1-1.3.8-1.3 1 .1 1 1.1 0 4.1 5.4 9.4 17.2 4.4 9.5 7.9 18.2 7.9 19.4.1 2.8 16.7 39.6 18.5 41 1 .8 1.6 3.3 1.7 8 .1 3.8.5 10.8.9 15.5l.8 8.6-25.4.6c-16.5.4-28.2 1.1-33.4 2.1-4.4.9-8.6 1.6-9.2 1.6-.7 0-6.7-7.3-13.4-16.3-6.7-8.9-12.9-16.8-13.7-17.5-1.4-1.1-12.2-1.8-12.2-.8 0 .2 2 8.6 4.5 18.7 2.4 10.1 4.3 18.3 4.2 18.4-.1.1-1.4.9-2.9 1.8-1.5.9-3.5 1.7-4.5 1.7-2.4.1-12.8 3.7-12.8 4.5 0 .8 10.4 4.4 12.8 4.5 1 0 3 .8 4.5 1.7 1.5.9 2.8 1.7 2.9 1.8.1.1-1.8 8.3-4.2 18.4-2.5 10.1-4.5 18.5-4.5 18.7 0 1 10.8.3 12.2-.9.8-.6 7-8.5 13.7-17.5 6.7-8.9 12.7-16.2 13.4-16.2.6 0 4.8.7 9.2 1.6 5.2 1 16.9 1.7 33.4 2.1l25.4.6-.8 8.6c-.4 4.7-.8 11.7-.9 15.5-.1 4.7-.7 7.2-1.7 8-1.8 1.4-18.4 38.2-18.5 41 0 1.2-3.5 9.9-7.9 19.3-5.3 11.9-8.3 17.3-9.4 17.3-1.4 0-1.4.2-.1 1 .8.5 1.1 1 .5 1.1-.5.1 1 .5 3.5.9 3.7.6 5.3.3 9.4-1.7 5.8-2.9 3.3-.1 37.9-43.7 17.3-21.8 28.6-35.2 29.8-35.4 1.1-.2 2.7.2 3.5.9 2 1.7 16.2 2.4 19.7 1 2.7-1 2.8-1.3 2.5-7.3l-.3-6.3-8.2-.3c-4.6-.2-8.3-.5-8.3-.7 0-1 11.4-14.5 12.2-14.5.4 0 .8-.5.8-1.1 0-.7-1-.9-2.7-.4-2.3.5-2.6.4-1.5-.7 1-1 11.1-1.4 47-1.9 45-0.6 45.9-.7 56.7-3.3 31-7.4 31-16.8 0-24.2-10.8-2.6-11.7-2.7-56.7-3.3-35.9-.5-46-.9-47-1.9-1.1-1.1-.8-1.2 1.5-.7 1.7.5 2.7.3 2.7-.4 0-.6-.4-1.1-.8-1.1-.8 0-12.2-13.5-12.2-14.5 0-.2 3.7-.5 8.3-.7l8.2-.3.3-6.3c.3-6 .2-6.3-2.5-7.3-3.5-1.4-17.7-.7-19.7 1-.8.7-2.4 1.1-3.5.9-1.2-.2-12.5-13.6-29.8-35.4-34.6-43.7-32.1-40.7-38.1-43.8-2.8-1.4-5.3-2.5-5.4-2.5-.2.1-2.1.5-4.3.9z" />
  </svg>
);

export default function ParallaxBackground() {
  const containerRef = useRef(null);
  const planesRef = useRef([]);
  const contrailsRef = useRef([]);

  // Flight paths with different altitudes and patterns
  const planes = [
    {
      delay: 0,
      duration: 40,
      scale: 1.2,
      path: "cubic-bezier(0.4, 0, 0.2, 1)",
      color: "accent-purple",
      altitude: "high",
      contrailLength: 150,
    },
    {
      delay: 8,
      duration: 35,
      scale: 0.9,
      path: "cubic-bezier(0.3, 0, 0.7, 1)",
      color: "accent-blue",
      altitude: "medium",
      contrailLength: 120,
    },
    {
      delay: 15,
      duration: 45,
      scale: 1.1,
      path: "cubic-bezier(0.6, 0, 0.4, 1)",
      color: "accent-pink",
      altitude: "low",
      contrailLength: 180,
    },
  ];

  useEffect(() => {
    let animationFrame;
    let startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      // Animate planes and contrails
      planesRef.current.forEach((plane, index) => {
        if (!plane) return;

        const planeConfig = planes[index];
        const baseProgress =
          ((elapsed + planeConfig.delay * 1000) %
            (planeConfig.duration * 1000)) /
          (planeConfig.duration * 1000);

        // Calculate flight paths based on altitude
        let x, y, rotation;

        switch (planeConfig.altitude) {
          case "high":
            x = Math.cos(baseProgress * Math.PI * 2) * 70;
            y =
              Math.sin(baseProgress * Math.PI * 3) * 15 +
              Math.sin(elapsed * 0.0002) * 5;
            rotation =
              Math.atan2(
                Math.cos(baseProgress * Math.PI * 3),
                -Math.sin(baseProgress * Math.PI * 2)
              ) *
              (180 / Math.PI);
            break;
          case "medium":
            x = Math.sin(baseProgress * Math.PI * 3) * 60;
            y =
              Math.cos(baseProgress * Math.PI * 2) * 25 +
              Math.sin(elapsed * 0.0003) * 8;
            rotation =
              Math.atan2(
                Math.sin(baseProgress * Math.PI * 2),
                Math.cos(baseProgress * Math.PI * 3)
              ) *
              (180 / Math.PI);
            break;
          case "low":
            x = Math.sin(baseProgress * Math.PI * 2) * 50;
            y =
              Math.cos(baseProgress * Math.PI * 4) * 20 +
              Math.sin(elapsed * 0.0004) * 10;
            rotation =
              Math.atan2(
                Math.cos(baseProgress * Math.PI * 4),
                Math.sin(baseProgress * Math.PI * 2)
              ) *
              (180 / Math.PI);
            break;
        }

        // Add subtle wind effect
        const windEffect = Math.sin(elapsed * 0.001 + index) * 2;
        y += windEffect;

        // Update plane position
        plane.style.transform = `
          translate3d(${x}vw, ${y}vh, ${index * 50}px)
          rotate(${rotation}deg)
          scale(${planeConfig.scale})
        `;

        // Update contrail with more opacity
        const contrail = contrailsRef.current[index];
        if (contrail) {
          contrail.style.transform = `
            translate3d(${x}vw, ${y}vh, ${index * 50}px)
            rotate(${rotation}deg)
          `;
          contrail.style.width = `${planeConfig.contrailLength}px`;
          contrail.style.opacity = (1 - baseProgress) * 0.5;
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div ref={containerRef} className="w-full h-full">
        {/* Enhanced Ellipse Pattern */}
        <div className="absolute inset-0">
          <svg width="100%" height="100%" className="opacity-30">
            <defs>
              <linearGradient
                id="ellipseGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "rgb(120, 87, 255)", stopOpacity: 0.3 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "rgb(59, 130, 246)", stopOpacity: 0.3 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "rgb(236, 72, 153)", stopOpacity: 0.3 }}
                />
              </linearGradient>
            </defs>
            <ellipse
              cx="50%"
              cy="50%"
              rx="40%"
              ry="30%"
              stroke="url(#ellipseGradient)"
              strokeWidth="0.8"
              fill="none"
              className="animate-spin-slow"
              style={{ transformOrigin: "center" }}
            />
            <ellipse
              cx="50%"
              cy="50%"
              rx="35%"
              ry="25%"
              stroke="url(#ellipseGradient)"
              strokeWidth="0.8"
              fill="none"
              className="animate-spin-slow"
              style={{
                transformOrigin: "center",
                animationDirection: "reverse",
              }}
            />
            <ellipse
              cx="50%"
              cy="50%"
              rx="45%"
              ry="35%"
              stroke="url(#ellipseGradient)"
              strokeWidth="0.5"
              fill="none"
              className="animate-spin-slower"
              style={{ transformOrigin: "center" }}
              opacity="0.2"
            />
            <ellipse
              cx="50%"
              cy="50%"
              rx="30%"
              ry="20%"
              stroke="url(#ellipseGradient)"
              strokeWidth="0.5"
              fill="none"
              className="animate-spin-slower"
              style={{
                transformOrigin: "center",
                animationDirection: "reverse",
              }}
              opacity="0.2"
            />
          </svg>
        </div>

        {/* Cloud Layers */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent animate-float"
            style={{ animationDuration: "20s" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-transparent via-accent-blue/5 to-transparent animate-float"
            style={{ animationDuration: "15s", animationDelay: "5s" }}
          />
        </div>

        {/* Enhanced Particles */}
        <div className="absolute inset-0">
          {/* Large particles */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`large-${i}`}
              className={`absolute rounded-full animate-float ${
                i % 3 === 0
                  ? "bg-accent-purple/15"
                  : i % 3 === 1
                  ? "bg-accent-blue/15"
                  : "bg-accent-pink/15"
              }`}
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${15 + Math.random() * 15}s`,
                animationDelay: `${Math.random() * -15}s`,
                transform: `translateZ(${Math.random() * 20}px)`,
              }}
            />
          ))}

          {/* Medium particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={`medium-${i}`}
              className={`absolute rounded-full animate-float ${
                i % 3 === 0
                  ? "bg-accent-purple/10"
                  : i % 3 === 1
                  ? "bg-accent-blue/10"
                  : "bg-accent-pink/10"
              }`}
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * -10}s`,
                transform: `translateZ(${Math.random() * 10}px)`,
              }}
            />
          ))}

          {/* Small particles */}
          {[...Array(100)].map((_, i) => (
            <div
              key={`small-${i}`}
              className={`absolute rounded-full animate-float ${
                i % 3 === 0
                  ? "bg-accent-purple/5"
                  : i % 3 === 1
                  ? "bg-accent-blue/5"
                  : "bg-accent-pink/5"
              }`}
              style={{
                width: "1px",
                height: "1px",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * -5}s`,
                transform: `translateZ(${Math.random() * 5}px)`,
              }}
            />
          ))}
        </div>

        {/* Contrails */}
        {planes.map((plane, index) => (
          <div
            key={`contrail-${index}`}
            ref={(el) => (contrailsRef.current[index] = el)}
            className="absolute origin-right"
            style={{
              height: "1.5px",
              background: `linear-gradient(to left, transparent, var(--tw-gradient-from))`,
              "--tw-gradient-from": `rgb(var(--${plane.color}-rgb) / 0.2)`,
            }}
          />
        ))}

        {/* Flying Planes */}
        {planes.map((plane, index) => (
          <div
            key={`plane-${index}`}
            ref={(el) => (planesRef.current[index] = el)}
            className="absolute transition-transform duration-200 perspective-1000"
            style={{
              willChange: "transform",
              transformStyle: "preserve-3d",
            }}
          >
            <Plane className={`w-8 h-8 text-${plane.color}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
