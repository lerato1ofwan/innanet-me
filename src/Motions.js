export const easing = [0.6, -0.05, 0.01, 0.99]

export const opacity = {
    initial: { 
        opacity: 0 
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5
        }
    }
}

export const secondOpacity = {
    initial: { 
        opacity: 0 
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 1
        }
    }
}

export const fadeInUp = {
    initial: {
        y: -60,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing
        }
    }
}

export const yfadeInUp = {
    hidden: { y: 60, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: easing,
        staggerChildren: 0.4,
        duration: 0.4
      }
    }
  };
  
export const stagger = {
    hidden: { 
        y: 60, 
        opacity: 0 
    },
    show: { 
        y: 0, 
        opacity: 1 
    }
};