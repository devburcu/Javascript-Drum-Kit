document.addEventListener("keydown", function(event){
    let key = event.key.toUpperCase();
    const button = document.querySelector(`.button[data-key="${key}"]`);
    let soundFile = "";
    if(key === "A"){
        soundFile = "./src/boom.wav"
    } else if (key === "S"){
        soundFile = "./src/clap.wav"
    } else if (key === "D"){
        soundFile = "./src/hihat.wav"
    } else if (key === "F"){
        soundFile = "./src/kick.wav"
    } else if (key === "G"){
        soundFile = "./src/openhat.wav"
    } else if (key === "H"){
        soundFile = "./src/ride.wav"
    } else if (key === "J"){
        soundFile = "./src/snare.wav"
    } else if (key === "K"){
        soundFile = "./src/tink.wav"
    } else if (key === "L"){
        soundFile = "./src/tom.wav"
    }
    if (soundFile) {
        playSound(soundFile, button)
    }
})

function playSound(soundFile, button) {
    const audio = new Audio(soundFile); 
    audio.currentTime = 0;  
    audio.play(); 
  
    // Aktif tuşa animasyon  
    button.classList.add('pulse'); 
  
    // Diğer tuşlara hafif titreşim  
    const buttons = document.querySelectorAll('.button');
  
    buttons.forEach(btn => {  
      if (btn !== button) { 
        btn.classList.add('wiggle');  
        setTimeout(() => btn.classList.remove('wiggle'), 300); 
      }  
    });

    // Pulse animasyonu kaldır  
    setTimeout(() => { 
      button.classList.remove('pulse');
    }, 400);
  }