---
title: WordPress CloudFront settings
cover: "/uploads/2.webp"
category: "CloudFront"
pubDatetime: 2019-02-13
postSlug: "2019-02-13-wordpress-cloudfront-settings"
tags:
  - WordPress
  - AWS
  - CloudFront
---

## 概要

WordPress CloudFront のセッティングで苦労した(Gutenberg エディタが動かないとかあった)のでメモ

真っ先に確認すべきなのは wp-json のところ、Gutenberg は React ベースなので内部で WordPress の RestAPI を呼んでるのでそこが CloudFront でキャッシュされてて動作してないパターンが多いと思う。

## Behavior

### Default\*

- Viewer Protocol Policy
  - Redirect HTTP to HTTPS
- Allowed HTTP Methods
  - GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE
- Cache Based on Selected Request Headers
  - Whitelist
    - Authorization
    - CloudFront-Forwarded-Proto
    - Host
- Object Caching
  - Use Origin Cache Headers
- ## Forward Cookies
- Whitelist Cookies
  - wordpress_logged_in\*
  - wp-settings\*
- Query String Forwarding and Caching
  - Forward all, cache based on all

### /wp-json/\*

- Viewer Protocol Policy
  - HTTP and HTTPS
- Allowed HTTP Methods
  - GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE
- Cache Based on Selected Request Headers
  - Whitelist
    - Authorization
    - CloudFront-Forwarded-Proto
    - Host
    - X-WP-Nonce
- Object Caching
  - Customize
    - Minimum TTL 0
    - Maximum TTL 0
    - Default TTL 0
- Forward Cookies
  - Whitelist
- Whitelist Cookies
  - wordpress_logged_in\*
  - wp-settings\*
- Query String Forwarding and Caching
  - Forward all, cache based on all

### .php

- Viewer Protocol Policy
  - HTTP and HTTPS
- Allowed HTTP Methods
  - GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE
- Cache Based on Selected Request Headers
  - None
- Object Caching
  - Customize
    - Minimum TTL 0
    - Maximum TTL 0
    - Default TTL 0
- Forward Cookies
  - ALL
- Query String Forwarding and Caching
  - Forward all, cache based on all

### /wp-admin/\*

- Viewer Protocol Policy
  - HTTP and HTTPS
- Allowed HTTP Methods
  - GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE
- Cache Based on Selected Request Headers
  - Whitelist
    - Authorization
    - CloudFront-Forwarded-Proto
    - Host
    - User-Agent
- Object Caching
  - Customize
    - Minimum TTL 0
    - Maximum TTL 0
    - Default TTL 0
- Forward Cookies
  - ALL
- Query String Forwarding and Caching
  - Forward all, cache based on all

### WordPress

wp-config.php の設定もしておく

```php
define('WP_HOME','https://example.com');
define('WP_SITEURL','https://example.com');
$_SERVER['HTTPS'] = 'on';
$_ENV['HTTPS'] = 'on';
$_SERVER['HTTP_HOST'] = 'example.com';
$_SERVER['REMOTE_ADDR'] = $_SERVER['HTTP_X_FORWARDED_FOR'];
```
