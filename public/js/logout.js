const logOutHandler = async () => {
  try {
    const attempt = await fetch("/login/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    if (attempt.ok) {
      document.location.href("/");
      alert("You have been successfully logged out!");
    } else {
      alert(attempt.statusText);
    }
  } catch {
    console.error("Logout Error:", error);
  }
};

document.getElementById("logout").addEventListener("click", logOutHandler);
