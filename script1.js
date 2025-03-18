let profilepic = document.getElementById("profilepic");
let ProfilepicFb = document.getElementById("ProfilepicFb");
$(document).ready(function(){
    $("#fastfoodClone").hide();
})
ProfilepicFb.addEventListener("mouseover", function(){
    ProfilepicFb.style.transform="scale(1.25)";

})
ProfilepicFb.addEventListener("mouseout", function(){
    ProfilepicFb.style.transform="scale(1.00)";
})
$("#ProfilepicFb").click(function(){
    swal("hi there!");
})
$('#btnTourPage').click(function(){
    location.replace("myworks.html");
});
$("#mydescription1").mouseenter(function(){
    alert("hi!");
});
$("#btnShowFastFood").click(function(){
    $("#fastfoodClone").hide();
});
$("#btnShowFastFood").click(function(){
    $("#fastfoodClone").style.transform="scale(1.30)";
});
