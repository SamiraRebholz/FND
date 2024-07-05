const openSettings = document.getElementsByClassName('settings');
const settingsModal = document.createElement('div');
settingsModal.innerHTML = `
    <div class="modal settingsModal" style="display:none;">
        <div class="modal-content">
            <h2>Einstellungen</h2>
            <ul>
                <li class="close"><a><img src="./Assets/icons/closeWhite.svg" alt="close" class="noOverlay close"></a></li>
                <li>Video Autoplay: <toggle-switch></toggle-switch></li>
            </ul>
        </div>
    </div>`
// Erstellen eines neuen link-Elements
var link = document.createElement("link");
link.href = "./settings.css"; // Pfad zur CSS-Datei
link.type = "text/css";
link.rel = "stylesheet";

// Hinzufügen des link-Elements zum head des Dokuments
document.getElementsByTagName("head")[0].appendChild(link);
//wenn auch openSettings geklickt wird, soll das settingsModal angezeigt werden
document.body.appendChild(settingsModal);
const settingsDisplay = settingsModal.querySelector('.settingsModal');
const closeIcon = settingsModal.querySelector('.close');
for (let i = 0; i < openSettings.length; i++) {
    openSettings[i].addEventListener('click', () => {
        settingsDisplay.style.display = 'block';
    });
}
closeIcon.addEventListener('click', () => {
    settingsDisplay.style.display = 'none';
})
settingsDisplay.addEventListener('click', (e) => {
    if (e.target === settingsDisplay) {
        settingsDisplay.style.display = 'none';
    }
});

//Autoplay
const toggleSwitch = document.getElementsByTagName('toggle-switch')[0];
const video = document.querySelector('.video'); 
toggleSwitch.addEventListener('click', () => {
    if (toggleSwitch.isChecked()) {
        video.play(); 
    } else {
        video.currentTime = 0;
        video.pause(); 
    }
});