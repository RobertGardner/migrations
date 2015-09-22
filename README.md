# Introduction

Displays results of migration analysis in a map.

# How to build and run

```bash
# If you don't have gulp and/or tsd already installed:
npm install -g gulp tsd
# If you don't have bower already installed:
npm install -g bower

cd migrations
npm install
bower install google-chart

# dev
gulp serve.dev
# prod
gulp serve.prod

# To just build:
gulp build.dev
gulp build.prod
```

# Important Note
Project structure is based on https://github.com/mgechev/angular2-seed
which is kept up to date with new Angular2 releases.
Check this github project regularly after Angular2 updates.
Currently sync'd to alpha.37

Files not taken from angular2-seed:
  .gitignore (added section for migrations-specific components)
  package.json (just devDependencies and dependencies)
  app/components/migration-map/
  Minor changes to:
  	app.html, app.ts (to add "Migrations" menu)