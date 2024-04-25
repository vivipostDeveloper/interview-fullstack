
# Vivipost Full-stack Interview

Created and Tested with Node v20.11.0

## Installation

1. Clone repository

2. Install and run backend

```bash
  cd backend
  npm install
  npm run start
```

3. Create frontend project (free to choose framework, Angular recommended)

```bash
  cd frontend
  # Create project with your preferred frontend framework
```
## Instructions

1. Prepare the development environment with the previous Installation instructions.

2. Create the Notifications component following the design guidelines from the [Figma document](https://www.figma.com/file/NvsMEA7oScw1a071rTzBjf/INTERVIEW-NOTIFICATIONS?type=design&node-id=0%3A1&mode=design&t=hhaWHD1YUF5hI7GS-1). Try to replicate the design as close as possible without using frontend libraries (Tailwind CSS is allowed but not required). All icons are available in the */resources/assets* folder.

3. Complete the REST endpoint in */backend/routes/notificationRoute.mjs* to retrieve the notifications.

4. Integrate the backend with the frontend to get the notificacions information and display it inside the component.
## Useful Links

[Figma document](https://www.figma.com/file/NvsMEA7oScw1a071rTzBjf/INTERVIEW-NOTIFICATIONS?type=design&node-id=0%3A1&mode=design&t=hhaWHD1YUF5hI7GS-1)

[mysql2 Docs](https://www.npmjs.com/package/mysql2)

[javascript-time-ago Docs](https://www.npmjs.com/package/javascript-time-ago)
## Bonus

* Add hover, active and focus effects to actions. (Links and buttons)
* Add 5 seconds delay to the endpoint response to show a component loading state.
* When clicking on "Mark as read" button, make the blue circle on top of the icon dissappear.
* Pass the notification data as a parameter to the Notifications component. Duplicate the component passing an empty array so that the empty state from the design is shown.

* Order the notifications in the backend by descending date before returning them to the frontend.