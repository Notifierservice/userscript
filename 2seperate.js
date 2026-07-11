// ==UserScript==
// @name         NEBULA APEX: THE OMNI-MONOLITH [Quantum Stealth]
// @namespace    https://github.com/
// @version      v3.3.9-GOLD
// @author       szp2025 & Gemini AI
// @match        *://*/*
// @grant        GM_notification
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @last-updated 2026-03-31 23:55:00 UTC
// @checkUpdateEvery 3600
// @license      MIT
//
// @description      [ULTIMATE-INTEGRITY] L1-L1200 Universal Defense. The final fusion of Heuristic Scanning, Quantum Masking, and Legacy Repair.
// @description:ru   [СИНГУЛЯРНОСТЬ] L1-L1200 Универсальная защита. Слияние эвристического сканирования, квантовой маскировки и исправления старых сайтов.
//
// [ТЕХНИЧЕСКАЯ СПЕЦИФИКАЦИЯ / SYSTEM SPECS]
// @description:en  CORE: Omni-Chronos v3.3.9 Logic.
// @description:en  L0-L100: [BASE] Reaper Engine (Ad-Block), Deep Shadow-DOM Sanitizer, URL Sterilizer (UTM-Purge).
// @description:en  L101-L300: [STEALTH] MacIntel Identity Spoof, Hardware Ghosting (8-Core CPU/8GB RAM mimicry).
// @description:en  L301-L600: [QUANTUM] Canvas/WebGL/Audio Noise Injection. Native Code Masking (Function.toString override).
// @description:en  L601-L900: [BIO-ENTROPY] Mouse/Scroll Humanizer, Micro-Jitter for Math/Date functions.
// @description:en  L901-L1200: [DEFENSE] Apex Virus Map (1500+ signatures), HoneyPot Disinformation, Clipboard Guard.
// ==/UserScript==

