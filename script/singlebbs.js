var purl='http://47.93.217.112:8080/jiekou';
var pp='http://192.168.0.107:8080/jiekou';
function rtn(){
api.closeFrame({
    name: 'singlebbs'
});

  api.openFrame({
      name: 'bbs',
      url: './bbs.html',
      rect: {
          x: 0,
          y: 0,
          w: 'auto',
          h: api.winHeight-70
      },
  });

}
apiready = function() {
        var post_id = api.pageParam.post_id;
        api.ajax({
            url: purl+'/query_id.action',
            method: 'post',
            data: {
                values: {
                    post_id: post_id
                },
            }
        }, function(ret, err) {
            //循环遍历数据
            //把数据显示在页面上面
            new Vue({
                el: '#mpost',
                data: {
                    sites: ret
                }
            });
        });
          pl();
    }
    //评论区
function pl() {
    var post_id = api.pageParam.post_id;
    //获取从上一页页面得到的id，然后提交给后台进行查询
    api.ajax({
        url: purl+'/details.action',
        method: 'post',
        data: {
            values: {
                post_id: post_id
            },
        }
    }, function(ret, err) {
        if (ret) {
            new Vue({
                el: '#details',
                data: {
                    sites: ret
                },
                //methods
                methods:{
                  //回复他人
                  replayt(name,content){
                  var username=$api.getStorage('username');
                  //在框里设置成提示
                  var applyask="["+username+"回复了"+name+"]  "+content;
                  document.getElementById("content").placeholder=applyask;
                  $("#byanswer_content").text(applyask);
                  }
                  //回复他人
                }
                  //methods
            })
        }
    });

}
//评论区
function writepl(content){
//1.获取帖子的id、获取发帖人的名字、获取当前用户名、发表的评论
var username=$api.getStorage('username');
var pid=$("#pid").text();
var pname=$("#pname").text();
var bycontent=$("#byanswer_content").text();
//1.获取帖子的id、获取发帖人的名字、获取当前用户名、发表的评论
api.ajax({
    url: purl+'/replay_op.action',
    method: 'post',
    data: {
        values: {
            post_id:pid,
            answer_content:content,
            answer_name:username,
            byanswer_name:pname,
            byanswer_content:bycontent
        },
    }
},function(ret, err){
    if (ret) {
      //发布成功以后，刷新一下
    window.location.reload();
      //发布成功以后，刷新一下
    }
});

}
