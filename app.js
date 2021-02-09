
            fetch("https://www.reddit.com/r/Overwatch/.json?after=")
                .then((response) => response.json())
                .then((data) => {
                    const pages = data.data;
                    console.log(pages.after)
                    const threads = data.data.children;
                    threads.forEach((threads) => {
                        threads = `
          <div id="thread-list">
          <img src="${threads.data.thumbnail}">
          <br>
        <a href=" ${threads.data.url}" >${threads.data.title}</a>
          <button class="up-vote" id="${threads.data.ups}">Up
          </button>
            <span class="score" id="all-vote">${threads.data.score}</span>
          <button class="down-vote" id="${threads.data.downs}">Down
          </button>
          <br> 
      `;
                        document.getElementById("thread-list").innerHTML += threads;


                        const button = document.getElementById('show-more-btn');
                        button.onclick = (click) => {
                            window.location.assign(`https://www.reddit.com/r/Overwatch/?after=` + `${pages.after}`
                            );

                        }
                    })
                });



