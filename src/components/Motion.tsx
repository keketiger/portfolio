import { motion, type Variants } from 'framer-motion';

const fadeInFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export function MotionSection({
  children,
  className,
  id
}: {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={fadeInFromLeft}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}