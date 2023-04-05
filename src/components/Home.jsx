import HomeMenu from "./HomeMenu";
import Gallery from "./Gallery";
import Container from "react-bootstrap/Container";

const Home = () => {
    return (
        <Container className="px-0">
            <HomeMenu />
            <Gallery movie="star wars" />
            <Gallery movie="attack on titan" />
            <Gallery movie="matrix" />
            <Gallery movie="lord of" />
            <Gallery movie="batman" />
        </Container>
    )
}

export default Home;