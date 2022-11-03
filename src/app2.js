import $ from "jquery";
import "./app2.css";
const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

$tabBar.on("click", "li", (e) => {
  //on.click监听子元素
  const $li = $(e.currentTarget);
  $li.addClass("selected").siblings().removeClass("selected");
  const index = $li.index();
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active"); //这样的代码，js就不用管css会怎么写，css自己管
});

$tabBar.children().eq(0).trigger("click");
//找到tabBar的孩子们，找到第一个，触发他的click事件
