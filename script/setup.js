var purl='http://47.93.217.112:8080/jiekou';
var pp='http://192.168.0.107:8080/jiekou';
function exited(){
  $api.rmStorage('username');
  //跳转到登录的页面
  api.openWin({
       name: 'login',
       url: './login.html'
   });
  api.toast({
      msg: '退出登录',
     duration: 3000,
     location: 'bottom'
  });
}
//调用手机相册和相机
var imgSrc="";
function showAction(){
  //在手机本地创建一个文件夹，
    api.actionSheet({
        title: '上传头像',
        cancelTitle: '取消',
        buttons: ['拍照','从手机相册选择']
    }, function(ret, err) {
        if (ret) {
            getPicture(ret.buttonIndex);
        }
    });
}
//获取相机还是相册
function getPicture(sourceType) {
    var user=$api.getStorage('username');
    if(sourceType==1){ // 拍照
        //获取一张图片
        api.getPicture({
            sourceType: 'camera',  //拍照
            encodingType: 'png',
            mediaValue: 'pic',
            allowEdit: false,
            //destinationType: 'base64',  //返回base64地址
            quality: 90,
            saveToPhotoAlbum: true
        }, function(ret, err) {
            //var imgSrc = ret.base64Data;  如果是base64，要用这个属性获取地址

            // 获取拍照数据并处理
            if (ret) {
                imgSrc = ret.data;
                if (imgSrc != "") {
                    var ele=$api.dom('#avatar');
                    $api.attr(ele,'src',imgSrc);
                    //最后一步
                    //ajax
                    api.ajax({
                        url: purl+'/cim.action',
                        method: 'post',
                        data: {
                            values: {
                                name: user
                            },
                            files: {
                                file: imgSrc
                            }
                        }
                    },function(ret, err){
                        if (ret) {
                          api.toast({
                              msg: '头像上传成功',
                             duration: 3000,
                             location: 'bottom'
                          });
                        }
                    });

                    //ajax
                    //最后一步
                }
            }
        });
    }else if(sourceType==2){ // 从相册中选择
      api.getPicture({
          sourceType: 'album', //从相册中选择
          encodingType: 'jpg',
          mediaValue: 'pic',
          allowEdit: false,
          //destinationType: 'base64',  //返回base64地址
          quality: 90,
          saveToPhotoAlbum: true
      }, function(ret, err) {
          // 获取拍照数据并处理
            //var imgSrc = ret.base64Data;  如果是base64，要用这个属性获取地址
            if (ret) {
                  imgSrc = ret.data;
                  console.log(imgSrc);
                  alert(imgSrc);
                if (imgSrc != "") {
                    var ele=$api.dom('#avatar');
                    $api.attr(ele,'src',imgSrc);
                    //最后一步
                    //ajax
                    api.ajax({
                        url: purl+'/cim.action',
                        method: 'post',
                        data: {
                            values: {
                                username: user
                            },
                            files: {
                                file: imgSrc
                            }
                        }
                    },function(ret, err){
                        if (ret) {
                          alert("上传成功");
                        }
                    });

                    //ajax
                    //最后一步
                }
            }
      });
    }

}

//调用手机相册和相机
//刚加载页面的时候把值赋给文本框
function getcounter(){
  var name=$api.getStorage('username');
  $("#usercounter").html(name);
}
//刚加载页面的时候把值赋给文本框
//重置密码
function resetup(rpass,pass){
  if(rpass==pass&&rpass!=""){
    //从storage里面获取名称
    var name=$api.getStorage('username');
    //获取密码
    alert("用户名："+name+"密码："+pass);
    api.ajax({
        url: purl+'/resetpass.do',
        method: 'post',
        charset:'utf-8',
        dataType:'JSON',
        returnAll:true,
        timeout:30,
        data: {
            values: {
                username: name,
                password: pass
            }
        }
    },function(ret, err){
      //if
        if (ret) {
        var info=JSON.stringify( ret.body.tom);
          var iff = info.substring(1, info.length-1);
          //03
          if(iff=='error'){
            api.toast({
                msg: '修改失败',
               duration: 3000,
               location: 'bottom'
            });
          }//03
          //02
          if(iff=='success'){
            api.toast({
                msg: '修改成功',
               duration: 3000,
               location: 'bottom'
            });
        } //02
        //01
        else {
          api.toast({
              msg: '程序正在维护中，请稍后重试',
             duration: 3000,
             location: 'bottom'
          });
        }//01
      }//if
    });
  }else{
    api.toast({
        msg: '两次密码不一致，请重新输入',
       duration: 3000,
       location: 'bottom'
    });
  }

}
//上传头像
function loadimg(img){
  api.ajax({
      url: purl+'/uplogo.action',
      method: 'post',
      charset:'utf-8',
      dataType:'JSON',
      returnAll:true,
      timeout:30,
      data: {
          values: {
              username: name,
              userlogo: img
          }
      }
  },function(ret, err){
    //如果更改成功，就提示更改成功
    api.toast({
        msg: '头像更改成功',
       duration: 3000,
       location: 'bottom'
    });
  })
}
//
