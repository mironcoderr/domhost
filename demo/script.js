$(window).on("scroll",(function(){$(this).scrollTop()>100?$(".header-part").addClass("header-fixed"):$(".header-part").removeClass("header-fixed")})),$(".header-mobile button").on("click",(function(){$(".header-content").toggleClass("active")})),document.addEventListener("contextmenu",(e=>e.preventDefault())),document.onkeydown=function(e){return 123==e.keyCode?(alert("F12 Disable"),!1):e.ctrlKey&&67==e.keyCode?(alert("ctrl + c disable"),!1):e.ctrlKey&&85==e.keyCode?(alert("ctrl + u disable"),!1):void 0};