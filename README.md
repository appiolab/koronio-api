# Koronio API
A all in one Project Management tool for freelancers, small to medium office.

API [Documentation](https://github.com/koronio/api/wiki) guide.

## Installation
**Step 1:**

    npm install

**Step 2:**

Copy the `.env.example` file and paste as `.env` in the root folder of application. Update the environment variables as per your requirements.

**Step 3:**

Migrate & seed the database using

    sequelize db:migrate
    sequelize db:seed:all