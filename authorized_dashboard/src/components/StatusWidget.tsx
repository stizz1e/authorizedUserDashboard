import {useState, useEffect} from 'react';
import { Card, Table, Badge } from "react-bootstrap";
import type {ServiceStatus} from '../utils/types';
import type { BadgeType } from '../utils/types';
type Status = 'OK' | 'Degraded' | 'Down';

export default function StatusWidget() {
    const [serviceData, setServiceData] = useState<ServiceStatus[]>([]);
    const serviceNames = ['Network Switch', 'Internal Server', 'API Gateway'];
    
    const getStatus = (): Status => {
        const roll = Math.random();
        if (roll < 0.6) {
            return'OK';
        }  
        if (roll < 0.9) {
            return 'Degraded'; 
        }
        return 'Down' ;
    };

    const getBadgeVariant = (status: Status): BadgeType => {
        switch (status) {
            case 'OK' : return 'success';
            case 'Degraded': return 'warning';
            case 'Down': return 'danger';
        }
    };

    useEffect(()=>{
       const services = serviceNames.map(name => ({
            name,
            status: getStatus()
       }));
       setServiceData(services);
    }, [])

    return(
        <>
            <Card>
                <Card.Header as={'h2'}>Status Widget</Card.Header>
                <Card.Body>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    serviceData.map((service, id) => (
                                        <tr key={id}>
                                            <td key={service.name}>{service.name}</td>
                                            <td><Badge bg={getBadgeVariant(service.status)}>{service.status}</Badge></td>
                                        </tr>
                                    ))
                                }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    )
}