import config from "../config/conf";
import axios from "axios";

export default{
    reservarCita: (inmueble,fechaCita,hora,promotor,usuario) => {
        
        const body = {
            promotorid : promotor,
            fecha_solicitada:fechaCita,
            hora: hora,
            prospectoid:usuario,
            inmuebleid:inmueble
        }
        
        
        return axios.post(`${config.ipHost}/api/CitaProspectoCtrl/create`,body ) ;
    },
    cargarPromotores: () => {
        return axios.get(`${config.ipHost}/api/PromotorCtrl/index` ) ;
    },
    getCitas: (id) => {
        const body = {
            prospectoid : id
        }
        
        return axios.post(`${config.ipHost}/api/CitaProspectoCtrl/index`,body  ) ;
    }
   
    
    
    
}
    
 