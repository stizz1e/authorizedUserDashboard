export type ServiceStatus = {
    name: string;
    status: "OK" | 'Degraded' | 'Down';
}

export type ActivityItem = {
    user: string;
    action: string;
    timestamp: string;
}

export type BadgeType = 'success' | 'warning' | 'danger';