import { useState } from "react";
import { Alert, Card } from "react-bootstrap";

export default function AlertWidget() {
    const [isIssue, setIsIssue] = useState(false);
    const [alertVarient, setAlertVarient] = useState("success");
    const [msg, setMsg] = useState("All good");

    return(
        <>
            <Card>
                <Card.Header as={"h2"}>
                    Alert Widget
                </Card.Header>
                <Card.Body>
                    <Alert variant={alertVarient}>{msg}</Alert>
                </Card.Body>
            </Card>
        </>
    )
}