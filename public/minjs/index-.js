var slider=$(".slider_block"),$sliderCon=$(".slider_container");console.log($(window).width());var wd=$(window).width(),lg=$(".slider_block").length,allwd=wd*lg,hg=.85*wd;$sliderCon.width(allwd),$slider.width(wd).height(hg);var swipeNow=0,slideTime;$sliderCon.on("swipeLeft",function(){if(console.log("touch left"),swipeNow<lg-1){var e=++swipeNow*wd;$sliderCon.css("transform","translateX(-"+e+"px)"),$point.removeClass("active").eq(swipeNow).addClass("active"),autoSwipe()}}),autoSwipe();var $queryBlock=$(".query_block");$queryBlock.on("tap",function(){$(this)});