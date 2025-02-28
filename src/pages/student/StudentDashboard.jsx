import React from 'react';
import { Container, Typography, Card, CardContent, Grow, Fade, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Intro to ComputerScience', marks: 90 },
  { name: 'Data Structures', marks: 85 },
  { name: 'Operating Systems', marks: 95 },
  { name: 'Computer Networks', marks: 88 },
  { name: 'DBMS', marks: 92 },
  { name: 'Software Engineering', marks: 87 },
  { name: 'AI', marks: 91 },
  { name: 'Machine Learning', marks: 89 },
];

const StudentDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Student Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Grow in={true} timeout={1000}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Profile
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Name: Bala
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Email: bala.24@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
        <Grid item xs={12} md={8}>
          <Grow in={true} timeout={1000}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Courses
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  - Introduction to Computer Science
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  - Data Structures and Algorithms
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  - Operating Systems
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  - Computer Networks
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  - Database Management Systems
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  - Software Engineering
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  - Artificial Intelligence
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  - Machine Learning
                </Typography>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
        {data.map((course, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Grow in={true} timeout={1000}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {course.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    This course provides an in-depth understanding of {course.name}.
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Marks: {course.marks}
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Fade in={true} timeout={1000}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Marks
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tickFormatter={(name) => name.length > 10 ? `${name.substring(0, 10)}...` : name} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Fade>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StudentDashboard;