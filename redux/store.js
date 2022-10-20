import { configureStore } from "@reduxjs/toolkit";
import language from "./reducer/languageReducer";
import user from "./reducer/Auth/userSlice";
import categories from "./reducer/categories";

export default configureStore({
  reducer: {
    language,
    user,
    categories,
  },
});
