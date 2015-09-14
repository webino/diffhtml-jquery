# jQuery wrapper for diffDOM

- diffhtml.jquery.js

Update elements HTML via diffing.


## Requirements

- [jQuery](https://jquery.com)

```html
<script src="//code.jquery.com/jquery-1.11.3.min.js" type="text/javascript"></script>
```

- [diffDOM](https://github.com/fiduswriter/diffDOM)

```html
<script src="//cdn.jsdelivr.net/diffdom/0.0.1/diffdom.min.js" type="text/javascript"></script>
```

## How To

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
