var defaultReply = [
    {
        id: 1,
        title: "Reply",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        commentReply: [
            {
                author: "Stephanie",
                date: Date.now(),
                content: "I want to be a Front End Web Developer. Any tips for getting started in the field?"
            },
            {
                author: "Jolie",
                date: Date.now(),
                content: "Men keep talking over me in my workplace and I can't get my voice heard. What should I do?"
            }
        ]
    } 
]


var reply = defaultReply;
if (localStorage && localStorage.getItem('reply')) {
    reply = JSON.parse(localStorage.getItem('reply'));
} else {
    reply = defaultReply;
    localStorage.setItem('reply', JSON.stringify(defaultReply));
}