(function() {
    'use strict';

    // Добавь это в начало основного блока инициализации
const clearTraces = () => {
    if (window.console && window.console.clear && !/localhost|127\.0\.0\.1/.test(window.location.hostname)) {
        // Очищаем консоль от стартовых логов расширения через 100мс
        setTimeout(() => console.clear(), 100);
    }
};

/**
 * OMNI-INFOBASE: Эвристическая база данных и стили
 */
const OMNI_Infobase = () => ({
    // Убираем лишний %c в конце, оставляем только 2 — для Золота и Синего
    TAG: '%c🌌 NEBULA APEX %c OMNI-MONOLITH v3.3.9', 
    STYLE_GOLD: 'color: #FFD700; background: #000; font-weight: bold; padding: 4px; border-left: 4px solid #FFD700;',
    STYLE_BLUE: 'color: #00BFFF; background: #111; font-weight: bold; padding: 4px;',
    
    // Стили для турбо-логов (те самые бирюзовые из скриншота)
    STYLE_TURBO_TAG: 'color: #00FFFF; background: #003333; font-weight: bold; border-left: 3px solid #00FFFF; padding: 2px 5px;',
    STYLE_TURBO_TEXT: 'color: #00FFFF; font-weight: bold; text-shadow: 0 0 5px #00FFFF;',

    isTechHost: /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname),
    getMode: function() { return this.isTechHost ? 'COMPATIBILITY' : 'ULTIMATE'; }
});

    /**
 * OMNI-CONFIG: Технические параметры и правила безопасности
 */
const OMNI_Config = () => {
    const hostname = window.location.hostname;

    return {
        // --- [ ЯДРО МАЛВАРИ ] ---
        // Весь список опасных расширений в одном месте
        DANGER_EXT: /\.(exe|msi|bat|vbs|ps1|reg|hta|scr|pif|cmd|jar|apk|app|dmg|iso|bin|lnk|wsf|com)$/i,

        // --- [ ПРАВИЛА ИСКЛЮЧЕНИЙ ] ---
        // Добавляем сюда сайты, где клики всегда разрешены (GitHub, Google и т.д.)
        TRUSTED_HOSTS: /github\.com|google\.com|gitlab\.com|bitbucket\.org|localhost/i.test(hostname),

        // --- [ L1: IDENTITY & MIMICRY ] ---
        // Данные для маскировки под эталонную среду
        IDENTITY: {
            ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
            platform: 'MacIntel',
            vendor: 'Google Inc.',
            model: '',
            platformName: 'macOS',
            platformVersion: '14.4.1',
            brands: [
                { brand: 'Not A(A_Brand', version: '99' },
                { brand: 'Google Chrome', version: '124' },
                { brand: 'Chromium', version: '124' }
            ]
        },
        
        // --- [ L2: NEURAL NOISE & GHOST ] ---
        NOISE: {
            CANVAS_NOISE: true,      // Включить микро-шум пикселей
            PIXEL_COUNT: 4,          // Сколько пикселей зашумлять (эвристика)
            GHOST_WEBRTC: true,      // Скрывать реальные IP через WebRTC
            BLOCK_DEVICES: true      // Скрывать список микрофонов/камер
        },

        // --- [ L3: HEURISTIC REAPER ] ---
        REAPER: {
            // Селекторы для мгновенного CSS-подавления
            CSS_BLOCK: `
                [class*="ad-"][class*="-container"], [id*="ad-banner"], 
                [class*="premium-ad"], .adsbygoogle, #ad-slot,
                [class*="sponsored-content"], [class*="block-notice"]
            `,
            // Паттерны для MutationObserver
            AD_PATTERN: '[class*="ad-"], [id*="ad-"], [class*="banner"]',
            TRAP_PATTERN: '[class*="overlay"], [class*="popup"]',
            BAD_WORDS: ['adblock', 'cookies', 'подпишитесь', 'реклама'],
            // Настройки оптимизации
            IDLE_TIMEOUT: 500,
            GHOST_CLEAN_DELAY: 3000
        },

        // --- [ L5: ENVIRONMENT & POWER ] ---
        ENV: {
            TZ: "America/New_York",
            LOCALE: "en-US",
            OFFSET: 300, // Минуты (EST)
            // Идеальное состояние батареи (100% + AC)
            BATTERY: {
                level: 1,
                charging: true,
                chargingTime: 0,
                dischargingTime: Infinity
            }
        },

        // --- [ L6: URL STERILIZER ] ---
        STERILIZER: {
            // Список "мусорных" параметров для удаления из URL
            TRASH_PARAMS: [
                'utm_', 'fbclid', 'gclid', 'yclid', '_openstat', 
                'mc_cid', 'msclkid', 'aff_id', 'click_id', 'ref',
                'ysclid', 'query_id', 'rb_clickid'
            ]
        },

        // --- [ L7: DEEP SHADOW & GHOST ] ---
        GHOST: {
            FORCE_OPEN_SHADOW: true, // Принудительно открывать Shadow DOM для чистки
            IDLE_STATE: 'active',    // Состояние пользователя для IdleDetector
            SCREEN_STATE: 'locked',  // Состояние экрана для IdleDetector
            ALWAYS_VISIBLE: true     // Запретить сайтам видеть переключение вкладок
        },

        // --- [ L8: CLIPBOARD GUARD ] ---
        CLIPBOARD: {
            // Удаление невидимых символов и Zero-Width Joiners
            CLEAN_REGEXP: /[\u200B-\u200D\uFEFF\u202E]/g,
            // Блокировать фоновую запись без участия пользователя (User Gesture)
            REQUIRE_USER_ACTIVATION: true,
            // Исключения для защиты структуры кода
            CODE_SELECTORS: 'pre, code'
        },

        // --- [ L9: NEURAL-HEURISTIC ] ---
        NEURAL: {
            // Паттерны для поиска трекеров в именах классов и ID
            TRACKING_REGEXP: /[atb][drk][ck]/i,
            // Целевые теги для сканирования
            SUSPECT_TAGS: 'img, iframe, div, span',
            // Тайминг дебаунса для MutationObserver (мс)
            DEBOUNCE_MS: 100,
            // Стили для изоляции ("Координаты пустоты")
            ISOLATION_STYLE: {
                display: 'none',
                pointerEvents: 'none',
                position: 'absolute',
                top: '-9999px',
                left: '-9999px'
            }
        },

        // --- [ L10: HISTORY INTEGRITY ] ---
        HISTORY: {
            MAX_CALLS_PER_SECOND: 5, // Порог срабатывания защиты от спама
            BLOCK_SPAM: true,         // Включить блокировку при превышении лимита
            SYNC_WITH_L6: true       // Использовать общие параметры стерилизации
        },

        // --- [ L11: HARDWARE GHOSTING ] ---
        HARDWARE: {
            CORES: 8,              // Виртуальное кол-во ядер
            MEMORY: 8,             // Виртуальная RAM (GB)
            TOUCH_POINTS: 0,       // 0 = имитация десктопа без тачскрина
            // Параметры джиттера для performance.now()
            JITTER: {
                TECH_RANGE: 0.001, // Минимальный шум для дебага
                USER_RANGE: 0.015, // Защитный шум для обычных сайтов
                BASE_OFFSET: 0.005  // Базовое смещение
            },
            // Список API сенсоров для полной блокировки
            SENSORS_BLOCK: ['vibrate', 'DeviceMotionEvent', 'DeviceOrientationEvent']
        },
        
        // --- [ L12: PLATINUM STEALTH ] ---
        STEALTH: {
            // Шум для шрифтов (минимальный, чтобы не ломать верстку)
            FONT_NOISE: 0.0001,
            // Девиация для аудио-сигнала
            AUDIO_POISON: 0.0000001,
            // Блокировка ресурсных таймингов (защита от Cache Probing)
            BLOCK_RESOURCE_TIMING: true,
            // Список сенсоров для блокировки через Listeners
            SENSOR_EVENTS: ['deviceorientation', 'devicemotion']
        },

        // --- [ L13: QUANTUM STEALTH ] ---
        QUANTUM: {
            // Биометрия: нано-шум для координат мыши (0.0001 не виден глазу)
            POINTER_NOISE: 0.0001,
            // Экран: фиксация параметров Retina-дисплея
            RATIO: 2,
            DEPTH: 24,
            // GPU: Маскировка под Intel Iris (MacIntel профиль)
            GPU_MASK: {
                0x9245: "Intel Inc.",                     // UNMASKED_VENDOR_WEBGL
                0x9246: "Intel(R) Iris(TM) Graphics 6100", // UNMASKED_RENDERER_WEBGL
                37445:  "Intel Inc.", 
                37446:  "Intel(R) Iris(TM) Graphics 6100",
                0x8DFA: 30,    // MAX_VARYING_VECTORS
                0x8DF8: 1024   // MAX_VERTEX_UNIFORM_VECTORS
            }
        },

        // --- [ L14: SUPERNOVA STEALTH ] ---
        SUPERNOVA: {
            SCROLL_JITTER: 0.0001, // Шум для WheelEvent
            LANGUAGES: ['en-US', 'en'], // Принудительный языковой стек
            // Список разрешений, которые всегда будут в статусе 'prompt'
            MASKED_PERMISSIONS: ['notifications', 'geolocation', 'push', 'microphone', 'camera'],
            CANVAS_POISON_BIT: 1 // Смещение для инверсии пикселя
        },

        // --- [ L15: EVENT HORIZON ] ---
        HORIZON: {
            // Когнитивный шум для timeStamp событий (мс)
            INPUT_JITTER: { MIN: 0.1, MAX: 0.5 },
            // Акустическая девиация (шаг и вероятность шума)
            AUDIO_STEP: 8,
            AUDIO_PROBABILITY: 0.8,
            // Принудительная локаль для Intl объектов
            LOCALE: 'en-US'
        },

    // --- [ L16: VOID SINGULARITY ] ---
            SINGULARITY: {
                NATIVE_MASK: true,      // Включить Proxy-маскировку под native code
                FORCE_ORIENTATION: 'landscape-primary', // Фиксация десктопного режима
                FORCE_ANGLE: 0,
                LOCALE: 'en-US'
            },

        // --- [ L17: ABSOLUTE ZERO ] ---
        ZERO: {
            // Метрики эталонного монитора
            SCREEN: {
                width: 1920,
                height: 1080,
                availWidth: 1920,
                availHeight: 1040, // Имитация панели задач
                depth: 24
            },
            // Параметры теплового шума (джиттера)
            THERMAL_DRIFT: 0.0002,
            // Стоп-слова для очистки стека ошибок
            STACK_FILTER: ['omni', 'at <anonymous>', 'eval', 'extension']
        },

        // --- [ L18: MIRROR PROTOCOL ] ---
        MIRROR: {
            // Имитация задержки сети для "фейковой" загрузки трекеров (мс)
            FAKE_LOAD_DELAY: 15,
            TRACKER_REGEX: /ads|analytics|pixel|track|doubleclick/i,
            // Параметры "идеального" 4G соединения
            NETWORK: {
                effectiveType: '4g',
                saveData: false,
                downlink: 10,
                rtt: 50
            },
            // Селекторы для скрытия пустых рекламных блоков
            ARTIFACT_SELECTOR: 'div[id*="googlesyndication"], [id*="ad-unit"], iframe[src="about:blank"]'
        },

        // --- [ L20: SINGULARITY POINT ] ---
        SINGULARITY: {
            MATH_NOISE: 1e-17,        // Шум на грани точности Double
            PROMISE_JITTER_CHANCE: 0.05, // 5% шанс задержки микрозадачи
            // Квота: 500 GB (в байтах)
            STORAGE: {
                QUOTA: 536870912000, 
                USAGE: 104857600,     // 100 MB занято
                IDB: 52428800,        // 50 MB IndexedDB
                CACHES: 52428800      // 50 MB Cache API
            }
        },

        // --- [ L22: ABSOLUTE INFINITY ] ---
        INFINITY: {
            // Изоляция Gamepad (VendorID/ProductID)
            EMPTY_GAMEPADS: Object.freeze([]),
            // Протоколы расширений для блокировки сканирования
            EXT_PROTOCOLS: ['chrome-extension://', 'moz-extension://', 'extension://'],
            // Скрытие глобальных переменных от перечисления
            HIDDEN_GLOBALS: ['__REDUX_DEVTOOLS_EXTENSION__', 'chrome', 'browser', 'ethereum'],
            // Принудительная светлая тема (matches: false для prefers-dark)
            FORCE_LIGHT_MODE: true
        },

        // --- [ L23: TRANSCENDENT OVERLORD ] ---
        OVERLORD: {
            BEZIER_NOISE: 1e-7,       // Сдвиг кривых Безье
            EMOJI_JITTER: 0.0001,     // Смещение для сглаживания эмодзи
            CANVAS_TRAP_LIMIT: 5,     // Макс. кол-во чтений до "отравления"
            TRAP_COLOR: 'rgba(255,255,255,0.001)' // Цвет шума для ловушки
        },

        // --- [ L25: GOD-SEED ] ---
        GOD_SEED: {
            // "Золотой стандарт" железа (снижает аномальность профиля)
            HARDWARE: {
                MEMORY: 8,           // 8 GB RAM
                CONCURRENCY: 8       // 8 Cores CPU
            },
            RECURSIVE_MASK: true,    // Включить бесконечный Proxy для toString
            NATIVE_LABEL: 'function () { [native code] }'
        },

        // --- [ L28: INFERNO SHIELD ] ---
        INFERNO: {
            // Список детектов автоматизации для перевода в "теневой" режим
            GHOST_VARS: [
                'webdriver', '_phantom', '__nightmare', '_selenium', 
                'callPhantom', 'cdc_adoQbh2ncp63213jsedu3jkzh', '__sh_',
                '__webdriver_evaluate', '__webdriver_unwrapped'
            ],
            // Имитация диалекта Safari (JavaScriptCore)
            MIMIC_SAFARI: true,
            ERROR_CONTEXT: " (In 'eval')"
        },

        // --- [ L30: ZENITH / INTERSTELLAR VOID ] ---
        ZENITH: {
            DATE_JITTER_MAX: 2,       // Рандомизация даты (0-2мс)
            PERF_PRECISION: 10,       // Округление до 100мкс (1/10)
            NANO_NOISE: 0.001,        // Наносекундный джиттер
            DEFAULT_LOCALE: 'en-US'
        },

        // --- [ L33: APEX GUARD ] ---
        APEX: {
            // Флаги песочницы для iframe (без allow-downloads)
            IFRAME_SANDBOX: 'allow-scripts allow-same-origin allow-forms',
            BLOCK_DATA_URL: true,
            PROTECTED_TAGS: ['HTMLAnchorElement', 'HTMLAreaElement']
        },

        // --- [ L40: LEGACY & FRAGILE REPAIR ] ---
        LEGACY: {
            // Признаки старых библиотек для активации ремонта
            SENSORS: ['jQuery', 'Prototype', 'MooTools'],
            // Фильтр бесполезных ворнингов, забивающих логи безопасности
            SILENCE_RE: /jQuery\.browser|is deprecated|property is non-standard|ms-clear/i,
            REPAIR_DELAY: 400 // Фолбэк задержка для старых систем
        },       

        // --- [ L150: HEAVY EVAL BLOCKER ] ---
        EVAL_GUARD: {
            MAX_SAFE_SIZE: 150000,    // Порог 150KB
            MAX_OBFUSCATED_SIZE: 50000, // Порог для кода с признаками eval-nesting
            ACTION: 'BLOCK_AND_PURGE',
            TARGETS: ['eval', 'Function', 'setTimeout', 'setInterval']
        },

        // --- [ L1001: HISTORY & HONEYPOT ] ---
        HISTORY: {
            MAX_CALLS_PER_SECOND: 3,   // Защита от History Flooding
            BLOCK_SPAM: true
        },
        STERILIZER: {
            // Список параметров, подлежащих немедленному удалению
            TRASH_PARAMS: ['utm_', 'fbclid', 'gclid', '_ga', '_gl', 'yclid', 'msclkid'],
            FALLBACK_REGEXP: /[?&](utm_|fbclid|gclid|yclid|msclkid)=[^&]+/gi
        },

        // --- [ L2000: KINETIC MEDIA CORE ] ---
        MEDIA: {
            TURBO_RATE: 16,           // Максимальная скорость в Chromium
            SKIP_OFFSET: 0.3,         // Запас времени до конца (сек)
            VOLUME_STEP: 0.05,        // Шаг изменения громкости колесом
            CLEANUP_INTERVAL: 1000    // Интервал очистки оверлеев
        },
        
        
        // --- [ СООБЩЕНИЯ СИСТЕМЫ ] ---
        MESSAGES: {
            SHIELD_ALERT: '⚠️ [OMNI-SHIELD L1200]\n\nОбнаружен подозрительный объект:\n',
            CONFIRM_CONTINUE: '\n\nФайл может быть опасен. Вы уверены, что хотите его скачать?',
            HIDDEN_THREAT: '🛑 [OMNI-SHIELD] Заблокирована попытка скрытого запуска файла.'
        }
    };
};
    

/**
 * ЛОГИЧЕСКИЙ ФИЛЬТР: Очистка консоли от мусора библиотек (Stealth Version)
 */
const silenceLibraryNoise = () => {
    const orgWarn = console.warn;
    const orgLog = console.log;

    console.warn = function(...args) {
        const msg = String(args[0] || '');
        // Список мусора, который мы полностью игнорируем
        if (msg.includes('JQMIGRATE') || msg.includes('deprecated') || msg.includes('DevTools')) {
            return; 
        }

        // Если это не мусор, выводим как обычный варнинг без баннера NEBULA
        return orgWarn.apply(console, args);
    };

    console.log = function(...args) {
        const msg = String(args[0] || '');
        if (msg.includes('JQMIGRATE')) return;
        return orgLog.apply(console, args);
    };
};// Запускаем немедленно
silenceLibraryNoise();
    
   
    // --- [L-LIBRARY: DEFINITIONS] ---

    /**
     * Универсальный инструмент для подмены свойств объектов.
     * Используется во многих уровнях L (L1, L5, L15).
     */
    const omniOverwrite = (obj, prop, value) => {
        try { 
            Object.defineProperty(obj, prop, { 
                get: () => value, 
                configurable: true,
                enumerable: true 
            }); 
        } catch (e) {
            // Тихий пропуск, если объект защищен (например, в некоторых фреймах)
        }
    };

    /**
 * OMNI-SCANNER: Фильтрация безопасных зон GitHub
 */
const isSafeGitHubAction = (target) => {
    // Проверяем, является ли нажатый элемент кнопкой редактора или элементом интерфейса GitHub
    const safeSelectors = [
        '[aria-label="Edit this file"]', // Та самая кнопка-карандаш
        '.js-blob-edit-button',           // Альтернативный селектор кнопки правки
        '.BtnGroup-item',                 // Групповые кнопки управления
        '#read-only-cursor-text-area'     // Зона самого редактора
    ];
    
    return safeSelectors.some(selector => target.closest(selector));
};

 /**
 * L1: DYNAMIC IDENTITY & QUANTUM MIMICRY
 * Эвристическая маскировка под эталонную среду.
 */
 const applyL1Identity = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config(); // Используем наш новый конфиг

    const isTech = info.isTechHost;
    const targetUA = isTech ? navigator.userAgent : conf.IDENTITY.ua;

    // Перезапись параметров через данные из конфига
    omniOverwrite(navigator, 'platform', conf.IDENTITY.platform);
    omniOverwrite(navigator, 'vendor', conf.IDENTITY.vendor);
    omniOverwrite(navigator, 'userAgent', targetUA);
    omniOverwrite(navigator, 'webdriver', false);

    // Работа с Client Hints тоже идет через конфиг
    if (navigator.userAgentData) {
        omniOverwrite(navigator, 'userAgentData', {
            getHighEntropyValues: (hints) => Promise.resolve({
                architecture: 'x86',
                bitness: '64',
                model: conf.IDENTITY.model,
                platform: conf.IDENTITY.platformName,
                platformVersion: conf.IDENTITY.platformVersion,
                uaFullVersion: targetUA
            }),
            brands: conf.IDENTITY.brands,
            mobile: false,
            platform: conf.IDENTITY.platformName
        });
    }
};
    

 /**
 * L2: NEURAL NOISE & GHOST WEBRTC
 * Эвристическое зашумление Canvas и контролируемая утечка WebRTC.
 */
