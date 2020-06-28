---
title: Install Manjaro Linux
date: 2017-08-17 19:30:33
categories: linux
tags: [record, linux, arch, manjaro]
---

[Manjaro](https://manjaro.org/) is a user-friendly Linux distribution based on the independently developed [Arch operating system](https://www.archlinux.org/).
> Arch is backed by [pacman](https://wiki.archlinux.org/index.php/Pacman), a lightweight, simple and fast package manager.
The [Arch User Repository](https://wiki.archlinux.org/index.php/Arch_User_Repository) (AUR) is a community-driven repository for Arch users.

It's easy to install Manjaro Linux (compared with Arch Linux).
<!-- more -->

## Installation
### Download
Download it from
- https://manjaro.org/get-manjaro/ or
- https://mirrors.tuna.tsinghua.edu.cn/manjaro-cd/release/

### Burn an ISO File
It is recommended to use [ImageWriter For Windows](https://launchpad.net/win32-image-writer/), which is a free application designed to write disc images to USB sticks. Other chioce: [Rufus](http://rufus.akeo.ie/).
Further reading: https://wiki.manjaro.org/index.php?title=Burn_an_ISO_File

> Tip: Before burning, you can clean your USB sticks with diskpart.
Further reading: https://technet.microsoft.com/en-us/library/cc766465(v=ws.10).aspx
```
# run cmd.exe and enter 'diskpart', or just run diskpart.exe
# in diskpart window, run commands as follows
select disk 1
clean
```

### Installation
Change BIOS settings (F12? Esc? F1? F6?), so you can boot with your USB. You can disk partitioning in advance (or later in installation).
Then just follow installation guides.
Further reading: https://wiki.manjaro.org/index.php?title=Installation_Guides

## Necessary Steps
**There is some necessary steps for Manjaro users.**
```
# rank your mirrors by speed
sudo pacman-mirrors -g
# force a refresh of all package lists and upgrade
sudo pacman -Syyu
# synchronize the repository databases and update the system's packages
sudo pacman -Syu

# if not have git preinstalled
sudo pacman -S git
# if not have ssh preinstalled
sudo pacman -S openssh
```
Further reading: http://mirrors.ustc.edu.cn/help/manjaro.html
Further reading: https://wiki.manjaro.org/index.php?title=Pacman_Tips

**There is some necessary steps for Chinese users.**

Edit /etc/pacman.conf, add repo [archlinuxcn] to /etc/pacman.conf.
```
# /etc/pacman.conf
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://cdn.repo.archlinuxcn.org/$arch

# then add PGP keys
sudo pacman -Syy && sudo pacman -S archlinuxcn-keyring
```
Further reading: https://github.com/archlinuxcn/repo

And welcome to [Arch Linux 中文社区](https://www.archlinuxcn.org/).

## Touchpad Settings

### [libinput](https://www.freedesktop.org/wiki/Software/libinput/)
libinput is a library to handle input devices in Wayland compositors and to provide a generic X.Org input driver.
libinput comes preinstalled with Manjaro.

Arch Wiki: https://wiki.archlinux.org/index.php/Libinput

You can add /etc/X11/xorg.conf.d/30-touchpad.conf to extend functions of touchpad. Here is an example.
```
# /etc/X11/xorg.conf.d/30-touchpad.conf
Section "InputClass"
        Identifier "libinput touchpad catchall"
        MatchIsTouchpad "on"
        MatchDevicePath "/dev/input/event*"
        Driver "libinput"
        Option "Tapping" "on"               # tap to click
        Option "ClickMethod" "clickfinger"  # two-finger click is a context click, three-finger click is a middle click
        Option "NaturalScrolling" "true"    # natural (reverse) scrolling
        Option "ScroolMethod" "edge"        # edge (vertical) scrolling
        Option "DisableWhileTyping" "true"  # disable touchpad while typing
EndSection
```

### [libinput-gestures](https://github.com/bulletmark/libinput-gestures)
libinput-gestures is a utility which reads libinput gestures from your touchpad and maps them to gestures you configure in a configuration file.
```
# install libinput-gestures
sudo pacman -S libinput-gestures
```
After executing the above command, log out of your session completely, and then log back in to assign this group (or just reboot).

If you want to create your own custom gestures, edit ~/.config/libinput-gestures.conf. Here is an example.
```
# ~/.config/libinput-gestures.conf
gesture pinch in 2 xdotool key ctrl+minus       # 2指捏: 缩小
gesture pinch out 2 xdotool key ctrl+plus       # 2指张: 放大

gesture swipe left 3 xdotool key shift+alt+Tab  # 3指左划: 切换窗口
gesture swipe right 3 xdotool key alt+Tab       # 3指右划:逆向切换窗口
gesture swipe down 3 xdotool key ctrl+alt+F12   # 3指下划显示桌面

gesture swipe left 4 xdotool key ctrl+alt+Right # 4指左划: 切换到左侧工作区
gesture swipe right 4 xdotool key ctrl+alt+Left # 4指右划: 切换到右侧工作区
```

Then start libinput-gestures. (however it's not neccessary, pacman help you do these)
```
libinput-gestures-setup start
libinput-gestures-setup autostart
```

## Recommended Projects
Arch Wiki: https://wiki.archlinux.org/index.php/General_recommendations

### [Oh My Zsh](http://ohmyz.sh/)
Oh My Zsh is a delightful community-driven framework for managing your zsh configuration.
```
# install Zsh (however Manjaro pre-install Zsh)
sudo pacman -S zsh
# install git (if not pre-installed)
sudo pacman -S git

# install Oh My Zsh via curl
$ sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
Further reading: https://github.com/robbyrussell/oh-my-zsh/wiki/

Plugin archlinux and plugin git is useful. They are worth learning, save much time. More plugin are waiting for your discovering.
- https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/archlinux
- https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/git

```
# .zshrc
plugins=(git archlinux)
```

I prefer zsh-theme af-magic.
```
$ ~/.zshrc
ZSH_THEME="af-magic"
```

### Input Method
- [Sogoupinyin](http://pinyin.sogou.com/linux/), a input method for linux, supports Jianpin, fuzzy syllables, cloud input, English input, mixed skin.
- [Rime](http://rime.im/), based on schemas from the Rime IME project.
- [Googlepinyin](https://www.google.com/intl/zh-CN/ime/pinyin/index.html), the Google pinyin IME for Android.

Arch Wiki: https://wiki.archlinux.org/index.php/Fcitx
```
# install sogoupinyin
sudo pacman -S fcitx-sogoupinyin

# or you may prefer Rime
sudo pacman -S fcitx-rime

# or you may prefer Googlepinyin
sudo pacman -S fcitx-googlepinyin

sudo pacman -S fcitx-im # input method module
sudo pacman -S fcitx-configtool # GUI configure tools
```

Type `fcitx` to see whether fcitx is working correctly, if success, use shortcut <kbd>ctrl-space</kbd> to see what happened.

If failed, add the following lines to your desktop start up script files to register the input method modules and support xim programs.
- Use `.xprofile` if you are using GDM, LightDM or SDDM with Xorg.
- Use `/etc/environment` for Wayland, it will not read environment variables stored in ~/.xprofile
- Use `.xinitrc` if you are using startx or Slim. 

```
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx
```

### [Source Code Pro](https://adobe-fonts.github.io/source-code-pro/)
Source Code Pro is monospaced font family for user interface and coding environments.
```
sudo pacman -S adobe-source-code-pro-fonts
```

### [TLP](http://linrunner.de/en/tlp/tlp.html)
TLP brings you the benefits of advanced power management for Linux without the need to understand every technical detail. TLP comes with a default configuration already optimized for battery life, so you may just install and forget it.

Arch Wiki: https://wiki.archlinux.org/index.php/TLP
```
# install tlp and tlp-rdw (optional)
sudo pacman -S tlp tlp-rdw

# enable TLP's services
sudo systemctl enable tlp.service
sudo systemctl enable tlp-sleep.service

# Using the Radio Device Wizard (tlp-rdw) requires an additional service
sudo systemctl enable NetworkManager-dispatcher.service

# mask the following services to avoid conflicts and assure
# proper operation of TLP's radio device switching options
sudo systemctl mask systemd-rfkill.service
sudo systemctl mask systemd-rfkill.socket
```
See also: http://linrunner.de/en/tlp/docs/tlp-linux-advanced-power-management.html#installation

### [Yaourt](https://archlinux.fr/yaourt-en)
Yaourt is a command line interface program which complete pacman for installing software on Archlinux.

Arch Wiki: https://wiki.archlinux.org/index.php/AUR_helpers
```
sudo pacman -S yaourt
```
Further reading: https://github.com/archlinuxfr/yaourt

### [Shadowsocks-Qt5](https://github.com/shadowsocks/shadowsocks-qt5)
Shadowsocks-Qt5 is a native and cross-platform shadowsocks GUI client with advanced features.
```
sudo pacman -S shadowsocks-qt5
```
### [Shadowsocks-libev](https://github.com/shadowsocks/shadowsocks-libev)
Shadowsocks-libev is a lightweight secured SOCKS5 proxy for embedded devices and low-end boxes.

Arch Wiki: https://wiki.archlinux.org/index.php/Shadowsocks
```
sudo pacman -S shadowsocks-libev
```

### [Chromium](https://www.chromium.org/Home)
Chromium is an open-source browser project that aims to build a safer, faster, and more stable way for all Internet users to experience the web.

Arch Wiki: https://wiki.archlinux.org/index.php/Chromium
```
# install Chromium
sudo pacman -S chromium
# flash support, alternative
sudo pacman -S pepper-flash flashplugin

# or you may prefer Chrome
sudo pacman -S google-chrome
```

### [Visual Studio Code](https://code.visualstudio.com/)
VS Code is a new type of tool that combines the simplicity of a code editor with what developers need for their core edit-build-debug cycle.

Arch Wiki: https://wiki.archlinux.org/index.php/Visual_Studio_Code
```
sudo pacman -S visual-studio-code
```

### [Atom](https://atom.io/)
Atom is a hackable text editor for the 21st century, built on Electron, and based on everything we love about our favorite editors. We designed it to be deeply customizable, but still approachable using the default configuration.

Arch Wiki: https://wiki.archlinux.org/index.php/atom
```
sudo pacman -S atom-editor-bin # latest stable version
```

### [NetEase Cloud Music](http://music.163.com/#/download)
NetEase Cloud Music is a music and video streaming service developed and operated by [NetEase](http://www.163.com/). Now there is [NetEase Cloud Music for Linux](http://music.163.com/#/download).
```
sudo pacman -S netease-cloud-music
```

### [Docky](http://www.go-docky.com/)
Docky is an advanced shortcut bar that sits at the edges of your screen.
```
sudo pacman -S docky
```

### [Paper Theme](https://snwh.org/paper)
Paper is a modern freedesktop icon theme whose design is based around the use of bold colours and simple geometric shapes to compose icons.
```
sudo pacman -S paper-icon-theme
sudo pacman -S paper-gtk-theme
```

### [Peek](https://github.com/phw/peek)
Peek is a Simple screencast tool that produces GIF animations.

Arch Wiki: https://wiki.archlinux.org/index.php/List_of_applications/Multimedia
```
yaourt -S peek
```

## Remainders

About dotfiles:
https://wiki.archlinux.org/index.php/Dotfiles
https://wiki.manjaro.org/index.php?title=Important_hidden_.dot_files_in_your_home_partition
https://dotfiles.github.io/
https://luolei.org//dotfiles-tutorial/

About Arch Linux: https://wiki.archlinux.org/index.php/Arch_Linux

Arch Wiki: https://wiki.archlinux.org/index.php/List_of_applications

Arch Linux RSS Feeds: https://www.archlinux.org/feeds/

Manjaro Forum: https://forum.manjaro.org/

Arch Linux BBS: https://bbs.archlinux.org/

Arch Linux 中文社区: https://bbs.archlinuxcn.org/

About screenshot: https://wiki.archlinux.org/index.php/Taking_a_screenshot

About Virtual Box: https://www.virtualbox.org/

About backup: http://www.cnblogs.com/yychi/p/5860027.html
