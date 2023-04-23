$(".userPost").on("click", function () {
  window.location.href = $(this).data("href");
});

document.getElementById("editablePost").addEventListener("submit", async (event) => {
  event.preventDefault();
  modifyPageHandler();
});

const content = document.getElementById("commentContentToEdit").value;
const postId = document.getElementById("postId").value;

// Edit your post
const postDeleteHandler = async () => {
     try {
    const response = await fetch(`/edit/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, postId }),
    });

    if (response.ok) {
      window.location.href = `/edit/${postId}`;
    } else {
      console.error("Error submitting comment");
    }
  } catch (err) {
    console.error(err);
  }
};


// Delete your post
const postEditHandler = async (event) => {
    event.preventDefault();

    try{
        const response = await fetch (`/edit/${id}`, {
            method: "GET"
        });

        if (response.ok) {
            window.location.href = "/dashboard";
        } else {
            console.error ("Error deleting blog post");
        }
    } catch (err) {
        console.error(err);
    }
};


const modifyPageHandler = async (event) => {
    event.preventDefault();
    
    try{
        const response = await fetch ("/")
    }
}