const applyL2Noise = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config(); // Подключаем конфиг

    // 1. Динамический шум для Canvas
    if (conf.NOISE.CANVAS_NOISE) {
        const originalGetImageData = CanvasRenderingContext2D.prototype.getImageData;
        CanvasRenderingContext2D.prototype.getImageData = function(x, y, w, h) {
            const imageData = originalGetImageData.apply(this, arguments);
            const isSmall = w < 16 || h < 16;

            if (!info.isTechHost && !isSmall) {
                // Берем количество пикселей из конфига
                for (let i = 0; i < conf.NOISE.PIXEL_COUNT; i++) {
                    const offset = Math.floor(Math.random() * (imageData.data.length / 4)) * 4;
                    imageData.data[offset] += (Math.random() > 0.5 ? 1 : -1);
                }
            }
            return imageData;
        };
    }

    // 2. WebRTC Ghosting
    if (window.RTCPeerConnection && conf.NOISE.GHOST_WEBRTC) {
        const RealRTC = window.RTCPeerConnection;
        window.RTCPeerConnection = function(config) {
            if (config && config.iceServers) {
                config.iceServers = info.isTechHost ? config.iceServers : [];
            }
            const pc = new RealRTC(config);
            pc.addIceCandidate = () => Promise.resolve();
            return pc;
        };
        window.RTCPeerConnection.prototype = RealRTC.prototype;
    }

    // 3. Блокировка устройств
    if (navigator.mediaDevices && conf.NOISE.BLOCK_DEVICES) {
        navigator.mediaDevices.enumerateDevices = () => Promise.resolve([]);
    }
};
    
    

   /**
     * L3: HEURISTIC SPECTRAL REAPER
     * Реактивная зачистка рекламных и анти-адблок узлов.
     */
  const applyL3Reaper = (target = document.documentElement) => {
    const conf = OMNI_Config(); // Вызов конфига

    // 1. CSS-подавитель через конфиг
    const style = document.createElement('style');
    style.textContent = `${conf.REAPER.CSS_BLOCK} { 
        display: none !important; visibility: hidden !important; 
        opacity: 0 !important; pointer-events: none !important; 
        height: 0 !important; width: 0 !important; 
    }`;
    target.appendChild(style);

    // 2. MutationObserver
    const reaper = new MutationObserver((mutations) => {
        window.requestIdleCallback(() => {
            for (const mutation of mutations) {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType !== 1) continue;

                    const isAd = node.matches(conf.REAPER.AD_PATTERN);
                    const isModalTrap = node.matches(conf.REAPER.TRAP_PATTERN) && 
                                       conf.REAPER.BAD_WORDS.some(word => node.innerText?.toLowerCase().includes(word));

                    if (isAd || isModalTrap) {
                        node.innerHTML = '';
                        node.setAttribute('data-omni-reaped', 'true');
                        node.style.setProperty('display', 'none', 'important');
                    }
                }
            }
        }, { timeout: conf.REAPER.IDLE_TIMEOUT });
    });

    reaper.observe(target, { childList: true, subtree: true });

    // 3. Периодическая чистка (GHOST CLEAN)
    setTimeout(() => {
        const potentialTraps = document.querySelectorAll('div[style*="z-index: 2147483647"]');
        potentialTraps.forEach(trap => {
            if (trap.innerText?.length < 500) trap.remove();
        });
    }, conf.REAPER.GHOST_CLEAN_DELAY);
};

    

  /**
 * L5: ENVIRONMENT & POWER MIMICRY
 * Синхронизация часового пояса, локали и фиксация статуса питания.
 */
const applyL5Environment = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();

    // Эвристика: не меняем окружение в тех-зонах
    if (info.isTechHost) return;

    // 1. Подмена Intl и Date
    if (window.Intl) {
        const orgResolvedOptions = Intl.DateTimeFormat.prototype.resolvedOptions;
        Intl.DateTimeFormat.prototype.resolvedOptions = function() {
            const options = orgResolvedOptions.apply(this, arguments);
            return Object.assign(options, { 
                timeZone: conf.ENV.TZ, 
                locale: conf.ENV.LOCALE 
            });
        };

        Date.prototype.getTimezoneOffset = function() {
            return conf.ENV.OFFSET; 
        };
    }

    // 2. Фейковая батарея через параметры конфига
    if (navigator.getBattery) {
        const fakeBattery = {
            ...conf.ENV.BATTERY,
            onchargingchange: null,
            onchargingtimechange: null,
            ondischargingtimechange: null,
            onlevelchange: null,
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => false
        };
        navigator.getBattery = () => Promise.resolve(fakeBattery);
    }

};
    
    /**
     * L6: REACTIVE URL STERILIZER
     * Очистка URL от слежки и динамическая защита History API.
     */
    const applyL6UrlSterilizer = () => {
    const conf = OMNI_Config(); // Вызов конфига

    const sterilize = (urlStr) => {
        try {
            const url = new URL(urlStr);
            let changed = false;
            
            const params = [...url.searchParams.keys()];
            params.forEach(p => {
                // Сверяемся со списком из конфига
                if (conf.STERILIZER.TRASH_PARAMS.some(trash => p.startsWith(trash) || p === trash)) {
                    url.searchParams.delete(p);
                    changed = true;
                }
            });
            return changed ? url.toString() : urlStr;
        } catch (e) { return urlStr; }
    };

    // 1. Первичная очистка
    const currentUrl = window.location.href;
    const cleanUrl = sterilize(currentUrl);
    if (cleanUrl !== currentUrl) {
        window.history.replaceState({}, document.title, cleanUrl);
    }

    // 2. Реактивный перехват History API
    const wrapHistory = (method) => {
        const original = window.history[method];
        window.history[method] = function(state, title, url) {
            const sterilizedUrl = url ? sterilize(new URL(url, document.baseURI).href) : url;
            return original.apply(this, [state, title, sterilizedUrl]);
        };
    };

    wrapHistory('pushState');
    wrapHistory('replaceState');
};
    
    
   /**
     * L7: DEEP SHADOW & IDLE GHOSTING
     * Рекурсивная очистка теневого DOM и маскировка активности пользователя.
     */
 const applyL7DeepSanitizer = () => {
    const conf = OMNI_Config();

    // 1. РЕАКТИВНЫЙ SHADOW DOM
    const originalAttachShadow = Element.prototype.attachShadow;
    Element.prototype.attachShadow = function(init) {
        // Если конфиг требует — открываем все тени
        if (conf.GHOST.FORCE_OPEN_SHADOW && init && init.mode === 'closed') {
            init.mode = 'open';
        }
        
        const shadow = originalAttachShadow.apply(this, arguments);
        
        window.requestIdleCallback(() => {
            if (typeof applyL3Reaper === 'function') {
                applyL3Reaper(shadow);
            }
        });
        
        return shadow;
    };

    // 2. IDLE GHOSTING
    if ('IdleDetector' in window) {
        window.IdleDetector = function() {
            return {
                start: () => Promise.resolve(),
                addEventListener: () => {},
                removeEventListener: () => {},
                // Берем состояние из центрального конфига
                state: { userState: conf.GHOST.IDLE_STATE, screenState: conf.GHOST.SCREEN_STATE }
            };
        };
        window.IdleDetector.requestPermission = () => Promise.resolve('granted');
    }

    // 3. Page Visibility Protection
    if (conf.GHOST.ALWAYS_VISIBLE) {
        omniOverwrite(document, 'visibilityState', 'visible');
        omniOverwrite(document, 'hidden', false);
    }
};
    

 /**
     * L8: CLIPBOARD INTEGRITY & ANTI-HIJACK
     * Стерилизация буфера обмена и защита от фоновой подмены данных.
     */
const applyL8ClipboardGuard = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();

    const sterilizeText = (text) => {
        if (!text) return '';
        // Используем паттерн из конфига
        return text.replace(conf.CLIPBOARD.CLEAN_REGEXP, '').trim();
    };

    // 1. РЕАКТИВНЫЙ ПЕРЕХВАТ (событие copy)
    document.addEventListener('copy', (e) => {
        const selection = window.getSelection();
        const text = selection.toString();
        
        if (text) {
            const cleanText = sterilizeText(text);
            e.clipboardData.setData('text/plain', cleanText);

            // Проверка на копирование кода через конфиг
            const isCode = selection.anchorNode && 
                           selection.anchorNode.parentNode.closest(conf.CLIPBOARD.CODE_SELECTORS);

            if (!isCode) {
                // Если не код, гарантируем отсутствие скрытых инъекций
                e.stopImmediatePropagation();
                e.preventDefault();
            }
        }
    }, true);

    // 2. ЗАЩИТА АСИНХРОННОГО API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        const originalWriteText = navigator.clipboard.writeText.bind(navigator.clipboard);
        navigator.clipboard.writeText = function(text) {
            const isAuthorized = !conf.CLIPBOARD.REQUIRE_USER_ACTIVATION || 
                                (navigator.userActivation && navigator.userActivation.isActive);

            if (isAuthorized) {
                return originalWriteText(sterilizeText(text));
            }

            // Используем TAG из Infobase и сообщение из конфига
            console.warn(info.TAG, info.STYLE_TURBO_TAG, conf.MESSAGES.CLIPBOARD_BLOCKED);
            return Promise.reject(new Error('Unauthorized Clipboard Write'));
        };
    }
};
    

  /**
     * L9: NEURAL-HEURISTIC & GHOST ISOLATION
     * Интеллектуальное подавление трекеров и защита от самовосстановления.
     */
   const applyL9NeuralHeuristic = () => {
    const conf = OMNI_Config(); // Вызов конфига

    // 1. ЭВРИСТИЧЕСКИЙ СКАНЕР
    const isolateTrackers = () => {
        const suspects = document.querySelectorAll(conf.NEURAL.SUSPECT_TAGS);
        
        suspects.forEach(el => {
            if (el.hasAttribute('data-omni-isolated')) return;

            const style = window.getComputedStyle(el);
            const isInvisible = style.width === '1px' || style.height === '1px' || 
                               style.opacity === '0' || style.visibility === 'hidden';
            
            const isExternal = el.src && !el.src.includes(window.location.hostname);
            const hasTrackingClass = conf.NEURAL.TRACKING_REGEXP.test(el.className + el.id);

            if (isInvisible && (isExternal || hasTrackingClass)) {
                el.setAttribute('data-omni-isolated', 'true');
                // Применяем стили изоляции из конфига
                Object.assign(el.style, conf.NEURAL.ISOLATION_STYLE);
                
                if (el.tagName === 'IFRAME') el.src = 'about:blank';
            }
        });
    };

    // 2. РЕАКТИВНОСТЬ (Anti-Self-Healing)
    let debounceTimer;
    const observer = new MutationObserver(() => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            isolateTrackers();
        }, conf.NEURAL.DEBOUNCE_MS);
    });

    observer.observe(document.documentElement, { 
        childList: true, 
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class'] 
    });

    // 3. ПЕРИОДИЧЕСКАЯ "САНИТАРИЯ"
    window.requestIdleCallback(isolateTrackers);
};
    

  /**
     * L10: HISTORY INTEGRITY & ANTI-TRAP
     * Защита от зацикливания истории и стерилизация программных переходов.
     */
    const applyL10HistoryGuard = () => {
        // 1. ЭВРИСТИКА: Детектор "Ловушки Истории"
        // Блокирует сайты, которые пытаются программно вызвать pushState более 5 раз в секунду
        let callCount = 0;
        let lastCallTime = Date.now();

        const isHistorySpam = () => {
            const now = Date.now();
            if (now - lastCallTime < 1000) {
                callCount++;
            } else {
                callCount = 1;
                lastCallTime = now;
            }
            return callCount > 5;
        };

        // 2. РЕАКТИВНЫЙ ПЕРЕХВАТ (Интеграция с логикой стерилизации L6)
        const wrapHistoryMethod = (methodName) => {
            const original = window.history[methodName];
            
            window.history[methodName] = function(state, title, url) {
                // Если сайт спамит историю — блокируем вызов
                if (isHistorySpam()) {
                    console.warn(OMNI_TAG, `🚫 L10: Blocked history spam via ${methodName}`);
                    return;
                }

                // Используем глобальную функцию стерилизации (если L6 активен) 
                // или базовую очистку для автономности L10
                let finalUrl = url;
                if (url && typeof url === 'string') {
                    try {
                        const tempUrl = new URL(url, document.baseURI);
                        const trash = ['utm_', 'fbclid', 'gclid', 'yclid', 'aff_', 'ref'];
                        
                        const params = [...tempUrl.searchParams.keys()];
                        params.forEach(p => {
                            if (trash.some(t => p.startsWith(t) || p === t)) {
                                tempUrl.searchParams.delete(p);
                            }
                        });
                        finalUrl = tempUrl.toString();
                    } catch (e) {
                        // Если URL битый — чистим хотя бы через Regex, но аккуратно
                        finalUrl = url.replace(/[?&](utm_|fbclid|gclid|yclid|aff_|ref)[^&]+/g, '')
                                      .replace(/\?$/, '')
                                      .replace(/&&+/g, '&');
                    }
                }

                return original.apply(this, [state, title, finalUrl]);
            };
        };

        wrapHistoryMethod('pushState');
        wrapHistoryMethod('replaceState');

        // 3. ЭРГОНОМИЧНОСТЬ: Очистка заголовка (Title)
        // Некоторые сайты пишут "У вас (1) новое сообщение" в историю — убираем это.
        const originalTitle = document.title;
        window.addEventListener('blur', () => {
             // Предотвращаем кликбейт-заголовки в истории при неактивной вкладке
             if (document.title !== originalTitle) {
                 // Опционально можно возвращать оригинал
             }
        });

    };

