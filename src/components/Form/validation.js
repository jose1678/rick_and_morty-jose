export default function(inputs){
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPass= new RegExp("[0-9]");
    const errors ={};

     if(!regexEmail.test(inputs.username))
     errors.username= "Nombre debe ser un email valido";
    if(!inputs.username){
        errors.username = "el nombre es obligatorio";
    if(!inputs.username.length> 35){
        errors.username = "No debe superar el maximo de 35 caracteres";
        if(!regexPass.test(inputs.password))
     errors.password= "Debe contener almenos un numero";
     if(inputs.password.length < 6 || inputs.password.length > 10)
     errors.password= "Entre 6 y 10 caracteres";
    }
    return errors;
    }
}