function explode_01() {
    document.getElementById('smoke').style.display = 'block';
    setTimeout(() => {
        document.getElementById('exp_head_img').classList.add('exp_head_img_04');
        document.querySelector('.fire').classList.add('fire_anim');
        document.querySelector('.fire').style.display = 'block';
        setTimeout(() => {
            document.getElementById('audio_death').play();
            document.querySelector('.death').style.display = 'block';
            document.querySelector('.death').classList.toggle('visible_death');
            document.querySelector('.death').addEventListener('click', function() {
                window.location.replace('exp.html');
            });
        }, 1500);
    }, 3500);
}

function selector_06() {

    let popup_main = document.querySelector(".popup_main");
    setTimeout(() => {
        popup_main.classList.add("popup_main_img_08");
        popup_main.classList.add("popup_main_cn04");

        document.getElementById('btn_01').style.display = 'none';
        document.getElementById('btn_04').style.display = 'block';

        popup_main.classList.toggle("popupActive");
        // 加入中国元素04
        document.querySelector(".popup_main_cn04").addEventListener('dblclick',function(){
            popup_main.classList.add("cn_element04");
        },{ once: true });


        document.getElementById('btn_04').addEventListener('click', function() {

            //手动清除样式ing(加入中国元素出现的bug
            popup_main.classList.remove("cn_element01");
            popup_main.classList.remove("cn_element02");
            popup_main.classList.remove("cn_element03");

            popup_main.classList.remove("popup_main_cn04");
            popup_main.classList.remove("cn_element04");
            popup_main.classList.add("popup_main_img_09");
            popup_main.classList.add("popup_main_cn05");
            // 加入中国元素05
            document.querySelector(".popup_main_cn05").addEventListener('dblclick',function(){
                popup_main.classList.add("cn_element05");
            },{ once: true });

            document.getElementById('btn_04').addEventListener('click',function() {
                popup_main.classList.toggle("popupActive");

                document.querySelector('.bkg_coal_04').style.display = 'block';
                document.querySelector('.bkg_coal_03').style.display = 'none';
                setTimeout(() => {
                    document.getElementById('audio_drill').play();
                    document.querySelector('.bkg_coal_04').style.clipPath = 'inset(0 0 0 100%)';
                    document.getElementById('shield_support').classList.add('shield_support_anim_4');

                    setTimeout(() => {
                        document.getElementById('audio_exp_60').play();
                        document.getElementById('exp_60').style.display = 'block';
                        document.getElementById('exp_60').classList.add('exp_60_anim');
                        document.getElementById('exp_head_img').classList.add('exp_head_img_05');
                        setTimeout(() => {
                            window.location.replace('show.html');
                        }, 4800);
                    }, 4000);
                }, 0);


                
            },{ once: true });
        },{ once: true });
        
    }, 2200);
}