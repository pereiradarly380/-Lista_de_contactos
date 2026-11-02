const tablaContactos = document.getElementById("lista-contactos");
const contador = document.getElementById("contador");
const estado = document.getElementById("estado");

async function obtenerContactos() {
    try {
        const respuesta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!respuesta.ok) {
            throw new Error("No se pudieron obtener los contactos");
        }

        const contactos = await respuesta.json();

        tablaContactos.innerHTML = "";

        contactos.forEach((contacto) => {
            const fila = document.createElement("tr");

            const nombre = document.createElement("td");
            nombre.textContent = contacto.name;

            const email = document.createElement("td");
            email.textContent = contacto.email;

            const telefono = document.createElement("td");
            telefono.textContent = contacto.phone;

            const empresa = document.createElement("td");
            empresa.textContent = contacto.company.name;

            fila.append(nombre, email, telefono, empresa);
            tablaContactos.appendChild(fila);
        });

        contador.textContent = `${contactos.length} contactos`;

        estado.textContent = "Contactos cargados correctamente.";

        console.log("Los datos fueron obtenidos correctamente.");
        console.log(contactos);

    } catch (error) {
        console.error("Error al obtener los contactos:", error);

        tablaContactos.innerHTML = `
            <tr>
                <td colspan="4" class="mensaje">
                    No fue posible cargar los contactos.
                    Intenta nuevamente.
                </td>
            </tr>
        `;

        contador.textContent = "Error";
        estado.textContent = "No se pudieron cargar los datos.";
    }
}
obtenerContactos();
