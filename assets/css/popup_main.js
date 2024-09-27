function selector_01() {
    // let global = document.querySelector(".popup_main");
    // global.classList.toggle("active");
    // 模糊效果有空做
    let popup_main = document.querySelector(".popup_main");
    popup_main.classList.add("popup_main_img_01");
    popup_main.classList.toggle("popupActive");
}

// 存疑 为什么无法监听btn_01 ?? 原因：btn_01还未加载，js调用失败


document.getElementById('btn_01').addEventListener('click', function() {
  selector_01();
  worker_04.style.display = 'none';
  building_anim();
});

