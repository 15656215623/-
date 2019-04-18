apiready = function() {
    //开始
    var NVTabBar = api.require('NVTabBar');
    NVTabBar.open({ //({
        //style
        styles: {
            bg: 'white',
            h: 65,
            dividingLine: {
                width: 0,
                color: '#000'
            },
            badge: {
                bgColor: '#ff0',
                numColor: '#fff',
                size: 6.0,
                centerX: 40,
                centerY: 6
            }
        },
        //style
        items: [{
            w: api.winWidth / 4.0,
            bg: {
                marginB: 0,
                image: 'rgba(200,200,200,0.6)'
            },
            iconRect: {
                w: 25.0,
                h: 25.0,
            },
            icon: {
                normal: 'widget://image/goods/syd.png',
                highlight: 'widget://image/goods/syd.png',
                selected: 'widget://image/goods/sy.png'
            },
            title: {
                text: '卖家中心',
                size: 12.0,
                normal: '#696969',
                selected: '#eb4f38',
                marginB: 6.0
            }
        },
          {
            w: api.winWidth / 4.0,
            bg: {
                marginB: 0,
                image: 'rgba(200,200,200,0.6)'
            },
            iconRect: {
                w: 25.0,
                h: 25.0,
            },
            icon: {
                normal: 'widget://image/goods/spd.png',
                highlight: 'widget://image/goods/spd.png',
                selected: 'widget://image/goods/sp.png'
            },
            title: {
                text: '全部商品',
                size: 12.0,
                normal: '#696969',
                selected: '#eb4f38',
                marginB: 6.0
            }
        }, {
            w: api.winWidth / 4.0,
            bg: {
                marginB: 0,
                image: 'rgba(200,200,200,0.6)'
            },
            iconRect: {
                w: 25.0,
                h: 25.0,
            },
            icon: {
                normal: 'widget://image/goods/sjd.png',
                highlight: 'widget://image/goods/sjd.png',
                selected: 'widget://image/goods/sj.png'
            },
            title: {
                text: '商家信息',
                size: 12.0,
                normal: '#696969',
                selected: '#eb4f38',
                marginB: 6.0
            }
        }, {
            w: api.winWidth / 4.0,
            bg: {
                marginB: 0,
                image: 'rgba(200,200,200,0.6)'
            },
            iconRect: {
                w: 25.0,
                h: 25.0,
            },
            icon: {
                normal: 'widget://image/goods/xpd.png',
                highlight: 'widget://image/goods/xpd.png',
                selected: 'widget://image/goods/xp.png'
            },
            title: {
                text: '新品上架',
                size: 12.0,
                normal: '#696969',
                selected: '#eb4f38',
                marginB: 6.0
            }
        }], //以上都没有缺口
        selectedIndex: 0
    }, function(ret, err) {
        //if
        if (ret) {
            //1
            if (ret.eventType == "show") {
                api.openFrame({
                    name: 'seller',
                    url: 'widget://html/seller.html',
                });
            }
            //1
            if (ret.eventType == "click" && ret.index == 0) {
                api.openFrame({
                    name: 'seller',
                    url: 'widget://html/seller.html',
                });
            }
            //1
            //1
            if (ret.eventType == "click" && ret.index == 1) {
                api.openFrame({
                    name: 'sallgoods',
                    url: 'widget://html/sallgoods.html',
                })
            }
            //1
            if (ret.eventType == "click" && ret.index == 2) {
                api.openFrame({
                    name: 'sellerinfo',
                    url: 'widget://html/sellerinfo.html',
                })
            }
            //1
            if (ret.eventType == "click" && ret.index == 3) {
                api.openFrame({
                    name: 'addgoods',
                    url: 'widget://html/addgoods.html',
                })
            }
            var NVTabBar = api.require('NVTabBar');
            NVTabBar.bringToFront();
        }
        //if
    });
}
