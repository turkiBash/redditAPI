fetch("https://www.reddit.com/.json")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data.data);
    document.getElementById("myData").innerHTML = JSON.stringify(
      data.data,
      null,
      2
    );
    const threads = data.data.children;

    threads.forEach((modhash, dist, children,) => {
      const data = thread.data.kind;

      console.log(threads);

      document.getElementById("thread list").innerHTML = JSON.stringify(thread.data.kind,null,2);
    });
  })
  .catch((err) => {
    console.log(err);
  });
