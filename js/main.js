// Datele pentru roadmap

// Datele pentru roadmap
const roadmapData = {
    'internet-basics': {
        title: 'Cum funcționează Internetul?',
        description: 'Înțelegerea fundamentelor internetului',
        content: `
            <h4>Ce este Internetul?</h4>
            <p>Internetul este o rețea globală de computere și dispozitive interconectate, care comunică între ele folosind protocoale standard. Această infrastructură face posibilă navigarea web, emailul, streaming-ul și multe alte servicii.</p>
            <h4>Componente fundamentale:</h4>
            <ul>
                <li><strong>ISP (Internet Service Provider)</strong>: furnizorul care îți oferă acces la Internet (ex: Orange, Digi)</li>
                <li><strong>IP Address</strong>: identificator numeric unic pentru fiecare dispozitiv conectat (ex: 192.168.0.1)</li>
                <li><strong>Router</strong>: dispozitiv care conectează rețeaua locală la Internet</li>
                <li><strong>Pachete de date</strong>: informațiile sunt trimise sub formă de pachete prin rețea</li>
                <li><strong>DNS</strong>: traduce nume de domenii în adrese IP</li>
                <li><strong>Firewall</strong>: protejează rețeaua de acces neautorizat</li>
            </ul>
            <h4>Cum ajunge o pagină web la tine?</h4>
            <ol>
                <li>Scrii un URL în browser</li>
                <li>Browserul cere adresa IP prin DNS</li>
                <li>Se face conexiunea către serverul web</li>
                <li>Serverul trimite codul HTML, care este afișat</li>
            </ol>
            <h4>Resurse utile:</h4>
            <ul>
                <li><a href="https://www.youtube.com/watch?v=7_LPdttKXPc" target="_blank">How the Internet Works - Video</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work" target="_blank">MDN: How does the Internet work?</a></li>
                <li><a href="https://www.cloudflare.com/learning/network-layer/what-is-the-internet/" target="_blank">Cloudflare: What is the Internet?</a></li>
            </ul>
        `,
        type: 'required'
    },
    'http': {
        title: 'Ce este HTTP?',
        description: 'Protocolul de transfer hipertext',
        content: `
            <h4>HTTP (HyperText Transfer Protocol)</h4>
            <p>HTTP este protocolul de comunicație folosit pentru transferul de date pe web. Este baza comunicării între browser și server.</p>
            <h4>Structura cererilor și răspunsurilor:</h4>
            <ul>
                <li><strong>Request</strong>: browserul cere resurse (HTML, imagini, etc.)</li>
                <li><strong>Response</strong>: serverul trimite înapoi datele cerute</li>
            </ul>
            <h4>Metode HTTP:</h4>
            <ul>
                <li><strong>GET</strong>: obține date</li>
                <li><strong>POST</strong>: trimite date (ex: formulare)</li>
                <li><strong>PUT/DELETE</strong>: modifică/șterge date</li>
                <li><strong>PATCH</strong>: modifică parțial date</li>
            </ul>
            <h4>Status codes:</h4>
            <ul>
                <li>200 OK - succes</li>
                <li>301/302 Redirect - redirecționare</li>
                <li>404 Not Found - resursa nu există</li>
                <li>500 Server Error - eroare pe server</li>
            </ul>
            <h4>HTTPS:</h4>
            <p>O versiune securizată a HTTP, folosește criptare SSL/TLS pentru protejarea datelor transmise.</p>
            <h4>Headers și Cookies:</h4>
            <ul>
                <li>Headers transmit informații suplimentare (ex: Content-Type, Authorization)</li>
                <li>Cookies stochează date pe client pentru sesiuni sau preferințe</li>
            </ul>
            <h4>Resurse practice:</h4>
            <ul>
                <li>Analizează cererile în tab-ul Network din DevTools</li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP" target="_blank">MDN: HTTP Overview</a></li>
            </ul>
        `,
        type: 'required'
    },
    'domain': {
        title: 'Nume de domeniu',
        description: 'Cum funcționează domeniile web',
        content: `
            <h4>Ce este un nume de domeniu?</h4>
            <p>Un domeniu este o adresă ușor de memorat care înlocuiește adresa IP a unui server. Ex: <strong>openai.com</strong></p>
            <h4>Structura unui domeniu:</h4>
            <ul>
                <li><strong>TLD</strong> (Top-Level Domain): .com, .org, .ro</li>
                <li><strong>SLD</strong> (Second-Level Domain): openai în „openai.com”</li>
                <li><strong>Subdomeniu</strong>: www, docs, blog</li>
            </ul>
            <h4>Înregistrarea unui domeniu:</h4>
            <ol>
                <li>Alegi un registrar (GoDaddy, Namecheap, etc.)</li>
                <li>Verifici disponibilitatea</li>
                <li>Plătești domeniul (anual)</li>
                <li>Configurezi DNS-ul către serverul tău</li>
            </ol>
            <h4>Alte informații:</h4>
            <ul>
                <li>Domeniile pot fi transferate între registrari</li>
                <li>Protecția WHOIS pentru confidențialitate</li>
            </ul>
        `,
        type: 'required'
    },
    'hosting': {
        title: 'Hosting și servere',
        description: 'Unde sunt găzduite site-urile web',
        content: `
            <h4>Ce este web hosting?</h4>
            <p>Este un serviciu care permite publicarea site-ului pe internet. Fără hosting, site-ul tău nu ar putea fi accesat online.</p>
            <h4>Tipuri de hosting:</h4>
            <ul>
                <li><strong>Shared Hosting</strong> - multe site-uri pe același server</li>
                <li><strong>VPS</strong> - server virtual cu resurse proprii</li>
                <li><strong>Dedicated</strong> - întreg serverul este al tău</li>
                <li><strong>Cloud Hosting</strong> - flexibil, scalabil, bazat pe mai multe servere</li>
                <li><strong>Serverless</strong> - fără gestionarea directă a serverelor</li>
            </ul>
            <h4>Factori de alegere:</h4>
            <ul>
                <li>Preț</li>
                <li>Uptime garantat</li>
                <li>Performanță și SSD</li>
                <li>Panou de control (ex: cPanel)</li>
                <li>Suport tehnic</li>
                <li>Securitate și backup</li>
            </ul>
            <h4>Exemple de provideri:</h4>
            <ul>
                <li>HostGator, Bluehost, DigitalOcean, AWS, Google Cloud, Netlify, Vercel</li>
            </ul>
        `,
        type: 'required'
    },
    'dns': {
        title: 'DNS',
        description: 'Sistemul de nume de domenii',
        content: `
            <h4>Ce este DNS?</h4>
            <p>DNS (Domain Name System) traduce numele de domenii în adrese IP. Este ca o „agendă telefonică” a Internetului.</p>
            <h4>Cum funcționează:</h4>
            <ol>
                <li>Scrii „openai.com” în browser</li>
                <li>Browserul întreabă DNS-ul care este IP-ul</li>
                <li>DNS răspunde cu IP-ul serverului</li>
                <li>Se stabilește conexiunea și se încarcă pagina</li>
            </ol>
            <h4>Tipuri de înregistrări:</h4>
            <ul>
                <li><strong>A</strong>: IP IPv4</li>
                <li><strong>AAAA</strong>: IP IPv6</li>
                <li><strong>CNAME</strong>: alias (ex: www -> domeniu principal)</li>
                <li><strong>MX</strong>: servere de email</li>
                <li><strong>TXT</strong>: verificări, autentificări</li>
                <li><strong>NS</strong>: name servers</li>
            </ul>
            <h4>Instrumente utile:</h4>
            <ul>
                <li><a href="https://dnschecker.org/" target="_blank">DNS Checker</a></li>
            </ul>
        `,
        type: 'required'
    },
    'browsers': {
        title: 'Browsere web',
        description: 'Cum funcționează browserele',
        content: `
            <h4>Ce este un browser?</h4>
            <p>Este o aplicație care interpretează cod HTML/CSS/JS și afișează o pagină web interactivă pentru utilizator.</p>
            <h4>Componente interne:</h4>
            <ul>
                <li><strong>Rendering engine</strong>: interpretează HTML/CSS (ex: Blink, Gecko)</li>
                <li><strong>JavaScript engine</strong>: rulează codul JS (ex: V8 în Chrome)</li>
                <li><strong>Network layer</strong>: gestionează conexiunile HTTP</li>
                <li><strong>Storage</strong>: cookies, sessionStorage, localStorage</li>
            </ul>
            <h4>Browsere populare:</h4>
            <ul>
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Apple Safari</li>
                <li>Microsoft Edge</li>
            </ul>
            <h4>Instrumente pentru dezvoltatori:</h4>
            <ul>
                <li>Inspectarea DOM-ului</li>
                <li>Debugging JS</li>
                <li>Monitorizarea rețelei (Network)</li>
                <li>Performance și Lighthouse</li>
            </ul>
        `,
        type: 'required'
    },
    'html-basics': {
        title: 'Noțiuni de bază HTML',
        description: 'Structura și elementele de bază',
        content: `
            <h4>HTML (HyperText Markup Language)</h4>
            <p>HTML este limbajul standard de marcare folosit pentru a crea pagini web. Definește structura documentului, folosind etichete.</p>
            <h4>Structura de bază a unui document HTML:</h4>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Titlul paginii&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Salut lume!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
            <h4>Elemente frecvente:</h4>
            <ul>
                <li>&lt;h1&gt;-&lt;h6&gt; - titluri</li>
                <li>&lt;p&gt; - paragraf</li>
                <li>&lt;a&gt; - link</li>
                <li>&lt;img&gt; - imagine</li>
                <li>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt; - liste</li>
                <li>&lt;div&gt;, &lt;span&gt; - containere</li>
                <li>&lt;form&gt; - formulare</li>
            </ul>
            <h4>Semantica HTML:</h4>
            <ul>
                <li>&lt;header&gt;, &lt;footer&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, &lt;nav&gt;</li>
            </ul>
            <h4>Resurse utile:</h4>
            <ul>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">MDN: HTML</a></li>
            </ul>
        `,
        type: 'required'
    },
    'css-basics': {
        title: 'Fundamentele CSS',
        description: 'Selectori, proprietăți și valori',
        content: `
            <h4>CSS (Cascading Style Sheets)</h4>
            <p>CSS este limbajul folosit pentru a stiliza paginile HTML: culori, poziționare, fonturi și layout.</p>
            <h4>Exemplu:</h4>
            <pre><code>p {
  color: blue;
  font-size: 16px;
}</code></pre>
            <h4>Selectori:</h4>
            <ul>
                <li>Element: <code>p</code></li>
                <li>Clasă: <code>.nume-clasa</code></li>
                <li>ID: <code>#id</code></li>
                <li>Pseudo-clasă: <code>a:hover</code></li>
            </ul>
            <h4>Proprietăți frecvente:</h4>
            <ul>
                <li>color, background-color</li>
                <li>margin, padding, border</li>
                <li>width, height</li>
                <li>font-family, font-size</li>
                <li>display, position, flex, grid</li>
            </ul>
            <h4>Resurse utile:</h4>
            <ul>
                <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">CSS Tricks: Flexbox</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">MDN: CSS</a></li>
            </ul>
        `,
        type: 'required'
    },
    'js-basics': {
        title: 'Concepte de bază JS',
        description: 'Variabile, funcții, obiecte',
        content: `
            <h4>JavaScript</h4>
            <p>JS este limbajul care adaugă interactivitate site-urilor. Este un limbaj de programare rulabil în browser.</p>
            <h4>Variabile:</h4>
            <pre><code>let nume = "Ion";
const PI = 3.14;</code></pre>
            <h4>Funcții:</h4>
            <pre><code>function salut(nume) {
  return "Salut, " + nume;
}</code></pre>
            <h4>Obiecte:</h4>
            <pre><code>const persoana = {
  nume: "Ana",
  varsta: 25
};</code></pre>
            <h4>Tipuri de date:</h4>
            <ul>
                <li>string, number, boolean, object, array, null, undefined</li>
            </ul>
            <h4>Evenimente și DOM:</h4>
            <ul>
                <li>addEventListener, manipularea elementelor HTML</li>
            </ul>
            <h4>Resurse utile:</h4>
            <ul>
                <li><a href="https://javascript.info/" target="_blank">JavaScript.info</a></li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">MDN: JavaScript</a></li>
            </ul>
        `,
        type: 'required'
    },
    'git-basics': {
        title: 'Introducere în Git',
        description: 'Comenzi de bază și workflow',
        content: `
            <h4>Git - Sistem de control al versiunii</h4>
            <p>Git urmărește modificările codului în timp, permițând colaborarea și revenirea la versiuni anterioare.</p>
            <h4>Comenzi esențiale:</h4>
            <pre><code>git init
git add .
git commit -m "Mesaj"
git status
git log
git push</code></pre>
            <h4>Workflow tipic:</h4>
            <ol>
                <li>Scrii cod</li>
                <li>git add .</li>
                <li>git commit -m "Mesaj"</li>
                <li>git push</li>
            </ol>
            <h4>Concepte importante:</h4>
            <ul>
                <li><strong>Repository</strong> - Depozitul de cod</li>
                <li><strong>Commit</strong> - Instantaneu al modificărilor</li>
                <li><strong>Branch</strong> - Ramură de dezvoltare</li>
                <li><strong>Merge</strong> - Combinarea ramurilor</li>
            </ul>
            <h4>Resurse utile:</h4>
            <ul>
                <li><a href="https://git-scm.com/doc" target="_blank">Documentație oficială Git</a></li>
                <li><a href="https://learngitbranching.js.org/" target="_blank">Learn Git Branching</a></li>
            </ul>
        `,
        type: 'required'
    },
    'github-intro': {
        title: 'Ce este GitHub?',
        description: 'O platformă pentru găzduirea și colaborarea pe proiecte Git',
        content: `
            <h4>GitHub</h4>
            <p>GitHub este o platformă online care permite dezvoltatorilor să găzduiască, să partajeze și să colaboreze la proiecte folosind Git.</p>
            <ul>
                <li>Permite versionarea codului și colaborarea în echipă</li>
                <li>Oferă instrumente pentru code review, issue tracking și CI/CD</li>
                <li>Proiectele pot fi publice sau private</li>
            </ul>
            <h4>Resurse utile:</h4>
            <ul>
                <li><a href="https://docs.github.com/en/get-started" target="_blank">GitHub Docs: Get started</a></li>
            </ul>
        `,
        type: 'required'
    },
    'github-repo': {
        title: 'Repozitoare (Repositories)',
        description: 'Crearea și gestionarea proiectelor pe GitHub',
        content: `
            <h4>Ce este un repository?</h4>
            <p>Un repository (repo) este un depozit de cod sursă și istoricul modificărilor sale.</p>
            <ul>
                <li>Poți crea un repo nou din interfața GitHub</li>
                <li>Fiecare repo are propriul istoric Git</li>
                <li>Poate conține cod, documentație, wiki, issues</li>
            </ul>
            <h4>Resurse utile:</h4>
            <ul>
                <li><a href="https://docs.github.com/en/repositories" target="_blank">GitHub Docs: About repositories</a></li>
            </ul>
        `,
        type: 'required'
    },
    'github-clone-push': {
        title: 'Clone, Commit, Push',
        description: 'Interacțiunea cu GitHub din terminal',
        content: `
            <h4>Clone, Commit, Push</h4>
            <ul>
                <li><strong>git clone</strong>: descarcă un repo de pe GitHub pe calculatorul tău</li>
                <li><strong>git commit</strong>: salvează modificările local</li>
                <li><strong>git push</strong>: trimite modificările pe GitHub</li>
            </ul>
            <pre><code>git clone https://github.com/user/repo.git
git add .
git commit -m "Mesaj"
git push</code></pre>
            <h4>Resurse utile:</h4>
            <ul>
                <li><a href="https://docs.github.com/en/get-started/quickstart" target="_blank">GitHub Quickstart</a></li>
            </ul>
        `,
        type: 'required'
    },
    'github-branches': {
        title: 'Branch-uri',
        description: 'Lucrul pe versiuni paralele ale codului',
        content: `
            <h4>Branch-uri</h4>
            <p>Branch-urile permit dezvoltarea de funcționalități noi fără a afecta codul principal.</p>
            <ul>
                <li><strong>git branch nume</strong>: creează o ramură nouă</li>
                <li><strong>git checkout nume</strong>: schimbă ramura curentă</li>
                <li><strong>git merge nume</strong>: unește o ramură cu alta</li>
            </ul>
            <h4>Resurse utile:</h4>
            <ul>
                <li><a href="https://www.atlassian.com/git/tutorials/using-branches" target="_blank">Git Branches Tutorial</a></li>
            </ul>
        `,
        type: 'required'
    },
    'github-pull-requests': {
        title: 'Pull Requests',
        description: 'Propunerea de modificări și revizuirea codului',
        content: `
            <h4>Pull Request (PR)</h4>
            <p>Un pull request este o propunere de a integra modificările dintr-o ramură în alta (de obicei în main).</p>
            <ul>
                <li>Permite code review și discuții înainte de integrare</li>
                <li>Poate declanșa acțiuni automate (CI/CD)</li>
            </ul>
            <h4>Resurse utile:</h4>
            <ul>
                <li><a href="https://docs.github.com/en/pull-requests" target="_blank">GitHub Docs: Pull requests</a></li>
            </ul>
        `,
        type: 'required'
    },
    'github-issues': {
        title: 'Issues și Managementul Taskurilor',
        description: 'Urmărirea bug-urilor și planificarea lucrului',
        content: `
            <h4>Issues</h4>
            <p>Issues sunt folosite pentru a urmări bug-uri, sugestii și taskuri.</p>
            <ul>
                <li>Fiecare issue poate avea etichete, asignees, milestone</li>
                <li>Poți închide sau comenta pe un issue</li>
            </ul>
            <h4>Resurse utile:</h4>
            <ul>
                <li><a href="https://docs.github.com/en/issues" target="_blank">GitHub Docs: Issues</a></li>
            </ul>
        `,
        type: 'optional'
    },
    'github-actions': {
        title: 'GitHub Actions',
        description: 'Automatizarea proceselor (CI/CD)',
        content: `
            <h4>GitHub Actions</h4>
            <p>GitHub Actions permite automatizarea fluxurilor de lucru (build, test, deploy) direct din repo.</p>
            <ul>
                <li>Scrii workflow-uri în fișiere YAML în .github/workflows</li>
                <li>Poți automatiza testarea, build-ul, deploy-ul și multe altele</li>
            </ul>
            <h4>Resurse utile:</h4>
            <ul>
                <li><a href="https://docs.github.com/en/actions" target="_blank">GitHub Docs: Actions</a></li>
            </ul>
        `,
        type: 'optional'
    }
};

