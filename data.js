var defaultThreads = [
    {
        id: 1,
        title: "Questions",
        author: "Lisa",
        date: Date.now(),
        content: "Thread content",
        comments: [
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
    },
    {
        id: 2,
        title: "Opportunities",
        author: "Megan",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "Meg",
                date: Date.now(),
                content: "Do you know where I can look for interesting internship opportunities for high school students?"
            },
            {
                author: "Anna",
                date: Date.now(),
                content: "Anyone know of any job openings in the web development field or know anyone I could contact about it?"
            }
        ]
    },
    {
        id: 3,
        title: "Goals",
        author: "Christine",
        date: Date.now(),
        content: "Thread content 3",
        comments: [
            {
                author: "Georgia",
                date: Date.now(),
                content: "I want to become an aerospace engineer! any tips on how to get started?"
            },
            {
                author: "Maxine",
                date: Date.now(),
                content: "I want to become an aerospace engineer! any tips on how to get started?"
            }
        ]
    }
]

var threads = defaultThreads;
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

