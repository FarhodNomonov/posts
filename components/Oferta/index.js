import React from "react";
import { getLanguage } from "../../redux/selector";

function Oferta() {
  const { language } = getLanguage();

  return (
    <div className="oferta">
      <div className="main-div grid grid-cols-1 py-[50px] ">
        <div className="col-span-3 space-y-4">
          <h1 className="text-orange">{language["oferta1"]}</h1>
          <h3 className="text-black">{language["oferta2"]}</h3>
          <p>{language["oferta3"]}</p>

          <p>{language["oferta4"]}</p>


          <p>{language["oferta5"]}</p>


          <p>{language["oferta6"]}</p>


          <p>{language["oferta7"]}</p>


          <p>{language["oferta8"]}</p>


          <p>{language["oferta9"]}</p>

          <p>{language["oferta10"]}</p>

          <p>{language["oferta11"]}</p>

        </div>
      </div>
    </div>
  );
}

export default Oferta;
