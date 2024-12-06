import React from 'react';
import { Card, Button } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import parliamentImg from '../assets/parliament.jpg';
import budaCastleImg from '../assets/budaCastle.jpg';
import chainBridgeImg from '../assets/chainBridge.jpg';




const FeaturedSection = () => {
  return (
    <section id="features" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-4">Nevezetessegek</h2>
        <div className="row">

            <div className='col-md-4'>
                <Card>
                    <Card.Img variant="top" src={parliamentImg} />
                    <Card.Body>
                        <Card.Title>Országház</Card.Title>
                        <Card.Text>
                            A Magyar Országház Budapest szívében található, lenyűgöző neogótikus stílusú épület.
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Nav>
                                <Nav.Link href="#parliament-details">
                                    <Button variant="outline-secondary">
                                        További információ
                                    </Button>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Card.Body> 
                </Card>
            </div>

            <div className="col-md-4">
                <Card>
                    <Card.Img variant="top" src={budaCastleImg} />
                    <Card.Body>
                        <Card.Title>Budai Vár</Card.Title>
                        <Card.Text>
                            A Budai Vár a város történelmi központjában található, és Budapest egyik legismertebb helyszíne.
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Nav>
                                <Nav.Link href="#budaCastle-details">
                                    <Button variant="outline-secondary">
                                        További információ
                                    </Button>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Card.Body> 
                </Card>
            </div>

            <div className="col-md-4">
                <Card>
                    <Card.Img variant="top" src={chainBridgeImg} />
                    <Card.Body>
                        <Card.Title>Lánchíd</Card.Title>
                        <Card.Text>
                            A Lánchíd Budapest egyik legismertebb hídja, amely a pesti és budai oldalakat köti össze.
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Nav>
                                <Nav.Link href="#chainBridge-details">
                                    <Button variant="outline-secondary">
                                        További információ
                                    </Button>
                                </Nav.Link>
                            </Nav>
                        </div>
                    </Card.Body> 
                </Card>
            </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
