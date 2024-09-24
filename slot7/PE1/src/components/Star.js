import React from 'react'
import Form from 'react-bootstrap/Form';
import { Button, Col, Container, Row } from "react-bootstrap";
const Star = () => {
    return (
        <Container>
            <Row><h2>Create a new Star</h2></Row>
            <Row>
                <Col>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" disabled />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>FullName</Form.Label>
                                <Form.Control type="text" required />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>DateOfBirth</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Gender</Form.Label>
                                <div>
                                    <Form.Check inline className='mx-2' type="radio" name='gender' /> Male
                                    <Form.Check inline className='mx-2' type="radio" name='gender' /> Female
                                </div>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Nastionality</Form.Label>
                                <Form.Check type="checkbox" >
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Check>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Description</Form.Label>
                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Col className='text-center'>
                                <Button className='mx-2' variant='primary'>ADD</Button>
                                <Button className='mx-2' variant='danger'>Remove</Button>
                            </Col>

                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Star
