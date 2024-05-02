# fit-journey

![landing-page](https://github.com/JohnGalinato808/fitjourney/raw/main/doc/fitjourney_landingpage.png)
[![fit-journey](https://github.com/JohnGalinato808/fitjourney/actions/workflows/ci.yml/badge.svg)](https://github.com/JohnGalinato808/fitjourney/actions/workflows/ci.yml)


========= 5/04/24 Updates ==========

--- **Completions in this update** ---
- Added yearly fitness circle graph
- 

--- **Link** ---
- Link of continuing work (https://github.com/JohnGalinato808/fitjourney/actions)

--- **Roles and responsibilities** ---
- John Galinato
    - Completed:
- Loelle Lam
    - Completed:
- Mai Abe
    - Completed: 
- Tiffany Ngo
    - Completed: Implemented circle graph that shows how much fitness was done each month in a specified year, percentage-wise


========= 4/10/24 Updates ==========

--- **Completions in this update** ---
- Conducted Fuzz testing
- Code cleanup to reduce possible attack surfaces
- Added graph to show overall fitness levels of the user on a weekly basis for a user dashboard
- In progress partially completed features include
  - User access control management for Admins
  - Goal tracking capabilities in the dashboard for Users

--- **Link** ---
- Link of continuing work (https://github.com/JohnGalinato808/fitjourney/actions)

--- **Pending** ---
- For the user:
  - Dashboard
    - Fitness goal setting and goal tracking capabilities (in progress)
- For the admin:
  - User access control management (in progress)
  - Informational content management
- For Application
  - Continue monitering and analysing code for any issues regarding codestyle and/or injection and security penetration.

--- **Roles and responsibilities** ---
- John Galinato
  - Completed: Complete cleanup of all unused files within the application. Updated IDs file to contain only used IDs post cleanup.
  - Next: Focus on assistance with implementation of inserting a 'goal' feature.
      - Code review of 'goal' implementation to include:
          - Analysis of probable attack surfaces
          - Vulnerabilities as a result of fuzz testing.
          - Prevention of security penetrations.
- Loelle Lam
  - In Progress: Began implementation of 'goal' feature, to be further developed, analyzed, and optimized. Timeline includes the completion of 'goal' feature and all related analysis by 20240502.
- Mai Abe
  - Completed: Fixed the user insertion function issues on a user SignUp. Removed the textCheck function as it is not relevant and to make the function more simple - on signup, all users are assigned the 'user' role. Created a User role in addition to the Admin role. Created an Admin Panel page for listing all users in the db. (in progress) 
  - Next: Create activation/deactivation functionality for users for access controlling. 
- Tiffany Ngo
  - Completed: Performed fuzz testing on the website to test for vulnerabilities and security issues, and added validation checks on the input fields for the description, title, and image upload for the fitness logs to prevent possible issues. Added graph to show overall fitness levels of the user on a weekly basis.
  - Next: Add more features for the graph, like sorting based on activity type, or maybe changing it to a bar graph that shows every activity type you did that day and for how long.


========= 3/28/24 Updates ==========

--- **Completions in the last update** ---
- Landing page that gives a brief overview of the purpose of the site and how to use it.
- Ability to log in and register a new account
- Profile management
- A way to make new posts about fitness-related activities that you've done in your day, with input fields for the title of the post, an image, a description of the activity, and how much time was spent doing it
- Ability to edit and delete posts
- Capability to search through posts to find a specific one
- Posts sorted by the newest ones

--- **Progress** ---
- Workout Log page to allow users to enter an activity log with the date, title, description, image, createdAt, owner, activityDurationHours, and activityDurationMinutes information.
  - This is an update from the journal post (Forum) page we previously had. With the update, it reflects the actual workout activity log more instead of calling it a Forum page.
  - Ability to delete posts
  - Comment feature is removed since it is irrelevant to the workout log page
  - Retrieval of Workout log sorted in order of date created
- Basic dashboard page 

--- **Link** ---
- Link of continuing work (https://github.com/JohnGalinato808/fitjourney/actions)

--- **Pending** ---
- For the user:
  - Dashboard
    - A graph that takes into account the amount of time spent exercising, and shows it to you to allow you to better monitor your fitness levels
    - Fitness goal setting and goal tracking capabilities
- For the admin:
  - User account management
  - User access control management
  - Informational content management

--- **Roles and responsibilities** ---
- John Galinato
  - Current: Removal of some identified unnecessary lines of code to reduce the amount of attackable surfaces. Began mapping component IDs to the 'Utilities/ids' directory to be used for testing. Started on Test code.
  - Next: Implementation of test code and verifying via testcafe.
- Loelle Lam
  - New Completions: Removed some unused data/components and updated miscellaneous incorrect values. Added basic user dashboard page.
  - Current: Implement fitness goal setting.
  - Next: Improve upon goal setting and tracking capabilities.
- Mai Abe
  - New Completions:
      - Create a workout log page (updated the journal post page)
      - Create a WorkoutLogCollection with the following fields to reflect the basic workout information - date, title, description, image, createdAt, owner, activityDurationHours, activityDurationMinutes
      - Create 'Edit' modals to edit a workout log for each row
      - Create 'Delete' modals to delete a workout log for each row
      - Create 'Create log' button to point to creating a workout log
  - Current: debugging Edit page to maintain the current values for each field and properly update the record
  - Next: Create an admin role and access control management UI
- Tiffany Ngo
    - Completed: Fixed errors relating to the "Delete log" button not redirecting back to the Workout Log page, but instead to a blank page. Fixed issue when adding a new log, where an error would be thrown saying to "Input a valid number for hours and minutes" even with a valid input. Fixed error with Edit button, where it would again throw an error saying to "Input a valid number for hours and minutes" even with a valid input.
    - Next: Create a circle graph for each account, that will show how much time that you've spent doing various activities and will thus allow the user to track their fitness levels better. Add an option to select type of fitness activity when creating logs to make this work.

===== 2/21/24 Updates =====

--- **What is complete so far?** ---
- Landing page that gives a brief overview of the purpose of the site and how to use it.
- Ability to log in and register a new account, as well as modify the profile of the account
- A way to make new posts about fitness-related activities that you've done in your day, with input fields for the title of the post, an image, a description of the activity, and how much time was spent doing it
- Ability to edit and delete posts
- A way to comment on posts
- Ability to delete comments
- Capability to search through posts to find a specific one
- Posts sorted by the newest ones

--- **Pending** ---

**For the user**:
- Data entry and editing for workouts
- Dashboard
- A graph that takes into account the amount of time spent exercising, and shows it to you to allow you to better monitor your fitness levels
- Profile management

**For the admin**:
- User account management
- User access control management
- Informational content management


--- **Contributions** ---
- John Galinato
    - Completed: Created Fit Journey sign-in, sign-up, landing page, home page, journal page, creating journal post, adding/deleting comments to a post, and chat moderation via AI. On Github, added test status badge.
    - Next: UI improvements and test code.
- Loelle Lam
    - Completed: Implemented editing for user-created posts.
    - Next: Improve usability of the editing function and add editing to other features
- Mai Abe
    - Completed: Created a logo, updated navbar, footer, and landing page. Updated some styling for the landing page.
    - Next: Update a journal post page to reflect a workout entry log of a user.
- Tiffany Ngo
    - Current: Created a way to input how much time was spent on each activity whenever making a post, made it so that posts are sorted by the newest posts first by default, and fixed minor errors.
    - Next: Create a circle or bar graph that is unique to each account, that will show how much time you've spent doing various activities and will thus allow the user to track their fitness levels better.
