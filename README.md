# How to Restore the Hexo Blog
I use [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git) to upload the source files.

## Preparation
1. install [Git for windows](https://git-for-windows.github.io/), and [Getting Started - First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
1. add ``C:\Users\username\.ssh``
1. install [Node.js](https://nodejs.org/en/)
1. install [Hexo](https://hexo.io/)
   ```bash
   npm install hexo-cli -g
   ```
1. install [Gulp](https://gulpjs.com/)
   ```bash
   npm install --global gulp
   ```
## Restore
```bash
git clone https://github.com/shangguanfch/shangguanfch.github.io.git hexo-site
cd hexo-site
git checkout origin/src # if not working on src branch, git checkout
npm install # install /node_modules
rm -rf .git # delete .git folder in hexo-site
```
