const logOutHandler = async () => {
  try {
    const attempt = await fetch("/login/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (attempt.ok) {
      document.location.replace("/");
      alert("You have been successfully logged out!");
    } else {
      alert(attempt.statusText);
    }
  } catch {
    const postCommentHandler = async () => {
     try {
  }
};

document.getElementById("logout").addEventListener("click", logOutHandler);
