let ipcRenderer = require('electron').ipcRenderer;
$("#top_exit").click(function(){
    ipcRenderer.send('window-close');
})



var fs = require("fs");
var readLine = require("readline");
/**
 * 按行读取文件内容
 *
 * @param fileName 文件名路径
 * @param callback 回调函数
 *
 * @return 字符串数组
 */
function readFileToArr(fileName, callback) {
  var arr = [];
  var readObj = readLine.createInterface({
    input: fs.createReadStream(fileName),
  });

  // 一行一行地读取文件
  readObj.on("line", function (line) {
    arr.push(line);
  });
  // 读取完成后,将arr作为参数传给回调函数
  readObj.on("close", function () {
    callback(arr);
  });
}

// 调用方法，将每行合成一个arr数组。
readFileToArr(__dirname + "/txt/1.txt", function (arr) {
  //   console.log(arr);
  // 使用关键字 对数据进行处理，如我要找size
  var obj = {};
  for (let i in arr) {
    obj = arr;
  }
  //   看看obj对象里面的数据是否符合要求
//   console.log(obj);
  function readFileToArr(fileName, callback) {
    var aaa = [];
    var readOb = readLine.createInterface({
      input: fs.createReadStream(fileName),
    });  
    // 一行一行地读取文件
    readOb.on("line", function (line) {
      aaa.push(line);
    });
    // 读取完成后,将arr作为参数传给回调函数
    readOb.on("close", function () {
      callback(aaa);
    });
  }
    for(var i=1; i<obj.length;i++){
        readFileToArr(obj[i],function(aaa){
        var id = {}
        var names = {}
        var synopsis = {}
        var version = {}
        var img = {}
            for(let o in aaa){
                var str = aaa[o];  
                switch (1) {
                case str.indexOf("id"):
                  id[i]= str.substr(str.indexOf(":") + 2); 
                  break;
                case str.indexOf("name"):
                  names[i] = str.substr(str.indexOf(":") + 2);
                  break;
                case str.indexOf("synopsis"):
                  synopsis[i] = str.substr(str.indexOf(":") + 2);
                  break;
                case str.indexOf("version"):
                  version[i]= str.substr(str.indexOf(":") + 2);
                  break;
                case str.indexOf("img"):
                  img[i] = str.substr(str.indexOf(":") + 2);
                default:
                  console.log(str + "数据不符合");
                  break;
                }; 
            // console.log(id[i]); 
            $("#name_"+id[i]).html(names[i]);
            $("#synopsis_"+id[i]).html(synopsis[i])
            $("#img_"+id[i]).attr('src',img[i]);
            }
        }) 
       
    }
});
 




var btn1 = document.getElementById("middle_bottom_right_btn_1");
btn1.onclick=function(){
    var bb = document.getElementById("middle_bottom_left_1");
    bb.style.display="block"
    document.getElementById("middle_bottom_left_2").style.display="none";
    document.getElementById("middle_bottom_left_3").style.display="none";
    document.getElementById("middle_bottom_left_4").style.display="none";
}
var btn2 = document.getElementById("middle_bottom_right_btn_2");
btn2.onclick=function(){
    var bb = document.getElementById("middle_bottom_left_2");
    bb.style.display="block"
    document.getElementById("middle_bottom_left_1").style.display="none";
    document.getElementById("middle_bottom_left_3").style.display="none";
    document.getElementById("middle_bottom_left_4").style.display="none";
}

var btn3 = document.getElementById("middle_bottom_right_btn_3");
btn3.onclick=function(){
    var bb = document.getElementById("middle_bottom_left_3");
    bb.style.display="block"
    document.getElementById("middle_bottom_left_1").style.display="none";
    document.getElementById("middle_bottom_left_2").style.display="none";
    document.getElementById("middle_bottom_left_4").style.display="none";
}

var btn4 = document.getElementById("middle_bottom_right_btn_4");
btn4.onclick=function(){
    var bb = document.getElementById("middle_bottom_left_4");
    bb.style.display="block"
    console.log("按下");
    document.getElementById("middle_bottom_left_1").style.display="none";
    document.getElementById("middle_bottom_left_2").style.display="none";
    document.getElementById("middle_bottom_left_3").style.display="none";
}

