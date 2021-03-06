$(function () {
    $(".list-scroll").length > 0 && $(".list-scroll").slimScroll({
        width: '100%', //可滚动区域宽度
        height: '100%', //可滚动区域高度
        size: '4px', //滚动条宽度，即组件宽度
        color: '#3a4557', //滚动条颜色
        position: 'right', //组件位置：left/right
        distance: '0px', //组件与侧边之间的距离
        start: 'top', //默认滚动位置：top/bottom
        opacity: .3, //滚动条透明度
        alwaysVisible: false, //是否 始终显示组件
        disableFadeOut: true, //是否 鼠标经过可滚动区域时显示组件，离开时隐藏组件
        railVisible: false, //是否 显示轨道
        railColor: '#333', //轨道颜色
        railOpacity: .2, //轨道透明度
        railDraggable: true, //是否 滚动条可拖动
        railClass: 'slimScrollRail', //轨道div类名 
        barClass: 'slimScrollBar', //滚动条div类名
        wrapperClass: 'slimScrollDiv', //外包div类名
        allowPageScroll: true, //是否 使用滚轮到达顶端/底端时，滚动窗口
        wheelStep: 20, //滚轮滚动量
        touchScrollStep: 200, //滚动量当用户使用手势
        borderRadius: '10px', //滚动条圆角
        railBorderRadius: '7px' //轨道圆角
    });

    $(".page-scroll").length > 0 && $(".page-scroll").slimScroll({
        width: '100%', //可滚动区域宽度
        height: '100%', //可滚动区域高度
        size: '6px', //滚动条宽度，即组件宽度
        color: '#3a4557', //滚动条颜色
        position: 'right', //组件位置：left/right
        distance: '0px', //组件与侧边之间的距离
        start: 'top', //默认滚动位置：top/bottom
        opacity: .5, //滚动条透明度
        alwaysVisible: false, //是否 始终显示组件
        disableFadeOut: true, //是否 鼠标经过可滚动区域时显示组件，离开时隐藏组件
        railVisible: false, //是否 显示轨道
        railColor: '#333', //轨道颜色
        railOpacity: .2, //轨道透明度
        railDraggable: true, //是否 滚动条可拖动
        railClass: 'slimScrollRail', //轨道div类名 
        barClass: 'slimScrollBar', //滚动条div类名
        wrapperClass: 'slimScrollDiv', //外包div类名
        allowPageScroll: true, //是否 使用滚轮到达顶端/底端时，滚动窗口
        wheelStep: 20, //滚轮滚动量
        touchScrollStep: 200, //滚动量当用户使用手势
        borderRadius: '0px', //滚动条圆角
        railBorderRadius: '7px' //轨道圆角
    });

});



var idt;
function resizecharts() {
    $(".resize-charts").length > 0 && $(".resize-charts").each(function () {
        echarts.init(document.getElementById($(this).attr("id"))).resize();
    });
}

$(window).resize(function () {
    if (idt) clearTimeout(idt);
    idt = setTimeout(resizecharts, 300);
}); 