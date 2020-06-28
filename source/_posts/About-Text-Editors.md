---
title: About Text Editors
date: 2017-10-16 11:44:24
categories: record
tags: [record, editor]
---
There are several text editors for coding and writing. Which one should be chosen? It had led to several discussions...
<!-- more -->
## Introduction
Read these articles to get a simple impression.
- [10+ Best Text Editors For Programming 2016/2017](http://blog.liveedu.tv/10-best-text-editors-programming-2016/)
- [Best Text Editor? Atom vs Sublime vs Visual Studio Code vs Vim 2016](https://www.codementor.io/mattgoldspink/best-text-editor-atom-sublime-vim-visual-studio-code-du10872i7)
- [The best free text editor 2017](http://www.techradar.com/news/the-best-free-text-editor-2017)

Explore more.
- [A Simple Comparison for You](https://www.g2crowd.com/categories/text-editor)
- [A Ranking of Best Programming Text Editors](https://www.slant.co/topics/12/~best-programming-text-editors)

Read [Stack Overflow Annual Developer Survey](https://insights.stackoverflow.com/survey/) to find the popular editor.
- [Stack Overflow Developer Survey 2017#technology-most-popular-developer-environments-by-occupation](https://insights.stackoverflow.com/survey/2017#technology-most-popular-developer-environments-by-occupation)
- [Stack Overflow Developer Survey 2016#technology-development-environments](https://insights.stackoverflow.com/survey/2016#technology-development-environments)

## Guides
[GitHub Awesome](https://github.com/sindresorhus/awesome): curated list of awesome lists. Find guides to use these editors in awesome lists.

See also Zhihu:
https://zhuanlan.zhihu.com/p/21434126
https://zhuanlan.zhihu.com/p/21444928
https://zhuanlan.zhihu.com/p/22309567

## [Vim](https://vim.sourceforge.io/)
Vim - the ubiquitous text editor.

Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient. It is included as "vi" with most UNIX systems and with Apple OS X.

Vim Tips wiki: http://vim.wikia.com/wiki/Vim_Tips_Wiki

[SpaceVim](https://spacevim.org/):  A community-driven vim distribution inspired by spacemacs.

## [Emacs](https://www.gnu.org/software/emacs/)
An extensible, customizable, free/libre text editor — and more.

Emacs Wiki: https://www.emacswiki.org/emacs/SiteMap

[Spacemacs](http://spacemacs.org/): A community-driven Emacs distribution - The best editor is neither Emacs nor Vim, it's Emacs *and* Vim!

## [Sublime Text](http://www.sublimetext.com/)
A sophisticated text editor for code, markup and prose.

## [Visual Studio Code](https://code.visualstudio.com/)
Free. Open source. Runs everywhere.

## [Atom](https://atom.io/)
Atom is a text editor that's modern, approachable, yet hackable to the core—a tool you can customize to do anything but also use productively without ever touching a config file.

It's hard to install packages from [apm](https://github.com/atom/apm) in China. If you encouter some problems while installing packages, follow steps below.

Use npm mirror of China.
```
apm config set registry https://registry.npm.taobao.org
```

Or set proxy for apm. If you use SS or SSR, you can run commands as follows (may need modifying to suit your personal settings).
```
apm config set strict-ssl false
apm config set http-proxy socks5://127.0.0.1:1080
apm config set https-proxy socks5://127.0.0.1:1080
```
View configuration at `~/.atom/.apmrc`. For more information of using apm in China, visit https://atom-china.org/t/atom/797/2.

Welcome to [Atom China](https://atom-china.org/).
