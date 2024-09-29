import CryptoJS from 'crypto-js';

const SECRET_KEY = 'your-secret-key'; // Bu anahtarı gizli ve güvenli bir şekilde sakla

// Şifreleme fonksiyonu
export const encryptData = (data) => {
  try {
    const stringData = JSON.stringify(data); // Veriyi JSON formatına çevir
    return CryptoJS.AES.encrypt(stringData, SECRET_KEY).toString();
  } catch (error) {
    console.error("Encryption error:", error);
    return null;
  }
};

// Çözme fonksiyonu
export const decryptData = (encryptedData) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    if (!bytes || bytes.sigBytes < 0) {
      throw new Error("Invalid encrypted data");
    }
    const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedString);
  } catch (error) {
    console.error("Decryption error:", error);
    return null;
  }
};
