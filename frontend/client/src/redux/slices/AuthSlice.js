import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { checkLoginInfo, registerUser } from "../../services/AuthService";
import { purchasePremium } from "../../services/PremiumService";

// Kullanıcının giriş bilgilerini kontrol eden asenkron işlem
export const isLoginCheck = createAsyncThunk("/check-login", async (user) => {
  try {
    const response = await checkLoginInfo(user);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
});
// Yeni kullanıcı kaydı yapan asenkron işlem
export const registerNewUser = createAsyncThunk(
  "auth/register",
  async (user) => {
    const response = await registerUser(user);
    return response.data;
  }
);
// Premium üyelik satın alma işlemi yapan asenkron işlem
export const makePremium = createAsyncThunk(
  "auth/makePremium",
  async (cardInfo, thunkAPI) => {
    const token = localStorage.getItem("token");
    const response = await purchasePremium(cardInfo, token);
    return response;
  }
);

const initialState = {
  login: [], // Giriş yapan kullanıcı bilgileri
  register: null, // Kayıt işlemi sonucu
  isPremiumUpdated: false, // Premium üyelik durumu
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Giriş kontrolü başarılı olduğunda state güncelle
    builder.addCase(isLoginCheck.fulfilled, (state, action) => {
      state.login = action.payload.data;
    });
    // Kayıt işlemi başarılı olduğunda state güncelle
    builder.addCase(registerNewUser.fulfilled, (state, action) => {
      state.register = action.payload;
    });
    // Premium üyelik işlemi başarılı olduğunda state güncelle
    builder.addCase(makePremium.fulfilled, (state, action) => {
      state.isPremiumUpdated = action.payload.success;
    });
  },
});

export default AuthSlice.reducer;