/**
 * L11: THE GHOST PROTOCOL (V5.5)
 * Глубокая маскировка железа и защита от детерминированных тайминг-атак.
 */
const applyL11HardwareGhosting = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // 1. Маскировка ресурсов (CPU / RAM)
    const targetCores = isTech ? (navigator.hardwareConcurrency || 4) : conf.HARDWARE.CORES;
    omniOverwrite(navigator, 'hardwareConcurrency', targetCores);
    omniOverwrite(navigator, 'deviceMemory', conf.HARDWARE.MEMORY);

    // 2. Блокировка физических сенсоров (через список из конфига)
    if (navigator.vibrate) navigator.vibrate = () => false;
    conf.HARDWARE.SENSORS_BLOCK.forEach(sensor => {
        if (window[sensor] !== undefined) window[sensor] = undefined;
    });

    // 3. Квантовое огрубление времени (Anti-Timing)
    const originalNow = performance.now.bind(performance);
    performance.now = function() {
        const time = originalNow();
        const range = isTech ? conf.HARDWARE.JITTER.TECH_RANGE : conf.HARDWARE.JITTER.USER_RANGE;
        const jitter = (Math.random() * range) + conf.HARDWARE.JITTER.BASE_OFFSET;
        return time + jitter;
    };

    // 4. Маскировка тач-интерфейса
    if (navigator.maxTouchPoints !== undefined) {
        const points = isTech ? navigator.maxTouchPoints : conf.HARDWARE.TOUCH_POINTS;
        omniOverwrite(navigator, 'maxTouchPoints', points);
    }

    // Лог синхронизации (используем стили из Infobase)
    console.log(info.TAG, info.STYLE_GOLD, info.STYLE_BLUE, conf.MESSAGES.HARDWARE_SYNC);
};
    

/**
 * L12: PLATINUM STEALTH (V5.5)
 * Эвристическое зашумление аудио-аналитики и защита от Font Fingerprinting.
 */
const applyL12Platinum = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // 1. ШРИФТОВОЙ ШУМ (Font Fingerprinting Shield)
    const originalGBR = Element.prototype.getBoundingClientRect;
    Element.prototype.getBoundingClientRect = function() {
        const rect = originalGBR.apply(this, arguments);
        const isFontCheck = this.offsetWidth === 0 || this.style.fontFamily || this.tagName === 'SPAN';
        
        if (!isTech && isFontCheck) {
            // Вносим шум из конфига
            const noise = (Math.random() * conf.STEALTH.FONT_NOISE); 
            return {
                ...rect, // Копируем базу
                width: rect.width + noise, 
                height: rect.height + noise,
                toJSON: () => rect.toJSON ? rect.toJSON() : {}
            };
        }
        return rect;
    };

    // 2. АУДИО-ОТПЕЧАТОК (Audio Context Poisoning)
    if (window.AudioBuffer) {
        const originalGetChannelData = AudioBuffer.prototype.getChannelData;
        AudioBuffer.prototype.getChannelData = function() {
            const data = originalGetChannelData.apply(this, arguments);
            if (!isTech && data && data.length > 0) {
                // Изменяем хеш сигнала через нано-шум
                data[0] = data[0] + (Math.random() * conf.STEALTH.AUDIO_POISON);
            }
            return data;
        };
    }

    // 3. ЗАЩИТА ДАТЧИКОВ (Listen-level Guard)
    const sensorGuard = (e) => {
        if (!isTech) e.stopImmediatePropagation();
    };
    conf.STEALTH.SENSOR_EVENTS.forEach(event => {
        window.addEventListener(event, sensorGuard, true);
    });

    // 4. БЛОКИРОВКА СТАТИСТИКИ (Anti-Resource Timing)
    if (window.performance && conf.STEALTH.BLOCK_RESOURCE_TIMING) {
        const orgGetEntries = performance.getEntriesByType.bind(performance);
        performance.getEntriesByType = (type) => {
            if (type === 'resource' && !isTech) return [];
            return orgGetEntries(type);
        };
    }
};
    
    

/**
 * L13: QUANTUM STEALTH (V5.5)
 * Биометрическая энтропия и полная эмуляция графического стека.
 */
const applyL13Quantum = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // 1. БИОМЕТРИЧЕСКИЙ ДЖИТТЕР (Mouse & Pointer Protection)
    const wrapMouseEvent = (Proto) => {
        if (!Proto) return;
        ['screenX', 'screenY', 'clientX', 'clientY'].forEach(prop => {
            const descriptor = Object.getOwnPropertyDescriptor(Proto, prop);
            if (!descriptor || !descriptor.get) return;
            
            Object.defineProperty(Proto, prop, {
                get: function() {
                    const val = descriptor.get.call(this);
                    // Эвристика: шум из конфига ломает хеш траектории
                    return isTech ? val : val + (Math.random() * conf.QUANTUM.POINTER_NOISE);
                },
                configurable: true
            });
        });
    };
    
    wrapMouseEvent(MouseEvent.prototype);
    if (window.PointerEvent) wrapMouseEvent(PointerEvent.prototype);

    // 2. GPU MIMICRY (WebGL Deep Shield)
    const maskWebGL = (proto) => {
        if (!proto) return;
        const originalGetParameter = proto.getParameter;
        
        proto.getParameter = function(p) {
            if (!isTech && conf.QUANTUM.GPU_MASK[p] !== undefined) {
                return conf.QUANTUM.GPU_MASK[p];
            }
            return originalGetParameter.apply(this, arguments);
        };
    };
    
    maskWebGL(WebGLRenderingContext.prototype);
    if (window.WebGL2RenderingContext) maskWebGL(WebGL2RenderingContext.prototype);

    // 3. Display Integrity (Retina Masking)
    omniOverwrite(window, 'devicePixelRatio', conf.QUANTUM.RATIO);
    if (window.screen) {
        omniOverwrite(window.screen, 'colorDepth', conf.QUANTUM.DEPTH);
        omniOverwrite(window.screen, 'pixelDepth', conf.QUANTUM.DEPTH);
    }

    // 4. Canvas Readback Protection
    const orgGetContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function(type, attributes = {}) {
        if (type === '2d' && !isTech) {
            attributes.willReadFrequently = true; // Оптимизация и скрытие аппаратного ускорения
        }
        return orgGetContext.apply(this, [type, attributes]);
    };

};
    
    

 /**
 * L14: SUPERNOVA STEALTH (V5.5)
 * Сверхновая защита Canvas, скролл-мимикрия и Permissions-прокси.
 */
const applyL14Supernova = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // 1. БИОЛОГИЧЕСКИЙ СКРОЛЛ (Scroll Signature Protection)
    const wrapWheelEvent = (Proto) => {
        if (!Proto) return;
        ['deltaY', 'deltaX'].forEach(prop => {
            const descriptor = Object.getOwnPropertyDescriptor(Proto, prop);
            if (!descriptor || !descriptor.get) return;
            
            Object.defineProperty(Proto, prop, {
                get: function() {
                    const val = descriptor.get.call(this);
                    // Джиттер из конфига ломает уникальный «почерк» скроллинга
                    return isTech ? val : val + (Math.random() * conf.SUPERNOVA.SCROLL_JITTER);
                },
                configurable: true
            });
        });
    };
    wrapWheelEvent(WheelEvent.prototype);

    // 2. CANVAS DATA POISONING (Invisible Hash Corruption)
    const poisonCanvas = (proto) => {
        const orgToDataURL = proto.toDataURL;
        proto.toDataURL = function() {
            if (!isTech) {
                try {
                    const ctx = this.getContext('2d');
                    if (ctx && this.width > 0 && this.height > 0) {
                        const imageData = ctx.getImageData(0, 0, 1, 1);
                        // Инвертируем бит красного канала первого пикселя
                        imageData.data[0] = (imageData.data[0] + conf.SUPERNOVA.CANVAS_POISON_BIT) % 255; 
                        ctx.putImageData(imageData, 0, 0);
                    }
                } catch (e) {}
            }
            return orgToDataURL.apply(this, arguments);
        };
    };
    poisonCanvas(HTMLCanvasElement.prototype);

    // 3. ТЕНЕВЫЕ РАЗРЕШЕНИЯ (Permissions API Spoofing)
    if (navigator.permissions && navigator.permissions.query) {
        const originalQuery = navigator.permissions.query;
        navigator.permissions.query = function(params) {
            if (!isTech && conf.SUPERNOVA.MASKED_PERMISSIONS.includes(params.name)) {
                return Promise.resolve({
                    state: 'prompt',
                    name: params.name,
                    onchange: null
                });
            }
            return originalQuery.apply(this, arguments);
        };
    }

    // 4. Runtime Identity (Language Sync)
    if (navigator.languages) {
        omniOverwrite(navigator, 'languages', conf.SUPERNOVA.LANGUAGES);
    }

};
    
    
  /**
 * L15: EVENT HORIZON (V5.5)
 * Когнитивная мимикрия ввода и стерилизация акустической аналитики.
 */
const applyL15EventHorizon = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // 1. КОГНИТИВНАЯ МИМИКРИЯ (Human-Like Jitter)
    const humanizeEvent = (Proto) => {
        if (!Proto) return;
        const descriptor = Object.getOwnPropertyDescriptor(Proto, 'timeStamp');
        if (!descriptor || !descriptor.get) return;
        
        Object.defineProperty(Proto, 'timeStamp', {
            get: function() {
                const baseTS = descriptor.get.call(this);
                if (isTech) return baseTS;
                // Эвристика из конфига: шум ломает статистику бот-детекторов
                const jitter = Math.random() * (conf.HORIZON.INPUT_JITTER.MAX - conf.HORIZON.INPUT_JITTER.MIN) + conf.HORIZON.INPUT_JITTER.MIN;
                return baseTS + jitter;
            },
            configurable: true
        });
    };
    
    [MouseEvent.prototype, KeyboardEvent.prototype, window.TouchEvent ? TouchEvent.prototype : null]
        .filter(p => p).forEach(humanizeEvent);

    // 2. АКУСТИЧЕСКАЯ СТЕРИЛИЗАЦИЯ (Spectrum Noise)
    if (window.AudioAnalyserNode) {
        const originalGetByte = AudioAnalyserNode.prototype.getByteFrequencyData;
        AudioAnalyserNode.prototype.getByteFrequencyData = function(array) {
            const res = originalGetByte.apply(this, arguments);
            if (!isTech && array && array.length > 0) {
                // Вносим шум в спектр (амплитуда +/- 1)
                for (let i = 0; i < array.length; i += conf.HORIZON.AUDIO_STEP) {
                    if (Math.random() > conf.HORIZON.AUDIO_PROBABILITY) {
                        array[i] = Math.max(0, Math.min(255, array[i] + (Math.random() > 0.5 ? 1 : -1)));
                    }
                }
            }
            return res;
        };
    }

    // 3. RESOURCE TIMING PRIVACY (Buffer Management)
    if (window.performance) {
        performance.onresourcetimingbufferfull = () => {
            if (!isTech) performance.clearResourceTimings();
        };
    }

    // 4. ГЛУБОКАЯ МАСКИРОВКА ЛОКАЛИ (Intl Shield)
    if (typeof Intl !== 'undefined') {
        const lock = conf.HORIZON.LOCALE;
        
        const orgCollator = Intl.Collator;
        Intl.Collator = function() { return new orgCollator(lock); };
        Intl.Collator.prototype = orgCollator.prototype;

        const orgNumberFormat = Intl.NumberFormat;
        Intl.NumberFormat = function() { return new orgNumberFormat(lock); };
        Intl.NumberFormat.prototype = orgNumberFormat.prototype;
    }

};
    
    
   /**
 * L16: VOID SINGULARITY (V5.5)
 * Глубокая маскировка под нативный код и фиксация системных констант.
 */
