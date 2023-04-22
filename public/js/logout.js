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
    res.status(500);
  }
};

document.getElementById("logout").addEventListener("click", logOutHandler);
