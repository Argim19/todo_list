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

    await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: nuevoTitulo,
        description: nuevaDescripcion,
        completed: estadoCompletado,
      }),
    });

    getData(coderUrl);
  });
});