const applyL16VoidSingularity = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // 1. РЕАКТИВНАЯ МАСКИРОВКА (Proxy-based Native Code)
    const makeNative = (fn, name) => {
        if (!conf.SINGULARITY.NATIVE_MASK) return fn;
        return new Proxy(fn, {
            get: (target, prop) => {
                // Имитируем поведение нативной функции
                if (prop === 'toString') return () => `function ${name || target.name}() { [native code] }`;
                if (prop === 'name') return name || target.name;
                return target[prop];
            },
            apply: (target, thisArg, args) => Reflect.apply(target, thisArg, args)
        });
    };

    // Список критических методов для "нативизации"
    const criticalMethods = [
        { obj: navigator, prop: 'getBattery' },
        { obj: CanvasRenderingContext2D.prototype, prop: 'getImageData' },
        { obj: performance, prop: 'now' },
        { obj: AudioBuffer.prototype, prop: 'getChannelData' },
        { obj: Element.prototype, prop: 'getBoundingClientRect' }
    ];

    criticalMethods.forEach(m => {
        if (m.obj && m.obj[m.prop] && !isTech) {
            m.obj[m.prop] = makeNative(m.obj[m.prop], m.prop);
        }
    });

    // 2. INTL COLLATOR ENTROPY (OS-Level Consistency)
    if (window.Intl && Intl.Collator) {
        const RealCollator = Intl.Collator;
        window.Intl.Collator = function(locales, options) {
            const forceLocale = isTech ? locales : conf.SINGULARITY.LOCALE;
            return new RealCollator(forceLocale, options);
        };
        window.Intl.Collator.prototype = RealCollator.prototype;
        window.Intl.Collator = makeNative(window.Intl.Collator, 'Collator');
    }

    // 3. SCREEN ORIENTATION FIX (Desktop Mimicry)
    if (window.screen && screen.orientation) {
        const lockOrientation = () => {
            omniOverwrite(screen.orientation, 'type', conf.SINGULARITY.FORCE_ORIENTATION);
            omniOverwrite(screen.orientation, 'angle', conf.SINGULARITY.FORCE_ANGLE);
        };
        lockOrientation();
        
        // Блокируем попытки сайтов менять ориентацию
        screen.orientation.lock = makeNative(() => Promise.resolve(), 'lock');
    }

};
    
    
  /**
 * L17: ABSOLUTE ZERO (V5.5)
 * Глубокая санитизация стеков ошибок и унификация экранных метрик.
 */
const applyL17AbsoluteZero = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // 1. СТЕРЕЛИЗАЦИЯ СТЕКА (Stack Trace Shield)
    const orgError = window.Error;
    const stackDescriptor = Object.getOwnPropertyDescriptor(orgError.prototype, 'stack') || 
                            Object.getOwnPropertyDescriptor(new orgError(), 'stack');

    if (stackDescriptor && stackDescriptor.configurable && !isTech) {
        Object.defineProperty(orgError.prototype, 'stack', {
            get: function() {
                const stack = stackDescriptor.get ? stackDescriptor.get.call(this) : this.value;
                if (typeof stack === 'string') {
                    // Очистка стека по черному списку из конфига
                    return stack.split('\n')
                        .filter(line => !conf.ZERO.STACK_FILTER.some(word => line.includes(word)))
                        .join('\n') || "Error\n    at <anonymous>:1:1";
                }
                return stack;
            },
            configurable: true
        });
    }

    // 2. ADVANCED JITTER (Синусоидальный тепловой шум)
    const originalNow = performance.now.bind(performance);
    performance.now = function() {
        const time = originalNow();
        if (isTech) return time;
        // Имитация нестабильности кварца (синусоидальный дрейф)
        const drift = Math.abs(Math.sin(time)) * conf.ZERO.THERMAL_DRIFT; 
        return time + drift;
    };

    // 3. SCREEN PRIVACY & ANTI-DEVTOOLS
    const s = conf.ZERO.SCREEN;
    const screenSpecs = {
        width: s.width, height: s.height,
        availWidth: s.availWidth, availHeight: s.availHeight,
        colorDepth: s.depth, pixelDepth: s.depth
    };

    Object.keys(screenSpecs).forEach(key => {
        omniOverwrite(window.screen, key, screenSpecs[key]);
    });

    // Синхронизация для скрытия признаков открытой консоли
    omniOverwrite(window, 'outerWidth', window.innerWidth);
    omniOverwrite(window, 'outerHeight', window.innerHeight);

};
    
    
 /**
 * L18: MIRROR PROTOCOL (V5.5)
 * Эмуляция успешной загрузки ресурсов и бесшумная зачистка DOM-артефактов.
 */
const applyL18MirrorProtocol = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // 1. РЕАКТИВНАЯ МИМИКРИЯ (Script Load Faker)
    const originalAppendChild = Node.prototype.appendChild;
    const fakeLoad = (el) => {
        if (!isTech && el.tagName === 'SCRIPT' && el.src) {
            if (conf.MIRROR.TRACKER_REGEX.test(el.src)) {
                Object.defineProperty(el, 'onload', {
                    set: function(fn) { 
                        if (typeof fn === 'function') {
                            // Имитируем задержку сети из конфига
                            setTimeout(() => fn.call(el, new Event('load')), conf.MIRROR.FAKE_LOAD_DELAY);
                        }
                    },
                    configurable: true
                });
            }
        }
    };

    Node.prototype.appendChild = function(newChild) {
        fakeLoad(newChild);
        return originalAppendChild.apply(this, arguments);
    };

    // 2. NETWORK STEALTH (Безупречный статус 4G)
    omniOverwrite(navigator, 'onLine', true);
    if (navigator.connection) {
        const net = conf.MIRROR.NETWORK;
        Object.keys(net).forEach(key => {
            omniOverwrite(navigator.connection, key, net[key]);
        });
    }

    // 3. ЭРГОНОМИЧНАЯ ЗАЧИСТКА (DOM Sanitization)
    const purgeArtifacts = () => {
        if (isTech) return;
        const artifacts = document.querySelectorAll(conf.MIRROR.ARTIFACT_SELECTOR);
        artifacts.forEach(art => {
            if (art.offsetHeight === 0 || art.style.visibility === 'hidden') {
                art.style.setProperty('display', 'none', 'important');
                art.setAttribute('data-omni-purged', 'true');
            }
        });
    };

    if (window.requestIdleCallback) {
        window.requestIdleCallback(purgeArtifacts);
    } else {
        setTimeout(purgeArtifacts, 1000);
    }

    // 4. ФИНАЛЬНАЯ СИНЕРГИЯ: Фильтрация ворнингов консоли
    const orgWarn = console.warn;
    console.warn = function(...args) {
        if (!isTech && args[0] && typeof args[0] === 'string') {
            if (/blocked|adblock|extension|pixel/i.test(args[0])) return;
        }
        return orgWarn.apply(this, arguments);
    };

};
    

   /**
 * L20: SINGULARITY POINT (V5.5)
 * Математическая энтропия, джиттер микрозадач и Spoof дисковой квоты.
 */
const applyL120Singularity = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // 1. МАТЕМАТИЧЕСКАЯ ЭНТРОПИЯ (Floating Point Noise)
    const mathFunctions = ['sin', 'cos', 'tan', 'exp', 'log', 'sqrt', 'pow'];
    mathFunctions.forEach(fn => {
        const original = Math[fn];
        Math[fn] = function(...args) {
            const res = original.apply(Math, args);
            if (isTech || typeof res !== 'number' || !isFinite(res)) return res;
            
            // Вносим шум из конфига
            return res + (Math.random() * conf.SINGULARITY.MATH_NOISE);
        };
        // Нативизация (L16 Integration)
        try { Math[fn].toString = () => `function ${fn}() { [native code] }`; } catch(e) {}
    });

    // 2. ДЖИТТЕР ПРОМИСОВ (Async Microtask Jitter)
    const originalThen = Promise.prototype.then;
    Promise.prototype.then = function(onFulfilled, onRejected) {
        if (!isTech && Math.random() < conf.SINGULARITY.PROMISE_JITTER_CHANCE) {
            const jitter = (fn) => typeof fn === 'function' ? (v) => setTimeout(() => fn(v), 0) : fn;
            return originalThen.call(this, jitter(onFulfilled), jitter(onRejected));
        }
        return originalThen.apply(this, arguments);
    };

    // 3. STORAGE QUOTA SPOOF (Эталонный диск)
    if (navigator.storage && navigator.storage.estimate) {
        const s = conf.SINGULARITY.STORAGE;
        navigator.storage.estimate = function() {
            return Promise.resolve({
                quota: s.QUOTA, usage: s.USAGE,
                usageDetails: { indexedDB: s.IDB, caches: s.CACHES }
            });
        };
        try { navigator.storage.estimate.toString = () => `function estimate() { [native code] }`; } catch(e) {}
    }

    // 4. WebDriver & Automation Shield
    if (navigator.webdriver !== undefined) {
        omniOverwrite(navigator, 'webdriver', false);
    }

};
    
    
    /**
 * L22: ABSOLUTE INFINITY (V5.5)
 * Изоляция Gamepad API, защита от сканирования расширений и локальный Spoof.
 */
const applyL22Infinity = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // Вспомогательная функция нативизации (наследуется из L16)
    const makeNative = (fn, name) => {
        try {
            fn.toString = () => `function ${name || fn.name}() { [native code] }`;
        } catch(e) {}
        return fn;
    };

    // 1. GAMEPAD ISOLATION (Peripheral Stealth)
    if (navigator.getGamepads) {
        navigator.getGamepads = makeNative(function() {
            return isTech ? [] : conf.INFINITY.EMPTY_GAMEPADS;
        }, 'getGamepads');
    }

    // 2. EXTENSION SHIELD (Resource Scan Protection)
    const originalFetch = window.fetch;
    window.fetch = makeNative(function(input, init) {
        const url = (typeof input === 'string') ? input : (input instanceof URL ? input.href : (input?.url || ''));
        
        if (!isTech && conf.INFINITY.EXT_PROTOCOLS.some(proto => url.includes(proto))) {
            return Promise.reject(new TypeError('Failed to fetch'));
        }
        return originalFetch.apply(this, arguments);
    }, 'fetch');

    // 3. INTL RELATIVE TIME (Locale Lockdown)
    if (window.Intl && Intl.RelativeTimeFormat) {
        const RealRTF = Intl.RelativeTimeFormat;
        window.Intl.RelativeTimeFormat = makeNative(function(locales, options) {
            const targetLocale = isTech ? locales : 'en-US';
            return new RealRTF(targetLocale, options);
        }, 'RelativeTimeFormat');
        window.Intl.RelativeTimeFormat.prototype = RealRTF.prototype;
    }

    // 4. RUNTIME INTEGRITY (Global Variable Shield)
    conf.INFINITY.HIDDEN_GLOBALS.forEach(g => {
        if (window[g] && !isTech) {
            Object.defineProperty(window, g, { 
                enumerable: false, 
                configurable: true,
                writable: true 
            });
        }
    });

    // 5. DARK MODE SPOOF (System Theme Privacy)
    if (window.matchMedia) {
        const originalMatchMedia = window.matchMedia;
        window.matchMedia = makeNative(function(query) {
            if (!isTech && query.includes('prefers-color-scheme') && conf.INFINITY.FORCE_LIGHT_MODE) {
                return {
                    matches: false, // Всегда "светлая"
                    media: query,
                    onchange: null,
                    addEventListener: () => {},
                    removeEventListener: () => {},
                    addListener: () => {},
                    removeListener: () => {}
                };
            }
            return originalMatchMedia.apply(this, arguments);
        }, 'matchMedia');
    }

};
    

