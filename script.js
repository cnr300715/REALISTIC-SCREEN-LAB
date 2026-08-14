const screens = [
    {
        id: "apple",
        icon: "",
        title: "Apple Açılış Ekranı",
        description: "Logo ve yavaş yükleme animasyonu"
    },
    {
        id: "linux",
        icon: "🐧",
        title: "Linux Boot",
        description: "Linux başlatma ekranı"
    },
    {
        id: "blue",
        icon: ":(",
        title: "Mavi Hata Ekranı",
        description: "Yüzde ilerleme ve QR kod"
    },
    {
        id: "broken",
        icon: "◇",
        title: "Kırık Telefon Ekranı",
        description: "Gerçek kırık ekran görseli"
    },
    {
        id: "android",
        icon: "A",
        title: "Android Açılış",
        description: "Yavaş cihaz başlatma"
    },
    {
        id: "update",
        icon: "↻",
        title: "Sistem Güncellemesi",
        description: "Çok yavaş güncelleme"
    },
    {
        id: "recovery",
        icon: "R",
        title: "Kurtarma Modu",
        description: "Sistem kontrolü"
    },
    {
        id: "bios",
        icon: "B",
        title: "BIOS",
        description: "Donanım başlatılıyor"
    },
    {
        id: "terminal",
        icon: ">_",
        title: "Terminal",
        description: "Komut satırı"
    },
    {
        id: "disk",
        icon: "D",
        title: "Disk Kontrolü",
        description: "Depolama testi"
    },
    {
        id: "battery",
        icon: "▯",
        title: "Kritik Pil",
        description: "Pil seviyesi çok düşük"
    },
    {
        id: "internet",
        icon: "⌁",
        title: "İnternet Yok",
        description: "Bağlantı aranıyor"
    },
    {
        id: "lock",
        icon: "□",
        title: "Kilit Ekranı",
        description: "Saat ve tarih"
    },
    {
        id: "heat",
        icon: "!",
        title: "Aşırı Isınma",
        description: "Cihaz sıcaklığı yüksek"
    },
    {
        id: "network",
        icon: "◎",
        title: "Ağ Taraması",
        description: "Ağlar taranıyor"
    },
    {
        id: "restore",
        icon: "↺",
        title: "Sistem Geri Yükleme",
        description: "Önceki durum yükleniyor"
    },
    {
        id: "install",
        icon: "↓",
        title: "Kurulum",
        description: "Dosyalar kuruluyor"
    },
    {
        id: "black",
        icon: "■",
        title: "Siyah Ekran",
        description: "Sinyal yok"
    },
    {
        id: "crt",
        icon: "▣",
        title: "CRT Arıza",
        description: "Eski monitör ekranı"
    },
    {
        id: "diagnostic",
        icon: ">_",
        title: "Gelişmiş Tanılama",
        description: "Donanım testleri"
    }
];


const home =
    document.getElementById("home");

const viewer =
    document.getElementById("viewer");

const grid =
    document.getElementById("screenGrid");

const host =
    document.getElementById("screenHost");

const title =
    document.getElementById("screenTitle");

const search =
    document.getElementById("searchInput");

const back =
    document.getElementById("backButton");

const restart =
    document.getElementById("restartButton");

const fullscreen =
    document.getElementById("fullscreenButton");

const allScreens =
    document.getElementById("allScreens");

let selectedScreen = null;

let activeTimers = [];


/* =========================================
   TIMER TEMİZLE
========================================= */

function clearTimers() {

    activeTimers.forEach(
        timer => clearTimeout(timer)
    );

    activeTimers = [];
}


/* =========================================
   TIMER EKLE
========================================= */

function addTimer(callback, time) {

    const timer =
        setTimeout(callback, time);

    activeTimers.push(timer);

    return timer;
}


/* =========================================
   KARTLARI OLUŞTUR
========================================= */

function renderScreens(list = screens) {

    grid.innerHTML = "";

    list.forEach(
        (screen, index) => {

            const card =
                document.createElement("button");

            card.type = "button";

            card.className =
                "screen-card";

            card.innerHTML = `
                <div class="card-number">
                    SCREEN ${String(index + 1).padStart(2, "0")}
                </div>

                <div class="card-icon">
                    ${screen.icon}
                </div>

                <h2>
                    ${screen.title}
                </h2>

                <p>
                    ${screen.description}
                </p>
            `;

            card.addEventListener(
                "click",
                () => openScreen(screen)
            );

            grid.appendChild(card);
        }
    );
}


