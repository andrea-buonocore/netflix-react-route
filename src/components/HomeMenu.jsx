import Container from "react-bootstrap/Container"
import Dropdown from "react-bootstrap/Dropdown"

const HomeMenu = () => {
    return (
        <Container className="py-0">
            <div className="d-flex align-items-center justify-content-between pt-5 mb-5">
                <div className="d-flex align-items-center">
                    <span className="fs-2 text-light" id="tvShows">Tv Shows</span>
                    <Dropdown>
                        <Dropdown.Toggle variant="dark" id="dropdown-basic" className="border border-1 rounded-0 pl-5">
                            Genre
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Anime</Dropdown.Item>
                            <Dropdown.Item href="#">Horror</Dropdown.Item>
                            <Dropdown.Item href="#">Fantasy</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <a href="#"><i className="bi bi-text-left littleIcons px-2" /></a>
                    <a href="#"><i className="bi bi-list littleIcons px-2" /></a>
                </div>
            </div>
        </Container>
    )
}

export default HomeMenu;