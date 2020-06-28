---
title: Use Hexo to Create Blog
date: 2017-09-03 18:52:00
categories: blog
tags: [blog, nodejs, hexo, netlify]
---
What is [Hexo](https://hexo.io/)?
Hexo is a fast, simple and powerful blog framework. You write posts in Markdown (or other languages) and Hexo generates static files with a beautiful theme in seconds.
<!-- more -->

## Requirements
Installing Hexo is quite easy. However, you do need to have a couple of other things installed first:

- [Node.js](https://nodejs.org/en/)
- [Git](https://git-scm.com/) (complete [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup))

For Chinese users, it is recommended to use [cnpm](https://cnpmjs.org).
> Tip: If using Arch Linux, notice [Arch Wiki: Node.js#Allow_user-wide_installations](https://wiki.archlinux.org/index.php/Node.js#Allow_user-wide_installations).

```
# install command cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

# or just set registry
npm config set registry https://registry.npm.taobao.org
```

## Installation
Run the following commands
```bash
npm install -g hexo-cli
hexo init blog
cd blog
hexo server
```
Then you can see a web page at http://localhost:4000/.

Or a more convenient way: use neoFelhz's [HexoKit](https://github.com/neoFelhz/HexoKit "https://github.com/neoFelhz/HexoKit").

## Usage
For more information, visit https://hexo.io/docs/commands.html.
```
# in hexo-site

# start a local server, by default,
# Hexo is running at http://localhost:4000/
hexo s

# clean the cache file (db.json)
# and generated files (/public)
hexo clean

# generate static files
hexo g

# deploy website
hexo d

# create new article in source/_posts
hexo new "title"
```
In addition, Hexo provides tag plugins: a useful way for you to quickly add specific content to your posts. For more information, visit https://hexo.io/docs/tag-plugins.

## Themes
I recommend [hexo-theme-next](https://github.com/iissnan/hexo-theme-next) and [hexo-theme-material](https://github.com/viosey/hexo-theme-material). Please read a short comparison of popular Hexo themes at https://en.abnerchou.me/Blog/5c00ca67. For more themes, visit https://hexo.io/themes/index.html.

> Tip: hexo-theme-next suggests us replacing `themes/next/_config.yml` of `source/_data/next.yml` (see [hexo-theme-next #Theme configurations using Hexo data files](https://github.com/iissnan/hexo-theme-next#theme-configurations-using-hexo-data-files-328)).

## Website Optimization
A simple optimizing tool: [Gulp](https://gulpjs.com/). Gulp is a toolkit for automating painful or time-consuming tasks in your development workflow.
> Tip: [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) is a more convenient plugin, but maybe with more problems.

```
# install Gulp globally
npm install gulp-cli -g

# in hexo-site
# install some relative plugins locally
npm install gulp gulp-uglify gulp-clean-css gulp-htmlmin gulp-htmlclean gulp-imagemin gulp-concat –-save-dev
```
Need `gulpfiles.js` in the root of hexo-site (like my [gulpfile.js](https://github.com/shangguanfch/shangguanfch.github.io/blob/src/gulpfile.js)).
Then the following command (if use my gulpfiles.js) will optimize your generated files.
```
gulp build
```

SEO (Search Engine Optimization): it seems useless...
> Tip: You may want to use [hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink).to create one and only one link for every post.

Other optimizations can't be implemented without Web server (actually not, I just think we'd better wait for developers' hard work).

## Deployment
Here are several hosting service providers, which should we choose?

### GitHub Pages
[GitHub Pages](https://pages.github.com/) is designed to host your personal, organization, or project pages directly from a GitHub repository.
[What is GitHub Pages?](https://help.github.com/articles/what-is-github-pages/) says it
- may be no larger than 1GB
- limit of 10 builds per hour
- limit of 100GB or 100,000 requests per month

It's easy to use [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git) to complete deployment (find other deployer plugins at: https://hexo.io/docs/deployment.html).

For example, if you want to push the source files and generated files at the same time to two different branches, the option should be like
```
# _config.yml
deploy:
  # push the generated files (static site, i.e., /public)
  - type: git
    repo: git@github.com:<username>/<username>.github.io.git
    branch: master
  # push the source files
  - type: git
    repo: git@github.com:<username>/<username>.github.io.git
    branch: src
    extend_dirs: /
    ignore_hidden: false
    ignore_pattern:
        public: .
```

### Coding Pages (Recommend)
It's recommended to host your site to [Coding Pages](https://coding.net/pages) if you are in China (i.e., you main readers are Chinese). Just add `Hosted by Coding Pages` to avoid [redirection](https://coding.net/u/coding/p/Coding-Feedback/topic/337715).
[Coding Pages 介绍](https://coding.net/help/doc/pages/) says that it
- no larger than 100MB
- limit of 10 builds per hour
- redirect \*.coding.me to a custom domain automaticlly
- One-Click SSL: free SSL certificate
- Force SSL: set a redirect from HTTP to HTTPS

Use it as same as GitHub Pages. Just one difference: don't need `CNAME` file, please set Pages service settings.

### Netlify (Recommend)
> "Netlify has everything you need to make a high performance site or web-app. You just push your code."
--Tom Preston-Werner, Founder of GitHub & Creator of Jekyll

I think Netlify is the best choice. [Netlify Docs](https://www.netlify.com/docs/) says that they provide:
- One-Click SSL: Netlify integrates with Let's Encrypt and automatically provisions, distributes and renews your certificate
- HTTP/2 works when HTTPS is enabled
- Force SSL
- Continuous Deployment: Each time you push to GitHub, Netlify runs a build with your tool of choice and deploys the result to CDN

Netlify lets you link a GitHub repository to a site. Each time you push to GitHub, Netlify runs a build with your tool of choice and deploys the result to Netlify's powerful CDN. You also can deploy your static site without linking a GitHub (or GitLab) repository.
Use [web UI](https://app.netlify.com/) or [command line tools](https://www.netlify.com/docs/cli/) to deploy and generate.

> By the way: [Matt Biilmann](https://www.netlify.com/blog/2016/01/12/this-weekends-ddos-attack-and-whats-in-a-cname/) and [Netlify](https://www.netlify.com/docs/custom-domains/) recommends `www.` domain unless you use ALIAS records or ANAME records, I'm naive, I drop `www.` directly. Users can't remove the `sitename.netlify.com` “default” hostname on Netlify, so I have three blog addresses now.

### Firebase
Deploying site to [Firebase](https://firebase.google.com/) may be a good choice.

[Firebase Hosting](https://firebase.google.com/products/hosting/) tells us Firebase
- files deployed to Firebase Hosting are cached on SSDs at CDN edge servers around the world
- provides free SSL certificates for custom domains
- force SSL

Read [Firebase Hosting Docs](https://firebase.google.com/docs/hosting/ "https://firebase.google.com/docs/hosting/") to learn how to deploy static site to Firebase.
> You need to cross GFW, and have a Google account.

Login and create a project in [Firebase console](https://console.firebase.google.com/ "https://console.firebase.google.com/"), get project-id.
```
npm install -g firebase-tools

# may need set proxy for teriminal temporarily,
# as follows (socks5) (optional)
export http_proxy=socks5://127.0.0.1:1080

# in hexo-site
firebase login
firebase init
firebase use --add <project-id>

# all right, try to deploy /public to Firebase
firebase deploy
```
> In fact, Firebase is user-friendly (it has Chinese tutorial), just need to follow its guides. In its console, you can see your history record and learn how to bind domain name.

Edit firebase.json to determine which files should be deployed.

## Easy Deploy: Script
Life is short, why not using [npm-run-script](https://docs.npmjs.com/cli/run-script)?
Add `"scripts": {}` to package.json, as follows:
```
# package.json
{
  //,
  "scripts": {
    "blogupd": "hexo clean && hexo g && gulp build && hexo d"
  }
}
```
Then the following command will cover:
- `hexo clean`: clean the cache file (db.json) and generated files (public)
- `hexo g`: generate static files
- `gulp build`: optimize generated files
- `hexo d`: you can push the source files to GitHub

```
# in hexo-site
npm run blogupd
```

However, if you use Linux, you may prefer create a shell script, or edit `.zshrc` (or `.bashrc`?).

For example: a shell script.
```
# blogupd.sh

#!/bin/sh
cd ~/blog
hexo clean && hexo g && gulp build && hexo d
```
```
# just run (current folder should contain blogupd.sh)
sh blogupd.sh
```

Or edit ~/.zshrc.
```
# ~/.zshrc
alias blogupd="cd ~/blog && hexo clean && hexo g && gulp build && hexo d && cd ~"
```
```
# just run
blogupd
```

## Image Hosting
[Hexo's Asset Folders](https://hexo.io/docs/asset-folders) allows us to keep images in source/images folder, use something like `![](/images/image.jpg)` to access them.

I use [Imgur](https://imgur.com/) to store images for this blog. There are some other choices (please refer to https://blog.nfz.moe/archives/collection-of-image-hosting.html).

Address | Description
:---: | :---:
https://sm.ms | support iOS and Android
https://portal.qiniu.com | 七牛云
https://www.upyun.com | 又拍云
https://ooxx.ooo/upload |
https://tuchuang001.com |
https://lightpic.info |
https://upload.cc |
http://photo.weibo.com/photos/upload | 微博图床
http://www.moepic.net |
http://www.z4a.net |
http://www.lofter.com | 乐乎
https://imgur.com | Imgur
https://postimages.org |
https://imgsafe.org |
https://www.getcloudapp.com |
https://www.img.ly |
https://github.com | GitHub Projects. GitHub Issues

## HTTPS and Secure Symbol
If you get SSL certificates for your custom domains, and in your pages "absolute" URLs point to secure content - images, scripts and css files (all need HTTPS), then, to the left of the web address, Firefox and Chrome (or Chromium) will show (like this blog）:
- <img src="/uploads/lock.svg" align ="left" width="24" height="24"> Secure

Otherwise, will show:
- <img src="/uploads/neutral.svg" align ="left" width="24" height="24"> Info or Not secure

You can use [JitBit](https://www.jitbit.com/sslcheck/) to scan your website for non-secure content.
I don't think a secure symbol provided by Chrome or Firefox is important... But it seems that browsers force us be "secure".

## About This Blog
Comment system? I'm waiting for [Feature: Add Gitalk Support #1814](https://github.com/iissnan/hexo-theme-next/pull/1814), as I mentioned above, we'd better wait for developers' hard work. Here is my whole custom settings: [README.md](https://github.com/shangguanfch/shangguanfch.github.io/blob/master/README.md "https://github.com/shangguanfch/shangguanfch.github.io/blob/master/README.md").

My blog is "hosted by Netlify", but all of the following domains are avaliable now.
- https://thanksforfun.me
- https://shangguanfch.github.io
- https://thanksforfun.netlify.app

I'm considering using [Travis CI](https://www.travis-ci.org/) or [GitLab CI](https://about.gitlab.com/features/gitlab-ci-cd/), which may make blogging more convenient (post and edit using Git, not need strict development environment). But Netlify seems convenient enough...


Others' relative articles:
- ~~[萌新的 arch 安装 hexo 笔记](https://xunne.github.io/2017/06/09/%E8%90%8C%E6%96%B0%E7%9A%84arch%E6%90%AD%E5%BB%BAhexo%E7%AC%94%E8%AE%B0/)~~
- [Hexo Optimization](http://qianling.pw/hexo-optimization/)
- [Use Hexo at any Time any Place](https://blog.nfz.moe/archives/use-hexo-at-any-time-any-place.html  )
