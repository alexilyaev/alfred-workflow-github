alfred-workflow-github
=======================

[![Build Status](https://travis-ci.org/alexilyaev/alfred-workflow-github.svg?branch=master)](https://travis-ci.org/alexilyaev/alfred-workflow-github)

> [Alfred 3](https://www.alfredapp.com/) workflow to search for stuff on GitHub.

Install
--------

```
npm install -g alfred-workflow-github
```

*Requires [Node.js](https://nodejs.org) 4+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*

Usage
------

In Alfred, type `git`, <kbd>Enter</kbd>, and your query.

Contributing
-------------

### Setting up as Alfred Workflow

This will create a symlink between this repo and `~/Library/Application Support/Alfred 3/Alfred.alfredpreferences/workflows`, thus enabling the workflow in Alfred.  
Changes to the code will reflect automatically the next time your run the workflow using Alfred.

```
./node_modules/.bin/alfy-init
```

### Remove the symlink

```
./node_modules/.bin/alfy-cleanup
```

Created by
-----------

- [Alex Ilyaev](https://github.com/alexilyaev)
