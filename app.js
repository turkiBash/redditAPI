fetch("https://www.reddit.com/r/Overwatch/.json")
  .then((response) => response.json())

  .then((data) => {
    console.log(data);

    const threads = data.data.children;
    threads.forEach((threads) => {
      console.log(threads.data);
      threads = `
      <div id="${threads.data.name}">
          <img src="${threads.data.thumbnail}">
          <br>
        <a href=" ${threads.data.url}" >${threads.data.title}</a>
          <button id="${threads.data.ups}">Up
          </button>
            <span>${threads.data.score}</span>
          <button id="${threads.data.downs}">Down
          </button>   
          <br>   
          <video poster="${threads.data.secure_media}"width="320" height="240" controls>
          </video>
      </div>
      `;
      document.getElementById("thread-list").innerHTML += threads;
    });
  });
