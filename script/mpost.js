//ajax连接第三方的地址
var purl = 'http://47.93.217.112:8080/jiekou';
var pp = 'http://192.168.0.107:8080/jiekou';
//ajax连接第三方的地址
apiready = function() {
        //ajax把我的帖子查询出来，显示在以下的部分
         getvalue();
    }
    //获取后台的值
function getvalue() {
    //获取当前的用户名
    var name = $api.getStorage('username');
    var listdata = new Array();
    //获取当前的用户名
    api.ajax({
        url: purl + '/mypost.action',
        method: 'post',
        data: {
            values: {
                name: name
            },
        }
    }, function(ret, err) {
        if (ret) {
            console.log(JSON.stringify(ret));
            for (i = 0; i < ret.length; i++) {
                var tem = {
                    uid: ret[i].post_id, //标识号
                    imgPath: ret[i].post_img, //图片
                    title: ret[i].post_title, //标题
                    subTitle: ret[i].post_content, //内容
                    remark: '', //备注
                    icon: '',
                }
                listdata.push(tem);
            }
         showlist(listdata);
        }
    });
}

function showlist(listdata) {
    //ajax把我的帖子查询出来，显示在以下的部分
    var UIListView = api.require('UIListView');
    UIListView.open({
        rect: {
            x: 0,
            y: 40,
            w: api.winWidth,
            h: api.frameHeight
        },
        data: listdata,
        rightBtns: [{
            bgColor: '#a31515',
            activeBgColor: '',
            width: 70,
            title: '删除',
            titleSize: 12,
            titleColor: '#ffffff',
            icon: '',
            iconWidth: 20
        }],
        styles: {
            borderColor: '#696969',
            item: {
              bgColor: '#f4f4f4',
              activeBgColor: '#F5F5F5',
              height: 120.0,
              imgWidth: api.winWidth/2,
              imgHeight: 100,
              imgCorner: 4,
              placeholderImg: '',
              titleSize: 16.0,
              titleColor: '#000',
              subTitleSize: 12.0,
              subTitleColor: '#000',
              remarkColor: '#000',
              remarkSize: 16,
              remarkIconWidth: 30
            }
        },
        fixedOn: api.frameName
    }, function(ret, err) {
        if (ret) {
        }
    });
    //ajax把我的帖子查询出来，显示在以下的部分
}
