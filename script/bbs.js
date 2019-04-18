//ajax连接第三方的地址
var purl='http://47.93.217.112:8080/jiekou';
var pp='http://192.168.0.106:8080/jiekou';
//ajax连接第三方的地址
//实例化vue
var ap=new Vue({
  el: '#allpost',
  data: {
      sites:[]
  },
  methods: {
       show_onepost(id) {
           // 显示具体的帖子
              Topage(id);
           //显示具体的帖子
       }
   },
  });
//实例化vue
//初始化
apiready = function() {
  var kinds = '';
  querylist(kinds);
}
//初始化
function querylist(kk){
api.ajax({
   url: purl+'/query_kinds.action',
   method: 'post',
   data: {
       values: {
               post_kinds:kk
       }
   }
},function(ret, err){
   if (ret) {
     ap.sites = ret;
    // console.log(JSON.stringify( ap.sites ));
   }
});
 //默认出来所有的帖子，点击蔬菜水果，才会传值过去

}
//点击就可以进入详情的帖子页面
function Topage(id){
api.openFrame({
  name: 'singlebbs',
  url: './singlebbs.html',
  pageParam: {
      post_id: id
  },
});
}
//点击就可以进入详情的帖子页面

//只有登录的用户才可以发布帖子
function islogin() {
var name = $api.getStorage('username');
if (name != null) {
    api.openWin({
        name: 'sendpost',
        url: './sendpost.html',
    });

} else {
    api.toast({
        msg: '您还没登录，登录之后可以享受更多的权益',
        duration: 2000,
        location: 'bottom'
    });

}
}
//只有登录的用户才可以发布帖子
