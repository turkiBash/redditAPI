fetch("https://www.reddit.com/r/Overwatch/.json")
  .then((response) => response.json())

  .then((data) => {
    console.log(data);

    const threads = data.data.children;

    for (var i = 0; i < threads.length; i++) {
      console.log(threads[i].data);

      console.log(threads[i].data.title);

      console.log(threads[i].data.url);

      const html1 = document.createElement("a");

      html1.setAttribute("href", threads[i].data.url);

      const node = document.createTextNode(threads[i].data.title);

      html1.appendChild(node);

      const element1 = document.getElementById("thread-list");

      element1.appendChild(html1);
    }
  });
