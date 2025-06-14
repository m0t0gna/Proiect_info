// Datele pentru roadmap
const roadmapData = {
    'internet-basics': {
        title: 'Cum funcționează Internetul?',
        description: 'Înțelegerea fundamentelor internetului',
        content: `
            <h4>Ce este Internetul?</h4>
            <p>Internetul este o rețea globală de computere interconectate care comunică prin protocoale standardizate. Este infrastructura care permite accesul la World Wide Web.</p>
            
            <h4>Concepte cheie:</h4>
            <ul>
                <li><strong>ISP (Internet Service Provider)</strong> - Furnizorul de servicii internet</li>
                <li><strong>IP Address</strong> - Adresa unică a fiecărui dispozitiv conectat</li>
                <li><strong>Router</strong> - Dispozitiv care direcționează traficul de date</li>
                <li><strong>Pachete de date</strong> - Cum sunt transmise informațiile</li>
            </ul>
            
            <h4>Resurse recomandate:</h4>
            <ul>
                <li>Video: "How the Internet Works" - Khan Academy</li>
                <li>Articol: "Internet Fundamentals" - MDN Web Docs</li>
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
            
            <h4>Concepte importante:</h4>
            <ul>
                <li><strong>Request/Response</strong> - Ciclul de comunicație</li>
                <li><strong>HTTP Methods</strong> - GET, POST, PUT, DELETE</li>
                <li><strong>Status Codes</strong> - 200, 404, 500, etc.</li>
                <li><strong>Headers</strong> - Metadate ale cererii/răspunsului</li>
                <li><strong>HTTPS</strong> - Versiunea securizată cu SSL/TLS</li>
            </ul>
            
            <h4>Exemple practice:</h4>
            <ul>
                <li>Folosește Developer Tools pentru a vedea cererile HTTP</li>
                <li>Înțelege diferența între GET și POST</li>
                <li>Analizează header-ele unei cereri</li>
            </ul>
        `,
        type: 'required'
    },
    'domain': {
        title: 'Nume de domeniu',
        description: 'Cum funcționează domeniile web',
        content: `
            <h4>Ce sunt numele de domeniu?</h4>
            <p>Un nume de domeniu este o adresă ușor de reținut care înlocuiește adresa IP numerică a unui server.</p>
            
            <h4>Structura unui domeniu:</h4>
            <ul>
                <li><strong>TLD (Top Level Domain)</strong> - .com, .ro, .org</li>
                <li><strong>Second Level Domain</strong> - numele principal</li>
                <li><strong>Subdomain</strong> - www, blog, shop</li>
            </ul>
            
            <h4>Procesul de înregistrare:</h4>
            <ul>
                <li>Alegerea unui registrar de domenii</li>
                <li>Verificarea disponibilității</li>
                <li>Configurarea DNS-ului</li>
                <li>Conectarea la hosting</li>
            </ul>
        `,
        type: 'required'
    },
    'hosting': {
        title: 'Hosting și servere',
        description: 'Unde sunt găzduite site-urile web',
        content: `
            <h4>Ce este hosting-ul web?</h4>
            <p>Hosting-ul web este serviciul care permite stocarea și accesarea site-urilor web pe internet prin servere dedicate.</p>
            
            <h4>Tipuri de hosting:</h4>
            <ul>
                <li><strong>Shared Hosting</strong> - Resurse partajate, cost redus</li>
                <li><strong>VPS (Virtual Private Server)</strong> - Resurse dedicate virtuale</li>
                <li><strong>Dedicated Server</strong> - Server fizic dedicat</li>
                <li><strong>Cloud Hosting</strong> - Resurse scalabile în cloud</li>
            </ul>
            
            <h4>Factori de luat în considerare:</h4>
            <ul>
                <li>Performanța și viteza</li>
                <li>Uptime și fiabilitatea</li>
                <li>Suportul tehnic</li>
                <li>Scalabilitatea</li>
                <li>Securitatea</li>
            </ul>
        `,
        type: 'required'
    },
    'dns': {
        title: 'DNS',
        description: 'Sistemul de nume de domenii',
        content: `
            <h4>DNS (Domain Name System)</h4>
            <p>DNS este sistemul care traduce numele de domenii în adrese IP, permițând browserelor să găsească serverele corecte.</p>
            
            <h4>Cum funcționează DNS:</h4>
            <ol>
                <li>Browser-ul verifică cache-ul local</li>
                <li>Interogare la DNS resolver</li>
                <li>Căutare în DNS hierarchy</li>
                <li>Returnarea adresei IP</li>
                <li>Conectarea la server</li>
            </ol>
            
            <h4>Tipuri de înregistrări DNS:</h4>
            <ul>
                <li><strong>A Record</strong> - Mapează domeniul la IPv4</li>
                <li><strong>AAAA Record</strong> - Mapează domeniul la IPv6</li>
                <li><strong>CNAME</strong> - Alias pentru alt domeniu</li>
                <li><strong>MX Record</strong> - Pentru email</li>
                <li><strong>TXT Record</strong> - Text arbitrar</li>
            </ul>
        `,
        type: 'required'
    },
    'browsers': {
        title: 'Browsere web',
        description: 'Cum funcționează browserele',
        content: `
            <h4>Ce este un browser web?</h4>
            <p>Browser-ul web este aplicația care interpretează și afișează conținutul web, permițând utilizatorilor să navigheze pe internet.</p>
            
            <h4>Componentele principale:</h4>
            <ul>
                <li><strong>Rendering Engine</strong> - Interpretează HTML/CSS</li>
                <li><strong>JavaScript Engine</strong> - Execută codul JavaScript</li>
                <li><strong>Networking</strong> - Gestionează cererile HTTP</li>
                <li><strong>Storage</strong> - Cookies, localStorage, etc.</li>
            </ul>
            
            <h4>Browsere populare:</h4>
            <ul>
                <li>Chrome (Blink engine)</li>
                <li>Firefox (Gecko engine)</li>
                <li>Safari (WebKit engine)</li>
                <li>Edge (Blink engine)</li>
            </ul>
            
            <h4>Developer Tools:</h4>
            <p>Toate browserele moderne oferă instrumente pentru dezvoltatori care permit debugging și optimizarea site-urilor web.</p>
        `,
        type: 'required'
    },
    'html-basics': {
        title: 'Noțiuni de bază HTML',
        description: 'Structura și elementele de bază',
        content: `
            <h4>HTML (HyperText Markup Language)</h4>
            <p>HTML este limbajul de marcare standard pentru crearea paginilor web. Definește structura și conținutul unei pagini.</p>
            
            <h4>Structura de bază:</h4>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="ro"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Titlul paginii&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Titlu principal&lt;/h1&gt;
    &lt;p&gt;Paragraf de text&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
            
            <h4>Elemente esențiale:</h4>
            <ul>
                <li><strong>Headings</strong> - h1, h2, h3, h4, h5, h6</li>
                <li><strong>Paragrafe</strong> - p</li>
                <li><strong>Linkuri</strong> - a href</li>
                <li><strong>Imagini</strong> - img src alt</li>
                <li><strong>Liste</strong> - ul, ol, li</li>
                <li><strong>Diviziuni</strong> - div, span</li>
            </ul>
        `,
        type: 'required'
    },
    'semantic-html': {
        title: 'HTML semantic',
        description: 'Utilizarea corectă a elementelor semantice',
        content: `
            <h4>Ce este HTML-ul semantic?</h4>
            <p>HTML-ul semantic folosește elemente care au o semnificație clară despre conținutul lor, îmbunătățind accesibilitatea și SEO-ul.</p>
            
            <h4>Elemente semantice principale:</h4>
            <ul>
                <li><strong>&lt;header&gt;</strong> - Antetul paginii sau secțiunii</li>
                <li><strong>&lt;nav&gt;</strong> - Navigația principală</li>
                <li><strong>&lt;main&gt;</strong> - Conținutul principal</li>
                <li><strong>&lt;article&gt;</strong> - Conținut independent</li>
                <li><strong>&lt;section&gt;</strong> - Secțiune tematică</li>
                <li><strong>&lt;aside&gt;</strong> - Conținut secundar</li>
                <li><strong>&lt;footer&gt;</strong> - Subsolul paginii</li>
            </ul>
            
            <h4>Beneficii:</h4>
            <ul>
                <li>Îmbunătățește accesibilitatea</li>
                <li>Optimizează pentru SEO</li>
                <li>Facilitează mentenanța codului</li>
                <li>Îmbunătățește experiența dezvoltatorilor</li>
            </ul>
        `,
        type: 'required'
    },
    'forms': {
        title: 'Formulare și validare',
        description: 'Crearea și validarea formularelor',
        content: `
            <h4>Formulare HTML</h4>
            <p>Formularele permit utilizatorilor să introducă și să trimită date către server.</p>
            
            <h4>Elemente de formular:</h4>
            <ul>
                <li><strong>&lt;form&gt;</strong> - Containerul principal</li>
                <li><strong>&lt;input&gt;</strong> - Câmpuri de introducere</li>
                <li><strong>&lt;textarea&gt;</strong> - Text pe mai multe linii</li>
                <li><strong>&lt;select&gt;</strong> - Liste dropdown</li>
                <li><strong>&lt;button&gt;</strong> - Butoane de acțiune</li>
                <li><strong>&lt;label&gt;</strong> - Etichete pentru câmpuri</li>
            </ul>
            
            <h4>Tipuri de input:</h4>
            <ul>
                <li>text, email, password</li>
                <li>number, tel, url</li>
                <li>date, time, datetime-local</li>
                <li>checkbox, radio</li>
                <li>file, hidden</li>
            </ul>
            
            <h4>Validare HTML5:</h4>
            <ul>
                <li>required - câmp obligatoriu</li>
                <li>pattern - expresii regulate</li>
                <li>min/max - valori limită</li>
                <li>minlength/maxlength - lungime text</li>
            </ul>
        `,
        type: 'required'
    },
    'accessibility': {
        title: 'Accesibilitate web',
        description: 'Principii de accesibilitate',
        content: `
            <h4>Ce este accesibilitatea web?</h4>
            <p>Accesibilitatea web înseamnă proiectarea site-urilor astfel încât să poată fi folosite de toate persoanele, inclusiv cele cu dizabilități.</p>
            
            <h4>Principiile WCAG:</h4>
            <ul>
                <li><strong>Perceptibil</strong> - Informația trebuie să fie prezentată în moduri pe care utilizatorii le pot percepe</li>
                <li><strong>Operabil</strong> - Interfața trebuie să fie operabilă</li>
                <li><strong>Înțelegibil</strong> - Informația și operarea UI trebuie să fie înțelegibile</li>
                <li><strong>Robust</strong> - Conținutul trebuie să fie suficient de robust</li>
            </ul>
            
            <h4>Tehnici practice:</h4>
            <ul>
                <li>Folosirea atributului alt pentru imagini</li>
                <li>Structură logică cu headings</li>
                <li>Contrast suficient pentru culori</li>
                <li>Navigare cu tastatura</li>
                <li>Etichete descriptive pentru formulare</li>
                <li>ARIA labels și roles</li>
            </ul>
        `,
        type: 'recommended'
    },
    'seo-basics': {
        title: 'SEO de bază',
        description: 'Optimizarea pentru motoarele de căutare',
        content: `
            <h4>SEO (Search Engine Optimization)</h4>
            <p>SEO-ul implică optimizarea site-ului web pentru a îmbunătăți vizibilitatea în rezultatele motoarelor de căutare.</p>
            
            <h4>Elemente SEO de bază:</h4>
            <ul>
                <li><strong>Title tag</strong> - Titlul paginii în &lt;head&gt;</li>
                <li><strong>Meta description</strong> - Descrierea paginii</li>
                <li><strong>Headings</strong> - Structură ierarhică H1-H6</li>
                <li><strong>URL structure</strong> - URL-uri descriptive</li>
                <li><strong>Alt text</strong> - Descrieri pentru imagini</li>
                <li><strong>Internal linking</strong> - Linkuri între pagini</li>
            </ul>
            
            <h4>Factori tehnici:</h4>
            <ul>
                <li>Viteza de încărcare</li>
                <li>Mobile-friendliness</li>
                <li>HTTPS</li>
                <li>Structured data</li>
                <li>XML sitemap</li>
            </ul>
            
            <h4>Instrumente utile:</h4>
            <ul>
                <li>Google Search Console</li>
                <li>Google PageSpeed Insights</li>
                <li>Lighthouse</li>
            </ul>
        `,
        type: 'recommended'
    },
    'css-basics': {
        title: 'Fundamentele CSS',
        description: 'Selectori, proprietăți și valori',
        content: `
            <h4>CSS (Cascading Style Sheets)</h4>
            <p>CSS este limbajul folosit pentru stilizarea documentelor HTML, controlând aspectul vizual al paginilor web.</p>
            
            <h4>Sintaxa CSS:</h4>
            <pre><code>selector {
    proprietate: valoare;
    alta-proprietate: alta-valoare;
}</code></pre>
            
            <h4>Tipuri de selectori:</h4>
            <ul>
                <li><strong>Element</strong> - p, h1, div</li>
                <li><strong>Class</strong> - .nume-clasa</li>
                <li><strong>ID</strong> - #nume-id</li>
                <li><strong>Attribute</strong> - [href], [type="text"]</li>
                <li><strong>Pseudo-class</strong> - :hover, :focus</li>
                <li><strong>Pseudo-element</strong> - ::before, ::after</li>
            </ul>
            
            <h4>Proprietăți esențiale:</h4>
            <ul>
                <li>color, background-color</li>
                <li>font-family, font-size, font-weight</li>
                <li>margin, padding</li>
                <li>width, height</li>
                <li>display, position</li>
                <li>border, border-radius</li>
            </ul>
            
            <h4>Cascada și specificitate:</h4>
            <p>CSS aplică stilurile în funcție de specificitate și ordinea în care sunt definite.</p>
        `,
        type: 'required'
    },
    'layouts': {
        title: 'Layout-uri CSS',
        description: 'Flexbox, Grid și poziționare',
        content: `
            <h4>Sisteme de layout în CSS</h4>
            <p>CSS oferă mai multe metode pentru crearea layout-urilor complexe și responsive.</p>
            
            <h4>Flexbox:</h4>
            <ul>
                <li>Layout unidimensional (rând sau coloană)</li>
                <li>display: flex</li>
                <li>justify-content, align-items</li>
                <li>flex-direction, flex-wrap</li>
                <li>flex-grow, flex-shrink, flex-basis</li>
            </ul>
            
            <h4>CSS Grid:</h4>
            <ul>
                <li>Layout bidimensional (rânduri și coloane)</li>
                <li>display: grid</li>
                <li>grid-template-columns, grid-template-rows</li>
                <li>grid-gap, grid-area</li>
                <li>grid-auto-flow</li>
            </ul>
            
            <h4>Poziționare:</h4>
            <ul>
                <li><strong>static</strong> - poziționare normală</li>
                <li><strong>relative</strong> - relativ la poziția normală</li>
                <li><strong>absolute</strong> - relativ la primul părinte poziționat</li>
                <li><strong>fixed</strong> - relativ la viewport</li>
                <li><strong>sticky</strong> - combinație între relative și fixed</li>
            </ul>
        `,
        type: 'required'
    },
    'responsive': {
        title: 'Design responsiv',
        description: 'Adaptarea pentru toate dispozitivele',
        content: `
            <h4>Ce este design-ul responsiv?</h4>
            <p>Design-ul responsiv asigură că site-ul web arată și funcționează bine pe toate dispozitivele și dimensiunile de ecran.</p>
            
            <h4>Tehnici principale:</h4>
            <ul>
                <li><strong>Fluid grids</strong> - Layout-uri flexibile cu procente</li>
                <li><strong>Flexible images</strong> - Imagini care se adaptează</li>
                <li><strong>Media queries</strong> - Stiluri condiționale</li>
            </ul>
            
            <h4>Media queries:</h4>
            <pre><code>/* Mobile first */
.container {
    width: 100%;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        width: 750px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        width: 1000px;
    }
}</code></pre>
            
            <h4>Breakpoints comune:</h4>
            <ul>
                <li>Mobile: 320px - 767px</li>
                <li>Tablet: 768px - 1023px</li>
                <li>Desktop: 1024px+</li>
            </ul>
            
            <h4>Viewport meta tag:</h4>
            <pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code></pre>
        `,
        type: 'required'
    },
    'js-basics': {
        title: 'Concepte de bază JS',
        description: 'Variabile, funcții, obiecte',
        content: `
            <h4>JavaScript - Limbajul web-ului</h4>
            <p>JavaScript este limbajul de programare care aduce interactivitate paginilor web.</p>
            
            <h4>Variabile și tipuri de date:</h4>
            <pre><code>// Declararea variabilelor
let nume = "Ion";
const varsta = 25;
var oras = "București";

// Tipuri de date
let numar = 42;
let text = "Hello World";
let boolean = true;
let array = [1, 2, 3];
let obiect = {nume: "Ion", varsta: 25};</code></pre>
            
            <h4>Funcții:</h4>
            <pre><code>// Funcție clasică
function salut(nume) {
    return "Salut, " + nume + "!";
}

// Arrow function
const salut2 = (nume) => {
    return \`Salut, \${nume}!\`;
}

// Arrow function scurtă
const salut3 = nume => \`Salut, \${nume}!\`;</code></pre>
            
            <h4>Structuri de control:</h4>
            <ul>
                <li>if/else statements</li>
                <li>for/while loops</li>
                <li>switch statements</li>
                <li>try/catch pentru erori</li>
            </ul>
        `,
        type: 'required'
    },
    'dom': {
        title: 'Manipularea DOM',
        description: 'Interacțiunea cu elementele HTML',
        content: `
            <h4>DOM (Document Object Model)</h4>
            <p>DOM-ul este reprezentarea programatică a documentului HTML, permițând JavaScript să modifice conținutul și structura paginii.</p>
            
            <h4>Selectarea elementelor:</h4>
            <pre><code>// Selectori
const element = document.getElementById('id');
const elements = document.getElementsByClassName('class');
const element2 = document.querySelector('.class');
const elements2 = document.querySelectorAll('div');</code></pre>
            
            <h4>Modificarea conținutului:</h4>
            <pre><code>// Schimbarea textului
element.textContent = "Text nou";
element.innerHTML = "&lt;strong&gt;Text bold&lt;/strong&gt;";

// Modificarea atributelor
element.setAttribute('class', 'noua-clasa');
element.src = 'imagine-noua.jpg';</code></pre>
            
            <h4>Evenimente:</h4>
            <pre><code>// Event listeners
button.addEventListener('click', function() {
    console.log('Butonul a fost apăsat!');
});

// Arrow function
button.addEventListener('click', () => {
    console.log('Butonul a fost apăsat!');
});</code></pre>
            
            <h4>Crearea și ștergerea elementelor:</h4>
            <pre><code>// Crearea
const nouElement = document.createElement('div');
nouElement.textContent = 'Element nou';
document.body.appendChild(nouElement);

// Ștergerea
element.remove();</code></pre>
        `,
        type: 'required'
    },
    'fetch-api': {
        title: 'Fetch API / Ajax',
        description: 'Cereri HTTP asincrone',
        content: `
            <h4>Fetch API</h4>
            <p>Fetch API permite realizarea de cereri HTTP asincrone pentru a obține sau trimite date către server fără a reîncărca pagina.</p>
            
            <h4>Sintaxa de bază:</h4>
            <pre><code>// GET request
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Eroare:', error));</code></pre>
            
            <h4>Async/Await:</h4>
            <pre><code>async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Eroare:', error);
    }
}</code></pre>
            
            <h4>POST request:</h4>
            <pre><code>fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        nume: 'Ion',
        email: 'ion@example.com'
    })
})
.then(response => response.json())
.then(data => console.log(data));</code></pre>
            
            <h4>Gestionarea erorilor:</h4>
            <ul>
                <li>Verificarea response.ok</li>
                <li>Tratarea erorilor de rețea</li>
                <li>Timeout-uri</li>
                <li>Retry logic</li>
            </ul>
        `,
        type: 'required'
    },
    'git-basics': {
        title: 'Introducere în Git',
        description: 'Comenzi de bază și workflow',
        content: `
            <h4>Git - Sistemul de control al versiunilor</h4>
            <p>Git este un sistem distribuit de control al versiunilor care urmărește modificările în fișiere și permite colaborarea între dezvoltatori.</p>
            
            <h4>Comenzi esențiale:</h4>
            <pre><code># Inițializarea unui repository
git init

# Clonarea unui repository
git clone https://github.com/user/repo.git

# Verificarea statusului
git status

# Adăugarea fișierelor
git add .
git add nume-fisier.txt

# Commit-ul modificărilor
git commit -m "Mesajul commit-ului"

# Împingerea către repository remote
git push origin main

# Tragerea modificărilor
git pull origin main</code></pre>
            
            <h4>Workflow de bază:</h4>
            <ol>
                <li>Modifică fișierele</li>
                <li>git add pentru staging</li>
                <li>git commit pentru salvare</li>
                <li>git push pentru sincronizare</li>
            </ol>
            
            <h4>Concepte importante:</h4>
            <ul>
                <li><strong>Repository</strong> - Depozitul de cod</li>
                <li><strong>Commit</strong> - Instantaneu al modificărilor</li>
                <li><strong>Branch</strong> - Ramură de dezvoltare</li>
                <li><strong>Merge</strong> - Combinarea ramurilor</li>
            </ul>
        `,
        type: 'required'
    },
    'github': {
        title: 'GitHub',
        description: 'Colaborare și hosting de cod',
        content: `
            <h4>GitHub - Platforma pentru dezvoltatori</h4>
            <p>GitHub este o platformă de hosting pentru repository-uri Git care facilitează colaborarea și gestionarea proiectelor de software.</p>
            
            <h4>Funcționalități principale:</h4>
            <ul>
                <li><strong>Repository hosting</strong> - Găzduirea codului</li>
                <li><strong>Issue tracking</strong> - Urmărirea bug-urilor</li>
                <li><strong>Pull requests</strong> - Revizuirea codului</li>
                <li><strong>GitHub Actions</strong> - CI/CD</li>
                <li><strong>GitHub Pages</strong> - Hosting gratuit pentru site-uri</li>
            </ul>
            
            <h4>Workflow colaborativ:</h4>
            <ol>
                <li>Fork repository-ul</li>
                <li>Clone local</li>
                <li>Creează branch nou</li>
                <li>Fă modificările</li>
                <li>Push branch-ul</li>
                <li>Creează Pull Request</li>
                <li>Code review</li>
                <li>Merge în main</li>
            </ol>
            
            <h4>Best practices:</h4>
            <ul>
                <li>README.md descriptiv</li>
                <li>Commit messages clare</li>
                <li>Folosirea .gitignore</li>
                <li>Documentația codului</li>
                <li>Licențe pentru proiecte</li>
            </ul>
        `,
        type: 'required'
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

