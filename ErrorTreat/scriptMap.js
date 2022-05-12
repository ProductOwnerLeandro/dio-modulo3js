function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value =='Admin'){
          admins.push(key);
        }
    }
return admins;
}

const usuarios = new Map();

usuarios.set('Hulk', 'Admin');
usuarios.set('Homem Aranha', 'Admin');
usuarios.set('Mulher Maravilha', 'User');
usuarios.set('Dr. Manhatan', 'Admin');

console.log(getAdmins(usuarios));