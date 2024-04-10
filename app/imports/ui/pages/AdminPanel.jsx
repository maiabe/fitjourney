import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Col, Row, Table, Form, Button } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';

const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewUsers] = useState(false);

  const { users, isLoading } = useTracker(() => {
    const noDataAvailable = { users: [] };

    if (!Meteor.userId()) {
      return noDataAvailable;
    }
    const handler = Meteor.subscribe('allUsers');
    if (!handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }
    const allUsers = Meteor.users.find({}).fetch();
    console.log(allUsers);
    return { users: allUsers };
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  let filteredUsers = users.filter(log => log.title.toLowerCase().includes(searchTerm.toLowerCase())
    || log.description.toLowerCase().includes(searchTerm.toLowerCase()));

  if (viewUsers) {
    filteredUsers = filteredUsers.filter(user => user.username === Meteor.user().username || user.emails === Meteor.user().emails);
  }

  filteredUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <Container>
      <Row>
        <Col xs={12} className="mt-5">
          <Row>
            <Col xs={10}>
              <h2 style={{ fontWeight: 'bold' }} className="p-3">Admin Panel</h2>
            </Col>
          </Row>
          <Form className="mb-3" onSubmit={handleSearchSubmit}>
            <Form.Group controlId="searchBar">
              <Row style={{ margin: 0, padding: '2% 0' }}>
                <Col xs={12}>
                  <Form.Control type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
                </Col>
              </Row>
            </Form.Group>
          </Form>
          <Table hover className="workoutlog-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
