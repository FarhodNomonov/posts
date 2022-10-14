import { createReducer } from "@reduxjs/toolkit";
import { setLanguage } from "../action/languageActions";
import langs from "../../lang/lang.json";

const initialState = {
  language: langs["uz"],
};

const reducer = createReducer(initialState, {
  [setLanguage]: (state, action) => {
    localStorage.setItem("lang", action.payload);
    return {
      ...state,
      language: langs[action.payload],
    };
  },
});

export default reducer;
