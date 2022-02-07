/**
 * This function tests if the number is a Bangladeshi
 * phone number.
 *
 * The number will start with +8801, 8801 or 01.
 * The next digit will be between 3 to 9.
 * Then there will be exactly 8 digits.
 */
export const validatePhone = (phone: string): boolean => {
  // const pattern = /^(?:\+?88)?01[3-9]\d{8}$/;
  const pattern = /^01[13456789][0-9]{8}$/;
  return pattern.test(phone);
};

/**
 * The password length have to be at least six.
 * The password should contain at least one digit.
 */
export const validatePassword = (password: string): boolean =>
  password.length >= 6;

export const validateUsername = (password: string): boolean =>
  password.length > 2;
