# DeLesslin's Server

Backend for www.delesslin.studio

## Features:

    - Serve portfolio data
    - Serve bluesky bots
    - Dashboard for editing and adding to portfolio
    - Save static images/etc

## Development Tasks

-   [x] Get server running on linode
-   [x] Get github actions working
-   [x] Serve static html from README file
-   [x] Implement nginx
-   [x] Implement mongodb in docker-compose
-   [ ] create model and endpoint for creating and retrieving portfolio data
-   [ ] Start storing portfolio data in mongodb
-   [ ] Migrate bluesky bots

## API

### `/PROJECTS`

-   `GET /`
    -   Get all projects
-   `GET /:id`
    -   Get project with given id
-   `POST /`
    -   create new project
-   `DELETE /:id`
    -   Delete project with given id
-   `PUT /:id`
    -   Update project with given id

## Reference and Biblio

[Showdown](https://github.com/showdownjs/showdown)
