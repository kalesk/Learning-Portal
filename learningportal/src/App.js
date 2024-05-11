import React from 'react';
import { Navbar, Nav, Container, Card, Button } from 'react-bootstrap';
import './App.css'; 

function App() {
  return (
    <div>
      <Navbar bg="body-tertiary" variant="dark">
        <Container fluid style={{ backgroundColor: 'rgb(96, 30, 116)' }}>
          <Navbar.Brand href="#">
            <img src="./images/byjus_logo.svg" alt="BYJU'S Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5">
              <Nav.Item>
                <Nav.Link href="#">BTC</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="active">Study Material</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">BYJU'S Answer</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" disabled>Scholarship</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" disabled>Buy A Course</Nav.Link>
              </Nav.Item>
              <Button variant="outline-warning">Login</Button>
              <i className="fas fa-phone text-warning ms-4 mt-2"></i>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <img src="./images/OGbanner.png" alt="Random Image" className="background-image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
        <form className="bg-light p-4 form">
          <h3 className="text-center fw-bold mb-4">Book Your session</h3>
          <hr />
          <div className="mb-3">
            <label className="form-label">Enter Your Name :</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Enter Mobile Number :</label>
            <input type="number" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Enter Your State :</label>
            <input type="text" className="form-control" />
          </div>
          <Button type="submit" className="btn btn-success">Submit</Button>
        </form>
      </div>

      <div className="main">
        <Container className="mt-4">
          <div className="text-center">
            <h2 className="fw-bold">Comprehensive learning programs<br /> & classes for all students</h2>
            <p>Become lifelong learners with India's best teachers,<br /> engaging video lessons and personalized learning journeys</p>
          </div>
        </Container>

        <Container className="mt-4">
          <div className="row">
            <div className="col-md-6">
              <Card className="mb-3 bg-light">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Card.Img src="./images/learning.png" className="img-fluid rounded-start" alt="Learning Image" />
                  </div>
                  <div className="col-md-8">
                    <Card.Body>
                      <Card.Title>BYJUS</Card.Title>
                      <Card.Text>
                        Personalized learning app to learn anytime, anywhere
                      </Card.Text>
                      <Nav.Link href="#">Know more...</Nav.Link>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
            <div className="col-md-6">
              <Card className="mb-3 bg-light">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Card.Img src="./images/learning.png" className="img-fluid rounded-start" alt="Learning Image" />
                  </div>
                  <div className="col-md-8">
                    <Card.Body>
                      <Card.Title>BYJUS</Card.Title>
                      <Card.Text>
                        Personalized learning app to learn anytime, anywhere
                      </Card.Text>
                      <Nav.Link href="#">Know more...</Nav.Link>
                    </Card.Body>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>

        <div className="container-fluid mt-3 mb-3 bg-body-secondary py-4">
          <Container>
            <div className="row justify-content-center">
              <div className="col-md-5">
                <div className="text-center">
                  <div>
                    <img src="./images/jeeneet.png" alt="" className="img1" />
                    <p>Comprehensive learning program for JEE preparation</p>
                    <Button className="btn btn-danger">EXPLORE</Button>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="text-center">
                  <div>
                    <img src="./images/jeeneet.png" alt="" className="img1" />
                    <p>Comprehensive learning program for NEET preparation</p>
                    <Button className="btn btn-danger">EXPLORE</Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Container className="mt-4">
          <div className="leaderboard">
            <h2 className="text-center fw-bold">Leaderboard</h2>
            <div className="table-responsive">
              <table className="table table-striped mt-4 mb-4">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-warning">1</td>
                    <td className="bg-warning">Virat</td>
                    <td className="bg-warning">1500</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Gill</td>
                    <td>1300</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Surya</td>
                    <td>1200</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Dube</td>
                    <td>1150</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Pant</td>
                    <td>1000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>

        <footer className="footer">
          <Container>
            <div className="row content">
              <div className="col-md-3">
                <div className="list">
                  <h3>COURSES</h3>
                  <ul className="mt-4">
                    <li><a href="#">ICSE</a></li>
                    <li><a href="#">CBSE</a></li>
                    <li><a href="#">CAT</a></li>
                    <li><a href="#">NEET</a></li>
                    <li><a href="#">JEE</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="list">
                  <h3>EXAMS</h3>
                  <ul className="mt-4">
                    <li><a href="#">CAT Exam</a></li>
                    <li><a href="#">GATE 2024</a></li>
                    <li><a href="#">GATE Exam</a></li>
                    <li><a href="#">CAT 2023</a></li>
                    <li><a href="#">Education News</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="list">
                  <h3>EXAM PREP</h3>
                  <ul className="mt-4">
                    <li><a href="#">Free CAT Prep</a></li>
                    <li><a href="#">Free IAS Prep</a></li>
                    <li><a href="#">Maths</a></li>
                    <li><a href="#">Physics</a></li>
                    <li><a href="#">Chemistry</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="list">
                  <h3>COMPANY</h3>
                  <ul className="mt-4">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Located</a></li>
                    <li><a href="#">Investors</a></li>
                    <li><a href="#">Compliance</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
}

export default App;
