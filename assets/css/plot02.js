document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('exp_head_img').classList.add('exp_head_img_01');
    setTimeout(() => {
        document.querySelector('.bkg_shaft').style.clipPath = 'inset(0 0 0 0)';

        var shaft_machine_1 = document.getElementById('shaft_machine_1');
        var shaft_machine_2 = document.getElementById('shaft_machine_2');
        setTimeout(() => {
            shaft_machine_1.style.display = 'block';
            shaft_machine_2.style.display = 'block';
            shaft_machine_1.classList.add('shaft_machine_1_anim');
            shaft_machine_2.classList.add('shaft_machine_2_anim');
            console.log('挖井机器被执行了');
            shaft_machine_2.addEventListener('animationend', function shaft_machine_end() {
                shaft_machine_1.style.display = 'none';
                shaft_machine_2.style.display = 'none';
                selector_02();
            });
            
        }, 900);
    }, 500);
}, { once: true });

function exploit_01() {
    console.log('采煤27%被执行了');
    document.getElementById('exp_head_img').classList.add('exp_head_img_02');
    setTimeout(() => {
        document.getElementById('audio_drill').play();
        document.getElementById('shield_support').style.display = 'block';
        document.getElementById('shield_support').classList.add('shield_support_anim_1');
        document.querySelector('.bkg_coal_01').style.clipPath = 'inset(0 0 0 27%)';
        setTimeout(() => {
            selector_04();
        }, 4200);
    }, 1000);
}

function exploit_02() {
    document.getElementById('audio_drill').play();
    console.log('采煤50%被执行了');
    document.querySelector('.bkg_coal_02').style.display = 'block';

    //奇怪，没有settimeout就没有过渡了...
    setTimeout(() => {
        document.querySelector('.bkg_coal_02').style.clipPath = 'inset(0 0 0 50%)';
        document.getElementById('shield_support').classList.add('shield_support_anim_2');
        document.getElementById('shield_support').addEventListener('animationend', function shield_support_anim_end() {
        
        let popup_main_double = document.querySelector(".popup_main_double");
        popup_main_double.classList.toggle("popupActive_double");
        console.log('pop双选项被执行了');
        //可能要移除一下监听，怕之后继续挖掘报错。。(yes)
        document.getElementById('shield_support').removeEventListener('animationend', shield_support_anim_end);

        //double_selector事件
        document.getElementById('btn_02').addEventListener('click', function() {
            popup_main_double.classList.toggle("popupActive_double");
            document.querySelector('.safety_officer').style.display = 'block';
            document.querySelector('.safety_officer').classList.add('safety_officer_run');
            document.getElementById('exp_head_img').classList.add('exp_head_img_03');
            setTimeout(() => {
                explode_01();
            }, 4200);
        });

        document.getElementById('btn_03').addEventListener('click', function() {

            popup_main_double.classList.toggle("popupActive_double");

            let popup_main = document.querySelector(".popup_main");
            console.log('Yes');


            popup_main.classList.add("popup_main_img_07");
            popup_main.classList.toggle("popupActive");
            
            
            document.getElementById('btn_01').addEventListener('click', function on_selector_07_clicked() {
                document.getElementById('btn_01').removeEventListener('click', on_selector_07_clicked);
                
                popup_main.classList.toggle("popupActive");
                document.querySelector('.bkg_coal_03').style.display = 'block';
                document.querySelector('.bkg_coal_02').style.display = 'none';
                setTimeout(() => {
                    document.getElementById('audio_drill').play();
                    document.querySelector('.bkg_coal_03').style.clipPath = 'inset(0 0 0 90%)';
                    document.getElementById('shield_support').classList.add('shield_support_anim_3');
                    document.getElementById('airtrack').style.display = 'block';
                    
                    setTimeout(() => {
                        document.getElementById('conveyer_01').style.display = 'block';
                        document.getElementById('conveyer_02').style.display = 'block';
                    }, 1500);
                    
                    
                }, 0);
                document.getElementById('shield_support').addEventListener('animationend', function() {
                    selector_06();
                },{ once: true });
            },{ once: true });
            
        },{ once: true });
        
        },{ once: true });
    }, 0);
}