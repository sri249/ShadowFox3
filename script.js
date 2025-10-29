document.getElementById("clientForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const res = await fetch("https://your-backend-url.onrender.com/api/clients", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email }),
  });

  const data = await res.json();
  document.getElementById("msg").innerText = data.message || "Client saved!";
});