/* =========================================
   EKRANI AÇ
========================================= */

function openScreen(screen) {

    clearTimers();

    selectedScreen =
        screen;

    home.hidden = true;

    viewer.hidden = false;

    title.textContent =
        screen.title;

    host.innerHTML = "";

    switch (screen.id) {

        case "apple":
            createApple();
            break;

        case "linux":
            createLinux();
            break;

        case "blue":
            createBlue();
            break;

        case "broken":
            createBroken();
            break;

        case "android":
            createAndroid();
            break;

        case "update":
            createUpdate();
            break;

        case "recovery":
            createRecovery();
            break;

        case "bios":
            createBios();
            break;

        case "terminal":
            createTerminal();
            break;

        case "disk":
            createDisk();
            break;

        case "battery":
            createBattery();
            break;

        case "internet":
            createInternet();
            break;

        case "lock":
            createLock();
            break;

        case "heat":
            createHeat();
            break;

        case "network":
            createNetwork();
            break;

        case "restore":
            createRestore();
            break;

        case "install":
            createInstall();
            break;

        case "black":
            createBlack();
            break;

        case "crt":
            createCRT();
            break;

        case "diagnostic":
            createDiagnostic();
            break;
    }
}


/* =========================================
   APPLE
========================================= */

function createApple() {

    host.innerHTML = `
        <div class="screen center apple-screen">

            <img
                class="apple-logo"
                src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Apple_logo_white.svg"
                alt="Apple"
            >

            <div class="apple-progress">
                <div
                    id="appleBar"
                    class="apple-progress-bar"
                ></div>
            </div>

            <div
                id="appleStatus"
                class="apple-status"
            >
                Başlatılıyor...
            </div>

        </div>
    `;

    slowProgress(
        "appleBar",
        38000
    );

    const messages = [
        "Başlatılıyor...",
        "Sistem hazırlanıyor...",
        "Dosyalar yükleniyor...",
        "Uygulamalar hazırlanıyor...",
        "Son kontroller yapılıyor...",
        "Hazır."
    ];

    messages.forEach(
        (message, index) => {

            addTimer(
                () => {

                    const status =
                        document.getElementById(
                            "appleStatus"
                        );

                    if (status) {
                        status.textContent =
                            message;
                    }

                },
                index * 6500
            );
        }
    );
}


/* =========================================
   LINUX
========================================= */

function createLinux() {

    host.innerHTML = `
        <div class="screen center linux-screen">

            <img
                class="linux-image"
                src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Linux_boot_screen_compact.png"
                alt="Linux boot"
            >

            <span class="linux-cursor"></span>

        </div>
    `;
}


/* =========================================
   MAVİ EKRAN
========================================= */

function createBlue() {

    host.innerHTML = `
        <div class="screen center blue-screen">

            <div class="blue-content">

                <div class="blue-face">
                    :(
                </div>

                <h2>
                    Bir sorun oluştu
                </h2>

                <p>
                    Bilgisayarınız bir sorunla
                    karşılaştı ve yeniden
                    başlatılması gerekiyor.
                    <br><br>
                    Hata bilgileri toplanıyor.
                </p>

                <div class="blue-percent">

                    <span id="bluePercent">
                        0
                    </span>% tamamlandı

                </div>

                <div class="blue-bottom">

                    <div
                        id="blueQR"
                        class="blue-qr"
                    ></div>

                    <div class="blue-meta">

                        Daha fazla bilgi için
                        QR kodunu tarayabilirsiniz.

                        <br>

                        DURDURMA KODU:
                        <strong>
                            SIMULATION_ERROR
                        </strong>

                    </div>

                </div>

            </div>

        </div>
    `;


    if (
        typeof QRCode !==
        "undefined"
    ) {

        new QRCode(
            document.getElementById(
                "blueQR"
            ),
            {
                text:
                    window.location.href,

                width: 82,

                height: 82,

                colorDark:
                    "#000000",

                colorLight:
                    "#ffffff"
            }
        );

    }


    let percent = 0;


    function increase() {

        percent++;

        const element =
            document.getElementById(
                "bluePercent"
            );

        if (!element) {
            return;
        }

        element.textContent =
            percent;


        if (percent < 30) {

            addTimer(
                increase,
                180
            );

        }

        else if (percent < 80) {

            addTimer(
                increase,
                400
            );

        }

        else if (percent < 95) {

            addTimer(
                increase,
                700
            );

        }

        else if (percent < 100) {

            addTimer(
                increase,
                1000
            );
        }
    }


    addTimer(
        increase,
        250
    );
}


