import config from "../config/conf";
import axios from "axios";

export default{
    getInmuebles: () => {
        return axios.get(`${config.ipHost}/api/InmuebleCtrl/index` ) ;
    },
    getInmueble: ( id ) => {
        const body = {
            id : id
        }
        return axios.post(`${config.ipHost}/api/InmuebleCtrl/getInmueble`,body ) ;
    }    
    
    
    
}
    
 