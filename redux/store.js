import { configureStore } from "@reduxjs/toolkit";
import language from "./reducer/languageReducer";

export default configureStore({
  reducer: {
    language,
  },
});
