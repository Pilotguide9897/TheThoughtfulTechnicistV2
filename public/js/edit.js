document.getElementById("editablePost").addEventListener("submit", async (event) => {
  event.preventDefault();
  modifyPageHandler();
});

document.getElementById("edit-post-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  postEditHandler();
});

document.getElementById("delete-post").addEventListener("submit", async (event) => {
  event.preventDefault();
  postDeleteHandler();
});

const title = document.getElementById("edit-title").value;
const post_content = document.getElementById("edit-content").value;

const postId = document.getElementById("postId").value;

const modifyPageHandler = async () => {    
    try{
        const response = await fetch ("/edit", {
             method: "GET"
        });

        if (response.ok) {
            window.location.href = "/edit";
        }
    } catch (err) {
        console.error(err);
    }
};

// Delete your post
const postDeleteHandler = async (event) => {
    event.preventDefault();
    console.log("postDeleteHandler called");

    try{
        const response = await fetch (`/edit/${postId}`, {
            method: "DELETE"
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

// Edit your post
const postEditHandler = async () => {
  console.log("postEditHandler called");

  const title = document.getElementById("edit-title").value;
  const post_content = document.getElementById("edit-content").value;

     try {
    const response = await fetch(`/edit/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, post_content }),
    });

    if (response.ok) {
      window.location.href = "/dashboard";
    } else {
      console.error("Error submitting comment");
    }
  } catch (err) {
    console.error(err);
  }
};



