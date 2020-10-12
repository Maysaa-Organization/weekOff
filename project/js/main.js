var users=[{id:1,name:'moh' , pass:123},{id:2,name:'khaled',pass:345}]
function generateId(users){
    if(users.length === 0){
        return 1
    }else{
        return users[users.length-1].id+1
    }
}

function signUp(){
        var name2=document.getElementById("nameSignup").value;
        var pass2=document.getElementById("passSignup").value;
        
        const checkFind = users.findIndex(function(object,index){
        if(object.name.toLowerCase() !== name2.toLowerCase()){
            users.push({id:generateId(users),name:name2,pass:pass2})
                    console.log(users);
                }else{
                
                console.log('your name or password is not correct');
            }

})

}
