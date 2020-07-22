document.querySelector('.i-11').onkeydown = () => {
    document.querySelector('.key[data="'+event.code+'"]').classList.add('key_active');
};
document.querySelector('.i-11').onkeyup = () => {
    document.querySelector('.key[data="'+event.code+'"]').classList.remove('key_active');
};