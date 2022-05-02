import { useState } from 'react';

export function useCounter() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return {
    currentIndex,
    setCurrentIndex
  };
}
