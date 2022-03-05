const users = [];

exports.joinUsers = function(id, userName, room){
    const user = {id, userName, room};
    users.push(user);
    console.log(users);

    return user;
}

exports.getUserById = function(id){
    return users.find((user) => user.id === id);

}

exports.disconnect = function (id){
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}