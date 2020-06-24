
$(function () {
    //加载右侧iframe

    //加载菜单
    function getmenus() {
        axios.get("./json/menu/menu-data.json").then(function (res) {
            var menudata = res.data;
            $("#navTab").navtab({
                treedata: menudata,
                onClick: function (leftMenu) {
                    //semenu为左侧菜单对象
                    $("#sideMenu").menu({
                        treedata: leftMenu,
                        onClick: function (url, dom) {
                            //注：url为左侧菜单节点的url，dom为菜单节点dom

                            console.log(url)
                        },
                        onClickmin: function () {
                            toggleMenu()
                        }
                    })
                }
            });
        });
    };

    getmenus();
});
//切换折叠按钮
function toggleMenu() {
    $("body.page-bg").toggleClass("menu-close")
}