$(function(){
    $(".login-input-tab").on("click",".tab-item",function(){
        if($(this).hasClass("selected")){
            return
        }else{
            $(this).addClass("selected").siblings(".tab-item").removeClass("selected")
        }
    })

})