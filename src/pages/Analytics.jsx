import React from 'react';
import { Card, Grid, Typography } from '@mui/material';
import TotalUsers from './Analytics/TotalUsers';
import OrdersAnalytic from './Analytics/OrdersAnalytic';
import RevenueTrends from './Analytics/RevenueTrends';
import TopSellingProducts from './Analytics/TopSellingProducts';
import EngagementMetrics from './Analytics/EngagementMetrics';
import DeliveryPerformance from './Analytics/DeliveryPerformance';

const Analytics = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h3" gutterBottom>
        Analytics
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        This section provides a complete overview of business performance, helping the admin make informed decisions.
      </Typography>

      <Grid container spacing={4}>
        {/* Total Users Registered */}
        <Grid item xs={12} md={6}>
          <Card>
            <TotalUsers />
          </Card>
        </Grid>

        {/* Orders Placed and Completed */}
        <Grid item xs={12} md={6}>
          <Card>
            <OrdersAnalytic />
          </Card>
        </Grid>

        {/* Revenue Trends */}
        <Grid item xs={12} md={6}>
          <Card>
            <RevenueTrends />
          </Card>
        </Grid>

        {/* Top-Selling Products and Categories */}
        <Grid item xs={12} md={6}>
          <Card>
            <TopSellingProducts />
          </Card>
        </Grid>

        {/* Customer Engagement Metrics */}
        <Grid item xs={12} md={6}>
          <Card>
            <EngagementMetrics />
          </Card>
        </Grid>

        {/* Delivery Performance */}
        <Grid item xs={12} md={6}>
          <Card>
            <DeliveryPerformance />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Analytics;
