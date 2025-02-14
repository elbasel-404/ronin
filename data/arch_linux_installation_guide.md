 Installation guide - ArchWiki (function(){var className="client-js vector-feature-language-in-header-enabled vector-feature-language-in-main-page-header-disabled vector-feature-sticky-header-disabled vector-feature-page-tools-pinned-disabled vector-feature-toc-pinned-clientpref-1 vector-feature-main-menu-pinned-disabled vector-feature-limited-width-clientpref-1 vector-feature-limited-width-content-enabled vector-feature-custom-font-size-clientpref-0 vector-feature-client-preferences-disabled vector-feature-client-prefs-pinned-disabled vector-feature-night-mode-disabled skin-theme-clientpref-day vector-toc-available";var cookie=document.cookie.match(/(?:^|; )archwikimwclientpreferences=(\[^;\]+)/);if(cookie){cookie\[1\].split('%2C').forEach(function(pref){className=className.replace(new RegExp('(^| )'+pref.replace(/-clientpref-\\w+$|\[^\\w-\]+/g,'')+'-clientpref-\\\\w+( |$)'),'$1'+pref+'$2');});}document.documentElement.className=className;}());RLCONF={"wgBreakFrames":false,"wgSeparatorTransformTable":\["",""\], "wgDigitTransformTable":\["",""\],"wgDefaultDateFormat":"dmy","wgMonthNames":\["","January","February","March","April","May","June","July","August","September","October","November","December"\],"wgRequestId":"29d5849385ecdd740f19fa89","wgCanonicalNamespace":"","wgCanonicalSpecialPageName":false,"wgNamespaceNumber":0,"wgPageName":"Installation\_guide","wgTitle":"Installation guide","wgCurRevisionId":825015,"wgRevisionId":825015,"wgArticleId":14801,"wgIsArticle":true,"wgIsRedirect":false,"wgAction":"view","wgUserName":null,"wgUserGroups":\["\*"\],"wgCategories":\["Installation process"\],"wgPageViewLanguage":"en","wgPageContentLanguage":"en","wgPageContentModel":"wikitext","wgRelevantPageName":"Installation\_guide","wgRelevantArticleId":14801,"wgIsProbablyEditable":false,"wgRelevantPageIsProbablyEditable":false,"wgRestrictionEdit":\["sysop"\],"wgRestrictionMove":\["sysop"\],"wgVisualEditor":{"pageLanguageCode":"en","pageLanguageDir":"ltr","pageVariantFallbacks":"en"}, "wgCheckUserClientHintsHeadersJsApi":\["architecture","bitness","brands","fullVersionList","mobile","model","platform","platformVersion"\],"wgEditSubmitButtonLabelPublish":false};RLSTATE={"skins.vector.user.styles":"ready","site.styles":"ready","user.styles":"ready","skins.vector.user":"ready","user":"ready","user.options":"loading","skins.vector.search.codex.styles":"ready","skins.vector.styles":"ready","skins.vector.icons":"ready","zzz.ext.archLinux.styles":"ready","ext.DarkMode.styles":"ready","ext.visualEditor.desktopArticleTarget.noscript":"ready"};RLPAGEMODULES=\["site","mediawiki.page.ready","mediawiki.toc","skins.vector.js","ext.checkUser.clientHints","ext.DarkMode","ext.visualEditor.desktopArticleTarget.init","ext.visualEditor.targetLoader"\]; (RLQ=window.RLQ||\[\]).push(function(){mw.loader.impl(function(){return\["user.options@12s5i",function($,jQuery,require,module){mw.user.tokens.set({"patrolToken":"+\\\\","watchToken":"+\\\\","csrfToken":"+\\\\"}); }\];});});             

