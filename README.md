# jQuery wrapper for diffDOM

Updates the elements HTML by diffing.


## Dependencies

- [jQuery](https://jquery.com)

```html
<script src="//code.jquery.com/jquery-1.11.3.min.js" type="text/javascript"></script>
```

- [diffDOM](https://github.com/fiduswriter/diffDOM)

```html
<script src="//cdn.jsdelivr.net/diffdom/0.0.1/diffdom.min.js" type="text/javascript"></script>
```

## How To

Add those dependencies above and the following script to your ``index.html`` file:

```html
<script src="//cdn.rawgit.com/webino/diffhtml-jquery/develop/src/diffhtml.jquery.js" type="text/javascript"></script>
```

HTML element:

```html
<div id="content">Example text...</div>
```

Javascript code:

```javascript
var code = '<div id="content">Example text updated...</div>';
$('#content').diffHTML(code);
```

## Addendum

This package is used by the [Webino™ project](https://github.com/webino/Webino).

Please, report any issues and don't hesitate to contribute.

[Report a bug](https://github.com/webino/diffhtml-jquery/issues) | [Fork me](https://github.com/webino/diffhtml-jquery)
