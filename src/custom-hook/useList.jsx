import { useState, useEffect } from 'react';
import { generateRandomId } from '../lib/utils';

const useList = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const updateArray = (newList) => {
    setItems(newList);
    localStorage.setItem('bucketList', JSON.stringify(newList));
  };

  useEffect(() => {
    const storedArray = localStorage.getItem('bucketList');
    if (storedArray) {
      setItems(JSON.parse(storedArray));
    }
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (inputValue.trim() !== '') {
        const randomId = generateRandomId(); // Assuming generateRandomId function exists
        const newItem = { id: randomId, check: false, name: inputValue.trim() };
        setItems([...items, newItem]);
        setInputValue('');
        updateArray([...items, newItem]);
      }
    }
  };

  const handleToggleCheck = (id) => {
    const updatedArray = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          check: !item.check,
        };
      }
      return item;
    });
    setItems(updatedArray);
    updateArray(updatedArray);
  };

  const handleDeleteItem = (id) => {
    const updatedArray = items.filter((item) => item.id !== id);
    setItems(updatedArray);
    updateArray(updatedArray);
  };

  const sortedArray = [...items].sort((a, b) => {
    if (a.check === b.check) {
      return 0;
    }
    return a.check ? 1 : -1;
  });

  return {
    inputValue,
    items: sortedArray,
    handleInputChange,
    handleKeyPress,
    handleToggleCheck,
    handleDeleteItem
  };
};


export default useList;