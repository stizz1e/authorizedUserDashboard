import { Container, Row,Col, Button } from "react-bootstrap";
import AlertWidget from "@/components/AlertWidget";
import StatusWidget from "@/components/StatusWidget";
import ActivityWidget from "@/components/ActivityWidget";

type DashboardFormProps = {
  onLogout: () => void;
};

export default function Dashboard ({onLogout}: DashboardFormProps) {
    const handleLogOut = () => {
        if(window){
            localStorage.clear();
            onLogout();
        }
    }

    return(
        <>
            <Container>
                <Row>
                    <Col md={10}>
                        <h1>Dashboard</h1>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={handleLogOut}>Log Out</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <StatusWidget />
                    </Col>
                    <Col md={4}>
                        <ActivityWidget />
                    </Col>
                    <Col md={4}>
                        <AlertWidget />
                    </Col>
                </Row>
            </Container>
        </>
    )
}