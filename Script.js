const reverseText = document.querySelector('#reverse-text');

reverseText.addEventListener('click', function() {
  if(document.body.classList.contains('reverse-text')) {
    document.body.classList.remove('reverse-text');
    reverseText.setAttribute('aria-pressed', 'false');
    console.log('Text Normal');
  }
  else {
    document.body.classList.add('reverse-text');
    reverseText.setAttribute('aria-pressed', 'true');
    console.log('Text Reversed');
  }
});