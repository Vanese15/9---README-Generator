![3](https://user-images.githubusercontent.com/16092802/196040795-194c8a6c-02c3-46eb-80fe-696b761adcaa.png)
# 9---README-Generator

When creating an open source project on github, where contributions from other developers is encouraged, it is important to have a README for the app.  The README should include, title, a short description/functionality of the app so users know how to test and how to provide useful feedback.  README should also include contact information on how I can be reached if there are any questions, comments or concerns.

The application will be invoked by using the following command:

```bash
node index.js
```

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```
GIVEN a command-line application that accepts user input
WHEN the user is prompted for information about my application repository
THEN they answer the questions such as title of project, short description, how the app is to be used, how to install (npm i), questions, contributions and contact information
WHEN prompted for a license
THEN users can select a license from the list
WHEN all the prompts have been answered
THEN an undefined md will be generated with a Table of Contents for organization
