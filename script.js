// Script Template

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Async Function prompt to select a media stream, pass to video element, then play

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
    }catch (error){
        console.log('Woops, error:', error);
    }
}

button.addEventListener('click', async()=>{
    //Disable
    button.disabled = true;
    // Start
    await videoElement.requestPictureInPicture(); 
    // resett
    button.disabled = false;
});

// on load
selectMediaStream();