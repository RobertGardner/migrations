# Introduction

Displays results of migration analysis in a map.

# How to build and run

**Note** This project requires node v4.x.x or higher and npm 2.14.7.

```bash
# If you don't have gulp and/or tsd already installed:
npm install -g gulp tsd
# If you don't have bower already installed:
npm install -g bower

cd migrations
npm install      # or `npm run reinstall` if you get an error
bower install google-chart

# dev
npm start

# Other useful commands (see package.json for full list):
npm run-script build.dev
npm run-script lint
npm test
npm run docs      # api document for app
```

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

# Important Note
Project structure is based on https://github.com/mgechev/angular2-seed
which is kept up to date with new Angular2 releases.
Check this github project regularly after Angular2 updates.
Currently sync'd to beta.0

Files not taken from angular2-seed:
  .gitignore (added section for migrations-specific components)
  package.json (just devDependencies and dependencies)
  app/components/migration-map/
  Minor changes to:
  	app.html, app.ts (to add "Migrations" menu)