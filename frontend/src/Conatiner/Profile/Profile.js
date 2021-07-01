import { Button, Container, Col, Row, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import './profile.css'
import { Redirect } from "react-router-dom";
import { userUpdate } from "../../Actions";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const classes = useStyles();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [userImage, setUserImage] = useState("");

  const [userdetails, setUserdetails] = useState({});


  const [show, setShow] = useState(false);


  const handleClose = () => {
    const form = new FormData();
    form.append('email', userdetails.email);
    form.append('firstname', firstname);
    form.append('lastname', lastname);
    form.append('contact', contact);
    form.append('institutionName', institutionName);
    form.append('userImage', userImage);
    form.append('gender', gender);

    dispatch(userUpdate(form));
    setShow(false);
  }

  const handleShow = (item) => {
    setUserdetails(item);
    setFirstname(item.fullname.split(" ")[0]);
    setLastname(item.fullname.split(" ")[1]);
    setGender(item.gender);
    setInstitutionName(item.institutionName);
    setUserImage(item.userImage);
    setContact(item.contact);
    setEmail(item.email);
    setShow(true);

  }



  return (
    <Layout>
      <Container fluid style={{ minHeight: "500px", paddingTop: "100px" }}>
        <Row>
          <Col>
            {user.authenticate ? (
              <div className="profileDiv">
                <h5 className="text-center pt-2">
                  Profile of {user.user.fullname.toUpperCase()}
                </h5>
                <hr />
                <Row>
                  <Col md={5}>
                    <Row className="p-5">
                      <Col md={12}>
                        <img
                          src={
                            user.user.userImage
                              ? user.user.userImage
                              : process.env.PUBLIC_URL + "/profile.jpg"
                          }
                          width="250px"
                          height="250px"
                          alt="Profile image"
                        />
                      </Col>
                      <Col md={12} className="mt-3 ml-1">
                        <Button
                          onClick={() => handleShow(user.user)}
                          variant="secondary"
                          size="lg"
                          style={{ width: '250px' }}
                        >
                          Edit profile
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={7}>
                    <Form className="p-3">
                      <Form.Row>
                        <Col>
                          <Form.Label>First name:</Form.Label>
                          <Form.Control
                            value={user.user.fullname.split(" ")[0]}
                            readOnly
                          />
                        </Col>
                        <Col>
                          <Form.Label>Last name:</Form.Label>
                          <Form.Control
                            value={user.user.fullname.split(" ")[1]}
                            readOnly
                          />
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                          <Form.Label>Email:</Form.Label>
                          <Form.Control value={user.user.email} readOnly />
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                          <Form.Label>Contact:</Form.Label>
                          <Form.Control value={user.user.contact} readOnly />
                        </Col>
                      </Form.Row>
                      <Form.Row>
                        <Col>
                          <Form.Label>Institution name:</Form.Label>
                          <Form.Control
                            readOnly
                            value={user.user.institutionName}
                          />
                        </Col>
                      </Form.Row>
                      <Form.Row className="pt-3">
                        <Col>
                        <Form.Label>Gender:</Form.Label>
                          <Form.Control
                            value={user.user.gender}
                            readOnly
                          >
                          </Form.Control>
                        </Col>
                      </Form.Row>
                    </Form>
                  </Col>
                </Row>
              </div>
            ) : (
              <span></span>
            )}
          </Col>
        </Row>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          animation={false}
          style={{ marginTop: "40px" }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className={classes.form}>
              <Row>
                <Col>
                  <TextField
                    variant='outlined'
                    margin='normal'
                    label='First name'
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  /></Col>
                <Col>
                  <TextField
                    variant='outlined'
                    margin='normal'
                    label='Last name'
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextField
                    variant='outlined'
                    margin='normal'
                    label='Email'
                    readOnly
                    fullWidth
                    value={email}
                  />
                  <span className="text-warning">[you can not update your email]</span>

                </Col>

              </Row>
              <Row>
                <Col>
                  <TextField
                    variant='outlined'
                    margin='normal'
                    label='Contact'
                    fullWidth
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextField
                    variant='outlined'
                    margin='normal'
                    label='Institution name'
                    fullWidth
                    value={institutionName}
                    onChange={(e) => setInstitutionName(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label for="gender">Choose a your gender:</label>
                  <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>Upload your image:</label>

                </Col>
                <Col><input
                  type="file"
                  name="userImage"
                  onChange={(e) => setUserImage(e.target.files[0])
                  }
                /></Col>
              </Row>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Layout>
  );
};

export default Profile;
