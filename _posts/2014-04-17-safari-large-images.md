---
layout: post
title: 'Mobile Safari Does Not Render Large Images'
category: 'development'
tags: ['web design', 'mobile', 'issue']
---

Came across this issue today – really large images would not render in Mobile Safari on iPhone or iPad. If the image is too big iOS ignores the asset.

The problem is due to the [iOS Resource Limits](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariWebContent/CreatingContentforSafarioniPhone/CreatingContentforSafarioniPhone.html), which states:

> The maximum size for decoded GIF, PNG, and TIFF images is 3 megapixels for devices with less than 256 MB RAM and 5 megapixels for devices with greater or equal than 256 MB RAM.
That is, ensure that `width * height ≤ 3 * 1024 * 1024` for devices with less than 256 MB RAM. Note that the decoded size is far larger than the encoded size of an image.

The solution is to resize your image dimensions to fit into the sizes that Apple Mobile Safari can decode.

via -- 	[Safari Web Content Guide](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariWebContent/CreatingContentforSafarioniPhone/CreatingContentforSafarioniPhone.html)