var bottom_top_left_menu_1 = document.getElementById("bottom_top_left_menu_1");
    bottom_top_left_menu_1.onclick=function(){
        console.log("bottom_top_left_menu_1");
        document.getElementById("bottom_top_left_menu_1").style.backgroundColor="#5BB5FB"
        document.getElementById("bottom_bottom_left_1").style.display="block"
        document.getElementById("bottom_bottom_left_2").style.display="none"
    }


var bottom_top_left_menu_2 = document.getElementById("bottom_top_left_menu_2");
    bottom_top_left_menu_2.onclick=function(){
        document.getElementById("bottom_bottom_left_2").style.display="block"
        document.getElementById("bottom_bottom_left_1").style.display="none"
        console.log("bottom_top_left_menu_2");
    }

var homepage_btn = document.getElementById("homepage_btn");
    homepage_btn.onclick = function(){
        document.getElementById("main_homepage").style.display="block"
        document.getElementById("main_game").style.display="none"
        document.getElementById("main_stock").style.display="none"
        document.getElementById("main_upgrade").style.display="none"
        document.getElementById("main_uninstall").style.display="none"
        console.log("homepage_btn");
    }

var game_btn = document.getElementById("game_btn");
    game_btn.onclick = function(){
        document.getElementById("main_game").style.display="block"
        document.getElementById("main_homepage").style.display="none"
        document.getElementById("main_stock").style.display="none"
        document.getElementById("main_upgrade").style.display="none"
        document.getElementById("main_uninstall").style.display="none"
        console.log("game_btn")
    }

var stock_btn = document.getElementById("stock_btn");
    stock_btn.onclick = function(){
        document.getElementById("main_stock").style.display="block"
        document.getElementById("main_game").style.display="none"
        document.getElementById("main_homepage").style.display="none"
        document.getElementById("main_upgrade").style.display="none"
        document.getElementById("main_uninstall").style.display="none"
    }

var upgrade_btn = document.getElementById("upgrade_btn");
    upgrade_btn.onclick = function(){
        document.getElementById("main_upgrade").style.display="block"
        document.getElementById("main_game").style.display="none"
        document.getElementById("main_homepage").style.display="none"
        document.getElementById("main_stock").style.display="none"
        document.getElementById("main_uninstall").style.display="none"
    }

var uninstall_btn = document.getElementById("uninstall_btn");
uninstall_btn.onclick = function(){
        document.getElementById("main_uninstall").style.display="block"
        document.getElementById("main_game").style.display="none"
        document.getElementById("main_homepage").style.display="none"
        document.getElementById("main_stock").style.display="none"
        document.getElementById("main_upgrade").style.display="none"
}
function getStyle(obj,attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,false)[attr];
}
window.onload = function(){
var main_uninstall_top_right_next = document.getElementById("main_uninstall_top_right_next");
main_uninstall_top_right_next.onmousedown = function(){
    main_uninstall_top_right_next.timer = setInterval(function(){
        // a = a+20;
        var dis = parseInt(getStyle(ul,'left')) - 20;
        if(dis <-1600){
            dis = -1600;
        }
        ul.style.left = dis +'px'
    },30);
}
main_uninstall_top_right_next.onmouseup = function(){
    clearInterval(main_uninstall_top_right_next.timer);
}
var main_uninstall_top_right_prev = document.getElementById("main_uninstall_top_right_prev");
main_uninstall_top_right_prev.onmousedown = function(){
    main_uninstall_top_right_prev.timer = setInterval(function(){
        // a = a+20;
        var dis = parseInt(getStyle(ul,'left')) + 20;
        if(dis >0){
            dis = 0;
        }
        ul.style.left = dis +'px'
    },30);
}
main_uninstall_top_right_prev.onmouseup = function(){
    clearInterval(main_uninstall_top_right_prev.timer);
}
}
$("#ul li").click(function(){
    $("#ul li").eq($(this).index()).addClass("on").siblings().removeClass("on"); 
})

