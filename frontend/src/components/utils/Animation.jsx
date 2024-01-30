import { React, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const RevealBar = ({ children, width = "fit-content", delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: 75 },
          visible: { opacity: 1, translateY: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn"}}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--color-1)",
        }}
      />
    </div>
  );
};

export const RevealX = ({
  children,
  width = "fit-content",
  translateX,
  duration,
  delay,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  //const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      //slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, translateX: translateX },
          visible: { opacity: 1, translateX: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, ease: "easeIn", delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const RevealY = ({
  children,
  width = "fit-content",
  translateY,
  delay,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  //const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      //slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref}>
      {" "}
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: translateY },
          visible: { opacity: 1, translateY: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, ease: "easeIn", delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
