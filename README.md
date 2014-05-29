## jquery.responcy 1.0.0

Validates and deletes if input character value is a special char, digit or alphabetical by every char.

It is designed to be worked with Bootstrap. Its equal plugin is interchange plugin for Foundation.

### usage (HTML)
<pre lang="html">
<code>
<p>
<img src="" id="spaceImage" data-responcy='{"small":"../public/img/space-small.jpg","medium":"../public/img/space-medium.jpg", "large":"../public/img/space-large.jpg"}'/>
</p>
<p>
<div id="responcyHtmlSource" data-responcy='{"small":"../public/partials/responcy-small.html","medium":"../public/partials/responcy-medium.html", "large":"../public/partials/responcy-large.html"}'></div>
</p>
</code>
</pre>

### usage (Javascript)
<pre lang="javascript">
<code>
$(document).ready(function () {
$('#spaceImage').responcy();
$('#responcyHtmlSource').responcy();
});
</code>
</pre>