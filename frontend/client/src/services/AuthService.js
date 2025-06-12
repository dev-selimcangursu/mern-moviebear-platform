import axios from "axios";

// Giriş bilgilerini kontrol etmek için API isteği 
export const checkLoginInfo = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/login/check/info",
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error.response?.data || { success: false, message: "Sunucu hatası" };
  }
};
// Yeni kullanıcı kaydı yapmak için API isteği 
export const registerUser = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/auth/register", data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.response?.data || { success: false, message: "Sunucu hatası" };
  }
};