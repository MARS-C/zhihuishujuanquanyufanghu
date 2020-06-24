;
(function ($) {
	$.fn.extend({
		"navtab": function (options) {

			options = $.extend({
				treedata: null,
				onClick: function () {
					return false;
				}
			}, options);

			//临时存储菜单对象
			var menuObj = new Object();

			var _this = $(this);

			var navDom = "";


			var selectitem = null;


			function setdom() {
				options.treedata.forEach(function (item) {
					navDom += '<li class="nav-item" id="' + item.name + '"><i class="' + item.icon + '"></i><div class="nav-msg">' + item.showName + '</div></li>';
					if (item.selected) {
						selectitem = item.name;
					}
					menuObj[item.name] = item.functionGroupList;
				});
				_this.html(navDom);
			};

			function _itemClick(item) {
				if (item.hasClass("selected")) {
					return
				} else {
					item.addClass("selected").siblings(".nav-item").removeClass("selected");
					options.onClick && options.onClick(menuObj[item.attr("id")]);
				}
			};
			//设置默认选中项

			function defaultsele() {
				if (selectitem) {
					_itemClick($("#" + selectitem));
				} else {
					_itemClick($(".nav-item:first-child", _this));
				}
			}

			//点击
			_this.on("click", ".nav-item", function () {
				_itemClick($(this));
			});

			if (options.treedata) {
				setdom();
				defaultsele()
			} else {
				return false;
			}

			return _this;

		},
		"menu": function (b) {
			b = jQuery.extend({
				treedata: "",
				parentsid: "",
				Speed: 220,
				autostart: 0,
				autohide: 1,
				onClick: undefined,
				onClickmin: undefined
			}, b);
			var c = $(this);

			var openMenu = $(".side-menu", c);

			var foldMenu = $(".fold-sidemenu", c);

			var selected;

			/*遍历生成树形结构菜单*/
			var strHtml = "";

			/*遍历生成折叠树形结构菜单*/
			var foldstrHtml = "";

			//递归实现树结构
			function TreeHtml(data) {
				$.each(data, function (key, value) {
					if (value.name == "divide") {
						//分割
						return;
					};

					//判断是否存在默认选择项
					if (value.selected) {
						selected = value.name
					};

					if (value.hasOwnProperty("pagePath")) {//叶子节点

						strHtml += '<li data-leve="leve' + value.level + '"><a style="padding-left:' + (10 + (value.level - 1) * 30) +
							'px" id="' + value.name + '" class="root-node" data-href="' + value.pagePath +
							'" data-haschild="false">';
						if (value.icon) {
							strHtml += '<i class="' + value.icon + '"></i>'
						};

						strHtml += '<div class="text">' + (value.showName || value.groupShowName) + '</div></a>'
					} else {

						strHtml += '<li data-leve="leve' + value.level + '"><a style="padding-left:' + (10 + (value.level - 1) * 30) +
							'px" class="fater-node" data-haschild="true">';

						if (value.level == "1") {
							foldstrHtml += '<li><i class="' + value.icon + '"></i></li>';
						}


						if (value.icon) {
							strHtml += '<i class="' + value.icon + '"></i>'
						};

						strHtml += '<div class="text">' + (value.groupShowName || value.showName) + '</div><span class="fa fa-caret-right arrow"></span></a><ul>';
						TreeHtml(value.functionList || value.functionGroupList);
						strHtml += '</ul>';



					}
					strHtml += ' </li>';
				});
				return strHtml;
			};

			//点击树
			function _itemClick(_target) {
				//debugger;
				var a = _target;
				if (a.data("haschild")) { //父级节点

					if (b.autohide) {
						a.parent("li").siblings("li").children("ul").slideUp(b.Speed / 1.2);

						a.parent("li").siblings("li").children("a").removeClass("active").addClass("inactive");
					};

					if (a.hasClass("inactive")) {
						a.parent("li").children("ul").slideDown(b.Speed, function () {
							a.removeClass("inactive")
							a.addClass("active")
						})
					};
					if (a.hasClass("active")) {
						a.removeClass("active");
						a.addClass("inactive");
						a.parent("li").children("ul").slideUp(b.Speed)
					};

					// if (a.data("haspage")) { //有子页面的父级节点
					// 	if (a.hasClass("seleBtn")) {
					// 		return;
					// 	} else {
					// 		item.removeClass("seleBtn");
					// 		a.addClass("seleBtn");
					// 		b.onClick && b.onClick(a.data("href"));
					// 	}

					// }

				} else {
					if (a.hasClass("seleBtn")) {
						return;
					} else {
						$("li>a", openMenu).removeClass("seleBtn");
						a.addClass("seleBtn");
						b.onClick && b.onClick(a.data("href"),a);
					}
				};

			};

			//设置默认选中项

			function setselecteditem() {
				var item = openMenu.find("li").children("a");
				//查看是否存在默认选择项,如果没有则选取第一个
				if (!selected) {
					//selected = c.find("a.root-node:first").attr("id");
					selected = openMenu.find('a.root-node:first').attr("id");
				};
				var seleDom = $("#" + selected);
				// //-设置关闭项-
				item.removeClass("active").addClass("inactive").siblings("ul").hide();
				$(seleDom, openMenu).addClass("seleBtn").parents("ul").show().siblings(".inactive").removeClass("inactive").addClass("active");
				b.onClick && b.onClick(seleDom.data("href"),seleDom);
			}

			if (b.treedata) {
				openMenu.html(TreeHtml(b.treedata));
				foldMenu.html(foldstrHtml);
				setselecteditem()
			} else {
				return;
			};

			$("li>a", openMenu).unbind('click').click(function () {
				_itemClick($(this));
			});

			$("li", foldMenu).on("click", function (event) {
				event.stopPropagation();
				b.onClickmin && b.onClickmin();
			});

			return c;
		}
	});

})(jQuery);
