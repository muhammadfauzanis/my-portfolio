// animations.js

export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 30,
    skew: 10, // Skew for depth
    filter: 'blur(10px)', // Initial blur effect
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    skew: 0,
    rotate: 0,
    filter: 'blur(0px)', // Clear blur for clarity
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.2, 0.95], // Smoother easing for a more natural feel
    },
  },
  out: {
    opacity: 0,
    scale: 1.1, // Slightly scale up on exit for a pop effect
    y: -30,
    skew: -5, // Slight skew to add depth on exit
    filter: 'blur(10px)', // Blur effect on exit
    transition: {
      duration: 0.8,
      ease: [0.4, 0.0, 0.2, 1], // Easing for a smooth exit
    },
  },
};
