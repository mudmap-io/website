---
title: 'Reboot, shutdown and shell command execution now available'
excerpt: 'Mudmap now supports reboot, shutdown and shell command execution 
from within the app - no need to SSH for running shell commands'
coverImage: '/assets/blog/diagnostics/diag-screen.png'
date: '2022-02-04'
author:
    name: Dan
    twitter: dansult
ogImage:
    url: '/mudmap-card.png'
---

Without needing to log in to your devices individually, Mudmap now 
supports reboot, shutdown and shell command execution.

To see how these work in action, you can watch a demonstration [video].

## Command Prompt

The *Command Prompt* or shell execution feature is very powerful, letting 
users execute commands as well as then uploading and downloading of files 
on to your firewall.

### Warnings and Consideration

Straight from [Netgate], it is imporant to acknowledge that shell execution 
is an advanced tool.
```shell
WARINING

Exercise caution using any of these utilities. Executing commands and PHP 
code improperly can render the firewall unusable. Use of this tool is not 
recommended except under the guidance of a support representative or if 
there is sufficient knowledge on the part of the user.
```

It is also important to understand that the command prompt is **not** 
interactive. Commands such as `ping` or `tcpdump` without a fixed end or 
return will run indefinitely and require manual clean up. Always ensure 
whatever command is executed in the command prompt has a definite return or 
stop.

## Shut down and reboot

Rebooting the system will be enacted immediately meaning until it comes 
back online, Mudmap may respond with errors when viewing the device in 
detail. As long as the firewall *does* come back online, Mudmap will begin 
to function correctly once it can communicate with the device.

When shutting down the firewall, you must ensure you **can** start it again.
Understandably, Mudmap will no longer be able to communicate with the device 
and will be unable to start it. I'd hate to see someone shut it down and be 
unable to start it again as they are not physically there.

## Small features, big improvements

These features are small but play an important role in the management of a 
device. Mudmap is proud to be able to support these functions and will 
continue to add new features every month. If you're having any issues with 
these, or want to ask questions, please reach out.

Be sure to check out the demonstration videos over at the [docs] for the 
many other features Mudmap provides.

[video]: https://docs.mudmap.io/videos/demo-diagnostics
[netgate]: https://docs.netgate.com/pfsense/en/latest/diagnostics/command-prompt.html
[docs]: https://docs.mudmap.io
