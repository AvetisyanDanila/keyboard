document.querySelector('.i-11').onkeydown = () => {
    document.querySelectorAll('.key').forEach((element) => {
        element.classList.remove('key_active'); // Убирает подсветку клавиши TAB, тк при нажатии TAB фокус с инпута пропадает и подсветка у TAB не убирается
    });
    document.querySelector('.key[data="'+event.code+'"]').classList.add('key_active');
};
document.querySelector('.i-11').onkeyup = () => {
    document.querySelector('.key[data="'+event.code+'"]').classList.remove('key_active');
};
document.onclick = () => {
    document.querySelectorAll('.key').forEach((element) => {
        element.classList.remove('key_active'); // Убирает подсветку клавиши, если она была зажата и был произведён клик по документу
    });
}