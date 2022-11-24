import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { getRequest } from "../../../utils/request";
import { Autoplay, Navigation } from "swiper";

const Container3 = () => {
  const [getSlider, setGetSlider] = React.useState([]);

  React.useEffect(() => {
    getRequest("slider/all")
      .then((data) => {
        setGetSlider(data);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      <div className="flex justify-evenly py-[80px] ml:py-[30px]">
        <div className="flex flex-col gap-2 items-center">
          <div className="relative w-12 h-12">
            <Image
              src="data:image/webp;base64,UklGRg4CAABXRUJQVlA4TAICAAAvMUAOEPejoG0bxvxBlGx3KIz+bDBo20hycuPd++94XGJk2BEgQACAFgAmQggBOrChAiZCgBAmQggBIABUTEAIAQI0ARsgAASACViAcOLDjwmABVjYAQEqoAeQZds27ezYtm3btm3beIiT+fO599yc3Usvov8TIH9Z5/P5HX0+X6robMY0XUk97C0uLS0tHEGaklIQx1IItxCREO8e1w0NcfHx8bEzUBYX75oQ7mX74/3L9fMbvj+/vr4+f+D788v9tsDDARrfSs12uB6w3L8E7+UeTsV6J7wWmZ3bkx7w5yuTXnjNVCY98JKpTBqfedIWcQfKMh+gX1fGHQyJqvRHGBGTM3vJTzAiRpfZlrNq7mFSTHdROSXGhyqmxTyvq9O9bR2W2jo7O9v2Yby907WrVixmQrT8bgBRWg+lDsOQpiQHYh2aQGyWV1e6VszBSEVlZWXFFnRVVLpXR3vYQGOX2Roq24024Kyhsspq5QC0mmzCRajYDjfbhItwsZ5rtALn0aJqGc5jRNUWHItKk1U4CVUmY3CdqkxG4TZFmUzDTZIymYXrRGthHmQertrrG63Wj3mROVR2mMmiik4PkltS7FowAX0FxcXFBWvQUljsXhLpxTgPEuR3C4SIznoodRiGtP+0KId6VetDw8PDg4d6mjFNV1Ln8wWCgUAg6Pf5Uv8C"
              layout="fill"
              objectFit="contain"
              alt="img"
            />
          </div>
          <h1 className="text-[44px] text-black font-semibold ml:text-[20px]">255</h1>
          <p className="text-[15px]">CLIENTS</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="relative w-12 h-12">
            <Image
              src="data:image/webp;base64,UklGRroCAABXRUJQVlA4TK0CAAAvOUAJEOelqG0bKIzH/9lrGEZ/NggkbfG3XW3bNgyydeYN2A0AB0AAqHxt+gwQAIBQFBAoijWDgccAhjI89wkRQGsXXy4jvr7XIVbeeUQlkbsNOVAQ+ByQ6/H9AUC2JNmmbfWxbdu2cW3btm3btu177Pq7Pdfccfd5um8R/Z+A528na7zCynHTzYL/c8HxXuMipGPP424+tHle9Po/mLM8bVov9FxaNrGji72eVLn2ykuAb+sSpY088ZjcHW+w/bBmH9+8PSPrMMDPawc3rdp48OoPXP/IuXzb/etFdmEWi4H+0/Vy9K890Q0jq01BxwD6rLaud4h7CIPbYqTIPJOk8E298CxNUtYXePYBbHJZair+C+claTr4OEmxl2G0XAmDMD/pE2ctAv8w0VAGzFZHu6HORpoJTHgAzboFoRZ3YYpLzCjUaDNMkNdfNtqpCtcp6oCpctqFKeILf7Ol8zBXusBNN1TaBSelVzyR0yocUuBvjhR0aL2kDbxxR9voClDgAPMsdsJXgxKGIEvmRXz1ducAV6VUqLFQY8t7Q9jx0cH9EQ7L+OzlzlZeSlEwQeplrkGCaZLi4Y+cD/JE7j6FKdJXTkr9zDKFjhrUDvd8Hd5yxJ07QH+8djOapnecNhVBtYu2wvNUQzzMsEt8COe7+RisEV5qPVQbbkOQQdthsNVlKyRYtXTBPrXC5/DCHub4j8G8cL/iu7BQjjOBS5nyhVOyzDgHLJG0AsaWP6dLlcDAb+CMLEteA0dv8EPO5aeAd5Vy7RjCVcq/AfBriay9VgwAvOusSEtKL5u17xlAV4jMybv+wHpJKpg0syFY7sYte4/9i2v8kGVQRZ7+pXfLwcfDhtcn1zZoCh9tPDG66TtwsVDSQ254lhRyBNfvb2Cup0mZWz4NAH2P/N0BAA=="
              layout="fill"
              objectFit="contain"
              alt="img"
            />
          </div>
          <h1 className="text-[44px] text-black font-semibold ml:text-[20px]" >1176</h1>
          <p className="text-[15px]">PROJECTS</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="relative w-12 h-12">
            <Image
              src="data:image/webp;base64,UklGRtAEAABXRUJQVlA4TMMEAAAvL0AOEGenoG0bJkDHn0f3NwSTOuQKAQRAQSMgSeiA3QBswXWQIw6mBpAJDaO1SDRg3r4Ga/46JdXIgMFTIGhLsm3attq2j411bNu2bdu2bdu2bds2F849m/UXc6w51/VrRP8nQE5zdVlx7tln97vbeyfWi5DdSnUVyJih17D9cVttfy5o6yxs0nuA5IVHSeo3A+OJeoacX0lo46jpC2D3epIlUD5oNQFgZWqpZjx8yexkOnCoqpTMRMXjSWCnpoIH3pRTbQBPlL098LG5JG3ArQbAF82C1XFzgaaq0qQBnLJ1Co6mkbUktFOteRPStCZlmqSyN6GFpJkw0MZOWC2/zzkg6yES01Y/dWPc6hSoIukRKXF+RsJW+T/EdUMViMfvrwgpF2w0FYI7Mpcesc7NToO6AjfW3vh1YzoclrQV0hjukJRGUvE61QdjLWNS8YFNJaWV5kNDKS3Mt9SCHlKxWxivbKygAH7ghaT1JMVIegKNlO4n1uNFFNgm0EqqAk2lcsAt5YKn5dKllvPKHatK0jVOS3rPKmk2wHjtgWOdcmdw4joBPF3eqckuUjJI83gvPWPpRhihJVgfDrcV+xa7vaQmUCgXlNZDmKNqx34CLLGzBUblarrjFfxOZodUALq1glKKuAM3pNSVu12FXIrOYEgNOyUpOEe+9Jt4JqVKYNI4ktJL2ggnJCkM1g75+vtmW0mdSMxmsY4kPk56wqIlvJF1KaSRpCWYR0oLeC3/vcAlXWH9Bh4a2hEfYwm7DBsHv4CK6kPiskx+2kFB6SRb1vHEMIL4KItUv5qkNyxVxF34Ob6ooS3kk46xZQGfQiw1YL3J+JLVUshqgOWWPpBNusTa4aRksWg3TPRX7C00kKQy+4DNkibhiZJeML8JlDToHhQ2NUyG4TIX3AR5pDXckVInMC4TdDKl+cACQ22gk/y7oJH0iHVSUWivmxw06QxrLekS+FZHNutCWeWFllJLyKWxkM70mNGW9lBVdlfyKURz+SNaWsNLqSCMMN3moKUQFLET42O65GOXFPKd+ZLO8t00FtpKro3Q2k5dKKG+UE1qAHUkFYGlhoiXJIbKC7gcFFEClyXt4WeoJO2HkhaVgqaVSFlaSnajvvH0IpSS8sMYWdMl8jXGoieMGcJ1Oaz2Flgo6TQp4Qa1hmuGIxw6zHYnGg/PJVWGmfI7GS6GSxoAMNpJGzfurJK+80M2l8OLUlLQFXiW1sE0+F1c0nZo7qf0OmkKMEVSh54Rsl3qMnwqJGk0rJQ5+1fOSJ2T4UF/OaywHjiUSVJvuC9zvo+wUlLBA8D7hW1ymWKr9DsKuIdKUm94n9qUJhG4XFKSWl3F+uLkzi0Hr3wH8K7KIknT4FtumSMXcBDoI2u19Z+we2NAJknKfAJe5ZLN0moFHC0ja1TZrnO2HT25b82wRrllHOaB07FyWOIKsLa8AtnnFjBZARzqA44OyG0vuNbiF8Dx8gpo9kUegPNzujerUqJQ2Trthm18BXChowKecdxtHH/f3VB/bvEhB9/4i7+3qmkq/QWDXaXr/GRrlaIZ9Rf+yGD9pSO+MPX/lT4y6C+TvXOnTh27edjXoVOnzo3/Cp2wnfRXaOj1en1et9vj83q9FwMDAA=="
              layout="fill"
              objectFit="contain"
              alt="img"
            />
          </div>
          <h1 className="text-[44px] text-black font-semibold ml:text-[20px]">39</h1>
          <p className="text-[15px]">COUNTRIES</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="relative w-12 h-12">
            <Image
              src="data:image/webp;base64,UklGRrgEAABXRUJQVlA4TKwEAAAvMUAOEG+noG0bJhjGH227j2BiZolA0hbO32zaNnhP1TegGAAwoLxUD8x1tIL4KANvpg4w14gO1EYAP34wgwAo2rZ27K12bdu2bdu2bdu2bds8qhnXdv984UnXVbzv/3/fnyuI6P8EyMtRD35FW0MWKpkeI9DHGZLFCPh72oRJkyZNnHIcNieLJ/wl/3uIThZRzAmgHhQIUs8rYeHhiXwNDbeHvoZXoRHht4Z5toEgnvCoKTxfuXiZh0tW3IF+3uzlRUp5fZ9b3pzjlDxfyUNvFnPfqFizRqA1a6Q1TnLQm728MT7hsrhxl2uezIC47JJeuSlmRMEWD7IBlJQUzrEmzexN5kFRSZkcoIS7nkY1yzj5L2krBjDT3TijqWVDpmz2zH1sVYzV7qYbnSVF8r8Ta3cSbA2NLe6W8PUHIyQl4rKUpPYk/OKguw08eMwCST1HDA88k6TBvHzCWXf7uHiJHfJ4NncucNPdKXZv57xXmzi5k/vurrFyDve8OsnaJYS6u8P8wbzy6i9mTOClu2dMrUVSDo9+0rU3H1K5imKB4K8CXmQ/CRl78T2jq7es1gpIePzwkdvHPjiqMcSkdpPuBwulNXi8VxpKUv7Aqu99CZMklb/D831wcv2GDRvW74Uj1/gxp4akrvDhWOMAJmMOkaS1rBYUlBWyNOKxzBaYK/00ho/r4uhh7GNXYahrKQCV+xBiqc2fTSEw2JLyB18zK4nWtt1FoJ6lIFTp66cCZFYEZDLaQDfVgPrBKQpdVR1GGqd5JzWCysHJnUg/6R6PJaWLZ4HUHooHJ+NPRksDoKjUHGpKvUnKa9ueJ6Cy3f2keMcMqRAMlCaRmEkawe/Mxia25oBKlmxQsguPLQpjqaSvLJY2EiZpGh9SGuf59hSaWvJB6Ete2R6wSdINzkrXOSlpMZGSNAzrx4KSUtzBusFyiwOSVhMhvWGJpPU8NN7wfPu2AwnMktQGTm7bdhvyG+c4I2k4idly/mGopL38JSmtwyBJIayWNBmfpDLQwDjEDUktoGpVaCbpBBckpf/OaElPWS5pLD/SSHWgjrGFu5LKQsd2UErSVY5ISveN8ZJCWCZpNL8ySA2gtrGCEEkZHcYOIy6rpP/YYXxnnKTnLJc0hp/ppfpQx5jNa0mKYul83kvSU1YZDr0kPWWVpMn8klQEGhpj+J5e0mN2bCLEeMk8SSk+c2v06KkOiyT1JGnh6NF7oYQxkIRckv7h8BHuSUr7hQmStBDrnwqSMrzDekFmDygi6TLnb3BFUo5YBhu6TVIc9JFZGeIT+ZDS0gHKSjrIX/9yzoCelvUcqgxlLBmg4Qgeydocykjazp0DfOuaK2VJ6GTZx+ZMUM9SEIq0J8RWD2opZ6u3XCkHJLx9A6387C4SUJW+/qrD+9dxQDO1DcXaIFgVsL4aJEkNRszZDzWDVRxOzB3VNJX8lobywcqVQAMF3B1yBUs/GRtYG6htWccqQQGLIHNDHtkKJzI4sGxJvJ/Qr3//vn/z1yRY0rd///79JsLcbbzv379//76jwqBIYOpEMhwvty3//hrjODHRvmjH53NiHMeJcXw+J9rncxzHifl+v7f8Ag=="
              layout="fill"
              objectFit="contain"
              alt="img"
            />
          </div>
          <h1 className="text-[44px] text-black font-semibold ml:text-[20px]">127</h1>
          <p className="text-[15px]">TRAVEL PLACES</p>
        </div>
      </div>

      <div className="mb-10 d-flex justify-center  items-center">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".next",
            prevEl: ".prev",
          }}
          speed={500}
          loop={true}
          modules={[Autoplay, Navigation]}
          //   className="mySwiper1"
        >
          {getSlider?.slider?.map((item) => {
            const src = `https://tours.techdatasoft.uz/images/${item?.image}`;
            return (
              <>
                <SwiperSlide className="slider__" key={item?.id}>
                  <img
                    unoptimized
                    layout="fill"
                    src={src}
                    alt="Picture of the author"
                  />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Container3;
