# Taike 

## ToDo

- [ ] Set up database and model
- [ ] add authentication
- [ ] add notes CRUD
- [ ] add payment to firecrawl

## Later
- Implement dark mode toggle
- Add search functionality for notes
- Create categories management page
- Enable note sharing feature
- Add markdown support for notes

## Components in app

#### ENV Management
https://env.t3.gg/docs/core

#### Auth
https://clerk.com/


## Changes in config
Prevent eslint and typescript errors from breaking the build
Next-config.js
```js

    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
```
=======
# Todo
- [ ] Hook up DB
- [ ] Add auth
