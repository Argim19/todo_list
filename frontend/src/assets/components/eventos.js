import { deleteUser, updateTodo } from "./api";
import { getData } from "./render";

const coderUrl = "http://localhost:3000/todos";

export function checkEvents() {
  const allcheck = document.querySelectorAll(".checkall");

  allcheck.forEach((checkSelect) => {
    const fila = checkSelect.closest("tr");
    if (checkSelect.checked) {
      fila.classList.add("bg-green-100");
    }
    checkSelect.addEventListener("click", async () => {
      const id = checkSelect.dataset.id;
      const estadoCompletado = checkSelect.checked;
      if (estadoCompletado) {
        fila.classList.add("bg-green-100");
      } else {
        fila.classList.remove("bg-green-100");
      }

      const celdas = fila.querySelectorAll("td");

      const titulo = celdas[2].textContent;
      const descripcion = celdas[3].textContent;

      await updateTodo(id, {
        title: titulo,
        description: descripcion,
        completed: estadoCompletado,
      });
    });
  });
}

export function editEvents() {
  const allButtonsEdit = document.querySelectorAll(".btn-edit");

  allButtonsEdit.forEach((btnEdit) => {
    btnEdit.addEventListener("click", async () => {
      const id = btnEdit.dataset.id;

      const fila = btnEdit.closest("tr");
      const checkbox = fila.querySelector(".checkall");

      const estadoCompletado = checkbox.checked;

      const nuevoTitulo = prompt("Ingrese el nuevo título de la tarea:");
      if (nuevoTitulo === null) return;

      const nuevaDescripcion = prompt(
        "Ingrese la nueva descripción de la tarea:",
      );
      if (nuevaDescripcion === null) return;

      await updateTodo(id, {
        title: nuevoTitulo,
        description: nuevaDescripcion,
        completed: estadoCompletado,
      });

      getData(coderUrl);
    });
  });
}

export function deleteEvents() {
  const allButtonsDelete = document.querySelectorAll(".btn-delete");

  allButtonsDelete.forEach((btnDelete) => {
    btnDelete.addEventListener("click", async () => {
      const id = btnDelete.dataset.id;

      await deleteUser(id);

      btnDelete.closest("tr").remove();
    });
  });
}
