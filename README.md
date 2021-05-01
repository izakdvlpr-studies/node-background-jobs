# Background Jobs Node

Many tasks in our application do not need to run synchronously, for example, emails, reports, etc. In such cases, the best thing to do is to process these tasks in the background.

# Requirements

- [Git](https://git-scm.com/) installed
- [Node](https://node.js.org/) installed
- [Docker](https://www.docker.com/) installed
- Npm or [Yarn](https://yarnpkg.com/) installed

# Usage

- Run `npm install` or `yarn install`.
- Create the redis container by running: `docker run --name redis -p 6379:6379 -d -t redis:alpine`.
- Run `yarn dev` or `yarn install`.


# Authors

- [zevdvlpr](https://github.com/zevdvlpr)