---
title: Across the Great Wall
date: 2017-08-02 17:04:59
categories: record
tags: [record, gfw, vps, git, centos, linux]
---
> Across the Great Wall we can reach every corner in the world.

The Great Firewall of China (abbreviated to GFW) is the combination of legislative and technological actions that have been taken by the government of Mainland China. For more information, visit https://en.wikipedia.org/wiki/Great_Firewall.

How to deploy tools to cross GFW on the server? I will give a brief introduction, use CentOS 7+ as my server OS. (please refer to https://sspai.com/post/39828)
<!-- more -->

## Shell Script
Easy way to install Shadowsocks-Python or ShadowsocksR or Shadowsocks-Go or Shadowsocks-libev, from https://teddysun.com/486.html. You can see all the souce code in https://github.com/teddysun/shadowsocks_install.
> Update: it's highly recommended to use [Twist](https://github.com/Unbinilium/Twist) to setup Shadowsocks-libev server.

### Installation
Become root, and run commands as follows:
```
wget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh
chmod +x shadowsocks-all.sh
./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log
```
This script run shadowsocks at startup.
### Usage
```
# Shadowsocks-Python
/etc/init.d/shadowsocks-python start/stop/restart/status
# ShadowsocksR
/etc/init.d/shadowsocks-r start/stop/restart/status
# Shadowsocks-Go
/etc/init.d/shadowsocks-go start/stop/restart/status
# Shadowsocks-libev
/etc/init.d/shadowsocks-libev start/stop/restart/status
```
### Uninstallation
Become root, and run command as follows:
```
./shadowsocks-all.sh uninstall
```
It only uninstall one version.

## Or Install it by Yourself
For more information, visit https://shadowsocks.org/en/download/servers.html.

## Shadowsocks-libev
For more information, visit https://github.com/shadowsocks/shadowsocks-libev#build-from-source-with-centos. See also https://gist.github.com/aa65535/ea090063496b0d3a1748.

### Build From Source With CentOS
```
# If you are using CentOS 7, you need to install these requirement to build from source code:
yum install epel-release -y
yum install gcc gettext autoconf libtool automake make pcre-devel asciidoc xmlto udns-devel libev-devel libsodium-devel mbedtls-devel -y
```
### Install From Repository
```
# enable repo via dnf
su -c 'dnf copr enable librehat/shadowsocks'

# then, install shadowsocks-libev via dnf
su -c 'dnf update'
su -c 'dnf install shadowsocks-libev'
```
### Usage
```
# edit the configuration file
sudo vim /etc/shadowsocks-libev/config.json

# auto start when boot
chkconfig --add shadowsocks-libev
chkconfig shadowsocks-libev on

# start the service
# for sysvinit,
/etc/init.d/shadowsocks-libev start
# or for systemd,
systemctl start shadowsocks-libev
# or for service
service shadowsocks-libev start
```

## ShadowsocksR
For more information, visit https://github.com/shadowsocksr-rm/shadowsocksr. See also: https://github.com/Ssrbackup/shadowsocks-rss.
> ShadowsocksR is over, a person continues the work of ShadowsocksR (he named it as ShadowsocksRR), please visit https://github.com/shadowsocksrr/shadowsocksr/tree/akkariiin/dev.

```
# if not preinstall git, install git
yum install git

git clone https://github.com/shadowsocksrr/shadowsocksr.git
```
If you clone it into "/shadowsocksr", move to "/shadowsocksr", then run:
```
# (optional) change branch to akkariiin/master (SSRR)
git checkout -b remote/origin/akkariiin/master origin/akkariiin/master

bash initcfg.sh # not neccessary for SSRR
```
Move to "/shadowsocksr/shadowsocks", then run:
```
python server.py -p 443 -k password -m aes-128-cfb -O auth_aes128_md5 -o tls1.2_ticket_auth_compatible
```
You can also use a configuration file instead (recommend). If your SSR directory is `~/shadowsocksr`, edit the file "~/shadowsocksr/user-config.json".
Then, run server.py:
```
# move to "~/shadowsocksr/shadowsocks"
cd ~/shadowsocksr/shadowsocks
# and just run:
python server.py
# or more elegant:
python server.py -d start/stop/restart
```

Other way:
```
# to run in the background
./logrun.sh
# to stop
./stop.sh
# to monitor the log
./tail.sh
```

## V2Ray
For more information, visit https://www.v2ray.com.

Become root, and run command as follows:
```
bash <(curl -L -s https://install.direct/go.sh)
```
This shell script will run V2Ray at startup (support system with Systemd or Debian/Ubuntu).
If succeed, you need:
```
# edit the file
vi /etc/v2ray/config.json
# use V2Ray
service v2ray start/stop/status/reload/restart/force-reload
```

## BBR: to accelerate
For more information, visit https://github.com/google/bbr.

### Shell Script
Easy way of deploying BBR, from https://teddysun.com/489.html.

Become root, and run commands as follows:
```
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh
chmod +x bbr.sh
./bbr.sh
```
Enter y and it will reboot automatically. You can edit `/etc/sysctl.conf` to optimize performance, see https://jasper-1024.github.io/2016/06/27/VPS%E7%A7%91%E5%AD%A6%E4%B8%8A%E7%BD%91%E6%95%99%E7%A8%8B%E7%B3%BB%E5%88%972/.

### Or Deploy it by Yourself
For more information, visit [iMeiji/shadowsocks_install/wiki](https://github.com/iMeiji/shadowsocks_install/wiki/%E5%BC%80%E5%90%AFTCP-BBR%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6%E7%AE%97%E6%B3%95) and [Vultr Docs: How to Deploy Google BBR on CentOS 7](https://www.vultr.com/docs/how-to-deploy-google-bbr-on-centos-7).

### Install new Linux Kernel
Visit http://elrepo.org/linux/kernel/el7/x86_64/RPMS/ to find the latest kernel.
```
# replace kernel
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-3.el7.elrepo.noarch.rpm
yum --enablerepo=elrepo-kernel install kernel-ml -y

# verify that the installation was successful
rpm -qa | grep kernel
# delete old kernel (alternative)
rpm -ev

# update grub and roboot
egrep ^menuentry /etc/grub2.cfg | cut -f 2 -d \'
grub2-set-default 0  #default 0 means set first kernel as default
reboot
```

### Enable BBR
```
# check if kernel version >= 4.9
uname -r

# check if BBR come into force
lsmod | grep bbr
# if no tcp_bbr in output, you should run:
modprobe tcp_bbr
echo "tcp_bbr" >> /etc/modules-load.d/modules.conf
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf

# become effective
sysctl -p

# check if 'bbr' in output  
sysctl net.ipv4.tcp_available_congestion_control
sysctl net.ipv4.tcp_congestion_control
```

## Client
Description | Address
:---: | :---:
Shadowsocks for Windows | https://github.com/shadowsocks/shadowsocks-windows/releases
Shadowsocks for Android | https://github.com/shadowsocks/shadowsocks-android
Shadowsocks-Qt5, a cross-platform shadowsocks GUI client | https://github.com/shadowsocks/shadowsocks-qt5
ShadowsocksR for Windows, use [7-Zip](http://www.7-zip.org/) to extract the ShadowsocksR archive | https://github.com/shadowsocksrr/shadowsocksr-csharp
ShadowsocksR for Andriod | https://github.com/shadowsocksrr/shadowsocksr-android
electron SSR: a cross-platform ShadowsocksR GUI client | https://github.com/erguotou520/electron-ssr
V2Ray-core |  https://github.com/v2ray/v2ray-core
V2RayN for Windows, friendly to new hand | https://github.com/v2ray/v2rayN
other V2Ray client | https://www.v2ray.com/chapter_01/3rd_party.html


### [Shadowsocks-libev](https://github.com/shadowsocks/shadowsocks-libev)
Install Shadowsocks-libev on Arch Linux.

Arch Wiki: https://wiki.archlinux.org/index.php/Shadowsocks_(简体中文)
Arch Wiki: https://wiki.archlinux.org/index.php/Shadowsocks
```
sudo pacman -S shadowsocks-libev
```

Edit `/etc/shadowsocks/config.json`. For more information of config.json, visit https://shadowsocks.org/en/config/quick-guide.html.
```
sudo mkdir /etc/shadowsocks
sudo vi /etc/shadowsocks/config.json
```
```
# /etc/shadowsocks/config.json

{
    "server":"my_server_ip",
    "server_port":8388,
    "local_address": "127.0.0.1",
    "local_port":1080,
    "password":"my_password",
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open": false
}
```

start it using the configuration file
```
ss-local -c /etc/shadowsocks/config.json
```

use [systemd](https://www.freedesktop.org/wiki/Software/systemd/) to start and auto-start
```
# start
sudo systemctl start shadowsocks-libev@config
# start at startup
sudo systemctl enable shadowsocks-libev@config
```

### [Shadowsocksr-libev](https://github.com/shadowsocksrr/shadowsocksr-libev)
Install Shadowsocksr-libev on Arch Linux.

AUR: https://aur.archlinux.org/packages/shadowsocksr-libev/

See also: ~~https://eatradish.moe/2017/04/07/zai-arch-zhong-shi-yong-shadowsocksr/~~
https://sakiiily.moe/2017/04/07/zai-arch-zhong-shi-yong-shadowsocksr/
```
yaourt -S shadowsocksr-libev
```

Edit `/etc/shadowsocks/config.json`. For more information of config.json, visit [SSR Wiki: Python client setup (Mult language)](https://git.io/vdPZ7).
```
sudo mkdir /etc/shadowsocks
sudo vi /etc/shadowsocks/config.json
```
```
# /etc/shadowsocks/config.json

{
    "server":"0.0.0.0",
    "server_ipv6": "::",
    "server_port":8388,
    "local_address": "127.0.0.1",
    "local_port":1080,
    "password":"my_password",
    "timeout":300,
    "udp_timeout": 60,
    "method":"aes-256-cfb",
    "protocol": "auth_aes128_md5",
    "protocol_param": "",
    "obfs":"http_simple",
    "obfs_param": "",
    "fast_open": false,
    "workers": 1
}
```

start and auto-start
```
# start
sudo systemctl start shadowsocks-libev@config
# start at startup
sudo systemctl enable shadowsocks-libev@config
```

## Proxy SwithyOmega for Chrome
Changing proxy settings has never been so convenient. Take [Proxy SwithyOmega for Chrome](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif?hl=en) as a modern version of the "Proxy Settings" dialog, designed to be simpler, quicker and more powerful, specially optimized for Chrome.

SwithyOmega.crx: https://nofile.io/f/k5vcgfbU9g8/SwitchyOmega.crx
password: acrossthefirewall

GFWList.bak: https://nofile.io/f/0nT72sxqkyM/GFWList.bak
password: acrossthefirewall
