import { processResult } from "immer/dist/internal";


export default {
    app:{
        api:import.meta.env.VITE_DEV_API,
        socketServer:import.meta.env.VITE_SOCKET_API
    }
}