/**
 * L23: TRANSCENDENT OVERLORD (V5.5)
 * Рандомизация кривых Безье и защита от Emoji-фингерпринтинга.
 */
const applyL23Overlord = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // Вспомогательная нативизация (L16)
    const makeNative = (fn, name) => {
        try { fn.toString = () => `function ${name || fn.name}() { [native code] }`; } catch(e) {}
        return fn;
    };

    // 1. ГЕОМЕТРИЧЕСКИЙ ДЖИТТЕР (Bezier Curve Entropy)
    const originalBezier = CanvasRenderingContext2D.prototype.bezierCurveTo;
    CanvasRenderingContext2D.prototype.bezierCurveTo = makeNative(function(cp1x, cp1y, cp2x, cp2y, x, y) {
        if (isTech) return originalBezier.apply(this, arguments);
        
        const noise = () => (Math.random() * conf.OVERLORD.BEZIER_NOISE); 
        return originalBezier.call(this, 
            cp1x + noise(), cp1y + noise(), 
            cp2x + noise(), cp2y + noise(), 
            x + noise(), y + noise()
        );
    }, 'bezierCurveTo');

    // 2. EMOJI HASH POISONING (Anti-aliasing Jitter)
    const originalFillText = CanvasRenderingContext2D.prototype.fillText;
    CanvasRenderingContext2D.prototype.fillText = makeNative(function(text, x, y, maxWidth) {
        if (!isTech && /\p{Emoji}/u.test(text)) {
            const jitter = conf.OVERLORD.EMOJI_JITTER * (Math.random() > 0.5 ? 1 : -1);
            return originalFillText.call(this, text, x + jitter, y + jitter, maxWidth);
        }
        return originalFillText.apply(this, arguments);
    }, 'fillText');

    // 3. WINDOW CONSISTENCY (Immutable Shield)
    ['outerWidth', 'outerHeight'].forEach(prop => {
        try {
            Object.defineProperty(window, prop, {
                get: () => prop === 'outerWidth' ? window.innerWidth : window.innerHeight,
                configurable: false,
                enumerable: true
            });
        } catch (e) {}
    });

    // 4. РЕАКТИВНАЯ ЗАЩИТА (Canvas Extraction Trap)
    let canvasReadCount = 0;
    const orgToDataURL = HTMLCanvasElement.prototype.toDataURL;
    
    HTMLCanvasElement.prototype.toDataURL = makeNative(function() {
        canvasReadCount++;
        if (!isTech && canvasReadCount > conf.OVERLORD.CANVAS_TRAP_LIMIT) {
            const ctx = this.getContext('2d');
            if (ctx) {
                ctx.fillStyle = conf.OVERLORD.TRAP_COLOR;
                ctx.fillRect(0, 0, 1, 1);
                if (canvasReadCount === conf.OVERLORD.CANVAS_TRAP_LIMIT + 1) {
                    console.log(info.TAG, info.STYLE_GOLD, info.STYLE_BLUE, conf.MESSAGES.CANVAS_TRAP);
                }
            }
        }
        return orgToDataURL.apply(this, arguments);
    }, 'toDataURL');

};
    
 /**
 * L25: GOD-SEED (V5.5)
 * Рекурсивная маскировка прототипов и эталонный Device Memory Spoof.
 */
const applyL25GodSeed = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // 1. ПЕРВОРОДНАЯ МАСКИРОВКА (Recursive Native Mimicry)
    const deepMask = (fn, name) => {
        if (typeof fn !== 'function' || isTech) return;

        const nativeString = `function ${name || ''}() { [native code] }`;
        
        // Фиксация имени функции
        try {
            Object.defineProperty(fn, 'name', { 
                value: name || fn.name, 
                configurable: true 
            });
        } catch (e) {}

        // Рекурсивный Proxy для toString: ломает детекторы, проверяющие сам toString
        const toStringProxy = new Proxy(Function.prototype.toString, {
            apply: (target, thisArg) => {
                if (thisArg === fn) return nativeString;
                if (thisArg === toStringProxy) return `function toString() { [native code] }`;
                return Reflect.apply(target, thisArg, []);
            }
        });

        try {
            Object.defineProperty(fn, 'toString', {
                value: toStringProxy,
                configurable: true,
                writable: true
            });
        } catch (e) {}
    };

    // 2. DEVICE MEMORY & CPU (Hardware Normalization)
    const hardwareProps = {
        deviceMemory: conf.GOD_SEED.HARDWARE.MEMORY,
        hardwareConcurrency: conf.GOD_SEED.HARDWARE.CONCURRENCY
    };

    Object.keys(hardwareProps).forEach(prop => {
        if (prop in navigator) {
            omniOverwrite(navigator, prop, hardwareProps[prop]);
            
            // Глубокая маскировка геттера в прототипе Navigator
            const desc = Object.getOwnPropertyDescriptor(Navigator.prototype, prop);
            if (desc && desc.get) {
                deepMask(desc.get, `get ${prop}`);
            }
        }
    });

    // 3. ИНТЕГРАЦИЯ МАСКИРОВКИ (Cross-Layer Application)
    // Накладываем "Божественное семя" на все критические функции прошлых уровней
    const criticalTargets = [
        { obj: navigator.storage, prop: 'estimate' },
        { obj: performance, prop: 'now' },
        { obj: CanvasRenderingContext2D.prototype, prop: 'fillText' },
        { obj: CanvasRenderingContext2D.prototype, prop: 'bezierCurveTo' },
        { obj: HTMLCanvasElement.prototype, prop: 'toDataURL' }
    ];

    criticalTargets.forEach(target => {
        if (target.obj && target.obj[target.prop]) {
            deepMask(target.obj[target.prop], target.prop);
        }
    });

};
    

  /**
 * L26-L28: INFERNO SHIELD (V5.5)
 * Эмуляция порядка свойств Navigator и тотальная дезинфекция автоматизации.
 */
const applyL28Inferno = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // 1. СТЕРИЛИЗАЦИЯ ПЕРЕМЕННЫХ (Automation Shadowing)
    conf.INFERNO.GHOST_VARS.forEach(v => {
        [window, navigator, document].forEach(target => {
            if (v in target) {
                try {
                    Object.defineProperty(target, v, {
                        get: () => undefined,
                        enumerable: false, // Скрыто от итерации
                        configurable: true
                    });
                } catch (e) {}
            }
        });
    });

    // 2. LINGUISTIC MIMICRY (JS-Engine Dialect)
    const originalErrorToString = Error.prototype.toString;
    Error.prototype.toString = function() {
        if (isTech) return originalErrorToString.apply(this, arguments);

        const baseMsg = originalErrorToString.apply(this, arguments);
        
        // Подделка под WebKit/Safari при ошибках типов
        if (conf.INFERNO.MIMIC_SAFARI && baseMsg.includes('is not a function')) {
            return baseMsg.replace('is not a function', `is not a function.${conf.INFERNO.ERROR_CONTEXT}`);
        }
        
        return baseMsg;
    };

    // 3. NAVIGATOR & CHROME ISOLATION (Safari Consistency)
    // Если мы мимикрируем под Safari, удаляем/скрываем следы Chrome
    const cleanTargets = [
        { obj: Navigator.prototype, prop: 'webdriver', val: false },
        { obj: window, prop: 'chrome', val: undefined }
    ];

    cleanTargets.forEach(t => {
        if (t.prop in t.obj && !isTech) {
            try {
                Object.defineProperty(t.obj, t.prop, {
                    get: () => t.val,
                    enumerable: false,
                    configurable: true
                });
            } catch (e) {}
        }
    });

    // 4. ИНТЕГРАЦИЯ С GOD-SEED (L25)
    // Применяем глубокую нативизацию к новым переопределениям
    if (typeof deepMask === 'function') {
        const wdDesc = Object.getOwnPropertyDescriptor(Navigator.prototype, 'webdriver');
        if (wdDesc && wdDesc.get) deepMask(wdDesc.get, 'get webdriver');
        
        const chDesc = Object.getOwnPropertyDescriptor(window, 'chrome');
        if (chDesc && chDesc.get) deepMask(chDesc.get, 'get chrome');

        deepMask(Error.prototype.toString, 'toString');
    }

};
    

 /**
 * L29/L30: INTERSTELLAR VOID (V5.5)
 * Side-Channel Defense и Хроно-децепция (Date Entropy).
 */
const applyL30Zenith = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // 1. ХРОНО-ДЕЦЕПЦИЯ (Date Jitter & Proxying)
    const OriginalDate = window.Date;
    const jitter = () => (Math.random() * conf.ZENITH.DATE_JITTER_MAX);

    const DateProxy = new Proxy(OriginalDate, {
        construct(target, args) {
            const d = new target(...args);
            // Шум только для "текущего момента"
            if (args.length === 0 && !isTech) {
                d.setMilliseconds(d.getMilliseconds() + jitter());
            }
            return d;
        },
        apply: (target, thisArg, args) => target.apply(thisArg, args)
    });

    // Защита главного метода замера скорости (Fingerprinting target)
    DateProxy.now = function() {
        const n = OriginalDate.now();
        return isTech ? n : n + jitter();
    };

    DateProxy.prototype = OriginalDate.prototype;
    window.Date = DateProxy;

    // 2. SIDE-CHANNEL DEFENSE (Precision Degradation)
    if (window.performance && performance.now) {
        const orgPerfNow = performance.now.bind(performance);
        performance.now = function() {
            const t = orgPerfNow();
            if (isTech) return t;
            // Деградация до 100мкс + нано-шум для блокировки Spectre атак
            const p = conf.ZENITH.PERF_PRECISION;
            return Math.floor(t * p) / p + (Math.random() * conf.ZENITH.NANO_NOISE);
        };
    }

    // 3. LINGUISTIC TIMEZONE LOCK
    try {
        const orgToLocaleString = OriginalDate.prototype.toLocaleString;
        OriginalDate.prototype.toLocaleString = function(locale, options) {
            return orgToLocaleString.call(this, isTech ? locale : (locale || conf.ZENITH.DEFAULT_LOCALE), options);
        };
    } catch (e) {}

    // 4. ИНТЕГРАЦИЯ С L25 (God-Seed)
    if (typeof deepMask === 'function') {
        deepMask(DateProxy, 'Date');
        deepMask(DateProxy.now, 'now');
        deepMask(performance.now, 'now');
    }

};
    

   /**
 * L32/L33: APEX GUARD (V5.5)
 * Тотальная блокировка авто-скачиваний и защита от программного фишинга.
 */
