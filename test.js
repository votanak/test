function stripScripts(s) {
  var div = document.createElement('div');
  div.innerHTML = s;
  var scripts = div.getElementsByTagName('script');
  var i = scripts.length;
  while (i--) {
    scripts[i].parentNode.removeChild(scripts[i]);
  }
  return div.innerHTML;
}

alert(
  stripScripts(
    '<span><script type="text/javascript">alert(\'foo\');</script></span>',
  ),
);
