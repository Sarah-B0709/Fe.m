 /*console.log(threads);
        var container = document.querySelector('ol');
        for (let thread of threads) {
            var html = `
            <li class="row">
                <a href="/thread.html?${thread.id}">
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
                </a>
            </li>
            `
            container.insertAdjacentHTML('beforeend', html);
        }*/

 console.log(threads);
        var container = document.getElementById('allForums');
        /*for (let thread of threads) {*/
            var html = `
                <a href="/thread.html?${2}"><div class = "forumDiv" id = "opportunities">
        <h3 class = "forumTitle">Opportunities</h3>
        <p class = "forumText">Have any opportunities you want to share or looking for some to take part in? This is the forum for you!</p>

        <img class = "image" src = "images/opportunities.png">
        </div></a>

      <a href="/thread.html?${1}"><div class = "forumDiv" id = "questions">
        <h3 class = "forumTitle">Questions</h3>
        <p class = "forumText">Add any questions you have or help out other women by answering theirs!</p>

        <img class = "image" src = "images/question.png"> </div>
      </a>

      <a href="/thread.html?${3}"><div class = "forumDiv" id = "goals">
        <h3 class = "forumTitle">Goals</h3>
        <p class = "forumText">Share your goals here and help other women achieve theirs by sharing your experiences or tips!</p>

        <img class = "image" src = "images/goal.png">
      </div></a>
                   
            `
            container.insertAdjacentHTML('beforeend', html);
        
