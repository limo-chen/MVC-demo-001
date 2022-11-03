import $ from "jquery";
import "./app2.css";

const html = `
<section id="app2">
<ol class="tab-bar">
  <li>1</li>
  <li>2</li>
</ol>
<ol class="tab-content">
  <li>内容1</li>
  <li>内容2</li>
</ol>
</section>
`;
const $element = $(html).appendTo("body>.page");

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");
const localKey = "app2.index";
const index = localStorage.getItem(localKey) || 0;
$tabBar.on("click", "li", (e) => {
  //on.click监听子元素
  const $li = $(e.currentTarget);
  $li.addClass("selected").siblings().removeClass("selected");
  const index = $li.index();
  localStorage.setItem(localKey, index);
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active"); //这样的代码，js就不用管css会怎么写，css自己管
});

$tabBar.children().eq(index).trigger("click");
//找到tabBar的孩子们，找到第一个，触发他的click事件