/* =========================================
   KIRIK EKRAN
========================================= */

function createBroken() {

    host.innerHTML = `
        <div class="screen broken-screen">

            <img
                src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Shattered_phone_screen.jpg"
                alt="Kırık telefon ekranı"
                onerror="this.style.display='none'"
            >

            <div class="broken-label">

                GERÇEK GÖRSEL
                ·
                EKRAN HASARI SİMÜLASYONU

            </div>

        </div>
    `;
}


/* =========================================
   ANDROID
========================================= */

function createAndroid() {

    host.innerHTML = `
        <div class="screen center android-screen">

            <div class="android-ring"></div>

            <div class="android-name">
                DEVICE
            </div>

            <div class="android-progress">

                <div
                    id="androidBar"
                    class="android-bar"
                ></div>

            </div>

        </div>
    `;

    slowProgress(
        "androidBar",
        32000
    );
}


/* =========================================
   GÜNCELLEME
========================================= */

function createUpdate() {

    host.innerHTML = `
        <div class="screen center update-screen">

            <div class="update-ring"></div>

            <h2>
                Sistem güncelleniyor
            </h2>

            <p>
                Cihazınızı kapatmayın.
            </p>

            <div class="update-progress">

                <div
                    id="updateBar"
                    class="update-bar"
                ></div>

            </div>

            <div
                id="updateStatus"
                class="apple-status"
            >
                %0
            </div>

        </div>
    `;

    slowProgress(
        "updateBar",
        52000,
        "updateStatus"
    );
}


/* =========================================
   GENEL YAVAŞ PROGRESS
========================================= */

function slowProgress(
    barId,
    duration,
    textId = null
) {

    const bar =
        document.getElementById(
            barId
        );

    if (!bar) {
        return;
    }

    const start =
        performance.now();


    function animate(now) {

        const elapsed =
            now - start;

        const progress =
            Math.min(
                elapsed / duration,
                1
            );

        const percent =
            Math.floor(
                progress * 100
            );

        bar.style.width =
            percent + "%";


        if (textId) {

            const text =
                document.getElementById(
                    textId
                );

            if (text) {

                text.textContent =
                    "%" + percent;

            }
        }


        if (progress < 1) {

            const frame =
                requestAnimationFrame(
                    animate
                );

            activeTimers.push(frame);

        }
    }


    requestAnimationFrame(
        animate
    );
}


/* =========================================
   KURTARMA
========================================= */

function createRecovery() {

    const steps = [
        "Başlangıç bilgileri",
        "Sistem dosyaları",
        "Disk yapısı",
        "Onarım seçenekleri",
        "Kurtarma ortamı"
    ];


    host.innerHTML = `
        <div class="screen center recovery-screen">

            <div class="recovery-panel">

                <h2>
                    Kurtarma ortamı hazırlanıyor
                </h2>

                <p>
                    Sistem sorunları kontrol ediliyor.
                </p>

                <div class="recovery-steps">

                    ${steps.map(
                        (step, index) => `
                            <div
                                class="recovery-step"
                                id="recovery-${index}"
                            >
                                ${step}
                            </div>
                        `
                    ).join("")}

                </div>

            </div>

        </div>
    `;


    steps.forEach(
        (_, index) => {

            addTimer(
                () => {

                    const element =
                        document.getElementById(
                            `recovery-${index}`
                        );

                    if (element) {

                        element.classList.add(
                            "active"
                        );

                    }

                },
                2200 * (index + 1)
            );

        }
    );
}


/* =========================================
   METİN EKRANI
========================================= */

function createTextScreen(
    className,
    lines,
    delay
) {

    host.innerHTML = `
        <div
            class="screen ${className}"
        >

            <div
                id="textLines"
                class="${className === "bios-screen"
                    ? "bios-lines"
                    : "terminal-lines"}"
            ></div>

        </div>
    `;


    let index = 0;


    function addLine() {

        const output =
            document.getElementById(
                "textLines"
            );

        if (!output) {
            return;
        }


        if (
            index >= lines.length
        ) {
            return;
        }


        output.textContent +=
            lines[index] + "\n";


        index++;


        addTimer(
            addLine,
            delay
        );
    }


    addLine();
}


/* =========================================
   BIOS
========================================= */

