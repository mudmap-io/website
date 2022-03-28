---
title: 'Hostnames are now supported'
excerpt: 'Mudmap now supports both static IP addresses and WAN routable hostnames when registering devices'
coverImage: '/assets/blog/hostname-support/pfsense-ssh.png'
date: '2022-03-24'
author:
    name: Dan
    twitter: dansult
ogImage:
    url: '/mudmap-card.png'
---

Mudmap can now register devices with dynamic IP addresses. If your device 
has a WAN routable hostname Mudmap, will be able to register it just as it does with static IPs.

If you can SSH into it via the hostname, so can Mudmap!

## Updating an existing device

If you have existing devices registered and want to update their host address from a static IP to
a hostname, you can do that on the dashboard's [Home][home] page or the [Devices - All][all] 
page. 

There you can click on the **Update** button which will launch a form modal where you can edit
device information.

![Mudmap Home Page device update](/assets/blog/hostname-support/update-device-form.png "Mudmap 
Dashboard Home Page" )

### Documentation

For more information about how to get started, update existing devices or register new ones head
over the [documentation].



[documentation]: https://docs.mudmap.io
[home]: https://dashboard.mudmap.io/dashboard
[all]: https://dashboard.mudmap.io/devices
