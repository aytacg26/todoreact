import { useState, useEffect } from 'react';

const useValidate = (element, value) => {
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const { current } = element;
    let timer;
    const checkIsEmpty = (e) => {
      const checkProcess = () => {
        if (current.value.trim().length > 0) {
          setIsEmpty(false);
        } else {
          if (e.key !== 'Tab') {
            setIsEmpty(true);
          }
        }
      };

      if (e.type !== 'keyup') {
        checkProcess();
      } else {
        setIsEmpty(false);
        timer = setTimeout(() => {
          checkProcess();
        }, 500);
      }
    };

    current.addEventListener('blur', checkIsEmpty);
    current.addEventListener('keyup', checkIsEmpty);

    return () => {
      current.removeEventListener('blur', checkIsEmpty);
      current.removeEventListener('keyup', checkIsEmpty);
      clearTimeout(timer);
    };
  }, [value, element]);

  return { isEmpty };
};

export default useValidate;
