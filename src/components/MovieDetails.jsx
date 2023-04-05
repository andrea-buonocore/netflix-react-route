import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

const MovieDetails = () => {

    const params = useParams()
    console.log('PARAMS OBJECTONE', params)

    const [movieToShow, setMovieToShow] = useState(null)
    const [comments, setComments] = useState([]);
    const MOVIE_URL = 'http://www.omdbapi.com/?apikey=d35b2b10&i=';


    const findMovie = async () => {
        console.log('sono findMovie!');
        let response = await fetch(MOVIE_URL + params.id);
        let foundMovie = await response.json();
        console.log('foundMovie', foundMovie);
        setMovieToShow(foundMovie);
    }

    const findMovieComments = async () => {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + params.id, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzgxZmY4MWI0MjAwMTM5YjI4MjAiLCJpYXQiOjE2ODA3MDc3NTMsImV4cCI6MTY4MTkxNzM1M30.0fD8xOJnRtaWccYzsjVxduE8O8SchC4nXEWxiAQHYH0"
            }
        });
        let comments = await response.json();
        console.log('comments', comments);
        setComments(comments);

    }

    useEffect(() => {
        // qua trovo la pasta da mostrare
        // 0, 1, 2, etc.
        console.log('sono componentDidMountone!');
        findMovie();
        findMovieComments();

    }, [])
    // movieToShow può essere: null (valore iniziale), undefined (pasta non trovata)
    // oppure un oggetto pasta valido
    return (
        <Container>
            <Row>
                <Col xs={12} md={8} lg={3} className="text-center my-2">
                    {movieToShow === null ? (
                        <div>LOADING...</div>
                    ) : typeof movieToShow === 'undefined' ? (
                        // <Navigate to="/notfound" />
                        <h2>404 - MOVIE NOT FOUND</h2>
                    ) : (
                        <Card>
                            <Card.Img variant="top" src={movieToShow.Poster} />
                            <Card.Body>
                                <Card.Title className='text-dark text-start fw-bold'>{movieToShow.Title}</Card.Title>
                                <Card.Text className='text-dark text-start text-muted'>{movieToShow.Genre}</Card.Text>
                                <Card.Text className='text-dark text-start text-muted'>Year: {movieToShow.Year} - Runtime: {movieToShow.Runtime}</Card.Text>
                                <Card.Text className='text-dark text-start'>{movieToShow.Plot}</Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8} lg={3} className="my-2">
                    <h2>Comments:</h2>
                    <ListGroup>
                        {
                            comments.map((comment, index) => {
                                return (
                                    <ListGroup.Item key={index} className='text-dark'>
                                        {comment.rate} | {comment.comment}
                                    </ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>

                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetails;