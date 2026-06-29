/* ===================================
   ELEMENTS
=================================== */

const startButton = document.getElementById("startButton");
const home = document.getElementById("home");
const picnic = document.getElementById("picnic");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");

const closeModal = document.getElementById("closeModal");

const musicButton = document.getElementById("musicButton");
const music = document.getElementById("themeMusic");

const loading = document.getElementById("loadingScreen");

/* ===================================
   LOADING
=================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loading.style.opacity = "0";

        setTimeout(() => {

            loading.style.display = "none";

        }, 600);

    }, 1500);

});

/* ===================================
   START PICNIC
=================================== */

picnic.style.display = "none";

startButton.addEventListener("click", () => {

    home.style.display = "none";

    picnic.style.display = "flex";

});

/* ===================================
   MODAL
=================================== */

function openModal(title, text){

    modal.classList.add("active");

    modalTitle.textContent = title;

    modalContent.innerHTML = text;

}

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

    }

});

/* ===================================
   MUSIC
=================================== */

let playing=false;

musicButton.addEventListener("click",()=>{

    if(!playing){

        music.play();

        playing=true;

        musicButton.textContent="⏸️";

    }else{

        music.pause();

        playing=false;

        musicButton.textContent="🎵";

    }

});
/* ===================================
   PICNIC ITEMS
=================================== */

const basket = document.getElementById("basket");
const camera = document.getElementById("camera");
const strawberry = document.getElementById("strawberry");
const memory = document.getElementById("memory");

const birthday = document.getElementById("birthday");
const gift = document.getElementById("gift");
const ring = document.getElementById("ring");



/* ===================================
   LOVE LETTER
=================================== */

basket.addEventListener("click",()=>{

    openModal(

        "💌 Love Letter",

        `
        <p>

        Hi love ❤️

        Thank you for staying beside me.

        Thank you for loving me even on
        the days I wasn't easy to love.

        I hope every flower in this little
        picnic reminds you how grateful I am
        that you're in my life.

        I love you more than words
        could ever explain.

        ❤️

        </p>
        `
    );

});



/* ===================================
   WHY I LOVE YOU
=================================== */

strawberry.addEventListener("click",()=>{

    openModal(

        "🍓 Reasons I Love You",

        `
        <ul>

            <li>Your smile.</li>

            <li>Your kindness.</li>

            <li>You always make me laugh.</li>

            <li>You believe in me.</li>

            <li>You make life brighter.</li>

            <li>You're my safe place.</li>

            <li>You're simply you.</li>

        </ul>
        `
    );

});



/* ===================================
   MEMORIES
=================================== */

memory.addEventListener("click",()=>{

    openModal(

        "🌻 Favorite Memories",

        `
        <p>

        Every date.

        Every late-night conversation.

        Every picture.

        Every laugh.

        Every hug.

        Every moment with you
        became one of my favorite memories.

        ❤️

        </p>
        `
    );

});



/* ===================================
   PHOTO GALLERY
=================================== */

camera.addEventListener("click",()=>{

    openModal(

        "📷 Our Gallery",

        `
        <p>

        Replace these with your own photos.

        ❤️ photo1.jpg

        ❤️ photo2.jpg

        ❤️ photo3.jpg

        ❤️ photo4.jpg

        ❤️ photo5.jpg

        ❤️ photo6.jpg

        </p>
        `
    );

});
/* ===================================
   LOCKED SURPRISES
=================================== */

const lockedModal = document.getElementById("lockedModal");
const closeLocked = document.getElementById("closeLocked");

const lockedTitle = document.getElementById("lockedTitle");
const lockedMessage = document.getElementById("lockedMessage");
const countdown = document.getElementById("countdown");

closeLocked.addEventListener("click",()=>{

    lockedModal.classList.remove("active");

});

window.addEventListener("click",(e)=>{

    if(e.target===lockedModal){

        lockedModal.classList.remove("active");

    }

});



function openLocked(title,message,targetDate){

    lockedTitle.textContent=title;

    lockedMessage.textContent=message;

    updateCountdown(targetDate);

    lockedModal.classList.add("active");

}



/* ===================================
   COUNTDOWN
=================================== */

let countdownInterval;

function updateCountdown(targetDate){

    clearInterval(countdownInterval);

    countdownInterval=setInterval(()=>{

        const now=new Date();

        const diff=targetDate-now;

        if(diff<=0){

            countdown.innerHTML="🎉 It's finally here!";

            clearInterval(countdownInterval);

            return;

        }

        const days=Math.floor(diff/(1000*60*60*24));

        const hours=Math.floor((diff/(1000*60*60))%24);

        const minutes=Math.floor((diff/(1000*60))%60);

        const seconds=Math.floor((diff/1000)%60);

        countdown.innerHTML=
        `
        <h3>

        ${days} Days

        ${hours} Hours

        ${minutes} Minutes

        ${seconds} Seconds

        </h3>
        `;

    },1000);

}



