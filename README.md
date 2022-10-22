# alfred-workflow-github

[![Build Status](https://travis-ci.org/alexilyaev/alfred-workflow-github.svg?branch=master)](https://travis-ci.org/alexilyaev/alfred-workflow-github)

> [Alfred 3](https://www.alfredapp.com/) workflow to search for stuff on GitHub.

## This is an experiment, for now

I was using another workflow but it was slow and I was wondering if I could create a workflow on my own.  
So I"ve decided to experiment and found [Alfy](https://github.com/sindresorhus/alfy), then decided
to try the GitHub v4 API (based on GraphQL), and so this happened.  
This workflow **is not** faster than the other solutions, I think it's GitHub's API speed, but it's
written in JavaScript 😀.

For now, check out some existing solutions:

- [willfarrell/alfred-github-workflow](https://github.com/willfarrell/alfred-github-workflow)
- [gharlan/alfred-github-workflow](https://github.com/gharlan/alfred-github-workflow)

## Install

```shell
npm install -g alfred-workflow-github
```

_Requires [Node.js](https://nodejs.org) 4+ and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/)._

## Usage

In Alfred, type `git`, Press `Enter`, and your query.

## Created by

- [Alex Ilyaev](https://github.com/alexilyaev)
