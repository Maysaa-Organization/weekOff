// var users=[{id:1,name:'moh' , pass:123},{id:2,name:'khaled',pass:345}]
// function generateId(users){
//     if(users.length === 0){
//         return 1
//     }else{
//         return users[users.length-1].id+1
//     }
// }

// function signUp(){
//         var name2=document.getElementById("nameSignup").value;
//         var pass2=document.getElementById("passSignup").value;
        
//         const checkFind = users.findIndex(function(object,index){
//         if(object.name.toLowerCase() !== name2.toLowerCase()){
//             users.push({id:generateId(users),name:name2,pass:pass2})
//                     console.log(users);
//                 }else{
                
//                 console.log('your name or password is not correct');
//             }

// })

// }





//sign in function
//array of users
var user=[{'name':'maysaa' , 'pass':'123'},{'name':'yahya' ,'pass':'456' }];
//signin function
function signIn(){
    var nameInput=document.getElementById('name').value;
    var passInput=document.getElementById('pass').value;
    var par=document.getElementById('must');
    const checkFind = user.findIndex(function(object,index){
      if(object.name.toLowerCase() === nameInput.toLowerCase() && object.pass === passInput){
          window.location.href = "index.html";
      }else{
      
      par.innerHTML='your name or password is not correct';
    }
    
  })
}


// slider
$(function (){
    'use strict';
    //slider height
    var windowHeight=$(window).height(),
        navheight   =$('.navbar').innerHeight();
    $('.slider , .carousel-item').height(windowHeight-navheight);
    
    //to make hide and show for gallary content 
    $("#gallary ul li").on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all'){
            $('.shuffle .col-sm').css('opacity' ,1);
        }else{
            $('.shuffle .col-sm').css('opacity' ,'.08');
            $($(this).data('class')).parent().css('opacity' , 1);
           
        }

    })

});

// back to top button
var mybutton = document.getElementById("myBtn");
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}