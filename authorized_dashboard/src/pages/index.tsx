import { Container, Card } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import Dashboard from "./dashboard";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn]  = useState(false);
  useEffect(() => {
    if(typeof window !== 'undefined'){
      const token = localStorage.getItem('token');
       setIsLoggedIn(!!token);
    }
    
  
  },[])
  
  return (
    <>
    <Container>
      <Card className="mt-3">
        <Card.Body>
          {isLoggedIn ?
          <Dashboard onLogout={() => setIsLoggedIn(false)} />
            :
            <LoginForm onLogin={() => setIsLoggedIn(true)} /> 
          }
        </Card.Body>
      </Card>
     </Container>
    </>
  );
}
