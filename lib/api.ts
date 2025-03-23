// utils/auth.ts

import axios from "axios";

const API_URL =
  "https://mamun-reza-freeshops-backend.vercel.app/api/v1/admin/login";

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(API_URL, { email, password });

    const { accessToken, data } = response.data;

    // Store the token in sessionStorage
    sessionStorage.setItem("authToken", accessToken);
    sessionStorage.setItem("userData", JSON.stringify(data));

    console.log("Login successful:", data);
    return data;
  } catch (error: any) {
    console.error(
      "Login failed:",
      error?.response?.data?.message || error.message
    );
    throw error;
  }
};
