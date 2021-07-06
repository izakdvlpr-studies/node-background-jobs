<div align="center">  
  <h1>node-background-jobs</h1>  
  <p>🦬 Background task processor using bull.</p>    
  <hr />    
  <p>
      <img src="https://img.shields.io/badge/type-studie-purple" alt="Repo Type" />
      <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/language-typescript-blue" alt="Repo Main Language" /></a>
      <img src="https://img.shields.io/badge/platform-backend-blueviolet" alt="Project Platform" />      
      <a href="https://github.com/zevdvlpr-studies/node-background-jobs/tree/main/LICENSE"><img src="https://img.shields.io/github/license/zevdvlpr/node-background-jobs?color=red&label=license" alt="Repo License" /></a>
  </p>     
  <p><a href="https://www.linkedin.com/in/zevdvlpr" target="_blank"><img src="https://img.shields.io/twitter/url?label=Connect%20%40zevdvlpr&logo=linkedin&url=https%3A%2F%2Fwww.twitter.com%2zevdvlpr%2F" alt="Follow" /></a><p>
</div>

## About

Many tasks in our application do not need to run synchronously, for example, emails, reports, etc. In such cases, the best thing to do is to process these tasks in the background.

## Techs

- [Node.js](https://nodejs.org)
- [TypeScript](https://www.typescriptlang.org)

## Requirements

- [Git](https://git-scm.com/) installed
- [Node](https://node.js.org/) installed
- [Docker](https://www.docker.com/) installed
- Npm or [Yarn](https://yarnpkg.com/) installed

## Usage

- Clone this repository: `git clone https://github.com/zevdvlpr/dev-radar`
- Run `npm install` or `yarn install`
- Edit your environment variables that are in the `.env.example` file, change it to` .env`
- Register with [Mailtrap](https://mailtrap.io) and get your credentials
- Create the redis container with `docker run --name redis -p 6379:6379 -d -t redis:alpine`
- Run `yarn dev` or `npm run dev`

## Contribute

- Fork the project.
- Create a new branch with your changes: `git checkout -b my-feature`.
- Save your changes and create a commit message telling you what you did: `git commit -m "feature: My new feature"`
- Submit your changes: `git push origin my-feature`.

## Authors

- [zevdvlpr](https://github.com/zevdvlpr)

## References

- [Background jobs (filas) no Node.js com Redis | Masterclass #02](https://www.youtube.com/watch?v=uonKHztGhko)

## Credits

- [Rocketseat](https://www.youtube.com/c/RocketSeat)

<br>
<br>
<br>
<br>

<div align="center">
  <h1>Open Source</h1>
  <sub>Copyright © 2021-present, zevdvlpr.</sub>  
  <p>node-background-jobs <a href="https://github.com/zevdvlpr-studies/node-background-jobs/tree/main/LICENSE">is MIT licensed 💖</a></p> 
</div>
