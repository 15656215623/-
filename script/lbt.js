//轮播图
apiready = function(){//没有这个的话，就会报错api is not defined
  var mySlider = document.getElementById('lbt');//先获取放轮播图的div
  var UIScrollPicture = api.require('UIScrollPicture');
  UIScrollPicture.open({
    //轮播的区域
      rect: {
        x : mySlider.offsetLeft ,//mySlider距离屏幕左边的距离
         y : mySlider.offsetTop,//mySlider距离屏幕上边的距离
       w : api.winWidth,//mySlider的宽度
       h : api.winHeight / 3  //mySlider的高度
      },
    data: {
        paths: [
            'widget://image/lbt1.jpg',
            'widget://image/lbt2.jpg',
            'widget://image/lbt3.jpg',
            'widget://image/lbt4.jpg',
            'widget://image/lbt5.jpg'
        ],
        //图形的说明文字，可有可无
        captions: ['归园田居不是梦', '共享田园农场', '寻觅田园诗意', '怡然自得，岁月静好','梦回心中桃源']
    },
    //对文字属性的样式
   styles: {
       caption: {
           height: 25,
           color: '#ffffff',
           size: 13,
           bgColor: '#1c7157',
           position: 'bottom'
       },
       indicator: {
          dot:{
            w:20,
            h:10,
            r:5,
            margin:20
         },
           align: 'center',
           color: '#FFFFFF',
           activeColor: '#1c7157'
       }
   },
    placeholderImg: 'widget://image/lbt1.jpg',
    contentMode: 'scaleToFill',
    //切换的时间
    interval: 3,
    fixedOn:api.frameName,
    loop: true,
    fixed: false
}, function(ret, err) {
    if (ret) {

    } else {

    }
});
}
