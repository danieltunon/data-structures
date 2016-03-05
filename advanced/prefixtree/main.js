var tree = PrefixTree();

for (var i = 0; i < words.length; i++) {
  tree.addWord(words[i]);
}

$('document').ready(function() {
  $('#typed-word').keyup(function() {
    var typedWord = $(this).val();
    if (typedWord.length > 0) {
      $('p').text(tree.search(typedWord));
    } else {
      $('p').text('');
    }
  });  
});
