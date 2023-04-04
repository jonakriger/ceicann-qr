// Import React Router Dom
import { json } from "react-router-dom";

// Create Function
export default async function RootLoader({ request, params }) {
    // Get Seed ID from Params
    const { seedID } = params;

    // Check if Url has Seed ID
    if (!seedID) {
        throw json(
            {
                errorType: "errorID",
                errorHeading: "ID no valido!",
                errorMsg: "<p>El ID no existe, por favor, escanea nuevamente la etiqueta correspondiente.</p>",
            },
            {
                status: 401,
            }
        );
    }

    // Fetch Data
    const res = await fetch(`/api/data.json`);
    if (res.status === 404) {
        throw json(
            {
                errorType: "errorAPI",
                errorHeading: "Parece que la API está caída!",
                errorMsg: "<p>Algo sucedio mientras se cargaba el sitio. Por Favor, intenta en unos instantes.</p>",
            },
            {
                status: 503,
            }
        );
    }

    // Return
    return returnData(seedID, await res.json());
}

async function returnData(id, response) {
    const Seed = response.dataSeed.find((s) => s.id === id);
    if (!Seed) {
        throw json(
            {
                errorType: "InvalidID",
                errorHeading: "ID no valido!",
                errorMsg: "<p>El id ingresado es invalido, por favor, escanea nuevamente la etiqueta correspondiente.</p>",
            },
            {
                status: 401,
            }
        );
    }
    return response;
}

// Create Function
export async function QrLoader({ request, params }) {
    // Fetch Data
    const res = await fetch(`/api/data.json`);
    if (res.status === 404) {
        throw json(
            {
                errorType: "errorAPI",
                errorHeading: "Parece que la API está caída!",
                errorMsg: "<p>Algo sucedio mientras se cargaba el sitio. Por Favor, intenta en unos instantes.</p>",
            },
            {
                status: 503,
            }
        );
    }

    // Return
    return res.json();
}
