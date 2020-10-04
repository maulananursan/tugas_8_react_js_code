import React, {Component} from 'react';
import './App.css';
import './css/bootstrap.min.css';
import {
  DropdownButton, Dropdown, Figure, Row, Col, Breadcrumb, Carousel, ListGroup, Jumbotron, Button, Form, Modal, Image
} from 'react-bootstrap';

class App extends Component {
  constructor(props){
      super(props);
      this.state={
        show: false
      }
    }
  
    handleModal(){
        this.setState({show:!this.state.show})
    }

  render(){
  return (
    <div>
        <Row className="table-dark">
            <Col sm={3}>
              <DropdownButton id="dropdown-basic-button" title="Pilih Bahasa">
                <Dropdown.Item href="#/action-1">Bahasa</Dropdown.Item>
                <Dropdown.Item href="#/action-2">English</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col sm={7}></Col>
            <Col sm={2}>
              <Figure>
                <Figure.Image width={50} alt="Gambar" src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" />
                  <Figure.Caption>
                    <h6 style={{color: 'white'}}>Alan Saputra</h6>
                  </Figure.Caption>
              </Figure>
            </Col>     
        </Row>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
              <Breadcrumb.Item active>Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <Row>
            <Col md={2}></Col>
            <Col>
                <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                        alt="First slide"
                        />
                      <Carousel.Caption>
                         <h5>Sani Riszki Fuazi Tegaskan Mental Pemain Timnas Indonesia U-23 tetap Bagus</h5>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                        alt="Second slide"
                        />
                      <Carousel.Caption>
                        <h5>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h5>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                        alt="Third slide"
                        />
                       <Carousel.Caption>
                          <h5>Inggris Mau Jadi Tim Terbaik Di Dunia</h5>
                       </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col md={2}></Col>
        </Row><br />

        <Row>
          <Col sm={3}>
            <ListGroup>
                <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
                <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
                <ListGroup.Item>Divisi Primera</ListGroup.Item>
                <ListGroup.Item>Serie A</ListGroup.Item>
                <ListGroup.Item>Ligue 1</ListGroup.Item>
                <ListGroup.Item>Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Jumbotron>
              <h1>DIVISI PRIMERA</h1>
              <p>Main Untuk Catalunya, Gerard Pique Minta Dihormati</p>
              <Button variant="primary">Read More</Button>
            </Jumbotron>
          </Col>
          <Col sm={3}>
            <center>
              <Image src="https://i.ibb.co/qrW616v/login.png" style={{ width: '60px' }}  roundedCircle  />
              <h4>Silahkan Login</h4>
              </center>
              <br />
              <Form>
                  <Form.Group>
                      <Form.Control type="email" placeholder="Masukan Email" />
                  </Form.Group>
                  <Form.Group>
                      <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group>
                      <Form.Check type="checkbox" label="Term & Condition" />
                  </Form.Group>

                <div>
                    <Button onClick={()=>{this.handleModal()}}>Login</Button>
                        <Modal show={this.state.show} onHide={()=>this.handleModal()}>
                            <Modal.Header closeButton>
                                <Modal.Title>Login</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Anda Berhasil Login</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={()=>{this.handleModal()}} variant="secondary">Close</Button>
                                <Button onClick={()=>{this.handleModal()}} variant="primary">Save Username & Password</Button>
                            </Modal.Footer>
                        </Modal>
                </div>
              </Form>
          </Col>
        </Row>          
    </div>
  )
}
}

export default App


