import { useState, useEffect } from "react";

const useCounter = (initialValue = 0, intervalSeconds = 1) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    if (count > 0) {
      const interval = setInterval(() => {
        setCount(prev => (prev > 0 ? prev - 1 : 0));
      }, intervalSeconds * 1000);

      return () => clearInterval(interval);
    }
  }, [count, intervalSeconds]);

  const reset = () => setCount(initialValue);

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  return { minutes, seconds, reset };
};

export { useCounter };
