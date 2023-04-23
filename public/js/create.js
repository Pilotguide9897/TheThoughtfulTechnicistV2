// $(document).ready(function () {
//   $(".create-post").on("submit", function () {
//     window.location.replace("/create");
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("create-post").addEventListener("click", createPostTraveller);
});

    const createPostTraveller = async () => {
        console.log("yes, the button has been clicked");
        try {
            const response = await fetch("/create", {
                method: "GET",
            });

            if (response.ok) {
                window.location.replace("/create");
            } else {
                console.error("Error:", response.statusText);
                alert(
                  "An error occurred while loading the create post page. Please try again."
                );
            }
        } catch (err) {
            console.error("Fetch error:", err);
            alert(
              "An error occurred while fetching the page. Please try again."
            );
        }
    }

//   $("#create-post").on("click", function () {
//     window.location.replace("/create");
//   });

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


