import $ from "jquery";
import "./app3.css";
const $square = $("#app3 .square");

$square.on("click", () => {
  $square.toggleClass("active"); //.toggleClass的意思是如果有就删掉，如果没有就加上
});
