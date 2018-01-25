//Related Post Thumb
$(&quot;ul#related-summary li img&quot;).each(function(){$(this).attr(&quot;src&quot;,$(this).attr(&quot;src&quot;).replace(/\/s[0-9]+(\-c)?\//,&quot;/w200-h140-c/&quot;))});
//Spoiler
$(document).ready(function(){$(&quot;#flippy&quot;).click(function(){$(&quot;#flippanel&quot;).slideToggle(&quot;normal&quot;)})});
//<![CDATA[
// Youtube Responsive
setTimeout(function(){$(".video-youtube").each(function(){$(this).replaceWith('<iframe class="video-youtube loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="281" width="500"></iframe>')})},5e3);
// Double Click
$('i[rel="pre"]').replaceWith(function(){return $("<pre><code>"+$(this).html()+"</code></pre>")});for(var pres=document.querySelectorAll("pre,code,kbd,blockquote,td"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
function downloadJSAtOnload(){var e=document.createElement("script");e.src="https://cdn.rawgit.com/Arlina-Design/FlamingTree/master/highlightpro.js",document.body.appendChild(e)}window.addEventListener?window.addEventListener("load",downloadJSAtOnload,!1):window.attachEvent?window.attachEvent("onload",downloadJSAtOnload):window.onload=downloadJSAtOnload;