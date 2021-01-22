fetch("https://www.reddit.com/r/Overwatch/.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const threads = data.data.children;
    for (var i = 0; i < threads.length; i++) {
      //console.log(threads[i].data);
      console.log(threads[i].data.title);
      //let html = `<ol>${threads.title}</ol>`;
      var html1 = document.createElement("p", "a");
      var node = document.createTextNode(
        threads[i].data.title,
        threads[i].data.url
      );
      html1.appendChild(node);
      var element = document.getElementById("thread-list");
      element.appendChild(html1);
    }
  });
