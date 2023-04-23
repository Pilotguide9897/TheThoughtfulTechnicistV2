$(".post").on("click", function () {
  window.location.replace = $(this).data("href");
});

// Direct to Comments
const travelToPost = async () => {
  try {
    const response = await fetch(`/post/${postId}`, {
      method: "GET",
    });
    if (response.ok) {
      window.location.href = `/post/${postId}`;
    } else {
      console.error("Error submitting comment");
    }
  } catch (err) {
    console.error(err);
  }
};

// Add comment
document.getElementById("add-comment-form").addEventListener("submit", async (event) => {
  event.preventDefault();
});

  const content = document.getElementById("content").value;
  const postId = document.getElementById("postId").value;

  postCommentHandler(content, postId);

  const postCommentHandler = async (content, postId) => {
     try {
    const response = await fetch(`/post/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, postId }),
    });

    if (response.ok) {
      window.location.href = `/post/${postId}`;
    } else {
      console.error("Error submitting comment");
    }
  } catch (err) {
    console.error(err);
  }
};

// View existing content


// const navigateToPost = (event) => {
//   const postElement = event.currentTarget;
//   const href = postElement.getAttribute("data-href");
//   window.location.href = href;
// };

// document.querySelectorAll(".userPost").forEach((postElement) => {
//   postElement.addEventListener("click", navigateToPost);
// });
