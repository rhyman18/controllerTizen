import tvKey from './tvKey.js';

// data menu
const menus = [
    'Menu 1',
    'Menu 2'
];

// event load app
window.onload = load;

// event unload app
window.onunload = unload;

function load() {
    console.log('event window.load');

    // div id=App
    const container = document.querySelector('#App');

    // looping create menu inside container
    for (const menu of menus) {
        container.innerHTML += createButton(menu);
    }

    // get button element
    const buttonElements = document.querySelectorAll('.btn');

    // urutan button
    let buttonKe = 0;

    // aktifkan css .active pertama kali
    buttonElements[buttonKe].classList.add('active');

    // event tvkey
    document.addEventListener('keydown', (e) => {
        // kondisi tombol
        switch (e.keyCode) {
            case tvKey.UP:
                // buttonKe jangan sampai minus
                if (buttonKe > 0) {
                    // nonaktifkan css .active pada buttonKe sebelumnya
                    buttonElements[buttonKe].classList.remove('active');
                    // merubah urutan, decrement
                    buttonKe--;
                    // aktifkan css .active pada buttonKe selanjutnya
                    buttonElements[buttonKe].classList.add('active');
                }
                break;
            case tvKey.DOWN:
                // buttonKe jangan sampai lebih dari jumlah button
                if (buttonKe < (buttonElements.length - 1)) {
                    // nonaktifkan css .active pada buttonKe sebelumnya
                    buttonElements[buttonKe].classList.remove('active');
                    // merubah urutan, increment
                    buttonKe++;
                    // aktifkan css .active pada buttonKe selanjutnya
                    buttonElements[buttonKe].classList.add('active');
                }
                break;
            case tvKey.ENTER:
                // redirect ke html lain
                // window.location.href = 'index.html';
                console.log(`Anda memilih ${menus[buttonKe]}`)
                break;
            case tvKey.RETURN:
            // redirect ke html lain
            // window.location.href = 'index.html';
            default:
                console.log(`${e.keyCode} belum ter register.`);
        }
    });
};

function unload() {
    console.log('event window.onunload');
};

// generate button
function createButton(data) {
    return `<button type="button" class="btn">${data}</button>`;
}