function createBios() {

    createTextScreen(
        "bios-screen",
        [
            "FIRMWARE INITIALIZATION",
            "--------------------------",
            "CPU INITIALIZATION ........ OK",
            "MEMORY TEST ............... OK",
            "STORAGE CONTROLLER ........ OK",
            "DISPLAY INITIALIZATION .... OK",
            "USB CONTROLLER ............ OK",
            "NETWORK CONTROLLER ........ OK",
            "SECURITY MODULE ........... OK",
            "BOOT DEVICE ............... CHECKING",
            "--------------------------",
            "BOOT SEQUENCE READY"
        ],
        800
    );
}


/* =========================================
   TERMINAL
========================================= */

function createTerminal() {

    createTextScreen(
        "terminal-screen",
        [
            "$ system-check",
            "[  OK  ] CPU initialized",
            "[  OK  ] Memory test passed",
            "[  OK  ] Storage detected",
            "[  OK  ] Display initialized",
            "[  OK  ] Network service started",
            "[  OK  ] Security service started",
            "$ system-status",
            "All simulated services are operational.",
            "$ _"
        ],
        650
    );
}


/* =========================================
   DİSK
========================================= */

function createDisk() {

    createTextScreen(
        "terminal-screen",
        [
            "STORAGE INTEGRITY CHECK",
            "--------------------------",
            "Partition 1 ........ OK",
            "Partition 2 ........ OK",
            "File system ........ OK",
            "Bad sectors ....... 0",
            "Final status ...... OK"
        ],
        1200
    );
}


/* =========================================
   PİL
========================================= */

function createBattery() {

    host.innerHTML = `
        <div class="screen center battery-screen">

            <div class="battery-icon">

                <div
                    class="battery-level"
                ></div>

            </div>

            <h2>
                Pil çok düşük
            </h2>

            <p>
                Cihazınızı şarj edin.
            </p>

        </div>
    `;
}


/* =========================================
   İNTERNET
========================================= */

function createInternet() {

    host.innerHTML = `
        <div class="screen center internet-screen">

            <div class="wifi-icon">
                ⌁
            </div>

            <h2>
                İnternet bağlantısı yok
            </h2>

            <p id="internetStatus">
                Ağ aranıyor...
            </p>

        </div>
    `;


    const messages = [
        "Ağ aranıyor...",
        "Sinyal kontrol ediliyor...",
        "Bağlantı doğrulanıyor...",
        "Bağlantı bulunamadı."
    ];


    messages.forEach(
        (message, index) => {

            addTimer(
                () => {

                    const element =
                        document.getElementById(
                            "internetStatus"
                        );

                    if (element) {

                        element.textContent =
                            message;

                    }

                },
                index * 2500
            );
        }
    );
}


/* =========================================
   KİLİT EKRANI
========================================= */

function createLock() {

    host.innerHTML = `
        <div class="screen center lock-screen">

            <div
                id="lockTime"
                class="lock-time"
            >
            </div>

            <div
                id="lockDate"
                class="lock-date"
            >
            </div>

            <div class="lock-hint">
                Yukarı kaydırın
            </div>

        </div>
    `;


    function updateClock() {

        const date =
            new Date();


        const time =
            date.toLocaleTimeString(
                "tr-TR",
                {
                    hour: "2-digit",
                    minute: "2-digit"
                }
            );


        const day =
            date.toLocaleDateString(
                "tr-TR",
                {
                    weekday: "long",
                    day: "numeric",
                    month: "long"
                }
            );


        document.getElementById(
            "lockTime"
        ).textContent =
            time;


        document.getElementById(
            "lockDate"
        ).textContent =
            day;
    }


    updateClock();


    const timer =
        setInterval(
            updateClock,
            1000
        );


    activeTimers.push(
        timer
    );
}


/* =========================================
   ISINMA
========================================= */

function createHeat() {

    host.innerHTML = `
        <div class="screen center heat-screen">

            <div class="heat-symbol">
                △
            </div>

            <h2>
                Aşırı ısınma
            </h2>

            <p>
                Cihazın soğuması bekleniyor.
            </p>

        </div>
    `;
}


/* =========================================
   AĞ
========================================= */

function createNetwork() {

    host.innerHTML = `
        <div class="screen center network-screen">

            <div class="radar"></div>

            <p>
                Ağlar taranıyor...
            </p>

        </div>
    `;
}


/* =========================================
   GERİ YÜKLEME
========================================= */

function createRestore() {

    host.innerHTML = `
        <div class="screen center restore-screen">

            <div class="restore-ring"></div>

            <h2>
                Sistem geri yükleniyor
            </h2>

            <p>
                Önceki durum yükleniyor.
            </p>

        </div>
    `;
}


