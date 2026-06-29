// Set dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================
// LIBRARY OF US - Kate & Me
// 11th Month Anniversary Integration
// ============================================

// Book Data - 11 Months Timeline
const booksData = {
    '11 Months': [
        {
            title: '💕 When We Met',
            spine: 'When We Met',
            emoji: '💬',
            content: 'Nine months ago, you walked into my life and everything changed. I didn\'t know then that this would be the beginning of the most beautiful chapter of my story. But I felt it—that spark, that connection, that unmistakable feeling that you were meant to be here.',
            date: 'September 2024'
        },
        {
            title: '🌸 First Moments',
            spine: 'First Moments',
            emoji: '✨',
            content: 'Those early days were filled with butterflies and stolen glances. Every conversation felt like discovering a treasure. I remember thinking: "This is it. This is real." And you smiled that smile that made me absolutely certain.',
            date: 'September 2024'
        },
        {
            title: '💬 Falling',
            spine: 'Falling',
            emoji: '🍂',
            content: 'I didn\'t mean to fall in love so quickly, but how could I not? You made me laugh at the smallest things. You listened to me like I was the only person in the world. You became my home before I even realized it.',
            date: 'October 2024'
        },
        {
            title: '🎵 Our Song',
            spine: 'Our Song',
            emoji: '🎶',
            content: 'Do you remember? "Glue Song" became ours. Every time I hear it, I see your face, feel your presence, remember why you\'re my favorite person. It\'s the song of us—the melody of our love story.',
            date: 'October 2024'
        },
        {
            title: '🌙 Late Night Talks',
            spine: 'Late Night Talks',
            emoji: '🌃',
            content: 'The hours disappear when I\'m with you. We\'ve spent countless nights just talking—about dreams, fears, futures. In those moments, I realized that love isn\'t just a feeling; it\'s wanting someone to know every part of you, and them loving it anyway.',
            date: 'November 2024'
        },
        {
            title: '🎁 Beautiful Days',
            spine: 'Beautiful Days',
            emoji: '☀️',
            content: 'Every day with you is a gift. The simple moments—your laugh, your warmth, the way you hold my hand—these are the things I treasure most. These are the moments that make my heart overflow.',
            date: 'December 2024'
        },
        {
            title: '❄️ Winter Glow',
            spine: 'Winter Glow',
            emoji: '❤️',
            content: 'The cold months felt warmer with you by my side. You became my comfort, my peace, my everything. I could face anything knowing you were there, believing in us, believing in me.',
            date: 'January 2025'
        },
        {
            title: '🌻 Growing Stronger',
            spine: 'Growing Stronger',
            emoji: '💪',
            content: 'Our love isn\'t perfect, and that\'s what makes it real. We\'ve navigated challenges, but every obstacle only made us stronger. I admire your strength, your kindness, your unwavering love for me.',
            date: 'February 2025'
        },
        {
            title: '🌸 Spring Awakening',
            spine: 'Spring Awakening',
            emoji: '🌷',
            content: 'As the seasons change, so does our story—but the core remains: you and me, building something that lasts. You\'ve awakened a part of my soul I didn\'t know existed, and for that, I\'m eternally grateful.',
            date: 'March 2025'
        },
        {
            title: '💝 11 Months',
            spine: '11 Months',
            emoji: '💕',
            content: 'Today marks eleven months of loving you. Eleven months of growth, laughter, tears, and unforgettable memories. You are my greatest adventure, my sweetest dream, my forever. Thank you for being you. Thank you for being mine.',
            date: 'August 2025'
        },
        {
            title: '🔐 Sealed with Love',
            spine: 'Sealed with Love',
            emoji: '🔑',
            content: 'This book is locked, my love. Not to keep you out, but to keep something sacred for our first anniversary. Open this on August 23rd, when we celebrate one full year of forever together. Until then, know that every day with you is a page I treasure.',
            date: 'August 23, 2026',
            locked: true,
            unlockDate: new Date('2026-08-23').getTime()
        }
    ]
};

let isPlaying = false;

// Initialize Library
document.addEventListener('DOMContentLoaded', () => {
    initializeLibraryListeners();
    initializeAmbientEffects();
});

// Library Event Listeners
function initializeLibraryListeners() {
    const openLibraryBtn = document.getElementById('openLibrary');
    const closeWelcome = document.getElementById('closeLibrary');
    const enterLibraryBtn = document.getElementById('enterLibrary');
    const backBtn = document.getElementById('backToWelcome');
    const musicBtn = document.getElementById('toggleMusic');
    const overlay = document.getElementById('libraryOverlay');
    const modal = document.getElementById('bookModal');
    const lockedModal = document.getElementById('lockedBookModal');
    const closeButtons = document.querySelectorAll('.modal-close');

    openLibraryBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        renderLibrary();
    });

    closeWelcome.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    enterLibraryBtn.addEventListener('click', () => {
        transitionToScene('libraryScene');
    });

    backBtn.addEventListener('click', () => {
        transitionToScene('welcomeScene');
    });

    musicBtn.addEventListener('click', toggleMusic);

    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('active');
            lockedModal.classList.remove('active');
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    lockedModal.addEventListener('click', (e) => {
        if (e.target === lockedModal) lockedModal.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('active');
            lockedModal.classList.remove('active');
        }
    });
}

