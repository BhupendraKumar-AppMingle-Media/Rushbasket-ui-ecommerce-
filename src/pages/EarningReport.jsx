import React, { useState } from 'react';
import { Box, Typography, Paper, Button, MenuItem, Select, TextField, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';

const EarningReport = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');

  // Sample Data
  const earningsData = [
    { id: 1, category: 'Electronics', product: 'Phone', paymentMethod: 'UPI', grossEarnings: 500, netEarnings: 450, refunds: 50 },
    { id: 2, category: 'Clothing', product: 'T-Shirt', paymentMethod: 'Cash', grossEarnings: 200, netEarnings: 180, refunds: 20 },
    { id: 3, category: 'Home Appliances', product: 'Toaster', paymentMethod: 'Credit', grossEarnings: 100, netEarnings: 90, refunds: 10 },
    // Add more sample data as needed
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'product', headerName: 'Product', width: 130 },
    { field: 'paymentMethod', headerName: 'Payment Method', width: 160 },
    { field: 'grossEarnings', headerName: 'Gross Earnings', width: 160 },
    { field: 'netEarnings', headerName: 'Net Earnings', width: 160 },
    { field: 'refunds', headerName: 'Refunds', width: 160 },
  ];

  const filteredData = earningsData.filter((entry) => {
    const isWithinDateRange =
      (!startDate || new Date(entry.date) >= startDate) &&
      (!endDate || new Date(entry.date) <= endDate);
    const matchesCategory = category ? entry.category === category : true;
    const matchesProduct = product ? entry.product === product : true;

    return isWithinDateRange && matchesCategory && matchesProduct;
  });

  const handleExport = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'EarningsReport');
    XLSX.writeFile(wb, 'EarningsReport.xlsx');
  };

  return (
    <Box  className='text-black' p={4} component={Paper} elevation={3} sx={{ borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        <h1 className='text-black text-center'>Earning  Report</h1>

      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Monitor detailed financial reports, earnings by various metrics, and export data as needed.
      </Typography>

      {/* Filters */}
      <Box my={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <DatePicker
                label="Start Date"
                value={startDate}
                onChange={(date) => setStartDate(date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <DatePicker
                label="End Date"
                value={endDate}
                onChange={(date) => setEndDate(date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                fullWidth
              >
                <MenuItem value="">All Categories</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="Clothing">Clothing</MenuItem>
                <MenuItem value="Home Appliances">Home Appliances</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                select
                label="Product"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                fullWidth
              >
                <MenuItem value="">All Products</MenuItem>
                <MenuItem value="Phone">Phone</MenuItem>
                <MenuItem value="T-Shirt">T-Shirt</MenuItem>
                <MenuItem value="Toaster">Toaster</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </LocalizationProvider>
      </Box>

      {/* Earnings Table */}
      <Box my={3} style={{ height: 400 }}>
        <DataGrid rows={filteredData} columns={columns} pageSize={5} checkboxSelection />
      </Box>

      {/* Export Button */}
      <Button variant="contained" color="primary" onClick={handleExport}
      style={{backgroundColor:'#172554'}}>
        Export as Excel
      </Button>
    </Box>
  );
};

export default EarningReport;
