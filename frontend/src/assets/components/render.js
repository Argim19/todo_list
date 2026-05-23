import { checkEvents, editEvents, deleteEvents } from "./eventos";

const tbody = document.getElementById("coders-tbody");

export async function getData(url) {
  const response = await fetch(url);

  const datos = await response.json();

  tbody.innerHTML = "";

  datos.forEach((todo) => {
    tbody.innerHTML += `
      <tr class="text-left border-b border-gray-100 hover:bg-gray-50">

        <td class="pl-4 h-12">
          <input 
            class="checkall" 
            data-id="${todo.id}" 
            type="checkbox" 
            ${todo.completed ? "checked" : ""} 
          />
        </td>

        <td class="pl-4 h-12">${todo.id}</td>

        <td class="pl-4 h-12">${todo.title}</td>

        <td class="pl-4 h-12">${todo.description}</td>

        <td class="pl-4 h-12">
          <div class="flex gap-2 items-center">

            <button
              title="editar"
              class="btn-edit w-8 h-8 flex items-center justify-center text-yellow-800 bg-yellow-300 rounded-md cursor-pointer"
              data-id="${todo.id}"
            >
              <i class="text-sm" data-lucide="pencil"></i>
            </button>

            <button
              title="eliminar"
              class="btn-delete w-8 h-8 flex items-center justify-center text-red-800 bg-red-300 rounded-md cursor-pointer"
              data-id="${todo.id}"
            >
              <i class="text-sm" data-lucide="trash"></i>
            </button>

          </div>
        </td>
      </tr>
    `;
  });

  checkEvents();
  editEvents();
  deleteEvents();

  lucide.createIcons();
}
