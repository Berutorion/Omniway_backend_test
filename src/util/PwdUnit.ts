// PwdUnit.ts

import bcrypt from 'bcrypt';

// 設置鹽輪數量，建議值為10
const saltRounds = 10;

/**
 * 加密密碼
 * @param password - 明文密碼
 * @returns 返回加密後的密碼
 */
export const hashPassword = async (password: string): Promise<string> => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('密碼加密失敗');
  }
};

/**
 * 比對密碼
 * @param password - 明文密碼
 * @param hashedPassword - 加密後的密碼
 * @returns 如果匹配返回 true，否則返回 false
 */
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error('密碼比對失敗');
  }
};
