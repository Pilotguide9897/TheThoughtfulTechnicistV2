$(document).ready(function () {
  $(".create-post").on("submit", function () {
    window.location.href = "/create";
  });
});

$(document).ready(function () {
  $("#create-post").on("click", function () {
    window.location.href = "/create";
  });
});

const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();


const createPostHandler = async (event) => {
  event.preventDefault();

  if (title && content) {
    try {
      const dataToSend = { title, content };

      const response = await fetch("/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const responseData = await response.json();
        alert("You have successfully created a new post!");
        console.log("Server response:", responseData);
        window.location.replace("/dashboard");
      } else {
        alert(
          "Post unsuccessful. Please try again!"
        );
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  } else {
    alert("Please try reloading the page.");
  }
};

document.querySelector("#create-post-form").addEventListener("submit", createPostHandler);
