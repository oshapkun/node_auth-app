function validateEmail(value) {
  if (!value) {
    return 'Email is required';
  }

  const emailPattern = /^[\w.+-]+@([\w-]+\.){1,3}[\w-]{2,}$/;

  if (!emailPattern.test(value)) {
    return 'Email is not valid';
  }
}

function validatePassword(value) {
  if (!value) {
    return 'Password is required';
  }

  if (value.length < 6) {
    return 'At least 6 characters';
  }

  const hasUpperCase = /[A-Z]/.test(value);
  const hasNumber = /\d/.test(value);

  if (!hasUpperCase) {
    return 'Password must contain at least one uppercase letter';
  }

  if (!hasNumber) {
    return 'Password must contain at least one number';
  }

  return null;
};

module.exports = {
  validateEmail,
  validatePassword
}