// Funcții pentru gestionarea progresului
class ProgressManager {
    constructor() {
        this.storageKey = 'frontend-roadmap-progress';
        this.progress = this.loadProgress();
        this.updateStats();
    }

    loadProgress() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : {};
    }

    saveProgress() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
        this.updateStats();
        this.updateNodeStates();
    }

    markCompleted(topicId) {
        this.progress[topicId] = true;
        this.saveProgress();
    }

    markIncomplete(topicId) {
        delete this.progress[topicId];
        this.saveProgress();
    }

    isCompleted(topicId) {
        return !!this.progress[topicId];
    }

    getCompletedCount() {
        return Object.keys(this.progress).length;
    }

    getTotalCount() {
        return Object.keys(roadmapData).length;
    }

    getProgressPercentage() {
        const total = this.getTotalCount();
        const completed = this.getCompletedCount();
        return total > 0 ? Math.round((completed / total) * 100) : 0;
    }

    updateStats() {
        const totalElement = document.getElementById('totalTopics');
        const completedElement = document.getElementById('completedTopics');
        const percentageElement = document.getElementById('progressPercentage');
        const progressFill = document.getElementById('progressFill');

        if (totalElement) totalElement.textContent = this.getTotalCount();
        if (completedElement) completedElement.textContent = this.getCompletedCount();
        if (percentageElement) percentageElement.textContent = this.getProgressPercentage() + '%';
        if (progressFill) progressFill.style.width = this.getProgressPercentage() + '%';
    }

    updateNodeStates() {
        document.querySelectorAll('.roadmap-node').forEach(node => {
            const topicId = node.dataset.topic;
            if (this.isCompleted(topicId)) {
                node.classList.add('completed');
            } else {
                node.classList.remove('completed');
            }
        });
    }

    reset() {
        this.progress = {};
        localStorage.removeItem(this.storageKey);
        this.updateStats();
        this.updateNodeStates();
    }
}

