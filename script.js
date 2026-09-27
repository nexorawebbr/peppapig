document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // ELEMENTOS
    // =====================================

    const jumpButton = document.getElementById("jump");
    const surpriseButton = document.getElementById("surprise");

    const peppa = document.querySelector(".peppa");
    const secret = document.getElementById("secret");
    const ground = document.querySelector(".ground");


    // =====================================
    // VERIFICAÇÃO
    // =====================================

    if (
        !jumpButton ||
        !surpriseButton ||
        !peppa ||
        !secret ||
        !ground
    ) {
        console.error(
            "Erro: algum elemento do site não foi encontrado."
        );

        return;
    }


    // =====================================
    // PEPPA COMEÇA PARADA
    // =====================================

    peppa.style.animation = "none";


    // =====================================
    // BOTÃO: PULAR NA LAMA
    // =====================================

    jumpButton.addEventListener("click", () => {

        // Para qualquer animação anterior
        peppa.style.animation = "none";

        // Força o navegador a reiniciar a animação
        void peppa.offsetWidth;

        // Faz a Peppa pular
        peppa.style.animation =
            "peppaJump 1.8s ease-in-out";


        // Cria vários respingos
        for (let i = 0; i < 18; i++) {

            createSplash();

        }

    });


    // =====================================
    // CRIAR RESPINGO
    // =====================================

    function createSplash() {

        const splash =
            document.createElement("div");

        splash.className =
            "extra-splash";


        // Tamanho aleatório
        const size =
            7 + Math.random() * 12;


        // Posição
        splash.style.position =
            "absolute";

        splash.style.left =
            (45 + Math.random() * 10) + "%";

        splash.style.bottom =
            (105 + Math.random() * 25) + "px";


        // Tamanho
        splash.style.width =
            size + "px";

        splash.style.height =
            size + "px";


        // Aparência
        splash.style.background =
            "#704321";

        splash.style.borderRadius =
            "50%";

        splash.style.zIndex =
            "20";

        splash.style.pointerEvents =
            "none";


        // Coloca no chão
        ground.appendChild(splash);


        // Começa a animação
        requestAnimationFrame(() => {

            splash.style.transition =
                "transform .8s cubic-bezier(.2,.8,.3,1), opacity .8s ease";

            splash.style.transform =
                `translate(
                    ${(Math.random() - 0.5) * 180}px,
                    -${50 + Math.random() * 100}px
                )
                scale(.3)`;

            splash.style.opacity =
                "0";

        });


        // Remove depois
        setTimeout(() => {

            splash.remove();

        }, 900);

    }


    // =====================================
    // BOTÃO: TENHO UMA SURPRESA
    // =====================================

    surpriseButton.addEventListener("click", () => {

        // Mostra a surpresa
        secret.classList.add("show");


        // Desce até a surpresa
        setTimeout(() => {

            secret.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);

    });

});