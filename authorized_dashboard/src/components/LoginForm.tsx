import {Button, Container, Row, Col, Form, InputGroup, Spinner} from 'react-bootstrap';
import {useState} from 'react';

type LoginFormProps = {
  onLogin: () => void;
};

export default function LoginForm ({onLogin}: LoginFormProps) {
    const [loginBtnDisabled, setLoginBtnDisabled] = useState(true);
    const [inputType, setInputType] = useState("password");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showSpinner, setShowSpinner] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();

      const fakeJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.FAKE.FAKE";

      localStorage.setItem("token", fakeJWT);
      
      setShowSpinner(true);
      setTimeout(() => {
        setShowSpinner(false);
        onLogin();
      }, 3000)
    };

    const handlePasswordUpdate = (e: any) => {
        setPassword(e.target.value);
        if(e.target.value !== null || ""){
            setLoginBtnDisabled(false);
        }
    }

    const handleShowPassword = () => {
        inputType === "password" ? setInputType("text") : setInputType("password");
    }

    const handleUserNameUpdate = (e :any) => {
        setUserName(e.target.value);
    }

    return (
      <>
      {
            !showSpinner ?
        <Container>
          <Form onSubmit={handleLogin}>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="email" value={userName} placeholder="Enter User Name" onChange={(e) => handleUserNameUpdate(e)}  required />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group>
                <Col>
                  <Form.Label>Password</Form.Label>
                      <InputGroup>
                          <Form.Control type={inputType} value={password} onChange={(e) => handlePasswordUpdate(e)} placeholder="Enter Password" required />
                          <InputGroup.Text id="pwViewBtn" onClick={handleShowPassword}>Show Password</InputGroup.Text>
                    </InputGroup>
                </Col>
              </Form.Group>
            </Row>
            <Row className="mt-3">
              <Form.Group>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={loginBtnDisabled}
                >
                  Login
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </Container> : 
        <Spinner animation='border'></Spinner>
         
        }
      </>
    );
}