// Gestionarea modal-ului
class ModalManager {
    constructor() {
        this.modal = document.getElementById('topicModal');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalContent = document.getElementById('modalContent');
        this.modalClose = document.getElementById('modalClose');
        this.markCompletedBtn = document.getElementById('markCompleted');
        this.markIncompleteBtn = document.getElementById('markIncomplete');
        this.currentTopicId = null;

        this.bindEvents();
    }

    bindEvents() {
        // Închiderea modal-ului
        this.modalClose.addEventListener('click', () => this.close());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });

        // Escape key pentru închidere
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.close();
            }
        });

        // Butoanele de progres
        this.markCompletedBtn.addEventListener('click', () => {
            if (this.currentTopicId) {
                progressManager.markCompleted(this.currentTopicId);
                this.updateButtons();
            }
        });

        this.markIncompleteBtn.addEventListener('click', () => {
            if (this.currentTopicId) {
                progressManager.markIncomplete(this.currentTopicId);
                this.updateButtons();
            }
        });
    }

    open(topicId) {
        const topic = roadmapData[topicId];
        if (!topic) return;

        this.currentTopicId = topicId;
        this.modalTitle.textContent = topic.title;
        this.modalContent.innerHTML = topic.content;
        this.updateButtons();
        
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        this.currentTopicId = null;
    }

    updateButtons() {
        if (!this.currentTopicId) return;

        const isCompleted = progressManager.isCompleted(this.currentTopicId);
        
        if (isCompleted) {
            this.markCompletedBtn.style.display = 'none';
            this.markIncompleteBtn.style.display = 'inline-flex';
        } else {
            this.markCompletedBtn.style.display = 'inline-flex';
            this.markIncompleteBtn.style.display = 'none';
        }
    }
}

// Inițializarea aplicației
let progressManager;
let modalManager;

document.addEventListener('DOMContentLoaded', function() {
    // Inițializarea managerilor
    progressManager = new ProgressManager();
    modalManager = new ModalManager();

    // Event listeners pentru nodurile roadmap
    document.querySelectorAll('.roadmap-node').forEach(node => {
        node.addEventListener('click', () => {
            const topicId = node.dataset.topic;
            modalManager.open(topicId);
        });
    });

    // Event listener pentru reset progres
    const resetBtn = document.getElementById('resetProgress');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Ești sigur că vrei să resetezi progresul? Această acțiune nu poate fi anulată.')) {
                progressManager.reset();
            }
        });
    }

    // Event listener pentru download
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // Smooth scrolling pentru linkurile de navigare
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Actualizarea stării inițiale
    progressManager.updateNodeStates();
});

