import { configureStore } from "@reduxjs/toolkit";
import language from "./reducer/languageReducer";
import user from "./reducer/Auth/userSlice";

export default configureStore({
  reducer: {
    language,
    user,
  },
});
