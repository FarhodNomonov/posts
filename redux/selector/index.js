import { useSelector } from "react-redux";

export const getLanguage = () => useSelector(({ language }) => language);
