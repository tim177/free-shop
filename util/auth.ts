// util/auth.ts
export const getToken = () => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("authToken");
  }
  return null;
};

export const getUserRole = () => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("userRole");
  }
  return null;
};

export const setToken = (token: string, role: string) => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("authToken", token);
    sessionStorage.setItem("userRole", role);
  }
};

export const removeToken = () => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("userRole");
  }
};
