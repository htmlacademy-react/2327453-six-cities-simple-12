const TOKEN_KEY = 'token';
export const getToken = (): string => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token ?? '';
};

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const deleteToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
