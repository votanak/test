const divOpen = document.getElementById('divopen');
var select = document.getElementById('select');

const evt = new FocusEvent('focus', {
  bubbles: true,
  cancelable: true,
  view: window,
});

divOpen.addEventListener('click', function () {
  console.log('pressed');
  select.focus();
  select.click();
  select.dispatchEvent(evt);
});
