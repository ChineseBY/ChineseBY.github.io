function selector_02() {

    let popup_main = document.querySelector(".popup_main");
    popup_main.classList.add("popup_main_img_02");
    popup_main.classList.toggle("popupActive");
    console.log('pop通风井被执行了');
    document.getElementById('btn_01').addEventListener('click', function on_selector_02_clicked() {
        console.log('popVSM被执行了');
        popup_main.classList.add("popup_main_img_03");
        popup_main.classList.add("popup_main_cn01");
        //加入中国元素01

        
        document.querySelector(".popup_main_cn01").addEventListener('dblclick',function(){
            console.log('加入中国元素01被执行了');
            popup_main.classList.add("cn_element01");
        },{ once: true });
    

        document.getElementById('btn_01').addEventListener('click', function on_selector_03_clicked() {          
            popup_main.classList.remove("popup_main_cn01");
            popup_main.classList.remove("cn_element01");
            console.log('(清屏)回调se_02被执行了');
            popup_main.classList.toggle("popupActive");
            document.getElementById('lifting_cage').style.display = 'block';
            exploit_01();

            //
            // document.getElementById('btn_01').removeEventListener('click', on_selector_03_clicked);
        },{ once: true });

        //
        // document.getElementById('btn_01').removeEventListener('click', on_selector_02_clicked);
      },{ once: true });
}

function selector_04() {
    console.log('pop支架被执行了');
    let popup_main = document.querySelector(".popup_main");
    popup_main.classList.add("popup_main_img_04");

    popup_main.classList.remove("popup_main_cn01");
    popup_main.classList.add("popup_main_cn02");
    popup_main.classList.toggle("popupActive");

    // 加入中国元素02
    document.querySelector(".popup_main_cn02").addEventListener('dblclick',function(){
        console.log('加入中国元素02被执行了');
        popup_main.classList.add("cn_element02");
    },{ once: true });

    document.getElementById('btn_01').addEventListener('click', function on_selector_04_clicked() {
        console.log('支架按钮被执行了');

        //手动清除样式ing
        popup_main.classList.remove("cn_element01");

        popup_main.classList.remove("popup_main_cn02");
        popup_main.classList.remove("cn_element02");
        // document.getElementById('btn_01').removeEventListener('click', on_selector_04_clicked);
        selector_05();
    },{ once: true });
}

function selector_05() {
    console.log('pop剃刀被执行了');
    
    let popup_main = document.querySelector(".popup_main");
    popup_main.classList.add("popup_main_img_05");
    popup_main.classList.remove("popup_main_cn02");
    //////
    popup_main.classList.add("popup_main_cn03");
    // 加入中国元素03
    document.querySelector(".popup_main_cn03").addEventListener('dblclick',function(){
        console.log('加入中国元素03被执行了');
        popup_main.classList.add("cn_element03");
    },{ once: true });

    document.getElementById('btn_01').style.right = '385px';
    document.getElementById('btn_01').addEventListener('click', function() {
        console.log('剃刀按钮被执行了');
        //用getelementbyclassname 出错时用 queryselector !!!

        document.querySelector('.bkg_coal_01').style.display = 'none';
        
        //手动清除样式ing
        popup_main.classList.remove("cn_element01");
        popup_main.classList.remove("cn_element02");

        popup_main.classList.remove("popup_main_cn03");
        popup_main.classList.remove("cn_element03");
        popup_main.classList.toggle("popupActive");
        exploit_02();
        
    },{ once: true });
}

