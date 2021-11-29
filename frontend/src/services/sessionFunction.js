import config from "../config/conf";
import axios from "axios";

export default{
    IniciarSesion: ( usuario , password) => {
     
        const body ={
            'usuario' : usuario,
            'password': password,
        }  
        
        return axios.post(`${config.ipHost}/api/ClienteCtrl/login` , body) ;
    }    
    
    
    
}
    
 