import { encryptData, decryptData } from './encryption';

// LocalStorage'a veri kaydetme
export const saveToStorage = (key, value) => {
  const encryptedValue = encryptData(value);
  localStorage.setItem(key, encryptedValue);
};

// LocalStorage'dan veri okuma
export const getFromStorage = (key) => {
  const encryptedValue = localStorage.getItem(key);
  if (!encryptedValue) return null;
  return decryptData(encryptedValue);
};

// LocalStorage'dan veri silme
export const removeFromStorage = (key) => {
  localStorage.removeItem(key);
};