function transitionToScene(sceneName) {
    const scenes = document.querySelectorAll('.library-scene');
    scenes.forEach(scene => scene.classList.remove('active'));
    document.getElementById(sceneName).classList.add('active');
}

function toggleMusic() {
    const audio = document.getElementById('themeAudio');
    const btn = document.getElementById('toggleMusic');
    
    if (isPlaying) {
        audio.pause();
        btn.textContent = '🎵 Play Our Song';
        isPlaying = false;
    } else {
        audio.play().catch(err => {
            console.log('Audio play failed:', err);
            alert('To play the theme song, please add a valid audio file URL.');
        });
        btn.textContent = '⏸️ Pause Our Song';
        isPlaying = true;
    }
}

// Render Library
function renderLibrary() {
    const bookshelf = document.getElementById('bookshelf');
    bookshelf.innerHTML = '';

    Object.entries(booksData).forEach(([period, books]) => {
        const shelf = document.createElement('div');
        shelf.classList.add('shelf');

        const shelfLabel = document.createElement('div');
        shelfLabel.classList.add('shelf-label');
        shelfLabel.textContent = period;

        const booksContainer = document.createElement('div');
        booksContainer.classList.add('books');

        books.forEach((book, index) => {
            const bookEl = document.createElement('div');
            bookEl.classList.add('book');
            
            if (book.locked) {
                bookEl.classList.add('locked');
            }
            
            bookEl.style.setProperty('--color', getBookColor(index));
            bookEl.innerHTML = `<div class="book-spine">${book.spine}</div>`;
            
            if (book.locked) {
                bookEl.addEventListener('click', () => showLockedBook(book));
            } else {
                bookEl.addEventListener('click', () => openModal(book));
            }
            
            bookEl.style.animationDelay = `${index * 0.1}s`;
            booksContainer.appendChild(bookEl);
        });

        shelf.appendChild(shelfLabel);
        shelf.appendChild(booksContainer);
        bookshelf.appendChild(shelf);
    });
}

function getBookColor(index) {
    const colors = [
        '#ff6b9d', '#ffb347', '#ff9999', '#ffc0cb', '#ffb3d9',
        '#ff99cc', '#ff66b3', '#cc66ff', '#ff99ff', '#ffccff', '#ff1493'
    ];
    return colors[index % colors.length];
}

function openModal(book) {
    const modal = document.getElementById('bookModal');
    const coverEl = document.getElementById('bookCover');
    
    coverEl.textContent = book.emoji;
    document.getElementById('bookTitle').textContent = book.title;
    document.getElementById('bookContent').textContent = book.content;
    document.getElementById('bookMeta').innerHTML = `<p>✨ ${book.date}</p>`;
    
    modal.classList.add('active');
}

function showLockedBook(book) {
    const lockedModal = document.getElementById('lockedBookModal');
    const now = new Date().getTime();
    const timeRemaining = book.unlockDate - now;
    
    if (timeRemaining <= 0) {
        openModal(book);
    } else {
        document.getElementById('lockedTitle').textContent = book.title;
        document.getElementById('lockedMessage').textContent = 'This special book is sealed until our first anniversary. When you open it, inside you\'ll find the most precious memory from this eleven-month journey.';
        
        const days = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));
        document.getElementById('countdown').innerHTML = `
            <p>Unlocks in:</p>
            <p style="font-size: 2rem; margin: 10px 0;">${days} days</p>
            <p>${book.date}</p>
        `;
        
        lockedModal.classList.add('active');
    }
}

// Ambient Effects
function initializeAmbientEffects() {
    createStars();
    createFloatingPetals();
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 80;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.width = (Math.random() * 1.5 + 1) + 'px';
        star.style.height = star.style.width;
        starsContainer.appendChild(star);
    }
}

function createFloatingPetals() {
    const petalsContainer = document.getElementById('petals');
    
    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + '%';
        petal.style.top = '-15px';
        const duration = Math.random() * 4 + 8;
        petal.style.animationDuration = duration + 's';
        petal.style.opacity = Math.random() * 0.5 + 0.3;
        
        petalsContainer.appendChild(petal);
        
        setTimeout(() => petal.remove(), duration * 1000);
    }

    setInterval(createPetal, 500);
}