[](https://archlinux.org/)

*   [Home](https://archlinux.org/)
*   [Packages](https://archlinux.org/packages/)
*   [Forums](https://bbs.archlinux.org/)
*   [Wiki](https://wiki.archlinux.org/)
*   [GitLab](https://gitlab.archlinux.org/archlinux)
*   [Security](https://security.archlinux.org/)
*   [AUR](https://aur.archlinux.org/)
*   [Download](https://archlinux.org/download/)

[Jump to content](#bodyContent)

 Main menu

Main menu

move to sidebar hide

Navigation

*   [Main page](/title/Main_page "Visit the main page [z]")
*   [Table of contents](/title/Table_of_contents)
*   [Getting involved](/title/Getting_involved "Various ways Archers can contribute to the community")
*   [Wiki news](/title/ArchWiki:News "The latest lowdown on the wiki")
*   [Random page](/title/Special:Random "Load a random page [x]")

Interaction

*   [Help](/title/Category:Help "Wiki navigation, reading, and editing help")
*   [Contributing](/title/ArchWiki:Contributing)
*   [Recent changes](/title/Special:RecentChanges "A list of recent changes in the wiki [r]")
*   [Recent talks](https://wiki.archlinux.org/index.php?title=Special:RecentChanges&namespace=all-discussions)
*   [New pages](/title/Special:NewPages)
*   [Statistics](/title/ArchWiki:Statistics)
*   [Requests](/title/ArchWiki_talk:Requests)

[**ArchWiki**](/title/Main_page)

[Search](/title/Special:Search "Search ArchWiki [f]")

Search

*   [Create account](/index.php?title=Special:CreateAccount&returnto=Installation+guide "You are encouraged to create an account and log in; however, it is not mandatory")
*   [Log in](/index.php?title=Special:UserLogin&returnto=Installation+guide "You are encouraged to log in; however, it is not mandatory [o]")

 Personal tools

*   [Create account](/index.php?title=Special:CreateAccount&returnto=Installation+guide "You are encouraged to create an account and log in; however, it is not mandatory")
*   [Log in](/index.php?title=Special:UserLogin&returnto=Installation+guide "You are encouraged to log in; however, it is not mandatory [o]")
*   [Dark mode](#)

Contents
--------

move to sidebar hide

*   [
    
    Beginning
    
    ](#)
*   [
    
    1Pre-installation
    
    ](#Pre-installation)Toggle Pre-installation subsection
    *   [
        
        1.1Acquire an installation image
        
        ](#Acquire_an_installation_image)
        
    *   [
        
        1.2Verify signature
        
        ](#Verify_signature)
        
    *   [
        
        1.3Prepare an installation medium
        
        ](#Prepare_an_installation_medium)
        
    *   [
        
        1.4Boot the live environment
        
        ](#Boot_the_live_environment)
        
    *   [
        
        1.5Set the console keyboard layout and font
        
        ](#Set_the_console_keyboard_layout_and_font)
        
    *   [
        
        1.6Verify the boot mode
        
        ](#Verify_the_boot_mode)
        
    *   [
        
        1.7Connect to the internet
        
        ](#Connect_to_the_internet)
        
    *   [
        
        1.8Update the system clock
        
        ](#Update_the_system_clock)
        
    *   [
        
        1.9Partition the disks
        
        ](#Partition_the_disks)
        *   [
            
            1.9.1Example layouts
            
            ](#Example_layouts)
            
    *   [
        
        1.10Format the partitions
        
        ](#Format_the_partitions)
        
    *   [
        
        1.11Mount the file systems
        
        ](#Mount_the_file_systems)
        
*   [
    
    2Installation
    
    ](#Installation)Toggle Installation subsection
    *   [
        
        2.1Select the mirrors
        
        ](#Select_the_mirrors)
        
    *   [
        
        2.2Install essential packages
        
        ](#Install_essential_packages)
        
*   [
    
    3Configure the system
    
    ](#Configure_the_system)Toggle Configure the system subsection
    *   [
        
        3.1Fstab
        
        ](#Fstab)
        
    *   [
        
        3.2Chroot
        
        ](#Chroot)
        
    *   [
        
        3.3Time
        
        ](#Time)
        
    *   [
        
        3.4Localization
        
        ](#Localization)
        
    *   [
        
        3.5Network configuration
        
        ](#Network_configuration)
        
    *   [
        
        3.6Initramfs
        
        ](#Initramfs)
        
    *   [
        
        3.7Root password
        
        ](#Root_password)
        
    *   [
        
        3.8Boot loader
        
        ](#Boot_loader)
        
*   [
    
    4Reboot
    
    ](#Reboot)
    
*   [
    
    5Post-installation
    
    ](#Post-installation)
    

 Toggle the table of contents

Installation guide
==================

 21 languages

*   [العربية](https://wiki.archlinux.org/title/Installation_guide_\(العربية\) "Installation guide – العربية")
*   [Български](https://wiki.archlinux.org/title/Installation_guide_\(Български\) "Installation guide – български")
*   [Català](https://wiki.archlinux.org/title/Installation_guide_\(Català\) "Installation guide – català")
*   [Čeština](https://wiki.archlinux.org/title/Installation_guide_\(Čeština\) "Installation guide – čeština")
*   [Deutsch](https://wiki.archlinux.de/title/Arch_Install_Scripts "Arch Install Scripts – Deutsch")
*   [Ελληνικά](https://wiki.archlinux.org/title/Installation_guide_\(Ελληνικά\) "Installation guide – Ελληνικά")
*   [Español](https://wiki.archlinux.org/title/Installation_guide_\(Español\) "Installation guide – español")
*   [Suomi](https://wiki.archlinux.org/title/Installation_guide_\(Suomi\) "Installation guide – suomi")
*   [Français](https://wiki.archlinux.org/title/Installation_guide_\(Français\) "Installation guide – français")
*   [Italiano](https://wiki.archlinux.org/title/Installation_guide_\(Italiano\) "Installation guide – italiano")
*   [日本語](https://wiki.archlinux.jp/index.php/%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%82%AC%E3%82%A4%E3%83%89 "インストールガイド – 日本語")
*   [한국어](https://wiki.archlinux.org/title/Installation_guide_\(한국어\) "Installation guide – 한국어")
*   [Polski](https://wiki.archlinux.org/title/Installation_guide_\(Polski\) "Installation guide – polski")
*   [Português](https://wiki.archlinux.org/title/Installation_guide_\(Português\) "Installation guide – português")
*   [Русский](https://wiki.archlinux.org/title/Installation_guide_\(Русский\) "Installation guide – русский")
*   [Svenska](https://wiki.archlinux.org/title/Installation_guide_\(Svenska\) "Installation guide – svenska")
*   [ไทย](https://wiki.archlinux.org/title/Installation_guide_\(%E0%B9%84%E0%B8%97%E0%B8%A2\) "Installation guide – ไทย")
*   [Türkçe](https://wiki.archlinux.org/title/Installation_guide_\(Türkçe\) "Installation guide – Türkçe")
*   [Українська](https://wiki.archlinux.org/title/Installation_guide_\(Українська\) "Installation guide – українська")
*   [中文（简体）](https://wiki.archlinuxcn.org/wiki/Installation_guide "Installation guide – 中文（简体）")
*   [中文（繁體）](https://wiki.archlinux.org/title/Installation_guide_\(正體中文\) "Installation guide – 中文（繁體）")

*   [Page](/title/Installation_guide "View the content page [c]")
*   [Discussion](/title/Talk:Installation_guide "Discussion about the content page [t]")

 English

*   [Read](/title/Installation_guide)
*   [View source](/index.php?title=Installation_guide&action=edit "This page is protected.
    You can view its source [e]")
*   [View history](/index.php?title=Installation_guide&action=history "Past revisions of this page [h]")

 Tools

Tools

move to sidebar hide

Actions

*   [Read](/title/Installation_guide)
*   [View source](/index.php?title=Installation_guide&action=edit)
*   [View history](/index.php?title=Installation_guide&action=history)

General

*   [What links here](/title/Special:WhatLinksHere/Installation_guide "A list of all wiki pages that link here [j]")
*   [Related changes](/title/Special:RecentChangesLinked/Installation_guide "Recent changes in pages linked from this page [k]")
*   [Special pages](/title/Special:SpecialPages "A list of all special pages [q]")
*   [Printable version](javascript:print\(\); "Printable version of this page [p]")
*   [Permanent link](/index.php?title=Installation_guide&oldid=825015 "Permanent link to this revision of this page")
*   [Page information](/index.php?title=Installation_guide&action=info "More information about this page")

From ArchWiki

This document is a guide for installing [Arch Linux](/title/Arch_Linux "Arch Linux") using the live system booted from an installation medium made from an official installation image. The installation medium provides accessibility features which are described on the page [Install Arch Linux with accessibility options](/title/Install_Arch_Linux_with_accessibility_options "Install Arch Linux with accessibility options"). For alternative means of installation, see [Category:Installation process](/title/Category:Installation_process "Category:Installation process").

Before installing, it would be advised to view the [FAQ](/title/FAQ "FAQ"). For conventions used in this document, see [Help:Reading](/title/Help:Reading "Help:Reading"). In particular, code examples may contain placeholders (formatted in `_italics_`) that must be replaced manually.

This guide is kept concise and you are advised to follow the instructions in the presented order per section. For more detailed instructions, see the respective [ArchWiki](/title/ArchWiki "ArchWiki") articles or the various programs' [man pages](/title/Man_page "Man page"), both linked from this guide. For interactive help, the [IRC channel](/title/IRC_channel "IRC channel") and the [forums](https://bbs.archlinux.org/) are also available.

Arch Linux should run on any [x86\_64](https://en.wikipedia.org/wiki/X86-64 "wikipedia:X86-64")\-compatible machine with a minimum of 512 MiB RAM, though more memory is needed to boot the live system for installation.[\[1\]](https://lists.archlinux.org/archives/list/arch-releng@lists.archlinux.org/message/D5HSGOFTPGYI6IZUEB3ZNAX4D3F3ID37/) A basic installation should take less than 2 GiB of disk space. As the installation process needs to retrieve packages from a remote repository, this guide assumes a working internet connection is available.

Pre-installation
----------------

### Acquire an installation image

Visit the [Download](https://archlinux.org/download/) page and, depending on how you want to boot, acquire the ISO file or a netboot image, and the respective PGP signature.

### Verify signature

It is recommended to verify the image signature before use, especially when downloading from an _HTTP mirror_, where downloads are generally prone to be intercepted to [serve malicious images](https://www2.cs.arizona.edu/stork/packagemanagersecurity/attacks-on-package-managers.html).

On a system with [GnuPG](/title/GnuPG "GnuPG") installed, do this by downloading the _ISO PGP signature_ ([under Checksums in the page Download](https://archlinux.org/download/#checksums)) to the ISO directory, and [verifying](/title/GnuPG#Verify_a_signature "GnuPG") it with:

$ gpg --keyserver-options auto-key-retrieve --verify archlinux-_version_\-x86\_64.iso.sig

Alternatively, from an existing Arch Linux installation run:

$ pacman-key -v archlinux-_version_\-x86\_64.iso.sig

**Note:**

*   The signature itself could be manipulated if it is downloaded from a mirror site, instead of from [archlinux.org](https://archlinux.org/download/) as above. In this case, ensure that the public key, which is used to decode the signature, is signed by another, trustworthy key. The `gpg` command will output the fingerprint of the public key.
*   Another method to verify the authenticity of the signature is to ensure that the public key's fingerprint is identical to the key fingerprint of the [Arch Linux developer](https://archlinux.org/people/developers/) who signed the ISO-file. See [Wikipedia:Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography "wikipedia:Public-key cryptography") for more information on the public-key process to authenticate keys.

### Prepare an installation medium

The ISO can be supplied to the target machine via a [USB flash drive](/title/USB_flash_installation_medium "USB flash installation medium"), an [optical disc](/title/Optical_disc_drive#Burning "Optical disc drive") or a network with [PXE](/title/PXE "PXE"): follow the appropriate article to prepare yourself an installation medium from the ISO file.

For the netboot image, follow [Netboot#Boot from a USB flash drive](/title/Netboot#Boot_from_a_USB_flash_drive "Netboot") to prepare a USB flash drive for UEFI booting.

### Boot the live environment

**Note:** Arch Linux installation images do not support Secure Boot. You will need to [disable Secure Boot](/title/Unified_Extensible_Firmware_Interface/Secure_Boot#Disabling_Secure_Boot "Unified Extensible Firmware Interface/Secure Boot") to boot the installation medium. If desired, [Secure Boot](/title/Secure_Boot "Secure Boot") can be set up after completing the installation.

1.  Point the current boot device to the one which has the Arch Linux installation medium. Typically it is achieved by pressing a key during the [POST](https://en.wikipedia.org/wiki/Power-on_self_test "wikipedia:Power-on self test") phase, as indicated on the splash screen. Refer to your motherboard's manual for details.
2.  When the installation medium's boot loader menu appears,
    *   if you used the ISO, select _Arch Linux install medium_ and press `Enter` to enter the installation environment.
    *   if you used the Netboot image, choose a geographically close mirror from _Mirror_ menu, then select _Boot Arch Linux_ and press `Enter`.
        
        **Tip:**
        
        *   The ISO uses [systemd-boot](/title/Systemd-boot "Systemd-boot") for UEFI and [syslinux](/title/Syslinux "Syslinux") for BIOS booting. Use respectively `e` or `Tab` to enter the [boot parameters](/title/Kernel_parameters#Boot_loader_configuration "Kernel parameters"). The Netboot image uses iPXE and the boot parameters can be specified in the _Boot options_ menu. See [README.bootparams](https://gitlab.archlinux.org/archlinux/mkinitcpio/mkinitcpio-archiso/blob/master/docs/README.bootparams) for a list.
        *   A common example of manually defined boot parameter would be the font size. For better readability on HiDPI screens—when they are not already recognized as such—using `fbcon=font:TER16x32` can help. See [HiDPI#Linux console (tty)](/title/HiDPI#Linux_console_\(tty\) "HiDPI") for a detailed explanation.
        

4.  You will be logged in on the first [virtual console](https://en.wikipedia.org/wiki/Virtual_console "wikipedia:Virtual console") as the root user, and presented with a [Zsh](/title/Zsh "Zsh") shell prompt.

To switch to a different console—for example, to view this guide with [Lynx](https://lynx.invisible-island.net/lynx_help/Lynx_users_guide.html) alongside the installation—use the `Alt+_arrow_` [shortcut](/title/Keyboard_shortcuts "Keyboard shortcuts"). To [edit](/title/Textedit "Textedit") configuration files, [mcedit(1)](https://man.archlinux.org/man/mcedit.1), [nano](/title/Nano#Usage "Nano") and [vim](/title/Vim#Usage "Vim") are available. See [pkglist.x86\_64.txt](https://geo.mirror.pkgbuild.com/iso/latest/arch/pkglist.x86_64.txt) for a list of the packages included in the installation medium.

### Set the console keyboard layout and font

The default [console keymap](/title/Console_keymap "Console keymap") is [US](https://en.wikipedia.org/wiki/File:KB_United_States-NoAltGr.svg "wikipedia:File:KB United States-NoAltGr.svg"). Available layouts can be listed with:

\# localectl list-keymaps

To set the keyboard layout, pass its name to [loadkeys(1)](https://man.archlinux.org/man/loadkeys.1). For example, to set a [German](https://en.wikipedia.org/wiki/File:KB_Germany.svg "wikipedia:File:KB Germany.svg") keyboard layout:

\# loadkeys de-latin1

[Console fonts](/title/Console_fonts "Console fonts") are located in `/usr/share/kbd/consolefonts/` and can likewise be set with [setfont(8)](https://man.archlinux.org/man/setfont.8) omitting the path and file extension. For example, to use one of the largest fonts suitable for [HiDPI screens](/title/HiDPI#Linux_console_\(tty\) "HiDPI"), run:

\# setfont ter-132b

### Verify the boot mode

To verify the boot mode, check the UEFI bitness:

\# cat /sys/firmware/efi/fw\_platform\_size

If the command returns `64`, then the system is booted in UEFI mode and has a 64-bit x64 UEFI. If the command returns `32`, then the system is booted in UEFI mode and has a 32-bit IA32 UEFI; while this is supported, it will limit the boot loader choice to systemd-boot and GRUB. If the file does not exist, the system may be booted in [BIOS](https://en.wikipedia.org/wiki/BIOS "wikipedia:BIOS") (or [CSM](https://en.wikipedia.org/wiki/Compatibility_Support_Module "wikipedia:Compatibility Support Module")) mode. If the system did not boot in the mode you desired (UEFI vs BIOS), refer to your motherboard's manual.

### Connect to the internet

To set up a network connection in the live environment, go through the following steps:

1.  Ensure your [network interface](/title/Network_interface "Network interface") is listed and enabled, for example with [ip-link(8)](https://man.archlinux.org/man/ip-link.8):
    
    \# ip link
    
2.  For wireless and WWAN, make sure the card is not blocked with [rfkill](/title/Rfkill "Rfkill").
3.  Connect to the network:
    *   Ethernet—plug in the cable.
    *   Wi-Fi—authenticate to the wireless network using [iwctl](/title/Iwctl "Iwctl").
    *   Mobile broadband modem—connect to the mobile network with the [mmcli](/title/Mmcli "Mmcli") utility.
4.  Configure your network connection:
    *   [DHCP](/title/DHCP "DHCP"): dynamic IP address and DNS server assignment (provided by [systemd-networkd](/title/Systemd-networkd "Systemd-networkd") and [systemd-resolved](/title/Systemd-resolved "Systemd-resolved")) should work out of the box for Ethernet, WLAN, and WWAN network interfaces.
    *   Static IP address: follow [Network configuration#Static IP address](/title/Network_configuration#Static_IP_address "Network configuration").
5.  The connection may be verified with [ping](/title/Ping "Ping"):
    
    \# ping archlinux.org
    

**Note:** In the installation image, [systemd-networkd](/title/Systemd-networkd "Systemd-networkd"), [systemd-resolved](/title/Systemd-resolved "Systemd-resolved"), [iwd](/title/Iwd "Iwd") and [ModemManager](/title/ModemManager "ModemManager") are preconfigured and enabled by default. That will not be the case for the installed system.

### Update the system clock

In the live environment [systemd-timesyncd](/title/Systemd-timesyncd "Systemd-timesyncd") is enabled by default and time will be synced automatically once a connection to the internet is established.

Use [timedatectl(1)](https://man.archlinux.org/man/timedatectl.1) to ensure the system clock is synchronized:

\# timedatectl

### Partition the disks

When recognized by the live system, disks are assigned to a [block device](/title/Block_device "Block device") such as `/dev/sda`, `/dev/nvme0n1` or `/dev/mmcblk0`. To identify these devices, use [lsblk](/title/Lsblk "Lsblk") or _fdisk_.

\# fdisk -l

Results ending in `rom`, `loop` or `airootfs` may be ignored. `mmcblk*` devices ending in `rpbm`, `boot0` and `boot1` can be ignored.

**Note:** If the disk does not show up, [make sure the disk controller is not in RAID mode](/title/Partitioning#Drives_are_not_visible_when_firmware_RAID_is_enabled "Partitioning").

**Tip:** Check that your NVMe drives and Advanced Format hard disk drives are using the [optimal logical sector size](/title/Advanced_Format "Advanced Format") before partitioning.

The following [partitions](/title/Partition "Partition") are **required** for a chosen device:

*   One partition for the [root directory](https://en.wikipedia.org/wiki/Root_directory "wikipedia:Root directory") `/`.
*   For booting in [UEFI](/title/UEFI "UEFI") mode: an [EFI system partition](/title/EFI_system_partition "EFI system partition").

Use a [partitioning tool](/title/Partitioning#Partitioning_tools "Partitioning") like [fdisk](/title/Fdisk "Fdisk") to modify partition tables. For example:

\# fdisk _/dev/the\_disk\_to\_be\_partitioned_

**Note:**

*   Take time to plan a long-term partitioning scheme to avoid risky and complicated conversion or re-partitioning procedures in the future.
*   If you want to create any stacked block devices for [LVM](/title/Install_Arch_Linux_on_LVM "Install Arch Linux on LVM"), [system encryption](/title/Dm-crypt "Dm-crypt") or [RAID](/title/RAID "RAID"), do it now.
*   If the disk from which you want to boot [already has an EFI system partition](/title/EFI_system_partition#Check_for_an_existing_partition "EFI system partition"), do not create another one, but use the existing partition instead.
*   [Swap](/title/Swap "Swap") space can be set on a [swap file](/title/Swap_file "Swap file") for file systems supporting it. Alternatively, disk based swap can be avoided entirely by setting up [swap on zram](/title/Zram#Usage_as_swap "Zram") after installing the system.

#### Example layouts

UEFI with [GPT](/title/GPT "GPT")

Mount point on the installed system

Partition

[Partition type](https://en.wikipedia.org/wiki/GUID_Partition_Table#Partition_type_GUIDs "wikipedia:GUID Partition Table")

Suggested size

`/boot`1

`/dev/_efi_system_partition_`

[EFI system partition](/title/EFI_system_partition "EFI system partition")

1 GiB

`[SWAP]`

`/dev/_swap_partition_`

Linux swap

At least 4 GiB

`/`

`/dev/_root_partition_`

Linux x86-64 root (/)

Remainder of the device. At least 23–32 GiB.

1.  [Other mount points](/title/EFI_system_partition#Typical_mount_points "EFI system partition"), such as `/efi`, are possible, provided that the used boot loader is capable of loading the kernel and initramfs images from the root volume. See the warning in [Arch boot process#Boot loader](/title/Arch_boot_process#Boot_loader "Arch boot process").

BIOS with [MBR](/title/MBR "MBR")

Mount point on the installed system

Partition

[Partition type](https://en.wikipedia.org/wiki/Partition_type "wikipedia:Partition type")

Suggested size

`[SWAP]`

`/dev/_swap_partition_`

Linux swap

At least 4 GiB

`/`

`/dev/_root_partition_`

Linux

Remainder of the device. At least 23–32 GiB.

See also [Partitioning#Example layouts](/title/Partitioning#Example_layouts "Partitioning").

### Format the partitions

Once the partitions have been created, each newly created partition must be formatted with an appropriate [file system](/title/File_system "File system"). See [File systems#Create a file system](/title/File_systems#Create_a_file_system "File systems") for details.

For example, to create an [Ext4](/title/Ext4 "Ext4") file system on `/dev/_root_partition_`, run:

\# mkfs.ext4 /dev/_root\_partition_

If you created a partition for [swap](/title/Swap "Swap"), initialize it with [mkswap(8)](https://man.archlinux.org/man/mkswap.8):

\# mkswap /dev/_swap\_partition_

**Note:** For stacked block devices replace `/dev/_*_partition_` with the appropriate block device path.

If you created an EFI system partition, [format it](/title/EFI_system_partition#Format_the_partition "EFI system partition") to FAT32 using [mkfs.fat(8)](https://man.archlinux.org/man/mkfs.fat.8).

**Warning:** Only format the EFI system partition if you created it during the partitioning step. If there already was an EFI system partition on disk beforehand, reformatting it can destroy the boot loaders of other installed operating systems.

\# mkfs.fat -F 32 /dev/_efi\_system\_partition_

### Mount the file systems

[Mount](/title/Mount "Mount") the root volume to `/mnt`. For example, if the root volume is `/dev/_root_partition_`:

\# mount /dev/_root\_partition_ /mnt

Create any remaining mount points under `/mnt` (such as `/mnt/boot` for `/boot`) and mount the volumes in their corresponding hierarchical order.

**Tip:** Run [mount(8)](https://man.archlinux.org/man/mount.8) with the `--mkdir` option to create the specified mount point. Alternatively, create it using [mkdir(1)](https://man.archlinux.org/man/mkdir.1) beforehand.

For UEFI systems, mount the EFI system partition:

\# mount --mkdir /dev/_efi\_system\_partition_ /mnt/boot

If you created a [swap](/title/Swap "Swap") volume, enable it with [swapon(8)](https://man.archlinux.org/man/swapon.8):

\# swapon /dev/_swap\_partition_

[genfstab(8)](https://man.archlinux.org/man/genfstab.8) will later detect mounted file systems and swap space.

Installation
------------

### Select the mirrors

Packages to be installed must be downloaded from [mirror servers](/title/Mirrors "Mirrors"), which are defined in `/etc/pacman.d/mirrorlist`. On the live system, after connecting to the internet, [reflector](/title/Reflector "Reflector") updates the mirror list by choosing 20 most recently synchronized HTTPS mirrors and sorting them by download rate.

The higher a mirror is placed in the list, the more priority it is given when downloading a package. You may want to inspect the file to see if it is satisfactory. If it is not, [edit](/title/Textedit "Textedit") the file accordingly, and move the geographically closest mirrors to the top of the list, although other criteria should be taken into account.

This file will later be copied to the new system by _pacstrap_, so it is worth getting right.

### Install essential packages

**Note:** No software or configuration (except for `/etc/pacman.d/mirrorlist`) gets carried over from the live environment to the installed system.

Use the [pacstrap(8)](https://man.archlinux.org/man/pacstrap.8) script to install the [base](https://archlinux.org/packages/?name=base) package, Linux [kernel](/title/Kernel "Kernel") and firmware for common hardware:

\# pacstrap -K /mnt base linux linux-firmware

**Tip:**

*   You can substitute [linux](https://archlinux.org/packages/?name=linux) with a [kernel](/title/Kernel "Kernel") package of your choice, or you could omit it entirely when installing in a [container](https://en.wikipedia.org/wiki/Container_\(virtualization\) "wikipedia:Container (virtualization)").
*   You could omit the installation of the firmware package when installing in a virtual machine or container.

The [base](https://archlinux.org/packages/?name=base) package does not include all tools from the live installation, so installing more packages may be necessary for a fully functional base system. To install other packages or package groups, append the names to the _pacstrap_ command above (space separated) or use [pacman](/title/Pacman "Pacman") to [install](/title/Install "Install") them while [chrooted into the new system](#Chroot). In particular, consider installing:

*   CPU [microcode](/title/Microcode "Microcode") updates—[amd-ucode](https://archlinux.org/packages/?name=amd-ucode) or [intel-ucode](https://archlinux.org/packages/?name=intel-ucode)—for hardware bug and security fixes,
*   [userspace utilities for file systems](/title/File_systems "File systems") that will be used on the system—for the purposes of e.g. file system creation and [fsck](/title/Fsck "Fsck"),
*   utilities for accessing and managing [RAID](/title/RAID#Installation "RAID") or [LVM](/title/LVM#Installation "LVM") if they will be used on the system,
*   specific firmware for other devices not included in [linux-firmware](https://archlinux.org/packages/?name=linux-firmware) (e.g. [sof-firmware](https://archlinux.org/packages/?name=sof-firmware) for [onboard audio](/title/Advanced_Linux_Sound_Architecture#Firmware "Advanced Linux Sound Architecture"), [linux-firmware-marvell](https://archlinux.org/packages/?name=linux-firmware-marvell) for Marvell wireless and any of the multiple firmware packages for [Broadcom wireless](/title/Broadcom_wireless "Broadcom wireless")),
*   software necessary for [networking](/title/Networking "Networking") (e.g. [a network manager or a standalone DHCP client](/title/Network_configuration#Network_managers "Network configuration"), [authentication software](/title/Network_configuration/Wireless#Authentication "Network configuration/Wireless") for Wi-Fi, [ModemManager](/title/ModemManager "ModemManager") for mobile broadband connections),
*   a [console text editor](/title/List_of_applications/Documents#Console "List of applications/Documents") (e.g [nano](/title/Nano "Nano")) to allow editing configuration files from the console,
*   packages for accessing documentation in [man](/title/Man "Man") and [info](/title/Info "Info") pages: [man-db](https://archlinux.org/packages/?name=man-db), [man-pages](https://archlinux.org/packages/?name=man-pages) and [texinfo](https://archlinux.org/packages/?name=texinfo).

For comparison, packages available in the live system can be found in [pkglist.x86\_64.txt](https://geo.mirror.pkgbuild.com/iso/latest/arch/pkglist.x86_64.txt).

Configure the system
--------------------

### Fstab

Generate an [fstab](/title/Fstab "Fstab") file (use `-U` or `-L` to define by [UUID](/title/UUID "UUID") or labels, respectively):

\# genfstab -U /mnt >> /mnt/etc/fstab

Check the resulting `/mnt/etc/fstab` file, and [edit](/title/Textedit "Textedit") it in case of errors.

### Chroot

[Change root](/title/Change_root "Change root") into the new system:

\# arch-chroot /mnt

### Time

Set the [time zone](/title/Time_zone "Time zone"):

\# ln -sf /usr/share/zoneinfo/_Region_/_City_ /etc/localtime

Run [hwclock(8)](https://man.archlinux.org/man/hwclock.8) to generate `/etc/adjtime`:

\# hwclock --systohc

This command assumes the hardware clock is set to [UTC](https://en.wikipedia.org/wiki/UTC "wikipedia:UTC"). See [System time#Time standard](/title/System_time#Time_standard "System time") for details.

To prevent clock drift and ensure accurate time, set up [time synchronization](/title/Time_synchronization "Time synchronization") using a [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol "wikipedia:Network Time Protocol") (NTP) client such as [systemd-timesyncd](/title/Systemd-timesyncd "Systemd-timesyncd").

### Localization

[Edit](/title/Textedit "Textedit") `/etc/locale.gen` and uncomment `en_US.UTF-8 UTF-8` and other needed UTF-8 [locales](/title/Locale "Locale"). Generate the locales by running:

\# locale-gen

[Create](/title/Create "Create") the [locale.conf(5)](https://man.archlinux.org/man/locale.conf.5) file, and [set the LANG variable](/title/Locale#Setting_the_system_locale "Locale") accordingly:

/etc/locale.conf

LANG=_en\_US.UTF-8_

If you [set the console keyboard layout](#Set_the_console_keyboard_layout_and_font), make the changes persistent in [vconsole.conf(5)](https://man.archlinux.org/man/vconsole.conf.5):

/etc/vconsole.conf

KEYMAP=_de-latin1_

### Network configuration

[Create](/title/Create "Create") the [hostname](/title/Hostname "Hostname") file:

/etc/hostname

_yourhostname_

Complete the [network configuration](/title/Network_configuration "Network configuration") for the newly installed environment. That may include installing suitable [network management](/title/Network_management "Network management") software, configuring it if necessary and enabling its systemd unit so that it starts at boot.

### Initramfs

Creating a new _initramfs_ is usually not required, because [mkinitcpio](/title/Mkinitcpio "Mkinitcpio") was run on installation of the [kernel](/title/Kernel "Kernel") package with _pacstrap_.

For [LVM](/title/Install_Arch_Linux_on_LVM#Adding_mkinitcpio_hooks "Install Arch Linux on LVM"), [system encryption](/title/Dm-crypt "Dm-crypt") or [RAID](/title/RAID#Configure_mkinitcpio "RAID"), modify [mkinitcpio.conf(5)](https://man.archlinux.org/man/mkinitcpio.conf.5) and recreate the initramfs image:

\# mkinitcpio -P

### Root password

Set the root [password](/title/Password "Password"):

\# passwd

### Boot loader

Choose and install a Linux-capable [boot loader](/title/Boot_loader "Boot loader").

Reboot
------

Exit the chroot environment by typing `exit` or pressing `Ctrl+d`.

Optionally manually unmount all the partitions with `umount -R /mnt`: this allows noticing any "busy" partitions, and finding the cause with [fuser(1)](https://man.archlinux.org/man/fuser.1).

Finally, restart the machine by typing `reboot`: any partitions still mounted will be automatically unmounted by _systemd_. Remember to remove the installation medium and then login into the new system with the root account.

Post-installation
-----------------

See [General recommendations](/title/General_recommendations "General recommendations") for system management directions and post-installation tutorials (like creating unprivileged user accounts, setting up a graphical user interface, sound or a touchpad).

For a list of applications that may be of interest, see [List of applications](/title/List_of_applications "List of applications").

Retrieved from "[https://wiki.archlinux.org/index.php?title=Installation\_guide&oldid=825015](https://wiki.archlinux.org/index.php?title=Installation_guide&oldid=825015)"

[Category](/title/Special:Categories "Special:Categories"):

*   [Installation process](/title/Category:Installation_process "Category:Installation process")

*   This page was last edited on 13 January 2025, at 10:43.
*   Content is available under [GNU Free Documentation License 1.3 or later](https://www.gnu.org/copyleft/fdl.html) unless otherwise noted.

*   [Privacy policy](https://terms.archlinux.org/docs/privacy-policy/)
*   [About ArchWiki](/title/ArchWiki:About)
*   [Disclaimers](/title/ArchWiki:General_disclaimer)
*   [Code of conduct](https://terms.archlinux.org/docs/code-of-conduct/ "archlinux-service-agreements:code-of-conduct")
*   [Terms of service](https://terms.archlinux.org/docs/terms-of-service/ "archlinux-service-agreements:terms-of-service")

*   [![GNU Free Documentation License 1.3 or later](/resources/assets/licenses/gnu-fdl.png)](https://www.gnu.org/copyleft/fdl.html)
*   ![](/resources/assets/poweredby_mediawiki_88x31.png)

*   Toggle limited content width

(RLQ=window.RLQ||\[\]).push(function(){mw.config.set({"wgBackendResponseTime":247,"wgPageParseReport":{"limitreport":{"cputime":"0.136","walltime":"0.143","ppvisitednodes":{"value":1260,"limit":1000000},"postexpandincludesize":{"value":12078,"limit":2097152},"templateargumentsize":{"value":5518,"limit":2097152},"expansiondepth":{"value":7,"limit":100},"expensivefunctioncount":{"value":0,"limit":100},"unstrip-depth":{"value":0,"limit":20},"unstrip-size":{"value":0,"limit":5000000},"timingprofile":\["100.00% 61.805 1 -total"," 16.10% 9.949 4 Template:Tip"," 14.46% 8.938 17 Template:Man"," 13.75% 8.498 7 Template:Note"," 13.11% 8.102 11 Template:Pkg"," 11.32% 6.999 53 Template:Ic"," 8.37% 5.175 3 Template:Hc"," 7.93% 4.899 1 Template:Warning"," 7.32% 4.522 2 Template:Bc"\]},"cachereport":{"timestamp":"20250210153736","ttl":86400,"transientcontent":false}}});});