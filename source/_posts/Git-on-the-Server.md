---
title: Git on the Server
date: 2017-08-01 19:24:21
categories: record
tags: [record, git, vps]
---

Git on the Server, refer to https://www.qcloud.com/developer/labs/lab/10045

Server system: CentOS 7.2 x64
<!-- more -->

## requirements
```
# 安装依赖库
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel
# 安装编译工具
yum install gcc perl-ExtUtils-MakeMaker
```
## install git

```
# choose a directory to store installation package
cd /usr/local/src

# download package (search for a stable installation package in https://www.kernel.org/pub/software/scm/git/)
wget https://www.kernel.org/pub/software/scm/git/git-2.14.1.tar.xz
# unzip
tar -zvxf git-2.14.1.tar.gz
# go to git directory
cd git-2.14.1

# compile
make all prefix=/usr/local/git
# install to /usr/local/git 
make install prefix=/usr/local/git
```

## change the PATH system variable

将 git 目录加入 PATH
```
# 将原来的 PATH 指向目录修改为现在的目录
echo 'export PATH=$PATH:/usr/local/git/bin' >> /etc/bashrc
# execute
source /etc/bashrc
# print git version
git --version
```

## create git user and set password 

```
# create a git user account
useradd -m gituser
# set password
passwd gituser
```

## init git repositores and set user rights

创建 git 仓库并初始化
```
# 创建 /data/repositories 目录用于存放 git 仓库
mkdir -p /data/repositories

# init
cd /data/repositories
git init --bare test.git

# set up user access for git repository
chown -R gituser:gituser /data/repositories
chmod 755 /data/repositories
# 查找 git-shell 所在目录，edit /etc/passwd file，the last line should be changed as follows
gituser:x:500:500::/home/gituser:/usr/local/git/bin/git-shell
```
If follow the steps above, the location will be /usr/local/git/bin/git-shell, use `which git-shell` command to check the location

安全目的, 限制 git 账号的 ssh 连接只能是登录 git-shell

## use git service
```
# 克隆 test repo 到本地
cd ~
git clone gituser@<your CVM IP address>:/data/repositories/test.git
```

恭喜，Git 服务器搭建完成

Further reading: https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols