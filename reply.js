var theReplyButton = document.getElementById("realReplyButton");



// calls the function to make it actually run


theReplyButton.addEventListener('click', function() {
            var txt = document.querySelector('textarea');
            var comment = {
                content: txt.value,
                date: Date.now(),
                author: 'Liv'
            }
            document.body.appendChild(comment);
        });