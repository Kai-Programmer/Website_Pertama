// JavaScript untuk mengubah warna tombol secara acak
const techColors = [
    '#1e90ff', 
    '#32cd32',
    '#6a5acd', 
    '#00fa9a', 
    '#00ffff', 
    '#00008b', 
    '#4682b4', 
    '#2f4f4f',
    '#ff6347', 
    '#8a2be2'  
];

function getRandomTechColor() {
    return techColors[Math.floor(Math.random() * techColors.length)];
}

function changeButtonColor(button) {
    setInterval(() => {
        const randomColor = getRandomTechColor();
        button.style.backgroundColor = randomColor;
        button.style.boxShadow = `0 0 10px ${randomColor}`;
    }, 1000); 
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    changeButtonColor(button);
});

// JavaScript untuk mengubah warna tombol Login secara dinamis
const loginButton = document.querySelector('.login-btn');
const buttonColors = [
    '#1e90ff', 
    '#32cd32', 
    '#6a5acd', 
    '#00fa9a', 
    '#00ffff', 
    '#ff6347', 
    '#8a2be2'
];

function getRandomColor() {
    return buttonColors[Math.floor(Math.random() * buttonColors.length)];
}

function changeLoginButtonColor() {
    const randomColor = getRandomColor();
    loginButton.style.backgroundColor = randomColor;
    loginButton.style.boxShadow = `0 0 10px ${randomColor}`;
}

setInterval(changeLoginButtonColor, 1000);

// Fungsi untuk mengubah mode
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    // Mengubah ikon mode sesuai dengan mode yang aktif
    const modeSwitchButton = document.getElementById('mode-switch');
    if (body.classList.contains('dark-mode')) {
        modeSwitchButton.textContent = '🌙'; // Ikon bulan untuk mode gelap
    } else {
        modeSwitchButton.textContent = '☀️'; // Ikon matahari untuk mode terang
    }
}

// Mengubah warna teks "Kai" secara dinamis
const kaiTitle = document.getElementById('kai-title');

function changeTextColor() {
    const randomColor = getRandomTechColor();
    kaiTitle.style.color = randomColor;
}

setInterval(changeTextColor, 1000);

// Menambahkan fungsi untuk mengganti warna tombol mode secara dinamis
const modeSwitchButton = document.getElementById('mode-switch');

function changeModeButtonColor() {
    const randomColor = getRandomTechColor();
    modeSwitchButton.style.backgroundColor = randomColor;
    modeSwitchButton.style.boxShadow = `0 0 10px ${randomColor}`;
}

setInterval(changeModeButtonColor, 1000);