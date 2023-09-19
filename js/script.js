// chamando o botão de começar
const btnStart = document.getElementById('btn-start');
const btnReset = document.getElementById('btn-reset');

// declarando mais algumas variáveis
let cycleCount = 0;
let isWorking = true;
let interval;

// BOTÃO COMEÇAR ///////////////////////////////////////////////////////////////////////////////////////////////////
// quando apertar o botão acontecerá esse evento que é a função
btnStart.addEventListener('click', () => {
    //aqui pega o elemento input inteiro
    const minutes = document.getElementById('minute');
    const seconds = document.getElementById('second');

    //CONVERTENDO EM SEGUNDOS
    //o valor que foi digitado no input - minutes.value
    //só que value vem como string quando usando o getElement por isso converto em número com parseInt
    let duration = (parseInt(minutes.value) * 60) + (parseInt(seconds.value));

    //ALTERA O ELEMENTO
    display = document.getElementById('timer')
    //chamando a função timer para mostrar o resultado do timer
    timer(duration, display);
    
    
    updateCycleCount();
    // cycleCount ++;
    isWorking = true;
});


// BOTÃO ZERAR////////////////////////////////////////////////////////////////////////////////////////////////////////////
btnReset.addEventListener('click', () => {
    clearInterval(interval);
    document.getElementById('minute').value = '25';
    document.getElementById('second').value = '00';
    document.getElementById('timer').innerHTML = '25 : 00';
    // document.getElementById('brevePausa').innerHTML = 'Breve Pausa 05 : 00';
    cycleCount = 0;
    updateCycleCount();
    isWorking = true;
});


//criando a função que mostrará na tela o resultado do cronometro
const timer = (duration, display) => {
    let timer = duration;
    let minutes, seconds;
    //setInterval faz algo a cada x tempo
    //1000 milisegundos => 1s
    //vamos tirar um segundo conforme o tempo passa
    interval = setInterval(() => {
        minutes = Math.floor(timer / 60); //deixando em minuto e arrendondar para baixo
        seconds = Math.floor(timer % 60); //o resto das divisões para chegar no zero
        //se minutes for menor que 10 aparecerá o zero já em formatado, senão só mostra minutos
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        //alterando o valor HTML do elemento 
        display.innerHTML = `${minutes} : ${seconds}`;

        if (timer <= 0) {
            clearInterval(interval);
            display.innerHTML= '00 : 00';
            alert('Hora de fazer uma pausa!');

            if (isWorking) {
            //   document.getElementById('brevePausa').innerHTML = 'Breve Pausa 05 : 00';
              isWorking = false;
              cycleCount++;
              updateCycleCount();
            } else {
            
              isWorking = true;
                
                
            }
          }
        timer--;
        //setInterval executa tudo (minutes até display) a cada um segundo
        // timer -= 1;

        // if (timer < 0) {
        //     display.innerHTML = '00:00';
        // }

    }, 1000);

} ;


const updateCycleCount = () => {
    document.getElementById('cycles').innerHTML = `Número de ciclos: ${cycleCount}`;
  };