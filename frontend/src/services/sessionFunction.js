import config from "../config/conf";
import axios from "axios";

export default{
    IniciarSesion: ( usuario , password) => {
     
        const body ={
            'usuario' : usuario,
            'password': password,
        }  
        
        return axios.post(`${config.ipHost}/api/ClienteCtrl/login` , body) ;
    },
    registrarse:(data) => {
        
        const body ={
            nombre:     data.nombre , 
            apellido_p: data.apellido_p , 
            apellido_m: data.apellido_m , 
            usuario:    data.usuario , 
            password:   data.password , 
            estadoCivil:data.estadoCivil , 
            nss:        data.nss , 
            curp:       data.curp , 
            tipoCredito:data.tipoCredito , 
            fecha_nacimiento:data.fecha_nacimiento   ,
            num_telefono:    data.num_telefono    
        }  
        
        return axios.post(`${config.ipHost}/api/ClienteCtrl/create`,body) ;
    }
    
    
    
}
    
 