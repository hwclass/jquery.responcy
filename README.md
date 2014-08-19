## jquery.responcy 1.0.2

It is designed to be worked with Bootstrap. It does the same thing like interchange plugin for Foundation.

### usage (HTML)
```html

<p>
  <img src="" id="spaceImage" data-responcy='{"small":"../public/img/space-small.jpg","medium":"../public/img/space-medium.jpg", "large":"../public/img/space-large.jpg"}'/>
</p>

<p>
  <div id="responcyHtmlSource" data-responcy='{"small":"../public/partials/responcy-small.html","medium":"../public/partials/responcy-medium.html", "large":"../public/partials/responcy-large.html"}'></div>
</p>
```

### usage (Javascript)
<pre lang="javascript">
<code>
$(document).ready(function () {
  $('#spaceImage').responcy();
  $('#responcyHtmlSource').responcy();
});
</code>
</pre>
