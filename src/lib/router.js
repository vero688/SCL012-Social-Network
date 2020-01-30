import mainLog from "../main.js";

const ChangeRouter = (hash) =>{
if (hash === '#/logIn'){
    return mainLogin(hash);
}
}


const mainLo = (hash) =>{
    const router = hash.subtring();
    const ContainerRoot =document.getElementById("root");
    ContainerRoot.innerHTML="";

    switch(router){
        case 'logIn':
            CredentialsContainer.appendchild(mainLog());
            break;
    }
}