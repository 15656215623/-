var purl = 'http://47.93.217.112:8080/jiekou';
var pp = 'http://192.168.0.107:8080/jiekou';
//注册登录的页面
function rlogin(){
  api.closeFrame({
      name: 'my'
  });
  api.closeFrame({
      name: 'store'
  });
  api.openFrame({
            name: 'login',
            url: './login.html',
            rect: {
          x: 0,
          y: 0,
          w:'auto',
          h:api.winHeight-70
            }
          });
}
//注册登录的页面

    apiready = function() {
      api.closeFrame({
          name: 'store'
      });
        //页面加载的时候，把用户名和图形什么都显示在上面
        var name = $api.getStorage('username');
        //vue 2选择1
        if (name != undefined) {
          $("#pcenter").show();
          $("#myhead").hide();
            //ajax
            api.ajax({
                url: purl + '/queryuser.action',
                method: 'post',
                data: {
                    values: {
                        username: name
                    }
                }
            }, function(ret, err) {
                if (ret) {
                    //如果成功的话，把值循环遍历到页面上
                    new Vue({
                            el: '#pcenter',
                            data: {
                                sites: ret
                            }
                        })
                        //如果成功的话，就把值返回到页面上去
                }
            });
            //ajax
        } else {
          $("#pcenter").hide();
          $("#myhead").show();
        }
        //页面加载的时候，把用户名和图形什么都显示在上面
}


//只有登录的用户才可以发布帖子
function islogin(fg) {
var name = $api.getStorage('username');
if (name != null) {
  if(fg=='fpost'){
    api.openFrame({
        name: 'mypost',
        url: './mypost.html',
        rect: {
            x: 0,
            y: 0,
            w: 'auto',
            h: api.winHeight-70
        },
    });
  }
  if(fg=='apost'){
    api.openFrame({
        name: 'anpost',
        url: './anpost.html',
    });
  }


} else {
    api.toast({
        msg: '您还没登录，登录之后可以享受更多的权益',
        duration: 2000,
        location: 'bottom'
    });
        }
}
//只有登录的用户才可以发布帖子
function beseller(){
  //在进入商铺之前，先判断有没有商铺，，没有的话，需要填写信息才能进入
var username=$api.getStorage('username');
api.ajax({
    url: purl + '/isn.action',
    method: 'post',
    data: {
        values: {
            name: username
        },
    }
},function(ret, err){
    if (ret) {
      var info=JSON.stringify(ret.toast);
        var iff = info.substring(1, info.length-1);
      if(iff=="yes"){
        api.openWin({
            name: 'nindex',
            url: './nindex.html',
        });
      }else{
        api.openWin({
            name: 'beseller',
            url: './beseller.html',
        });
      }

    }
});
}
