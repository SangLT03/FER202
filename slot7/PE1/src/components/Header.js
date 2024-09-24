import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center my-2">Dashboard</h1>
                </Col>
            </Row>
            <Row>
                <Col className="text-center ">
                    <Link to="/director">
                        <Button variant="success" className="mx-2">
                            Director
                        </Button>
                    </Link>
                    <Button variant="info" className="mx-2">
                        Producer
                    </Button>
                    <Link to="/star">
                        <Button variant="danger" className="mx-2">
                            Stars
                        </Button>
                    </Link>
                    <Button variant="secondary" className="mx-2">
                        Genres
                    </Button>
                    <Button variant="warning" className="mx-2">
                        Movies
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};
export default Header;