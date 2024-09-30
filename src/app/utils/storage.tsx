import { encryptData, decryptData } from './encryption';

// LocalStorage'a veri kaydetme
export const saveToStorage = (key: string, value: any): void => {
  const encryptedValue = encryptData(value);
  if (encryptedValue !== null) {
    localStorage.setItem(key, encryptedValue);
  }
};

// LocalStorage'dan veri okuma
export const getFromStorage = (key: string): any | null => {
  const encryptedValue = localStorage.getItem(key);
  if (encryptedValue === null) return null; // 'null' kontrolü
  const decryptedValue = decryptData(encryptedValue);
  return decryptedValue !== null ? decryptedValue : null;
};

// LocalStorage'dan veri silme
export const removeFromStorage = (key: string): void => {
  localStorage.removeItem(key);
};
