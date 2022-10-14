import UzMap from "../components/AboutUzbPage/UzMap/UzMap";
import Footer from "../components/Footer";
import Container1 from "../components/HomePage/Container1/Container1";
import SearchTab from "../components/HomePage/Container2/SearchTab";
import Container3 from "../components/HomePage/Container3/Container3";
import Container4 from "../components/HomePage/Container4/Container4";
import Container5 from "../components/HomePage/Container5/Container5";
import Container6 from "../components/HomePage/Container6/Container6";


export default function Home() {
    return (
        <div>
            
            <Container1 />

            {/* <SearchTab /> */}

            <Container3 />

            {/* <Container4 /> */}

            <Container5 />

            {/* <Container6 /> */}

            <UzMap />

            <Footer />

        </div>
    )
}
