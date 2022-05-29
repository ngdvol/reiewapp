import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
//import './App.css';
//import "@aws-amplify/ui-react/styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import "./scss/custom.scss";
// import { Authenticator } from "@aws-amplify/ui-react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listReviews } from "./graphql/queries";
import {
  createReview as createReviewMutation,
  deleteReview as deleteReviewMutation,
} from "./graphql/mutations";

import awsExports from "./aws-exports";
import { couldStartTrivia } from "typescript";
Amplify.configure(awsExports);

function App() {
  const initialFormState = {
    name: "",
    content: "",
    productRating: 0.0,
    reviewRating: 0.0,
    userID: "",
  };
  const [Reviews, setReviews] = useState<any[]>([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    const apiData: any = await API.graphql({ query: listReviews });
    console.log(apiData.data.listReviews.items);
    setReviews(apiData.data.listReviews.items);
  }

  async function createReview() {
    // if (
    //   !formData.name ||
    //   !formData.description ||
    //   !formData.price ||
    //   !formData.quantity ||
    //   !formData.isOpen
    // )
    //   return;
    await API.graphql({
      query: createReviewMutation,
      variables: { input: formData },
    });
    setReviews([...Reviews, formData]);
    setFormData(initialFormState);
  }

  async function deleteReview({ id }: any) {
    const newReviewsArray = Reviews.filter(
      (Review: { id: any }) => Review.id !== id
    );
    setReviews(newReviewsArray);
    await API.graphql({
      query: deleteReviewMutation,
      variables: { input: { id } },
    });
  }

  return (
    <div className="App">
      <style type="text/css">
        {`

    `}
      </style>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Proof of concept</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Buying item</Nav.Link>
              <Nav.Link href="/findOrders">Submit offer</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="container-xxl" fluid>
        <div className="d-flex flex-row">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="flex-sm-column ps-lg-5 my-4">
                    <hr />

                    <Card className="mb-4">
                      <Card.Header as="h5">Add new review</Card.Header>
                      <Card body>
                        <Card.Subtitle className="mb-2 text-muted">
                          Add review on your item
                        </Card.Subtitle>
                        <Form className="row g-3 col-md-12 mt-2">
                          <Form.Group>
                            <Form.Label>Item review</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Item name"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  content: e.target.value,
                                })
                              }
                              value={formData.content}
                            />
                            <Form.Text className="text-muted">
                              Enter item review
                            </Form.Text>
                          </Form.Group>

                          <Form.Group className="">
                            {/* <Form.Check type="checkbox" label="Test" /> */}
                            <Button
                              className="col-12"
                              variant="primary"
                              onClick={createReview}
                            >
                              Submit
                            </Button>{" "}
                          </Form.Group>
                        </Form>
                      </Card>
                    </Card>

                    {/* <Authenticator loginMechanisms={["email"]}>
              {({ signOut, user }) => (
                <main>
                  <h1>Hello {user.username}</h1>
                  <button onClick={signOuあんt}>Sign out</button>
                </main>
              )}
            </Authenticator> */}
                  </div>
                }
              ></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </Container>
    </div>
  );
}

export default App;