/* =========================================
   KURULUM
========================================= */

function createInstall() {

    host.innerHTML = `
        <div class="screen center install-screen">

            <h2>
                Kurulum devam ediyor
            </h2>

            <div class="install-progress">

                <div
                    id="installBar"
                    class="install-bar"
                ></div>

            </div>

            <div
                id="installStatus"
                class="install-status"
            >
                Dosyalar hazırlanıyor...
            </div>

        </div>
    `;


    slowProgress(
        "installBar",
        46000
    );


    const messages = [
        "Dosyalar hazırlanıyor...",
        "Sistem bileşenleri kuruluyor...",
        "Ayarlar uygulanıyor...",
        "Son kontroller...",
        "Kurulum tamamlanıyor..."
    ];


    messages.forEach(
        (message, index) => {

            addTimer(
                () => {

                    const element =
                        document.getElementById(
                            "installStatus"
                        );

                    if (element) {

                        element.textContent =
                            message;

                    }

                },
                index * 9000
            );

        }
    );
}


/* =========================================
   SİYAH EKRAN
========================================= */

function createBlack() {

    host.innerHTML = `
        <div class="screen black-screen">
        </div>
    `;
}


/* =========================================
   CRT
========================================= */

function createCRT() {

    host.innerHTML = `
        <div class="screen center crt-screen">

            <div class="crt-text">

                <h2>
                    DISPLAY SIGNAL LOST
                </h2>

                <p>
                    NO INPUT · CHECK CABLE
                </p>

            </div>

        </div>
    `;
}


/* =========================================
   GELİŞMİŞ TANILAMA
========================================= */

function createDiagnostic() {

    createTextScreen(
        "terminal-screen",
        [
            "ADVANCED DIAGNOSTIC MODE",
            "==============================",
            "CPU ................. TESTING",
            "MEMORY .............. TESTING",
            "STORAGE ............. TESTING",
            "DISPLAY ............. TESTING",
            "NETWORK ............. TESTING",
            "AUDIO ............... TESTING",
            "THERMAL ............. TESTING",
            "SECURITY ............ TESTING",
            "==============================",
            "DIAGNOSTIC COMPLETE"
        ],
        850
    );
}


/* =========================================
   MENÜYE DÖN
========================================= */

back.addEventListener(
    "click",
    () => {

        clearTimers();

        viewer.hidden = true;

        home.hidden = false;
    }
);


/* =========================================
   YENİDEN BAŞLAT
========================================= */

restart.addEventListener(
    "click",
    () => {

        if (selectedScreen) {

            openScreen(
                selectedScreen
            );

        }
    }
);


/* =========================================
   TAM EKRAN
========================================= */

fullscreen.addEventListener(
    "click",
    async () => {

        const frame =
            document.getElementById(
                "deviceFrame"
            );


        try {

            if (
                !document.fullscreenElement
            ) {

                await frame.requestFullscreen();

                fullscreen.textContent =
                    "✕ TAM EKRANDAN ÇIK";

            }

            else {

                await document.exitFullscreen();

                fullscreen.textContent =
                    "⛶ TAM EKRAN";

            }

        }

        catch (error) {

            showToast(
                "Tarayıcı tam ekran izni vermedi."
            );

        }
    }
);


/* =========================================
   FULLSCREEN DURUMU
========================================= */

document.addEventListener(
    "fullscreenchange",
    () => {

        if (
            !document.fullscreenElement
        ) {

            fullscreen.textContent =
                "⛶ TAM EKRAN";

        }

    }
);


/* =========================================
   ARAMA
========================================= */

search.addEventListener(
    "input",
    () => {

        const query =
            search.value
                .trim()
                .toLocaleLowerCase(
                    "tr-TR"
                );


        if (!query) {

            renderScreens();

            return;
        }


        const filtered =
            screens.filter(
                screen =>
                    (
                        screen.title +
                        " " +
                        screen.description
                    )
                    .toLocaleLowerCase(
                        "tr-TR"
                    )
                    .includes(
                        query
                    )
            );


        renderScreens(
            filtered
        );
    }
);


/* =========================================
   TÜM EKRANLAR
========================================= */

allScreens.addEventListener(
    "click",
    () => {

        search.value = "";

        renderScreens();

    }
);


/* =========================================
   TOAST
========================================= */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );
}


/* =========================================
   BAŞLAT
========================================= */

renderScreens();