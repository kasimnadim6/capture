export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: "0.25",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1 },
  },
};

export const titleAnimation = {
  hidden: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export const fade = {
  hidden: { opacity: 0, transition: { duration: 0.75 } },
  show: { opacity: 1, transition: { duration: 0.75 } },
};
export const photoAnimation = {
  hidden: { opacity: 0, scale: 1.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75 },
  },
};
export const lineAnimation = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1 } },
};
export const slider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: { x: "100%", skew: "0deg", transition: { duration: 0.7 } },
};
export const sliderContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: "0.1",
      ease: "easeOut",
    },
  },
};
export const scrollRevealAnimation = {
  hidden: { opacity: 0, scale: 0.7, transition: { duration: 1 } },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
