# jQuery wrapper for diffDOM

- diffhtml.jquery.js

Update elements HTML via diffing.


## Requirements

- [jQuery](https://jquery.com)

- [diffDOM](https://github.com/fiduswriter/diffDOM)

## How To

HTML element:

```html
<div id="content">Example text...</div>
```

Javascript code:

```javascript
var code = '<div id="content">Example text updated...</div>';
$('#content').diffHTML(code);
```
