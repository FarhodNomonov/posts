export const nameLang = (item, language) => {
  return language?.global === "uz"
    ? item?.name_uz ?? ""
    : language?.global === "en"
    ? item?.name_en ?? ""
    : item?.name_ru ?? "";
};

export const titleLang = (item, language) => {
  return language?.global === "uz"
    ? item?.title_uz ?? ""
    : language?.global === "en"
    ? item?.title_en ?? ""
    : item?.title_ru ?? "";
};

export const descriptionLang = (item, language) => {
  return language?.global === "uz"
    ? item?.description_uz ?? ""
    : language?.global === "en"
    ? item?.description_en ?? ""
    : item?.description_ru ?? "";
};
