---
title: 'Mudmap version 2 is now available 🎉' 
excerpt: 'After a few months work, Mudmap version 2 is now available for all users' 
coverImage: '/assets/blog/version-2/logo.jpg' 
date: '2022-01-12' 
author:
  name: Dan 
  twitter: dansult 
ogImage:
  url: '/assets/blog/version-2/logo.jpg'
---

New year, new Mudmap. Today, version 2 officially goes live. So, what's
changed?

Under the hood, quite a lot, actually. Almost all the updates have been informed
by *you*, and I thank you for your ongoing support. Technically, the platform
is rather different but those changes should be *almost* invisible to you. So
then, what's going to affect you then?

## Log in and Registration

It's changed - a lot. Previously, Mudmap handled all your authentication
internally (don't worry security was not compromised - many businesses do
this) but now, we've switched to a well known and regarded third party
provider [Auth0]. This means Mudmap will offload the task of user
registration and login to [Auth0] with all the security benefits that
provides. At this stage, Mudmap is only using their Username and Password
authentication capabilities but in the future will be able to provide [social]
authentication as well. 

There is one downside, though. You will have to sign up again to create an
account with Mudmap version 2, unfortunately this also includes re-registering
all your devices. You can start the registration [here][register]

## User interface updates

The dashboard has also undergone a make over. Some parts are the same but the
general look and feel have changed. The biggest change has been to the Device
detail page which now attempts to replicate the *pfSense* user interface's
navigation bar.

![mudmap demo of aliases](/assets/blog/firewall-alias/demo.gif 'Mudmap demo showing new layout and firewall aliases')

View this gif in higher resolution [here][demo].

Not all sections are currently available for this release. Crossed out tabs in
the navigation bar indicate features that are coming soon but not yet
completed. Once they've been finished, you will be able to access them - stay
tuned for updates.

Device details can also be updated after registration now, too.

## Payments

Some of your feedback centered around the ability to change the
account email *and* payment email address. The association between the two
was, in hindsight, brittle and not respectful for the at-times complex nature
of business accounting. This new release fixes that thanks to [Stripe], our new
payment provider. When subscribing, you will be taken to a Stripe hosted
payment window where you can enter your payment details. Once subscribed, all
payment data will be handled by them. Updating these details can be done
within the Dashboard inside the [profile] page by clicking on the Stripe Portal
button.

## What about Version 1?

It's being sunset and will be shut down on 1 March 2022. Until then, you are
free to continue using it but no new features will be created for it. Security
patches and updates will continue to applied as needed but apart from that,
version 1 is no longer under active development.

I want to thank everyone who used it, and helped to shape the future of Mudmap.

## What's next

More features! Currently, Mudmap is lacking features but thankfully, this update
will make pushing these out to you much quicker. For the technically inclined,
you can read up on the [design decisions][rewrite] and technologies
used in the upgrade. The next lot of features going under development can be
found in the [Roadmap], but if you have any feature requests please make a
suggestion via [email], or at our [Github page][github] by opening an issue.

[email]: mailto:dan@mudmap.io
[social]: https://auth0.com/learn/social-login/
[github]: https://github.com/mudmap-io/customer-support/issues
[profile]: https://dashboard.mudmap.io/dashboard/profile
[stripe]: https://stripe.com
[demo]: https://www.mudmap.io/assets/blog/firewall-alias/demo.gif
[auth0]: https://auth0.com
[register]: https://mudmap.io/register
[roadmap]: /roadmap
[rewrite]: https://mudmapio.notion.site/Version-2-d78ca9bd813541738f7c71cfb9c95c9e
