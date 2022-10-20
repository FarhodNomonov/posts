import React from "react";
import { useSelector } from "react-redux";
import { nameLang, titleLang } from "../../../utils/func";
import { getLanguage } from "../../../redux/selector";

const Container1 = ({ id }) => {
  const categories = useSelector(({ categories }) => categories);
  const { language } = getLanguage();

  const [filter, setFilter] = React.useState(
    categories.filter((item) => item?.id === Number(id))
  );

  return (
    <div className="">
      <div className="relative h-[55vh] bg1">
        <div className="absolute z-[1] inset-0 bg-lighterPurple/10 text-center pt-20 grid content-center text-white">
          <h1 className="text-white font-beyond text-[40px] xs:text-[70px] sm:text-[100px] leading-[1.5]">
            {nameLang(...filter, language)}
          </h1>
          <h1 className="text-white font-beyond text-[40px] leading-[1.5] -mt-4">
            {titleLang(...filter, language)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Container1;
