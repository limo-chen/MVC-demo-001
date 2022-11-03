import "./app1.css";
import $ from "jquery";

//数据相关的都放在m
const m = {
  data: {
    n: parseInt(localStorage.getItem("n")),
  },
};

//视图相关的都放在v
const v = {
  el: null,
  html: `
<section id="app1">
<div class="output">
  <span id="number">{{n}}</span>
</div>
<div class="actions">
  <button id="add1">+1</button>
  <button id="minus1">-1</button>
  <button id="mul2">*2</button>
  <button id="divide2">÷2</button>
</div>
</section>`,
  render() {
    if (v.el === null) {
      v.el = $(v.html.replace("{{n}}", m.data.n)).appendTo($("body>.page"));
    } else {
      const newEl = $(v.html.replace("{{n}}", m.data.n));
      v.el.replaceWith(newEl);
      v.el = newEl;
    }
  },
};

//其他的都是c
const c = {
  init() {
    c.ui = {
      $button1: $("#add1"),
      $button2: $("#minus1"),
      $button3: $("#mul2"),
      $button4: $("#divide2"),
      number: $("#number"),
    };
    c.bindEvents();
  },

  bindEvents() {
    c.ui.button1.on("click", () => {
      m.data.n += 1;
      v.render();
    });
    c.ui.button2.on("click", () => {
      let n = parseInt(c.ui.number.text());
      n -= 1;
      localStorage.setItem("n", n);
      c.ui.number.text(n);
    });
    c.ui.button3.on("click", () => {
      let n = parseInt(c.ui.number.text());
      localStorage.setItem("n", n);
      n *= 2;
      c.ui.number.text(n);
    });
    c.ui.button4.on("click", () => {
      let n = parseInt(c.ui.number.text());
      localStorage.setItem("n", n);
      n /= 2;
      c.ui.number.text(n);
    });
  },
};

v.render();
c.init();
