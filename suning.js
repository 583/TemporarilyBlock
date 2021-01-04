function comfire(){
    while(true){
        var kone = text("知道了").findOnce();
        if(kone){
            kone.click();
        }
        var kone = text("知道了").findOnce();
        if(kone){
            kone.parent().click();
        }
        var kone = text("确定").findOnce();
        if(kone){
            kone.click();
        }
    }
}
function submit(){
    while(true){
        var kone = text("提交订单").findOnce();
        if(kone){
            kone.click()
            break;
        }
    }
}
function buy(){
    while(true){
        var kone = className("android.widget.Button").findOnce();
        if(kone){
            kone.click();
        }
    }
}
function start(){
    threads.start(function(){
        comfire();
    })
    threads.start(function(){
        submit();
    })
    threads.start(function(){
        buy();
    })
}
start();
