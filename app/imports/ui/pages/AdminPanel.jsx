import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Col, Row, Table, Form, ToggleButton } from 'react-bootstrap';
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
    const handler = Meteor.subscribe('allUsersWithRoles');
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

  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSearchSubmit = (event) => {
  //   event.preventDefault();
  // };

  // let filteredUsers = users.filter(user => user.emails[0].toLowerCase().includes(searchTerm.toLowerCase())
  //   || user.username.toLowerCase().includes(searchTerm.toLowerCase()));

  // if (viewUsers) {
  //   const currentUser = Meteor.user(); // Safely get the current user object once.
  //   if (currentUser) {
  //     const currentUsername = currentUser.username;
  //     const currentEmail = currentUser.emails && currentUser.emails[0] && currentUser.emails[0].address;
  //     filteredUsers = filteredUsers.filter(user => {
  //       const userEmail = user.emails && user.emails[0] && user.emails[0].address;
  //       return user.username === currentUsername || userEmail === currentEmail;
  //     });
  //   }
  // }

  // filteredUsers.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <Container>
      <Row>
        <Col xs={12} className="mt-5">
          <Row>
            <Col xs={10}>
              <h2 style={{ fontWeight: 'bold' }} className="p-3">Admin Panel</h2>
            </Col>
          </Row>
          {/* <Form className="mb-3" onSubmit={handleSearchSubmit}>
            <Form.Group controlId="searchBar">
              <Row style={{ margin: 0, padding: '2% 0' }}>
                <Col xs={12}>
                  <Form.Control type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
                </Col>
              </Row>
            </Form.Group>
          </Form> */}
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
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.emails[0].address}</td>
                  <td>{user.roles ? user.roles.join(', ') : 'No role'}</td>
                  <td>
                    {/* <ToggleButton
                      value={1}
                      onChange={(e) => handleToggleActive(e, user._id)}
                    /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
