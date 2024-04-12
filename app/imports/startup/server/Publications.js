import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

import { Profiles } from '../../api/profile/profile';
import { WorkoutLogs } from '../../api/workoutlog/workoutlog';
import { Comments } from '../../api/comment/comment';
import { Surveys } from '../../api/survey/survey';
import { Votes } from '../../api/vote/vote';
import { ModCards } from '../../api/modcard/modcard';

Meteor.publish(Comments.userPublicationName, function () {
  if (this.userId) {
    return Comments.collection.find();
  }
  return this.ready();
});
Meteor.publish(Profiles.userPublicationName, function () {
  if (this.userId) {
    return Profiles.collection.find();
  }
  return this.ready();
});

Meteor.publish(WorkoutLogs.userPublicationName, function () {
  if (this.userId) {
    return WorkoutLogs.collection.find();
  }
  return this.ready();
});

Meteor.publish(Votes.userPublicationName, function () {
  if (this.userId) {
    return Votes.collection.find();
  }
  return this.ready();
});

Meteor.publish(ModCards.userPublicationName, function () {
  if (this.userId) {
    return ModCards.collection.find();
  }
  return this.ready();
});

Meteor.publish(Surveys.userPublicationName, function () {
  if (this.userId) {
    return Surveys.collection.find();
  }
  return this.ready();
});

Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});

Meteor.publish('allUsersWithRoles', function () {
  if (!this.userId || !Roles.userIsInRole(this.userId, 'admin')) {
    // Only publish to logged-in admins
    return this.ready();
  }

  return Meteor.users.find({}, {
    fields: {
      username: 1,
      emails: 1,
      roles: 1, // Assuming you're using something like `alanning:roles`
      createdAt: 1,
    },
  });
});
