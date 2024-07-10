class TerminologyModal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="modal" id="terminologyModal" style="display: none;">
            <div class="modal-content">
                <span class="close"><img src="./Assets/icons/closeWhite.svg"></span>
                <h2>Terminologie</h2> 
                <table class="modal-table" id="terminologyModal">
                    <tr>
                        <td><b>Terminologie/Fachbegriff</b></td>
                        <input type="text" id="searchInput" placeholder="Search..."><img src="./Assets/icons/search.svg" id="searchIcon">
                        <td><b>Bedeutung</b></td>
                    </tr>
                    <tr>
                        <td>Abduktion</td>
                        <td>Die Bewegung weg von der Mittellinie des Körpers</td>
                    </tr>
                    <tr>
                        <td>Adduktion</td>
                        <td>Die Bewegung zur Mittellinie des Körpers</td>
                    </tr>
                    <tr>
                        <td>Synergie</td>
                        <td>Das Zusammenwirken von verschiedenen Organen, Muskeln, etc.</td>
                    </tr>
                    <tr>
                        <td>antagonistisch</td>
                        <td>gegensätzlich, widerstreitend</td>
                    </tr>
                    <tr>
                        <td>Kontraktion</td>
                        <td>Das aktive Zusammenziehen oder Anspannen deiner Muskeln</td>
                    </tr>
                    <tr>
                        <td>Flexion</td>
                        <td>Die Beugung eines Gelenks</td>
                    </tr>
                    <tr>
                        <td>Extension</td>
                        <td>Aktive oder passive Streckbewegung eines Gelenks</td>
                    </tr>
                    <tr>
                        <td>Spezifität</td>
                        <td>Die Spezifität eines diagnostischen Tests gibt die Wahrscheinlichkeit an, dass Gesunde korrekt als gesund erkannt werden.</td>
                    </tr>
                    <tr>
                        <td>Sensitivität</td>
                        <td>Die Sensitivität eines diagnostischen Tests gibt den Prozentsatz der erkrankten Patienten an, bei denen die Krankheit korrekt erkannt wird.</td>
                    </tr>
                    <tr>
                        <td>Unilateral</td>
                        <td>"auf einer Seite" oder "einseitig"</td>
                    </tr>
                    <tr>
                        <td>Miosis</td>
                        <td>Miosis bezeichnet die temporäre Verengung der Pupille durch Kontraktion des Musculus sphincter pupillae oder verringerte Aktivität des Musculus dilatator pupillae.</td>
                    </tr>
                    <tr>
                        <td>Konvergenz</td>
                        <td>Die Konvergenzreaktion ist eine über den Nervus oculomotorius (III) vermittelte reflexartige Reaktion von Bulbus und Pupille bei der Fixierung naher Objekte</td>
                    </tr>
                    <tr>
                        <td>Latenz</td>
                        <td>Latenz ist der Zeitraum zwischen dem Eintreffen eines Reizes und der Reizantwort oder seiner Wahrnehmung</td>
                    </tr>
                    <tr>
                        <td>Monoparese/-plegie</td>
                        <td>Eine Monoparese ist die Schwäche eines Arms oder Beins; Eine vollständige Lähmung heißt Monoplegie</td>
                    </tr>
                    <tr>
                        <td>Hemiparese/-plegie</td>
                        <td>Eine Hemiparese ist die Schwäche einer Körperhälfte; Eine vollständige Lähmung heißt Hemiplegie</td>
                    </tr>
                    <tr>
                        <td>Paraparese/-plegie</td>
                        <td>Paraparese ist die beidseitige unvollständige Lähmung symmetrischer Extremitäten, meist der Beine. Paraplegie ist die vollständige Lähmung dieser Extremitäten.</td>
                    </tr>
                    <tr>
                        <td>Tetraparese/-plegie</td>
                        <td>Tetraparese ist die Lähmung aller vier Extremitäten. Eine vollständige Lähmung heißt Tetraplegie.</td>
                    </tr>
                    <tr>
                        <td>Bradykinese</td>
                        <td>Als Bradykinese bezeichnet man die Verlangsamung der Willkürmotorik</td>
                    </tr>
                    <tr>
                        <td>Ipsilateral</td>
                        <td>auf derselben Körperseite oder -hälfte gelegen</td>
                    </tr>
                    <tr>
                        <td>Kontralateral</td>
                        <td>auf der entgegengesetzten Körperseite oder -hälfte gelegen</td>
                    </tr>
                    <tr>
                        <td>Bilateral</td>
                        <td>"auf beiden Seiten" oder "zweiseitig"</td>
                    </tr>
                    <tr>
                        <td>Amplitude</td>
                        <td>Die Amplitude eines Tremors ist der Ausschlag der unwillkürlichen Bewegungen</td>
                    </tr>
                    <tr>
                        <td>Komorbidität(en)</td>
                        <td>Das gleichzeitige Vorkommen von zwei oder mehr verschiedenen Erkrankungen bei einem Patienten.</td>
                    </tr>
                    <tr>
                        <td>Alexithymie</td>
                        <td>Alexithymie beschreibt Schwierigkeiten, eigene Emotionen zu erkennen, zu verstehen und auszudrücken</td>
                    </tr>
                    <tr>
                        <td>Dissoziation</td>
                        <td>Eine Dissoziation ist in der Psychologie das Trennen oder die Trennung von normalerweise zusammenhängenden Wahrnehmungen, Gedanken, Gefühlen oder Erinnerungen</td>
                    </tr>
            </div>
        </div>
        `;

        this.querySelector('.close').addEventListener('click', () => {
            this.hide();
        });
    }

    show() {
        this.querySelector('.modal').style.display = 'block';
    }

    hide() {
        this.querySelector('.modal').style.display = 'none';
    }
}
customElements.define('terminology-modal', TerminologyModal);

const modalOpener = document.getElementById('openTerminology');
modalOpener.addEventListener('click', () => {
    document.querySelector('terminology-modal').show();
    console.log('Modal opened');
});

//suchfunktion für inhalt der tabelle, input ist #searchInput, trigger ist #searchIcon oder drücken der enter taste, tabelle ist #terminologyModal; nicht case sensitive; wird ein treffer, soll zu dieser zeile der tabelle gegangen werden und kurz (2sec) blinken
document.getElementById('searchIcon').addEventListener('click', searchTable);
document.getElementById('searchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchTable();
    }
});

function searchTable() {
    let input = document.getElementById('searchInput').value;
    let table = document.getElementById('terminologyModal');
    let tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td');
        for (let j = 0; j < td.length; j++) {
            let txtValue = td[j].textContent || td[j].innerText;
            if (txtValue.toUpperCase().indexOf(input.toUpperCase()) > -1) {
                tr[i].style.backgroundColor = 'rgba(0, 51, 102, 0.35)';
                setTimeout(() => {
                    tr[i].style.backgroundColor = 'transparent';
                }, 1000);
                break;
            }
        }
    }
}

//inhalt des inputs leeren sobald entweder enter oder #searchIcon geklickt wird
document.getElementById('searchIcon').addEventListener('click', clearInput);
document.getElementById('searchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        clearInput();
    }
});
function clearInput() {
    document.getElementById('searchInput').value = '';
}