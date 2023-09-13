import { AES, enc } from "crypto-js";

export function getDecryptedAccessToken() {
  const encryptedToken = localStorage.getItem("accessToken");
  const encryptionKey = import.meta.env.VITE_ENCR_KEY;

  if (encryptedToken && encryptionKey) {
    try {
      const decryptedToken = AES.decrypt(
        encryptedToken,
        encryptionKey
      ).toString(enc.Utf8);
      return decryptedToken;
    } catch (error) {
      console.log("Error decrypting access token:", error);
    }
  }

  return null;
}

export function encryptAndSetAccessToken(rawAccessToken) {
  const encryptionKey = import.meta.env.VITE_ENCR_KEY;

  if (encryptionKey) {
    try {
      const encryptedToken = AES.encrypt(
        rawAccessToken,
        encryptionKey
      ).toString();
      localStorage.setItem("accessToken", encryptedToken);
      return encryptedToken;
    } catch (error) {
      console.log("Error decrypting access token:", error);
    }
  }

  return null;
}
