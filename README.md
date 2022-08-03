# Items
Some records of holding a hexo blog.

``` bash
hexo clean && hexo g && gulp build && hexo d
```

## Blog
- [x] my blog is published at https://shangguanfch.github.io
- [x] use [hexo](https://hexo.io/) and [hexo-theme-next](https://github.com/iissnan/hexo-theme-next/)
- [x] set up a distinctive website logo: [favicon.ico](/uploads/favicon.ico). Original picture: [I-Encourage-YOU.jpg](http://pic1.win4000.com/wallpaper/0/51ee2f28c52a7.jpg).

## Code Hosting Platform
- [x] hosted by [GitHub Pages](https://pages.github.com/)
- [ ] hosted by [GitLab Pages](https://about.gitlab.com/features/pages/)
- [ ] hosted by [码云 Pages](http://git.mydoc.io/?t=180861)
- [ ] hosted by Coding Pages. Now coding replace Coding Pages of [持续集成：自建静态网站](https://help.coding.net/docs/devops/ci/practice/static-website-paas.html)
- [ ] hosted by [Heroku](https://www.heroku.com/)
- [ ] hosted by [Firebase](https://firebase.google.com/)
- [ ] hosted by [Netlify](https://www.netlify.com/)
- [ ] hosted by my own Web server

## Comment System
- [x] [Gitalk](https://github.com/gitalk/gitalk)
- [ ] [Gitment](https://github.com/imsun/gitment)
- [ ] [Disqus](https://disqus.com/)
- [ ] [HyperComments](https://www.hypercomments.com/)
- [ ] [LiveRe](https://livere.com/insight/communite)
- [ ] [ChangYan](https://changyan.kuaizhan.com/)

## Custom Settings
- [ ] `scheme: Muse` in `hexo-site/_config.next.yml`
- [ ] `scheme: Pisces`
- [x] `scheme: Gemini`

- [x] changes in `hexo-site/_config.yml`: `skip_render: README.md`, `permalink: :title/`
- [x] changes in `hexo-site/_config.next.yml`: turn on `post_copyright`
- [ ] changes in `hexo-site/themes/next/source/css/_costum/costum.styl`: round avatar
  ```
  # round avatar
  .site-author-image {
  border-radius: 80px;
  -webkit-border-radius: 80px;
  -moz-border-radius: 80px;
  }
  ```
- [x] change default fonts: see [NexT: 设置字体](http://theme-next.iissnan.com/theme-settings.html#fonts-customization). I use `Helvetica`for posts, `Source Code Pro` for codes.
  > Tip: ~`//fonts.useso.com` is invalid and `//cdn.baomitu.com` is valid, see [网站卫士前端公共库停止运行公告](http://wangzhan.360.com/notice/detail4), [360 前端公共库 CDN 服务重新启动](http://wangzhan.360.com/notice/detail/10005)
  See also: 
  [Google 字体库的国内服务器在北京和上海](https://www.zhihu.com/question/24955477/answer/120232550)
  [前端 CDNJS 库及 Google Fonts、Ajax 和 Gravatar 国内加速服务](https://sb.sb/css-cdn/)

- [x] `hexo new page categories`, `hexo new page tags`, `hexo new page about`
- [x] `hexo new page links`
- [x] set the page type to display tag cloud, see [NexT: 添加「标签」页面](http://theme-next.iissnan.com/theme-settings.html#tags-page)
- [x] `comments: false` in [front-matter](https://hexo.io/docs/front-matter.html) of `hexo-site/source/categories/index.md` and `hexo-site/source/tags/index.md`

- [x] local search: use [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search)
- [x] RSS: use [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)
- [x] install [hexo-wordcount](https://www.npmjs.com/package/hexo-wordcount), and turn on `post_wordcount` in `hexo-site/_config.next.yml`. You may want to modify `hexo-site/themes/next/layout/_macro/post.swig`

## Website Optimization
- [x] use [gulp](https://gulpjs.com/) to optimize: need `hexo-site/gulpfile.js`, if use my [gulpfile.js](https://github.com/shangguanfch/shangguanfch.github.io/blob/src/gulpfile.js), run `gulp build`.
  ```bash
  npm install --global gulp
  npm install --save-dev gulp gulp-uglify gulp-clean-css gulp-htmlmin gulp-htmlclean gulp-imagemin gulp-concat
  ```
- [ ] use [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) to optimize HTML, CSS, JS and images: ~~see [空念远兮: Hexo 优化与定制(二)](http://lukang.me/2015/optimization-of-hexo-2.html)~~
- [ ] use [InstantClick](http://instantclick.io/) to speed up website ~~like [空念远兮](http://lukang.me/2015/optimization-of-hexo-2.html#comments)~~: it may not as easy as it looks, see [可以用instantClick加快访问 #632](https://github.com/iissnan/hexo-theme-next/issues/632)

## Synchronization and Backup
- [x] use [Github Actions](https://docs.github.com/en/actions) to deploy and backup, see [甦傑：如何使用Github-Actions实现Hexo博客自动化部署](https://sujie-168.top/2021/05/24/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Github-Actions%E5%AE%9E%E7%8E%B0Hexo%E5%8D%9A%E5%AE%A2%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2/)
- [ ] use [hexo-deployer-git](https://github.com/hexojs/hexo-deployer-git) to backup all the blog files
- [ ] use [hexo-git-backup](https://github.com/coneycode/hexo-git-backup) to backup
- [ ] use [CrazyMilk的方法](http://crazymilk.github.io/2015/12/28/GitHub-Pages-Hexo%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2/) to backup: see [窝飞的回答-知乎](https://www.zhihu.com/question/21193762/answer/149965944) or [Yaro's Notes: Hexo-Github建博客教程](https://yaro97.github.io/2017/01/07/Hexo-Github%E5%BB%BA%E5%8D%9A%E5%AE%A2%E6%95%99%E7%A8%8B/)
- [ ] use [Travis CI](https://www.travis-ci.org/) to deploy and backup, see [Z's Blog: 使用Travis CI自动部署Github/Coding Pages博客](https://imzlp.me/posts/42318/) or [zccz14: 优雅地使用 Hexo](https://zccz14.com/2016/12/30/%E4%BC%98%E9%9B%85%E5%9C%B0%E4%BD%BF%E7%94%A8Hexo/)
- [ ] use [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/index.html) to build blog and backup: see [欧阳松: GitLab Pages搭建Hexo博客](https://www.ouyangsong.com/2017/05/28/gitlab-pages-hexo-cloudflare-ssl-markdown/)
- [ ] synchronize the modification and creation times of articles automatically: ~~see [Percy: 迁移 Hexo 博客的终极解决方法](http://blog.percymong.com/2017/07/08/hexo-super-solution-for-moving-blog/)~~
- [ ] use [hexo-qiniu-sync](https://github.com/gyk001/hexo-qiniu-sync) to synchronize images and videos in [qiniu](https://portal.qiniu.com)

## Remainders
- [ ] set different `per_page` in `hexo-site/_config.yml`, of index, archive and tags: see [NexT: 如何设置页面文章的篇数？](http://theme-next.iissnan.com/faqs.html#setting-page-size)
- [ ] add [\<audio\>](http://www.w3school.com.cn/tags/tag_audio.asp) in `hexo-site/themes/next/layout/_custom/sidebar.swig`
- [x] use [npm-run-script](https://docs.npmjs.com/cli/run-script) to save time
- [x] use `hexo-site/_config.next.yml`

- [ ] use [hexo-admin](https://github.com/jaredly/hexo-admin) to author posts locally
- [ ] use python to encrypt the public blog files, see [cipher: Python3实现Hexo小助手](http://www.ciphermagic.cn/python-helper-4-hexo.html)
- [ ] use [阿里巴巴矢量图标库](http://www.iconfont.cn/) to expand icon number: see [aak1247: 如何使hexo显得自己更有逼格（三）——自定义与优化](https://aak1247.github.io/2017/01/22/hexo-next-3/)

- [ ] remain to be done: baidushare or sharesdk, learncloud, sitemap or baidusitemap, baidu_analytics or google_analytics or tencent_analytics or busuanzi_count, fork me on GitHub...
