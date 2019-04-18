var purl='http://47.93.217.112:8080/jiekou';
var pp='http://192.168.0.106:8080/jiekou';
function ajax_login(user,ps){
  api.ajax({
      url: purl+'/login.action',
      method: 'post',
      data: {
          values: {
              username: user,
              password: ps
          }
      }
  },function(ret, err){
      if (ret) {
        var info=JSON.stringify(ret.tom);
        var iff = info.substring(1, info.length-1);
        if(iff=='error'){
          api.toast({
              msg: '用户名或者密码输入不正确，请重新输入',
             duration: 3000,
             location: 'bottom'
          });
        }
        if(iff=='success'){
          //保存用户名信息
          $api.setStorage('username',user);
          // 跳转到my,html页面
          api.openFrame({
                  name: 'my',
                  url: './my.html',
                  pageParam: {
                      name: user
                  },
                  rect: {
              x: 0,
              y: 0,
              w:'auto',
              h:api.winHeight-70
                  }
              });
          // 跳转到my,html页面
        }




      } else {
        api.toast({
            msg: '操作失败，请稍后重试',
           duration: 3000,
           location: 'bottom'
        });
      }
  });

}
function blockornone(id) {
    // login.html里面的内容
    //显示传过来的值
    if (id == "regedit_div") {
        //显示注册，隐藏登录
        $("#regedit_div").show();
        $("#login_div").hide();
        document.getElementById("t_reg").style.color = '#1ba71b';
        document.getElementById("t_log").style.color = 'gray';
    }
    if (id == "login_div") {
        //显示登录，隐藏注册
        $("#login_div").show();
        $("#regedit_div").hide();
        document.getElementById("t_reg").style.color = 'gray';
        document.getElementById("t_log").style.color = '#1ba71b';
    }
    //my.html里面的内容
}

 function ajax_regedit(user, ps, rps) {
     if (ps == rps) {
         //ajax请求
         api.ajax({
            url: purl+'/regedit.action',
            method: 'post',
             data: {
                 values: {
                    username: user,
                    password: ps

                 }
             }
        }, function(ret, err) {
            if (ret) {
                var info=JSON.stringify(ret.tom);
                var iff = info.substring(1, info.length-1);
                if(iff=='error'){
                  api.toast({
                      msg: '用户名已存在，换一个试试吧',
                     duration: 3000,
                     location: 'bottom'
                  });
                }
                if(iff=='success'){
                  // 设置显示和不显示
                  $("#login_div").show();
                  $("#regedit_div").hide();
                  document.getElementById("t_reg").style.color = 'gray';
                  document.getElementById("t_log").style.color = '#1ba71b';
                   // 设置显示和不显示
                }
             } else {
               api.toast({
                   msg: '操作失败，请稍后重试',
                  duration: 3000,
                  location: 'bottom'
               });
            }
         });
         //ajax请求
     } else {
         // 给出提示
         api.toast({
             msg: '两次密码输入不正确，请重新输入',
            duration: 3000,
            location: 'bottom'
         });
         // 给出提示
     }


 }
