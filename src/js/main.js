const drumKit = {
    jsEnabled: 'js-enabled',
    transitionClass: 'playing',
    divSelector: '.key',
    keyboardKey : 'qsdfghjkl',
    init() {
        this.settings();
        this.addEventListeners();
        document.querySelectorAll(this.divSelector).forEach((button) => {
            button.addEventListener('click', (e) => {
                this.play(e.currentTarget.dataset.key);
            });
            button.addEventListener('transitionend', (e) => {
                document.body.classList.remove(e.currentTarget.dataset.key);//en fin de transition du bouton la couleur du body s'enlève
                e.currentTarget.classList.remove(this.transitionClass); //on enlève le "style" (contour jaune etc) du bouton quand la transition se finit
            });
        });
    },
    settings() {
        document.body.classList.add(this.jsEnabled);
    },
    play(key) {
        const linkedAudio = document.querySelector(`audio[data-key=${key}]`);
        linkedAudio.pause();
        linkedAudio.currentTime = 0;
        linkedAudio.play();
        document.querySelector(`div[data-key=${key}]`).classList.add(this.transitionClass); //ajoute la transition => le bouton grossit
        document.body.classList.add(key); //changer couleur de fond en cliquant sur le bouton
    },
    addEventListeners() {
        addEventListener('keydown', (e) => {
            const k = e.key.toLowerCase();
            if (this.keyboardKey.includes(k)) { //cette condition vaut à dire k === "q"|| k === "s"|| k === "d"|| k === "f"|| k === "g"|| k === "h"|| k === "j"|| k === "k"|| k === "l"
                this.play(k);
            } else {
                console.log("Touche non gérée");
            }
        });
    }
};

drumKit.init();





