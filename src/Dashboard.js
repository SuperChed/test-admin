

// Dashboard can be used as a landing page instead of going to the first Resource.
// use in App.js  -  <Admin dashboard={Dashboard} dataProvidder={}... >
import * as React from "react";
import { Card, CardContent, CardHeader } from '@mui/material';

const Dashboard = () => (
    <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
);

export default Dashboard;


