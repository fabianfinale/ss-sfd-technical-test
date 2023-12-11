import { useState, useEffect } from 'react';

const useTruncate = (text: string, maxLength: number) => {
  const [truncatedText, setTruncatedText] = useState(text);

  useEffect(() => {
    if (text.length > maxLength) {
      const truncated = text.substring(0, maxLength - 3) + '...';
      setTruncatedText(truncated);
    } else {
      setTruncatedText(text);
    }
  }, [text, maxLength]);

  return truncatedText;
};

export default useTruncate;
