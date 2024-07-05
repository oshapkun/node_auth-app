export const validateEmail = (value) => {
  if (!value) {
    return 'Email is required';
  }

  const emailPattern = /^[\w.+-]+@([\w-]+\.){1,3}[\w-]{2,}$/;

  if (!emailPattern.test(value)) {
    return 'Email is not valid';
  }
}

export const validatePassword = (value) => {
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
};

export const validatedName = (value) => {
  if(!value) {
    return 'Name is required'
  }

  if(value.length < 3) {
    return 'It seems wrong value'
  }

  const hasNumber = /\d/.test(value);
  if (hasNumber) {
    return 'The name must consist only of letters';
  }
};