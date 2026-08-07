export const GradientHeadingText = ({ text }: { text: string }) => {
  const words = text.split(' ');
  const lastWord = words.pop();
  return (
    <>{words.join(' ')}{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79]">{lastWord}</span></>
  );
};
