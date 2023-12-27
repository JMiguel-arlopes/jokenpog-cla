import Navbar from "../../components/Navbar";
import AboutUs from "../../layout/AboutUs";
import Banner from "../../layout/Banner";
import Plataform from "../../layout/Plataform";

export default function Home() {
    return (
        <>
            <Navbar />
            <Banner/>
            <AboutUs/>
            <Plataform/>
        </>
    )
}