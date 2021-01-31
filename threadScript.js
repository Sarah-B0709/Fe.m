 var id = window.location.search.slice(1);
        var thread = threads.find(t => t.id == id);
        var header = document.querySelector('.header');
        var headerHtml = `
            <h4 class="title">
                ${thread.title}
            </h4>
            <div class="bottom">
                <p class="timestamp">
                    ${new Date(thread.date).toLocaleString()}
                </p>
                <p class="comment-count">
                    ${thread.comments.length} comments
                </p>
            </div>
        `
        header.insertAdjacentHTML('beforeend', headerHtml)

        function addComment(comment) {
            var commentHtml = ` 
                <div class="comment">
                  <div class = "oneComment">
                    <div class="top-comment">
                        <p class="user">
                            ${comment.author}
                        </p>
                        <p class="comment-ts">
                            ${new Date(comment.date).toLocaleString()}
                        </p>
                    </div>
                    <div class="comment-content">
                        ${comment.content}
                    </div>
                    <div class = "commentButtons">
                    <button class = "saveContent" value = "comment.content">Save</button>
                    <a href = "/reply.html" class = "newBorder">Replies</a>
                  </div>
                      
                      
                    </div>
                </div>
            `//button class = "replyComment">Reply</button>
            comments.insertAdjacentHTML('afterend', commentHtml);
        }


        var comments = document.querySelector('.comments');
        for (let comment of thread.comments) {
            addComment(comment);
        }
        var btn = document.getElementById("submit");
        //var btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            var txt = document.querySelector('textarea');
            var comment = {
                content: txt.value,
                date: Date.now(),
                author: 'Liv'
            }
            addComment(comment);
            txt.value = '';
            thread.comments.push(comment);
            localStorage.setItem('threads', JSON.stringify(threads));
        })


        /*
        var btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            var txt = document.querySelector('textarea');
            var comment = {
                content: txt.value,
                date: Date.now(),
                author: 'Liv'
            }
            addComment(comment);
            txt.value = '';
            thread.comments.push(comment);
            localStorage.setItem('threads', JSON.stringify(threads));
            
        })*/

      function goBack() {
  window.history.back();
}
//make a variable for the reply button then add event listener addReply()




     //localStorage.clear();           