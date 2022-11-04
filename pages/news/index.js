import React from "react";
import { useRouter } from "next/router";
import Container1 from "../../components/NewsPage/Container1/Container1";
import Container2 from "../../components/NewsPage/Container2/Container2";
import Footer from "../../components/Footer";

const News = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Container1 />
      <Container2 id={id} />
      <Footer />
    </>
  );
};

export default News;
