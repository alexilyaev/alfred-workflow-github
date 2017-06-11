Contributing
==============

Your contribution is very much appreciated.

Initial Setup
---------------

1. Install Node.js (choose Current)
    - From [nodejs.org](https://nodejs.org/) (All platforms)
    - Or using [Homebrew](http://blog.teamtreehouse.com/install-node-js-npm-mac) (Mac)
    - Or any other [package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
1. Fork this repo and `git clone` it
1. Install dependencies (at the root of the repo):

    ```
    npm i
    ```

Setting up as Alfred Workflow
------------------------------

```
./node_modules/.bin/alfy-init
```

- Creates a symlink between this repo and `~/Library/Application Support/Alfred 3/Alfred.alfredpreferences/workflows`, thus adding the workflow to Alfred. 
- Changes to the code will reflect automatically the next time your run the workflow using Alfred
- Changes in the Alfred Workflows UI will update `info.plist` and can be saved by committing


Remove the symlink and cleanup
-------------------------------

```
./node_modules/.bin/alfy-cleanup
```
