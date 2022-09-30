(function(window, document, undefined){
    window.onload = init;
    function init(){
        const buttonOpen = document.getElementById("button");
        const menu = document.getElementById("menu-mobile-active");
        const buttonClose = document.getElementById("close-menu");
        buttonOpen.onclick = function click(){
            menu.style.left = "0px";
            menu.style.visibility = "visible"
        }
        buttonClose.onclick = function clickClose(){
            menu.style.visibility = "hidden";
            menu.style.left = "100%";
        }
    }

})(window, document, undefined);