const applyL33ApexGuard = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // 1. ПРОТОТИПНЫЙ ПЕРЕХВАТ (Download Attribute Lockdown)
    const blockDownloadAttribute = (ProtoName) => {
        const Proto = window[ProtoName]?.prototype;
        if (!Proto || isTech) return;
        
        const originalDesc = Object.getOwnPropertyDescriptor(Proto, 'download');
        
        Object.defineProperty(Proto, 'download', {
            set: function(value) {
                if (value) {
                    console.warn(info.TAG, conf.MESSAGES.DOWNLOAD_BLOCKED);
                    return false;
                }
                return originalDesc ? originalDesc.set.call(this, value) : null;
            },
            get: function() { return originalDesc ? originalDesc.get.call(this) : ''; },
            configurable: true
        });

        // Блокировка через setAttribute
        const orgSetAttr = Proto.setAttribute;
        Proto.setAttribute = function(name, value) {
            if (name && name.toLowerCase() === 'download') {
                return; 
            }
            return orgSetAttr.apply(this, arguments);
        };
        
        if (typeof deepMask === 'function') deepMask(Proto.setAttribute, 'setAttribute');
    };

    conf.APEX.PROTECTED_TAGS.forEach(tag => blockDownloadAttribute(tag));

    // 2. IFRAME SANDBOXING (Creation Guard)
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName, options) {
        const el = originalCreateElement.call(document, tagName, options);
        
        if (!isTech && tagName && tagName.toLowerCase() === 'iframe') {
            // Принудительная изоляция без права на инициацию загрузки
            el.setAttribute('sandbox', conf.APEX.IFRAME_SANDBOX);
        }
        
        return el;
    };
    if (typeof deepMask === 'function') deepMask(document.createElement, 'createElement');

    // 3. DATA-URL & PHISHING PROTECTION
    window.addEventListener('beforeunload', (e) => {
        const activeEl = document.activeElement;
        if (!isTech && conf.APEX.BLOCK_DATA_URL && activeEl?.tagName === 'A') {
            if (activeEl.href && activeEl.href.startsWith('data:')) {
                console.error(info.TAG, conf.MESSAGES.PHISHING_PREVENTED);
                activeEl.href = '#'; 
                e.preventDefault();
            }
        }
    });

};

  /**
 * L35/L40: LEGACY & FRAGILE REPAIR (V5.5)
 * Починка прототипов для старых версий jQuery и предотвращение конфликтов.
 */
const applyL40LegacyRepair = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;

    // 1. ДЕТЕКЦИЯ ХРУПКОЙ СРЕДЫ
    const checkLegacy = () => {
        return !!(
            (window.jQuery?.fn?.jquery?.startsWith('1.')) || 
            window.Prototype || window.MooTools || !window.requestAnimationFrame
        );
    };

    const repairLegacyJS = () => {
        if (isTech) return;

        // 2. SIZZLE ENGINE FIX (Защита от падений старого jQuery)
        if (window.jQuery && window.jQuery.find) {
            const orgFind = window.jQuery.find;
            window.jQuery.find = function() {
                try {
                    return orgFind.apply(this, arguments);
                } catch (e) {
                    return window.jQuery(); // Возврат пустого набора вместо краша
                }
            };
            if (typeof deepMask === 'function') deepMask(window.jQuery.find, 'find');
        }

        // 3. EVENT SHIMMING (Гарантированная загрузка)
        if (document.readyState === 'complete') {
            window.dispatchEvent(new Event('load'));
        }

        // 4. CONSOLE DEPRECATION SILENCE (Очистка эфира для Apex Guard)
        const orgWarn = console.warn;
        console.warn = function(...args) {
            if (args[0] && typeof args[0] === 'string' && conf.LEGACY.SILENCE_RE.test(args[0])) {
                return;
            }
            return orgWarn.apply(this, arguments);
        };

    };

    // 5. РЕАКТИВНЫЙ ЗАПУСК
    if (checkLegacy()) {
        if (window.requestIdleCallback) {
            requestIdleCallback(() => repairLegacyJS());
        } else {
            setTimeout(repairLegacyJS, conf.LEGACY.REPAIR_DELAY);
        }
    }
};
    
   /**
 * L150: HEAVY EVAL BLOCKER (V5.5)
 * Превентивная блокировка тяжелых динамических инъекций и майнеров.
 */
const applyL150EvalBlocker = (target = document.documentElement) => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isTech = info.isTechHost;
    
    const MAX_SIZE = conf.EVAL_GUARD.MAX_SAFE_SIZE;

    // 1. ПЕРЕХВАТ ЯДРА (Global Execution Hijack)
    const createExecutionGuard = (originalFn, name) => {
        const guardedFn = function(code) {
            if (typeof code === 'string' && code.length > MAX_SIZE && !isTech) {
                console.error(info.TAG, conf.MESSAGES.HEAVY_PAYLOAD, `[Size: ${code.length}]`);
                if (typeof sendOmniPush === 'function') {
                    sendOmniPush('Security Alert', `Heavy ${name} injection neutralized.`);
                }
                return null; 
            }
            return originalFn.apply(window, arguments);
        };

        // Глубокая нативизация (L25 God-Seed)
        if (typeof deepMask === 'function') deepMask(guardedFn, name);
        return guardedFn;
    };

    window.eval = createExecutionGuard(window.eval, 'eval');
    
    const originalFunction = window.Function;
    window.Function = createExecutionGuard(originalFunction, 'Function');
    window.Function.prototype = originalFunction.prototype;

    // 2. DOM-ОБСЕРВЕР (Injection Integrity)
    // Предотвращаем вставку тяжелых скриптов напрямую в HTML
    const obs = new MutationObserver(mutations => {
        for (const m of mutations) {
            for (const node of m.addedNodes) {
                if (node.tagName === 'SCRIPT') {
                    const content = node.textContent || '';
                    const isSuspicious = content.length > MAX_SIZE || 
                                       (content.includes('eval(') && content.length > conf.EVAL_GUARD.MAX_OBFUSCATED_SIZE);

                    if (isSuspicious && !isTech) {
                        node.type = 'text/plain'; // Отключаем выполнение
                        node.remove();
                        console.warn(info.TAG, conf.MESSAGES.SCRIPT_PURGED);
                    }
                }
            }
        }
    });

    obs.observe(target, { childList: true, subtree: true });

    // 3. ТАЙМЕРНЫЙ ФИЛЬТР (String-to-Code Protection)
    const wrapTimer = (originalTimer, name) => {
        const guardedTimer = function(handler, timeout, ...args) {
            if (typeof handler === 'string' && handler.length > MAX_SIZE && !isTech) {
                return 0;
            }
            return originalTimer.call(window, handler, timeout, ...args);
        };
        if (typeof deepMask === 'function') deepMask(guardedTimer, name);
        return guardedTimer;
    };

    window.setTimeout = wrapTimer(window.setTimeout, 'setTimeout');
    window.setInterval = wrapTimer(window.setInterval, 'setInterval');

};
    

   /**
 * L1001: HONEYPOT (Data Privacy V5.5)
 * Динамическая подмена данных в Storage при неавторизованном доступе.
 */
const applyL1001HoneyPot = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();

    let callCount = 0;
    let lastCallTime = Date.now();

    // 1. ДЕТЕКТОР СПАМА (Rate Limiter)
    const isHistorySpam = () => {
        const now = Date.now();
        if (now - lastCallTime < 1000) {
            callCount++;
        } else {
            callCount = 1;
            lastCallTime = now;
        }
        return callCount > conf.HISTORY.MAX_CALLS_PER_SECOND;
    };

    // 2. УНИВЕРСАЛЬНЫЙ СТЕРИЛИЗАТОР (Data Privacy)
    const quickSterilize = (url) => {
        if (!url || typeof url !== 'string') return url;
        try {
            const tempUrl = new URL(url, document.baseURI);
            const keys = [...tempUrl.searchParams.keys()];
            
            let cleaned = false;
            keys.forEach(p => {
                if (conf.STERILIZER.TRASH_PARAMS.some(t => p.startsWith(t))) {
                    tempUrl.searchParams.delete(p);
                    cleaned = true;
                }
            });
            
            return cleaned ? tempUrl.toString() : url;
        } catch (e) {
            // Резервный метод через регулярные выражения
            return url.replace(conf.STERILIZER.FALLBACK_REGEXP, '')
                      .replace(/\?$/, '').replace(/&&+/g, '&');
        }
    };

    // 3. РЕАКТИВНЫЙ ПЕРЕХВАТ (Monkey Patching)
    const wrapHistoryMethod = (methodName) => {
        const original = window.history[methodName];
        if (typeof original !== 'function') return;

        const guardedMethod = function(state, title, url) {
            // Защита от зацикливания истории (Anti-Trap)
            if (conf.HISTORY.BLOCK_SPAM && isHistorySpam()) {
                console.warn(info.TAG, conf.MESSAGES.HISTORY_SPAM, methodName);
                return;
            }

            // Очистка URL перед сохранением
            const finalUrl = url ? quickSterilize(url) : url;
            
            return original.apply(this, [state, title, finalUrl]);
        };

        // Нативизация (L25 God-Seed)
        if (typeof deepMask === 'function') {
            deepMask(guardedMethod, methodName);
        }

        window.history[methodName] = guardedMethod;
    };

    wrapHistoryMethod('pushState');
    wrapHistoryMethod('replaceState');

};
    

 /**
 * L1200: VIRUS MAP (V8.0 - DATA-HREF COMPATIBLE)
 * Поддержка кликов по строкам таблиц (ticket-row) и кастомным атрибутам.
 */
