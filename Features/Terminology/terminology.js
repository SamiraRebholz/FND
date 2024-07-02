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