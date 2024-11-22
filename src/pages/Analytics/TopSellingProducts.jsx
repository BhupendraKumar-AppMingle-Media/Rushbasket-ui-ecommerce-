import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const topProducts = [
  { name: 'Product A', sales: 100 },
  { name: 'Product B', sales: 90 },
  { name: 'Product C', sales: 80 },
];

const TopSellingProducts = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Top-Selling Products
        </Typography>
        <List>
          {topProducts.map((product, index) => (
            <ListItem key={index}>
              <ListItemText primary={product.name} secondary={`Sales: ${product.sales}`} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default TopSellingProducts;
