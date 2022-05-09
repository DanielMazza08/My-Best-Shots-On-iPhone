/* Modal para la galeria */

        var fullImgBox = document.getElementById("fullImgBox");
        var fullImg = document.getElementById("fullImg");

        function openFullImg(pic){
            fullImgBox.style.display = "flex";
            fullImg.src = pic;
        }

        function closeFullImg(){
            fullImgBox.style.display = "none";
        }

/* Cambiar de modo claro a modo oscuro */


            // const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
            // function cambiaTema(ev){
            //     if(ev.target.checked){
            //         document.documentElement.setAttribute('tema', 'light');
            //     } else {
            //         document.documentElement.setAttribute('tema', 'dark');
            //     }
            // }
            // colorSwitch.addEventListener('change', cambiaTema);
