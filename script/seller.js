//刚开始的时候，根据用户的登录名称把商品的信息显示在前端
var purl = 'http://47.93.217.112:8080/jiekou';
var pp = 'http://192.168.0.106:8080/jiekou';
//刚开始的时候，根据用户的登录名称把商品的信息显示在前端
function getnext(i) {
    var sz = new Array("step1", "step2", "step3", "step4");
    for (var j = 0; j < sz.length; j++) {
        if (i == sz[j]) {
            document.getElementById(i).style.display = "block";
        } else {
            document.getElementById(sz[j]).style.display = "none";
        }
    }
}
//列表
function show() {
    var status = $("#uli").css('display');
    if (status == "none") {
        $("#uli").show();
    } else {
        $("#uli").hide();
    }

}

$(document).ready(function() {
        var Uarry = $("#uli li");
        //获取所有的li元素
        $("#uli li").click(function() {
            //点击事件
            //测试直接获取值
            var v = $(this).text();
            $("#tresult").text(v);
        })
    })
    //列表
    //上传多组图片
var ipath = new Array();

function sannerWay() {
    var UIMediaScanner = api.require('UIMediaScanner');
    UIMediaScanner.open({
        type: 'picture',
        column: 4,
        classify: true,
        max: 4,
        sort: {
            key: 'time',
            order: 'desc'
        },
        texts: {
            stateText: '已选择*项',
            cancelText: '取消',
            finishText: '完成'
        },
        styles: {
            bg: '#fff',
            mark: {
                icon: '',
                position: 'bottom_left',
                size: 20
            },
            nav: {
                bg: '#eee',
                stateColor: '#000',
                stateSize: 18,
                cancelBg: 'rgba(0,0,0,0)',
                cancelColor: '#000',
                cancelSize: 18,
                finishBg: 'rgba(0,0,0,0)',
                finishColor: '#000',
                finishSize: 18
            }
        },
        scrollToBottom: {
            intervalTime: 3,
            anim: true
        },
        exchange: true,
        rotation: true
    }, function(ret) {
        if (ret) {
            var imgs = ret.list;
            if (imgs != null) {
                for (var i = 0; i < imgs.length; i++) {
                    ipath[i] = imgs[i].path;
                }
            }
        }
    });
}
//宝贝上架
function submits() {
    setTimeout(morefile(), 3000);
}
function morefile() {
    //获取数据
    var name = $("#name").val();
    var price = $("#price").val();
    var gg = $("#gg").val();
    var kinds = $("#tresult").text();
    //获取店铺名称
    var dpname = $api.getStorage('sname');
    console.log(name + price + gg + kinds);
    api.ajax({
        url: purl + '/pg.action',
        method: 'post',
        data: {
            values: {
                good_name: name,
                good_price: price,
                goods_kind: kinds,
                goods_seller: dpname,
                good_gg: gg
            },
            files: {
                "file": ipath
            }
        }
    }, function(ret, err) {
        if (ret) {
            api.toast({
                msg: '宝贝上架成功',
                duration: 2000,
                location: 'bottom'
            });
            //开始跳转页面
            api.openFrame({
                name: 'goodsoption',
                url: './goodsoption.html',
                //把刚发布成功的name传给下一个页面，可以查看刚才发布的宝贝
                pageParam: {
                    name: name
                },
            });

            //开始跳转页面
        }
    });

}
