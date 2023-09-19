// Variável para armazenar o intervalo do countdown
const btnPausa = document.getElementById('btn-pausa');


btnPausa.addEventListener('click', () => {
    // Defina a duração para 5 minutos (300 segundos)
    const duration = 5 * 60;
    
    pausaTimer(duration, document.getElementById('breve-pausa'));
    // alert('clicou');
});

const pausaTimer = (duration, display) => {
    let timer = duration;
    let minutes, seconds;

    interval = setInterval(() => {
        minutes = Math.floor(timer / 60);
        seconds = Math.floor(timer % 60);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        display.innerHTML = `${minutes}:${seconds}`;

        if (timer <= 0) {
            clearInterval(interval);
            display.innerHTML = 'Breve Pausa 00 : 00';
            alert('Hora de voltar a trabalhar');
        }
        timer--;
    }, 1000);
};