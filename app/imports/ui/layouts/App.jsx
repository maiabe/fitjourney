import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import AdminPanel from '../pages/AdminPanel';
import NotAuthorized from '../pages/NotAuthorized';
import WorkoutLog from '../pages/WorkoutLog';
import Graphs from '../pages/Graphs';
import CommunityPage from '../pages/CommunityPage';
import Dalle3 from '../pages/Dalle3';
import External from '../pages/External';
import EditProfile from '../pages/EditProfile';
import AddProfile from '../pages/AddProfile';
import CreateLog from '../pages/CreateLog';
import Survey from '../pages/SurveyPage';
import AddSurvey from '../pages/AddSurvey';
import Mapping from '../pages/Mapping';
import Model from '../pages/Model';
import AddModCard from '../pages/AddModCard';
import EditLog from '../pages/EditLog';

const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/adminpanel" element={<AdminProtectedRoute ready={ready}><AdminPanel /></AdminProtectedRoute>} />
          <Route path="/workoutlog" element={<ProtectedRoute><WorkoutLog /></ProtectedRoute>} />
          <Route path="/graphs" element={<ProtectedRoute><Graphs /></ProtectedRoute>} />
          <Route path="/survey" element={<ProtectedRoute><Survey /></ProtectedRoute>} />
          <Route path="/community" element={<ProtectedRoute><CommunityPage /></ProtectedRoute>} />
          <Route path="/mapping" element={<ProtectedRoute><Mapping /></ProtectedRoute>} />
          <Route path="/dalle3" element={<ProtectedRoute><Dalle3 /></ProtectedRoute>} />
          <Route path="/external" element={<ProtectedRoute><External /></ProtectedRoute>} />
          <Route path="/editprofile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
          <Route path="/addprofile" element={<ProtectedRoute><AddProfile /></ProtectedRoute>} />
          <Route path="/createlog" element={<ProtectedRoute><CreateLog /></ProtectedRoute>} />
          <Route path="/addsurvey" element={<ProtectedRoute><AddSurvey /></ProtectedRoute>} />
          <Route path="/addmodcard" element={<ProtectedRoute><AddModCard /></ProtectedRoute>} />
          <Route path="/model" element={<ProtectedRoute><Model /></ProtectedRoute>} />
          <Route path="/editlog/:_id" element={<ProtectedRoute><EditLog /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminProtectedRoute ready={ready}><Landing /></AdminProtectedRoute>} />
          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};
const AdminProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
ProtectedRoute.defaultProps = {
  children: <Landing />,
};

AdminProtectedRoute.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
AdminProtectedRoute.defaultProps = {
  ready: false,
  children: <Landing />,
};
export default App;
