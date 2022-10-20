import React from "react";
import { useRouter } from "next/router";
import Container1 from "../../components/ToursPage/Container1/Container1";
import Container2 from "../../components/ToursPage/Container2/Container2";
import Footer from "../../components/Footer";

const Tours = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Container1 id={id} />
      <Container2 />
      <Footer />
      {id}
    </>
  );
};

export default Tours;
