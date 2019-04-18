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
                normal: 'widget://image/icon/shangchengd.png',
                highlight: 'widget://image/icon/shangchengd.png',
                selected: 'widget://image/icon/shangcheng.png'
            },
            title: {
                text: '商城',
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
                normal: 'widget://image/icon/luntand.png',
                highlight: 'widget://image/icon/luntand.png',
                selected: 'widget://image/icon/luntan.png'
            },
            title: {
                text: '论坛',
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
                normal: 'widget://image/icon/gouwuched.png',
                highlight: 'widget://image/icon/gouwuched.png',
                selected: 'widget://image/icon/gouwuche.png'
            },
            title: {
                text: '购物车',
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
                normal: 'widget://image/icon/woded.png',
                highlight: 'widget://image/icon/woded.png',
                selected: 'widget://image/icon/wode.png'
            },
            title: {
                text: '我的',
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
                    name: 'frame0',
                    url: 'widget://html/store.html',
                    rect: {
                        w: 'auto',
                        h: 'auto',
                        marginLeft: 0, //相对父 window 左外边距的距离
                        marginTop: 0, //相对父 window 上外边距的距离
                        marginBottom: 0, //相对父 window 下外边距的距离
                        marginRight: 0 //相对父 window 右外边距的距离
                    }
                })
            }
            //1
            //1
            if (ret.eventType == "click" && ret.index == 0) {
                api.openFrame({
                    name: 'frame0',
                    url: 'widget://html/store.html',
                    rect: {
                        w: 'auto',
                        h: 'auto',
                        marginLeft: 0, //相对父 window 左外边距的距离
                        marginTop: 0, //相对父 window 上外边距的距离
                        marginBottom: 0, //相对父 window 下外边距的距离
                        marginRight: 0 //相对父 window 右外边距的距离
                    }
                })
            }
            //1
            if (ret.eventType == "click" && ret.index == 1) {
                api.openFrame({
                    name: 'frame1',
                    url: 'widget://html/bbs.html',
                    rect: {
                        w: 'auto',
                        h: 'auto',
                        marginLeft: 0, //相对父 window 左外边距的距离
                        marginTop: 0, //相对父 window 上外边距的距离
                        marginBottom: 0, //相对父 window 下外边距的距离
                        marginRight: 0 //相对父 window 右外边距的距离
                    }
                })
            }
            //1
            if (ret.eventType == "click" && ret.index == 2) {
                api.openFrame({
                    name: 'frame2',
                    url: 'widget://html/shopping_cart.html',
                    rect: {
                        w: 'auto',
                        h: 'auto',
                        marginLeft: 0, //相对父 window 左外边距的距离
                        marginTop: 0, //相对父 window 上外边距的距离
                        marginBottom: 0, //相对父 window 下外边距的距离
                        marginRight: 0 //相对父 window 右外边距的距离
                    }
                })
            }
            //1
            if (ret.eventType == "click" && ret.index == 3) {
                api.openFrame({
                    name: 'frame3',
                    url: 'widget://html/my.html',
                    rect: {
                        x: 0,
                        y: 0,
                        w: 'auto',
                        h: 'auto',
                        marginLeft: 0, //相对父 window 左外边距的距离
                        marginTop: 0, //相对父 window 上外边距的距离
                        marginBottom: 0, //相对父 window 下外边距的距离
                        marginRight: 0 //相对父 window 右外边距的距离
                    }
                })
            }
            //1
            var NVTabBar = api.require('NVTabBar');
            NVTabBar.bringToFront();
        }
        //if
    });
}