$("#bottom_top_left div p button").click(function(){
        var order = $("#bottom_top_left div p button").index(this);//获取点击之后返回当前a标签index的值
        $("#bottom_bottom_left_" + order).show().siblings("div").hide();//显示class中con加上返回值所对应的DIV
})


$(".line_1_1_bg").hover(function (){
    // $("#name").text('obj.name');
    $(".line_1_1_copy").show();
    $(".line_1_1").hide();
    //  $("#line_1_1_copy").slideDown();
},function (){
    $(".line_1_1").show();
    $(".line_1_1_copy").hide();
    // $("#line_1_1_copy").slideUp();
});

$(".line_2_1_bg").hover(function (){
    // $("#name").text('obj.name');
    $(".line_2_1_copy").show();
    $(".line_2_1").hide();
    //  $("#line_1_1_copy").slideDown();
},function (){
    $(".line_2_1").show();
    $(".line_2_1_copy").hide();
    // $("#line_1_1_copy").slideUp();
});

$(".line_3_1_bg").hover(function (){
    // $("#name").text('obj.name');
    $(".line_3_1_copy").show();
    $(".line_3_1").hide();
    //  $("#line_1_1_copy").slideDown();
},function (){
    $(".line_3_1").show();
    $(".line_3_1_copy").hide();
    // $("#line_1_1_copy").slideUp();
});

$(".line_1_2_bg").hover(function (){
    $(".line_1_2_copy").show();
    $(".line_1_2").hide();
    //  $("#line_1_1_copy").slideDown();
},function (){
    $(".line_1_2").show();
    $(".line_1_2_copy").hide();
    // $("#line_1_1_copy").slideUp();
});

$(".line_2_2_bg").hover(function (){
    $(".line_2_2_copy").show();
    $(".line_2_2").hide();
    //  $("#line_1_1_copy").slideDown();
},function (){
    $(".line_2_2").show();
    $(".line_2_2_copy").hide();
    // $("#line_1_1_copy").slideUp();
});

$(".line_3_2_bg").hover(function (){
    $(".line_3_2_copy").show();
    $(".line_3_2").hide();
    //  $("#line_1_1_copy").slideDown();
},function (){
    $(".line_3_2").show();
    $(".line_3_2_copy").hide();
    // $("#line_1_1_copy").slideUp();
});

$(".line_1_3_bg").hover(function (){
    $(".line_1_3_copy").show();
    $(".line_1_3").hide();
},function (){
    $(".line_1_3").show();
    $(".line_1_3_copy").hide();
});

$(".line_2_3_bg").hover(function (){
    $(".line_2_3_copy").show();
    $(".line_2_3").hide();
},function (){
    $(".line_2_3").show();
    $(".line_2_3_copy").hide();
});

$(".line_3_3_bg").hover(function (){
    $(".line_3_3_copy").show();
    $(".line_3_3").hide();
},function (){
    $(".line_3_3").show();
    $(".line_3_3_copy").hide();
});

$(".line_1_4_bg").hover(function (){
    $(".line_1_4_copy").show();
    $(".line_1_4").hide();
},function (){
    $(".line_1_4").show();
    $(".line_1_4_copy").hide();
});

$(".line_2_4_bg").hover(function (){
    $(".line_2_4_copy").show();
    $(".line_2_4").hide();
},function (){
    $(".line_2_4").show();
    $(".line_2_4_copy").hide();
});

$(".line_3_4_bg").hover(function (){
    $(".line_3_4_copy").show();
    $(".line_3_4").hide();
},function (){
    $(".line_3_4").show();
    $(".line_3_4_copy").hide();
});

$("#install").click(function(){
    window.open("https://codeload.github.com/douban/douban-client/legacy.zip/master");
})

$("#install2").click(function(){
    var $eleForm = $("<form method='get'></form>");
    $eleForm.attr("action","https://codeload.github.com/douban/douban-client/legacy.zip/master");
    $(document.body).append($eleForm);
    //提交表单，实现下载
    $eleForm.submit();
});



