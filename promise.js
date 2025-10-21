// Function that simulates a fake async API request
function fakeRequestCallback(url, success, failure) {
  const delay = Math.floor(Math.random() * 4000) + 500; // 0.5s–4.5s delay
  document.getElementById("output").textContent = "⏳ Requesting " + url + "...";

  setTimeout(() => {
    if (delay > 3500) {
      failure("❌ Connection Timeout!");
    } else {
      success("✅ Here is your fake data from " + url);
    }
  }, delay);
}

// When button is clicked → make request
document.getElementById("btn").addEventListener("click", function () {
  fakeRequestCallback(
    "books.com",
    function onSuccess(response) {
      document.getElementById("output").textContent = response;
    },
    function onFailure(error) {
      document.getElementById("output").textContent = error;
    }
  );
});










console.log("example 2");

function fakeRequestCallback(url, success, failure) {
  const delay = Math.floor(Math.random() * 4500) + 500; // random delay
  setTimeout(() => {
    if (delay > 4000) {
      failure('Connection Timeout :(');
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
}


fakeRequestCallback('books.com',
  function success(response) {
    console.log('IT WORKED!!!');
    console.log(response);
  },
  function failure(error) {
    console.log('ERROR!!!');
    console.log(error);
  }
);






console.log("Nested Callbacks (Callback Hell)    When you want to make multiple sequential requests (like fetching page 1, then page 2, then page 3),you end up with nested callbacks:");


fakeRequestCallback('books.com/page1',
  function success(response) {
    console.log(response);
    fakeRequestCallback('books.com/page2',
      function success(response) {
        console.log(response);
        fakeRequestCallback('books.com/page3',
          function success(response) {
            console.log(response);
          },
          function failure(error) {
            console.log('ERROR (3rd req)!!!', error);
          }
        );
      },
      function failure(error) {
        console.log('ERROR (2nd req)!!!', error);
      }
    );
  },
  function failure(error) {
    console.log('ERROR!!!', error);
  }
);







console.log("callback hell");
let h1=document.querySelector('h1');

//h1.style.color="red";


setTimeout(
    ()=>
    {
        h1.style.color="red";
    },1000
);


setTimeout(
    ()=>
    {
        h1.style.color="blue";
    },2000
);


setTimeout(
    ()=>
    {
        h1.style.color="green";
    },3000
);




function changecolor(color,delay)
{
    setTimeout(
    ()=>
    {
        h1.style.color="color";
    },delay
);
}


changecolor("red",1000);
changecolor("orange",2000);
changecolor("green",3000);



console.log("Nested callbacks.Hard to read — later we solve it using Promises")

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    if (nextColorChange) nextColorChange();
  }, delay);
}



changeColor("red", 1000, () => {
  changeColor("orange", 1000, () => {
    changeColor("green", 1000, () => {
      changeColor("yellow", 1000);
    });
  });
});