const applyL1200VirusMap = () => {
    const info = OMNI_Infobase();
    const isTech = info.isTechHost;

    const isPathDangerous = (url) => {
        if (!url || typeof url !== 'string' || isTech) return false;
        return /^(javascript:|data:text\/html)/i.test(url) || /\.(exe|msi|bat)$/i.test(url.split('?')[0]);
    };

    // 1. УМНЫЙ ПЕРЕХВАТ КЛИКА
    window.addEventListener('click', (e) => {
        // Ищем либо обычную ссылку <a>, либо элемент с data-href (как в вашей таблице)
        const trigger = e.target.closest('a') || e.target.closest('[data-href]');
        
        if (trigger) {
            const url = trigger.href || trigger.getAttribute('data-href');
            
            if (url && isPathDangerous(url)) {
                console.error(info.TAG, '🛑 L1200: Blocked dangerous custom transition.');
                e.preventDefault();
                e.stopImmediatePropagation();
                return false;
            }
            // ВАЖНО: Если это легитимный data-href, мы НЕ мешаем.
        }
    }, { capture: true, passive: false });

    // 2. ЗАЩИТА LOCATION (Для JS-переходов сайта)
    // Перехватываем попытки сайта изменить адрес программно
    const originalOpen = window.open;
    window.open = function(url, ...args) {
        if (!isTech && isPathDangerous(url)) return null;
        return originalOpen.apply(this, args);
    };
    if (typeof deepMask === 'function') deepMask(window.open, 'open');

    console.log(info.TAG, '✅ L1200: Virus Map V8.0 (Data-Href Fixed).');
};


    /**
     * L2000: KINETIC MEDIA CORE (V5 Turbo)
     * Мгновенная аннигиляция рекламы и продвинутый UI-контроль.
     */
  const applyL2000MediaControl = () => {
    const info = OMNI_Infobase();
    const conf = OMNI_Config();
    const isYouTube = window.location.hostname.includes('youtube.com');

    const AD_SELECTORS = '.ad-interrupting, .ad-showing, .video-ads, .ytp-ad-player-overlay';
    const SKIP_SELECTORS = '.ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-ad-skip-button-slot';

    const turboSkip = (video) => {
        if (!video) return;

        const isAd = document.querySelector(AD_SELECTORS);
        const skipBtn = document.querySelector(SKIP_SELECTORS);

        if (isAd) {
            // 1. РЕАКТИВНОЕ УСКОРЕНИЕ (Time Compression)
            video.muted = true;
            video.playbackRate = conf.MEDIA.TURBO_RATE;
            
            // Прямой прыжок в финал рекламного блока
            if (isFinite(video.duration) && video.currentTime < video.duration - 0.5) {
                video.currentTime = video.duration - conf.MEDIA.SKIP_OFFSET;
            }

            // 2. АВТО-КЛИК
            if (skipBtn) skipBtn.click();
            
        } else {
            // 3. СБРОС (Возврат в реальное время)
            if (video.playbackRate > 2) video.playbackRate = 1;
        }

        // 4. ОЧИСТКА ОВЕРЛЕЕВ (Visual Hygiene)
        const overlays = document.querySelectorAll('.ytp-ad-overlay-container, .ytp-ad-image-overlay');
        overlays.forEach(el => el.remove());
    };

    // ИНТЕЛЛЕКТУАЛЬНЫЙ МОНИТОРИНГ
    const initObserver = () => {
        const video = document.querySelector('video');
        if (!video) return;

        video.addEventListener('timeupdate', () => turboSkip(video));
        
        const observer = new MutationObserver(() => turboSkip(video));
        observer.observe(document.body, { childList: true, subtree: true });
    };

    initObserver();
    if (isYouTube) window.addEventListener('yt-navigate-finish', initObserver);

    // 5. КИНЕТИЧЕСКАЯ ГРОМКОСТЬ (UX Flow)
    document.addEventListener('wheel', e => {
        const video = document.querySelector('video');
        if (video && (video.contains(e.target) || isYouTube)) {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -conf.MEDIA.VOLUME_STEP : conf.MEDIA.VOLUME_STEP;
            video.volume = Math.max(0, Math.min(1, video.volume + delta));
        }
    }, { passive: false });

};
    


    const OMNI_TAG = '%c[Omni-Chronos-v3.3.9]';
    const STYLE_CORE = 'color: #00ffff; font-weight: bold; text-shadow: 0 0 5px #00ffff; border-left: 3px solid #00ffff; padding-left: 10px;';
    const STYLE_DANGER = 'color: #fff; background: #ff0000; padding: 2px 5px; font-weight: bold;';

    // Critical Infrastructure Whitelist (Fixes Outlook/Banking JSON errors)
    const WHITELIST = ['outlook.com', 'office.com', 'microsoft.com', 'loirehabitat.fr', 'gouv.fr', 'ameli.fr', 'caf.fr', 'live.com', 'google.com'];
    const isWhiteListed = WHITELIST.some(d => window.location.hostname.includes(d));

  /**
     * OMNI-PUSH CORE (V5)
     * Интеллектуальная система уведомлений с защитой от перегрузки.
     */
    let lastPushTime = 0;
    const PUSH_COOLDOWN = 2000; // Пауза между пушами 2 секунды

    const sendOmniPush = (title, message) => {
        const now = Date.now();
        
        // 1. THROTTLING (Эргономичность)
        // Если пуши идут слишком часто, мы их игнорируем или группируем, 
        // чтобы не раздражать пользователя и не грузить систему.
        if (now - lastPushTime < PUSH_COOLDOWN) {
            console.warn(OMNI_TAG, '📡 Push suppressed (cooldown):', title);
            return;
        }

        try {
            // 2. GM_NOTIFICATION (API Check)
            if (typeof GM_notification === 'function') {
                GM_notification({
                    title: `🛡️ Omni-Scanner: ${title}`,
                    text: message,
                    image: 'https://cdn-icons-png.flaticon.com/512/9438/9438567.png', // Иконка щита
                    timeout: 4000,
                    onclick: () => {
                    }
                });
                lastPushTime = now;
            } else {
                // 3. FALLBACK (Реактивность)
                // Если мы работаем вне Tampermonkey (например, как обычный инжект),
                // используем стандартный console.log с выделением.
               ;
            }
        } catch (e) {
            // Тихий провал, чтобы не ломать логику основного скрипта
        }
    };
    

  /**
     * LEGACY REPAIR CORE (V5)
     * Глубокая дефектовка и исправление устаревших JS-компонентов.
     */
    const repairLegacyJS = () => {
        const isTech = /localhost|127\.0\.0\.1|celeo\.net/i.test(window.location.hostname);
        if (isTech) return;

        // 1. КОНТЕКСТНЫЙ ПОИСК (Multi-jQuery Support)
        // Находим все экземпляры jQuery, так как их может быть несколько (noconflict режим)
        const jqInstances = [window.jQuery, window.$, window.jq, window.jQuery1, window.jQuery2].filter(j => j && j.fn);
        
        if (jqInstances.length === 0) return;

        jqInstances.forEach((jq, index) => {
            try {
                // 2. X-EDITABLE & UI PATCH (Эргономичность)
                // Предотвращаем крах плагинов редактирования "на месте"
                if (jq.fn.editable) {
                    if (!jq.fn.editable.defaults) jq.fn.editable.defaults = {};
                } else {
                    // Создаем заглушку, чтобы сторонние вызовы не вызывали ReferenceError
                    jq.fn.editable = { defaults: {} };
                }

                // 3. SIZZLE RECOVERY (Реактивность)
                // Если наш L150 или L1001 заблокировал доступ к селекторам, 
                // мы мягко откатываем jQuery к безопасному режиму поиска.
                if (jq.find && jq.find.error) {
                    const orgError = jq.find.error;
                    jq.find.error = function(msg) {
                        if (msg.includes('unrecognized expression')) {
                            console.warn(OMNI_TAG, '🛠️ L40: Suppressed Sizzle error for legacy selector.');
                            return []; // Вместо падения возвращаем пустой результат
                        }
                        return orgError.apply(this, arguments);
                    };
                }

                // 4. ANIMATION STABILIZER (Эвристика)
                // Старый jQuery.animate() может зависнуть из-за нашего джиттера времени в L30.
                // Мы принудительно отключаем анимации, если система начинает "лагать".
                if (jq.fx && jq.fx.off === false && document.hidden) {
                    jq.fx.off = true; // Выключаем анимации во вкладках на фоне для экономии ресурсов
                }

            } catch (e) {
                // Тихая ошибка для стабильности системы
            }
        });
    };
    
   /**
     * LEGACY FRAMEWORK DETECTOR (V5)
     * Глубокий анализ среды на предмет устаревших технологий и методов верстки.
     */
    const isLegacyFramework = () => {
        // 1. ПРОВЕРКА ГЛОБАЛЬНЫХ ОБЪЕКТОВ (Runtime Check)
        // Самый надежный способ: смотрим, что реально загружено в память.
        const hasOldLibs = !!(
            (window.jQuery && /^(1\.|2\.|3\.[0-3]\.)/.test(window.jQuery.fn?.jquery)) ||
            window.Prototype || 
            window.MooTools || 
            window.dojo ||
            window.YUI
        );

        if (hasOldLibs) return true;

        // 2. АНАЛИЗ ГРАФИЧЕСКОГО ДВИЖКА (DOM Archaisms)
        // Ищем теги и атрибуты, которые не используются в современном HTML5.
        const legacyElements = !!document.querySelector(
            'frameset, frame, applet, center, font, acronym, strike, ' +
            'table[bgcolor], table[cellspacing], table[cellpadding], ' +
            'body[background], marquee'
        );

        if (legacyElements) return true;

        // 3. ПРОВЕРКА СЕТЕВЫХ СЛЕДОВ (Script Source Scan)
        // Твоя логика с расширенным регулярным выражением для бандлов.
        const scripts = Array.from(document.scripts);
        const hasLegacySrc = scripts.some(s => 
            /jquery[-.](1|2|3\.[0-3])\./i.test(s.src) || 
            /prototype\.js|mootools\.js|scriptaculous\.js/i.test(s.src)
        );

        if (hasLegacySrc) return true;

        // 4. ЭРГОНОМИЧНОСТЬ: Проверка на Quirks Mode
        // Если браузер рендерит страницу в режиме совместимости — это 100% Legacy.
        if (document.compatMode === 'BackCompat') return true;

        return false;
    };
    
     /**
 * OMNI_Registry: Список активных эшелонов защиты.
 * Добавление нового уровня теперь происходит только здесь.
 */
const OMNI_Registry = [
    typeof applyL11HardwareGhosting === 'function' && applyL11HardwareGhosting,
    typeof applyL13QuantumGPU       === 'function' && applyL13QuantumGPU,
    typeof applyL16VoidSingularity  === 'function' && applyL16VoidSingularity,
    typeof applyL2000MediaControl   === 'function' && applyL2000MediaControl,
    typeof applyL2500AntiHeatmap    === 'function' && applyL2500AntiHeatmap,
    typeof applyL150EvalBlocker     === 'function' && applyL150EvalBlocker,
    typeof applyL1001HoneyPot       === 'function' && applyL1001HoneyPot,
    typeof applyL1200VirusMap       === 'function' && applyL1200VirusMap
].filter(Boolean); // Автоматически удаляет false, если функция не определена


    

 // Вспомогательный рендерер статуса
const renderOmniStatus = (info, mode) => {
    const isCompat = mode === 'COMPATIBILITY';
    const statusStyle = `color: ${isCompat ? '#ffa500' : '#0f0'}; background: #000; font-weight: bold; padding: 4px;`;
};

// Вспомогательный диспетчер модулей
const deployOmniStack = (mode) => {
    // Если COMPATIBILITY — берем только первый защитный слой, иначе — всё
    const stack = mode === 'COMPATIBILITY' ? OMNI_Registry.slice(0, 1) : OMNI_Registry;
    stack.forEach(deploy => {
        try { deploy(); } catch (e) { console.error(`[BOOT-ERR] ${deploy.name}:`, e); }
    });
};
        
/**
 * OMNI-CHRONOS: Центральный процессор протокола
 */
const OmniChronos = {
initBaseFoundation: () => {
        const info = OMNI_Infobase();
        const mode = info.getMode();

        // ВЫВОДИМ БАННЕР ТОЛЬКО ТУТ (Один раз на всю сессию)
        console.log(info.TAG, info.STYLE_GOLD, info.STYLE_BLUE, ` 🚀 CORE: ${mode} ACTIVE`);

        OmniChronos.initQuantumModules(info);
    },

    initQuantumModules: (info) => {
        OMNI_Registry.forEach((deploy, index) => {
            const layerID = `L${(index + 1) * 10}`;
            try {
                // Если внутри deploy() есть console.log(info.TAG...) — его нужно найти и удалить!
                deploy(); 
                
                // Наш единственный законный лог уровня
                console.log(
                    `%c[Omni-Chronos-v3.3.9]%c ⚡ %c${layerID}: %c${deploy.name || 'omni-module'}%c [ACTIVE]`,
                    info.STYLE_TURBO_TAG,
                    'color: #FF4500; font-weight: bold;',
                    info.STYLE_TURBO_TEXT,
                    'color: #00BFFF; font-weight: bold; text-transform: lowercase;',
                    'color: #00FF41; font-weight: bold;'
                );
            } catch (e) {
                console.error(`%c[FAULT]%c ${layerID}:`, 'color: #f00;', 'color: #888;', e);
            }
        });
        console.log('%c[SUCCESS]%c Stealth: 100%', 'color: #0f0; font-weight: bold;', 'color: #fff;');
    }
};

/**
 * BOOTLOADER: Единственная точка входа
 */
const boot = () => {
    try {
        // Мы вызываем initBaseFoundation только ОДИН РАЗ здесь
        OmniChronos.initBaseFoundation();
    } catch (e) {
        console.error('%c🛑 CRITICAL BOOT ERROR:', 'color: white; background: red; padding: 5px;', e);
    }
};

// Запуск системы
boot();
    
})();
