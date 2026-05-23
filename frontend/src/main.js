import "./style.css";
import { getData } from "./assets/components/render";

const coderUrl = "http://localhost:3000/todos";
const form = document.getElementById("form");

lucide.createIcons();

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const nuevoTodo = {
    title: formData.get("title"),
    description: formData.get("description"),
    completed: false,
  };

  await fetch(coderUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevoTodo),
  });

  form.reset();

  getData(coderUrl);
});

getData(coderUrl);