/* ===================================
   IMPORTANT DATES
=================================== */

const now=new Date();

const year=now.getFullYear();

const birthdayDate=new Date(year,3,11);   // April 11

const monthsaryDate=new Date(year,6,23);  // July 23

const anniversaryDate=new Date(year,7,23);// August 23
/* ===================================
   BIRTHDAY
=================================== */

birthday.addEventListener("click",()=>{

    if(now >= birthdayDate){

        openModal(

            "🎂 Happy Birthday ❤️",

            `
            <h3>Happy Birthday, My Love! 🎉</h3>

            <p>

            I hope today brings you as much happiness
            as you've brought into my life.

            Thank you for every smile,
            every laugh,
            and every beautiful memory.

            You deserve all the love
            in the world.

            Happy Birthday!

            ❤️

            </p>

            `
        );

    }else{

        openLocked(

            "🎂 Birthday Locked",

            "Your birthday surprise will unlock on April 11.",

            birthdayDate

        );

    }

});



/* ===================================
   11TH MONTHSARY
=================================== */

gift.addEventListener("click",()=>{

    if(now >= monthsaryDate){

        openModal(

            "🎁 Happy 11th Monthsary ❤️",

            `
            <h3>

            Happy 11 Months!

            </h3>

            <p>

            Eleven wonderful months.

            Eleven months of memories.

            Eleven months of love.

            Thank you for choosing me every day.

            I can't wait until we celebrate
            even more anniversaries together.

            ❤️

            </p>

            `
        );

    }else{

        openLocked(

            "🎁 Monthsary Locked",

            "Come back on July 23 ❤️",

            monthsaryDate

        );

    }

});



/* ===================================
   ANNIVERSARY
=================================== */

ring.addEventListener("click",()=>{

    if(now >= anniversaryDate){

        openModal(

            "💍 Happy Anniversary ❤️",

            `
            <h3>

            One Whole Year.

            </h3>

            <p>

            It's hard to believe
            an entire year has already passed.

            Thank you for staying.

            Thank you for loving me.

            I hope this is only
            the first of many anniversaries
            we'll celebrate together.

            I love you forever.

            ❤️

            </p>

            `
        );

    }else{

        openLocked(

            "💍 Anniversary Locked",

            "Our first anniversary unlocks on August 23 ❤️",

            anniversaryDate

        );

    }

});
/* ===================================
   AUTO PLAY MUSIC
=================================== */

startButton.addEventListener("click",()=>{

    music.play().catch(()=>{});

    playing=true;

    musicButton.textContent="⏸️";

});



/* ===================================
   FLOATING HEARTS
=================================== */

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(18+Math.random()*20)+"px";

    heart.style.animationDuration=(6+Math.random()*6)+"s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,800);



/* ===================================
   BUTTERFLIES
=================================== */

function createButterfly(){

    const butterfly=document.createElement("div");

    butterfly.className="butterfly";

    butterfly.innerHTML="🦋";

    butterfly.style.top=Math.random()*70+"vh";

    butterfly.style.animationDuration=(12+Math.random()*8)+"s";

    document.getElementById("butterflies").appendChild(butterfly);

    setTimeout(()=>{

        butterfly.remove();

    },20000);

}

setInterval(createButterfly,6000);



/* ===================================
   FIREFLIES
=================================== */

function createFirefly(){

    const firefly=document.createElement("div");

    firefly.className="firefly";

    firefly.style.left=Math.random()*100+"vw";

    firefly.style.top=(50+Math.random()*50)+"vh";

    document.getElementById("fireflies").appendChild(firefly);

    setTimeout(()=>{

        firefly.remove();

    },5000);

}

setInterval(createFirefly,700);



/* ===================================
   SECRET TREE
=================================== */

const tree=document.querySelector(".tree");

let treeClicks=0;

tree.addEventListener("click",()=>{

    treeClicks++;

    if(treeClicks>=5){

        openModal(

            "🌳 Secret Found ❤️",

            `
            <h3>

            You found the hidden surprise!

            </h3>

            <p>

            If I could choose
            anyone in every lifetime,

            I'd still choose you.

            Again.

            And again.

            ❤️

            </p>

            `
        );

        treeClicks=0;

    }

});



/* ===================================
   SECRET MESSAGE
=================================== */

const title=document.querySelector(".hero h1");

let clickCount=0;

title.addEventListener("click",()=>{

    clickCount++;

    if(clickCount===10){

        document.getElementById("secretMessage").style.display="block";

        document
            .getElementById("secretMessage")
            .scrollIntoView({

                behavior:"smooth"

            });

        clickCount=0;

    }

});



/* ===================================
   END
=================================== */

console.log("🌼 Our Little Picnic is ready! ❤️");