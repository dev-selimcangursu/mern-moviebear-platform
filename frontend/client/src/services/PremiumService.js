import axios from "axios";

export const purchasePremium = async (cardInfo, token) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/auth/premium",
      cardInfo,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Premium purchase error:", error);
    return error.response?.data || { success: false, message: "Sunucu hatası" };
  }
};
