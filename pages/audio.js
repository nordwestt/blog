let initialised = false;
let pulseMutePeriodMS = 1000;

let timeoutFn = null;

// audio playback only allowed after user interaction 
window.addEventListener("click", init);

function init(){

    if(initialised) return;
    initialised = true;

    // create web audio api context
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    const gainNode = audioCtx.createGain();
    const oscillator = audioCtx.createOscillator();
    const pulseController = audioCtx.createOscillator();
    const biquadFilter = audioCtx.createBiquadFilter();

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(80, audioCtx.currentTime); // value in hertz
    oscillator.start();

    pulseController.type = 'sine';
    pulseController.frequency.setValueAtTime(1, audioCtx.currentTime); // value in hertz
    pulseController.start();

    biquadFilter.type = "lowshelf";
    biquadFilter.frequency.setValueAtTime(50, audioCtx.currentTime);
    biquadFilter.gain.setValueAtTime(25, audioCtx.currentTime);
        
    const panControl = document.querySelector(".panning-control");
    const lfoControl = document.querySelector(".lfo-control");
    const freqControl = document.querySelector(".freq-control");

    const panValue = document.querySelector(".panning-value");
    const lfoValue = document.querySelector(".lfo-value");
    const freqValue = document.querySelector(".freq-value");



    // Create a stereo panner
    let panNode = new StereoPannerNode(audioCtx);

    // Event handler function to increase panning to the right and left
    // when the slider is moved

    panControl.oninput = () => {
        panNode.pan.value = panControl.value;
        panValue.textContent = panControl.value;
    };

    lfoControl.oninput = () => {
        pulseController.frequency.setValueAtTime(lfoControl.value, audioCtx.currentTime);
        lfoValue.textContent = lfoControl.value;
    }

    freqControl.oninput = () => {
        oscillator.frequency.setValueAtTime(freqControl.value, audioCtx.currentTime);
        freqValue.textContent = freqControl.value;
    }

    pulseController.connect(gainNode.gain);
    oscillator.connect(gainNode).connect(biquadFilter).connect(panNode).connect(audioCtx.destination);

    gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
}