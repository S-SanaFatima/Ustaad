import { motion, useReducedMotion } from 'motion/react';

type TypewriterHeadingTextProps = {
  text: string;
  highlightLastWord?: boolean;
  charDelay?: number;
  delay?: number;
  className?: string;
};

export const TypewriterHeadingText = ({
  text,
  highlightLastWord = true,
  charDelay = 0.05,
  delay = 0,
  className,
}: TypewriterHeadingTextProps) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    if (!highlightLastWord) {
      return <span className={className}>{text}</span>;
    }
    const words = text.split(' ');
    const lastWord = words.pop() || '';
    return (
      <span className={className}>
        {words.join(' ')}{words.length ? ' ' : ''}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79]">
          {lastWord}
        </span>
      </span>
    );
  }
  const words = text.split(' ');
  const lastWord = highlightLastWord ? words.pop() || '' : '';
  const firstPart = highlightLastWord ? text.substring(0, text.length - lastWord.length) : text;

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: charDelay, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0 } },
  };

  const renderChars = (value: string, keyPrefix: string, gradient = false) =>
    value.split('').map((char, index) => (
      <motion.span
        key={`${keyPrefix}-${index}`}
        variants={child}
        className={gradient ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79]' : undefined}
      >
        {char}
      </motion.span>
    ));

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {renderChars(firstPart, 'main')}
      {highlightLastWord && renderChars(lastWord, 'last', true)}
    </motion.span>
  );
};
