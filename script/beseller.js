//调用手机相册和相机
var imgSrc = "";
function showAction() {
    api.actionSheet({
        title: '上传头像',
        cancelTitle: '取消',
        buttons: ['拍照', '从手机相册选择']
    }, function(ret, err) {
        if (ret) {
            getPicture(ret.buttonIndex);
        }
    });
}
//获取相机还是相册
function getPicture(sourceType) {
    var user = $api.getStorage('username');
    if (sourceType == 1) { // 拍照
        //获取一张图片
        api.getPicture({
            sourceType: 'camera', //拍照
            encodingType: 'png',
            mediaValue: 'pic',
            allowEdit: false,
            quality: 90,
            saveToPhotoAlbum: true
        }, function(ret, err) {
            //var imgSrc = ret.base64Data;  如果是base64，要用这个属性获取地址
            // 获取拍照数据并处理
            if (ret) {
                imgSrc = ret.data;
                if (imgSrc != "") {
                    var ele = $api.dom('#avatar');
                    $api.attr(ele, 'src', imgSrc);
                }
            }
        });
    } else if (sourceType == 2) { // 从相册中选择
        api.getPicture({
            sourceType: 'album', //从相册中选择
            encodingType: 'jpg',
            mediaValue: 'pic',
            allowEdit: false,
            quality: 90,
            saveToPhotoAlbum: true
        }, function(ret, err) {
            // 获取拍照数据并处理
            if (ret) {
                imgSrc = ret.data;
                if (imgSrc != "") {
                    var ele = $api.dom('#avatar');
                    $api.attr(ele, 'src', imgSrc);
                }
            }
        });
    }
}
//调用手机相册和相机
//三联地址
function fnopen() {
    var UIActionSelector = api.require('UIActionSelector');
    UIActionSelector.open({
        datas: 'widget://res/city.json',
        layout: {
            row: 5,
            col: 3,
            height: 30,
            size: 12,
            sizeActive: 14,
            rowSpacing: 5,
            colSpacing: 10,
            maskBg: 'rgba(0,0,0,0.2)',
            bg: '#008000',
            color: '#fff',
            colorActive: '#f00',
            colorSelected: '#000'
        },
        animation: true,
        cancel: {
            text: '取消',
            size: 12,
            w: 90,
            h: 35,
            bg: '#fff',
            bgActive: '#ccc',
            color: '#888',
            colorActive: '#fff'
        },
        ok: {
            text: '确定',
            size: 12,
            w: 90,
            h: 35,
            bg: '#fff',
            bgActive: '#ccc',
            color: '#888',
            colorActive: '#fff'
        },
        title: {
            text: '请选择',
            size: 12,
            h: 44,
            bg: '#eee',
            color: '#888'
        },
        fixedOn: api.frameName
    }, function(ret, err) {
        if (ret) {
            UIActionSelector.getActive(function(ret, err) {
                if (ret) {
                    var pro = JSON.stringify(ret.level1);
                    pro = pro.substring(1, pro.length - 1);
                    var city = JSON.stringify(ret.level2);
                    city = city.substring(1, city.length - 1);
                    var x = JSON.stringify(ret.level3);
                    x = x.substring(1, x.length - 1);
                    document.getElementById("address").value = pro + city + x;
                }
            });
        }
    });

}
//三联地址
var purl = 'http://47.93.217.112:8080/jiekou';
var pp = 'http://192.168.0.106:8080/jiekou';
//开店
function setshop() {
    //1.所有的信息不能为空
    var name = $("#name").val();
    var tell = $("#tell").val();
    var address = $("#address").val();
    var img = $("#avatar")[0].src;
    var dispe = $("#dispe").val();;
    if (name != null && tell != null && address != null && img != null && dispe != null) {
        var username = $api.getStorage('username');
        //开始了
        api.ajax({
            url: purl + '/beSeller.action',
            method: 'post',
            data: {
                values: {
                    seller_name: name,
                    seller_tell: tell,
                    seller_address: address,
                    seller_discripe: dispe,
                    seller_username: username
                },
                files: {
                    file: imgSrc
                }
            }
        }, function(ret, err) {
          api.toast({
              msg: '店铺创建成功，赶快去管理你的商铺吧',
              duration: 2000,
              location: 'bottom'
          });
          //跳转页面
          api.openFrame({
              name: 'seller',
              url: './seller.html',
              rect: {
                  x: 0,
                  y: 0,
                  w: 'auto',
                  h:api.winHeight-70
              }
          });

          //跳转页面
        });

        //开店了
    } else {
        api.toast({
            msg: '信息还未填写完整，不能创建店铺',
            duration: 2000,
            location: 'bottom'
        });

    }
}
