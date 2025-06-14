// Funcționalități suplimentare pentru roadmap
class RoadmapEnhancements {
    constructor() {
        this.initializeAnimations();
        this.initializeSearch();
        this.initializeKeyboardNavigation();
    }

    initializeAnimations() {
        // Animații pentru nodurile roadmap la scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = '0s';
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.roadmap-node').forEach(node => {
            observer.observe(node);
        });
    }

    initializeSearch() {
        // Adăugarea funcționalității de căutare
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <input type="text" id="searchInput" placeholder="Caută în roadmap..." class="search-input">
            <div id="searchResults" class="search-results"></div>
        `;

        const roadmapHeader = document.querySelector('.roadmap-header');
        if (roadmapHeader) {
            roadmapHeader.appendChild(searchContainer);
        }

        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                this.performSearch(query, searchResults);
            });

            // Închiderea rezultatelor la click în afara lor
            document.addEventListener('click', (e) => {
                if (!searchContainer.contains(e.target)) {
                    searchResults.style.display = 'none';
                }
            });
        }
    }

    performSearch(query, resultsContainer) {
        if (query.length < 2) {
            resultsContainer.style.display = 'none';
            return;
        }

        const results = [];
        Object.entries(roadmapData).forEach(([id, topic]) => {
            const titleMatch = topic.title.toLowerCase().includes(query);
            const descriptionMatch = topic.description.toLowerCase().includes(query);
            const contentMatch = topic.content.toLowerCase().includes(query);

            if (titleMatch || descriptionMatch || contentMatch) {
                results.push({
                    id,
                    title: topic.title,
                    description: topic.description,
                    type: topic.type
                });
            }
        });

        this.displaySearchResults(results, resultsContainer, query);
    }

    displaySearchResults(results, container, query) {
        if (results.length === 0) {
            container.innerHTML = '<div class="search-no-results">Nu s-au găsit rezultate</div>';
            container.style.display = 'block';
            return;
        }

        const resultsHTML = results.map(result => `
            <div class="search-result-item" data-topic="${result.id}">
                <div class="search-result-title">${this.highlightText(result.title, query)}</div>
                <div class="search-result-description">${this.highlightText(result.description, query)}</div>
                <div class="search-result-type ${result.type}">${result.type}</div>
            </div>
        `).join('');

        container.innerHTML = resultsHTML;
        container.style.display = 'block';

        // Event listeners pentru rezultatele căutării
        container.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const topicId = item.dataset.topic;
                modalManager.open(topicId);
                container.style.display = 'none';
                document.getElementById('searchInput').value = '';
            });
        });
    }

    highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    initializeKeyboardNavigation() {
        let currentNodeIndex = -1;
        const nodes = Array.from(document.querySelectorAll('.roadmap-node'));

        document.addEventListener('keydown', (e) => {
            // Doar dacă nu suntem într-un input sau modal
            if (e.target.tagName === 'INPUT' || document.querySelector('.modal.active')) {
                return;
            }

            switch (e.key) {
                case 'ArrowDown':
                case 'j':
                    e.preventDefault();
                    currentNodeIndex = Math.min(currentNodeIndex + 1, nodes.length - 1);
                    this.focusNode(nodes[currentNodeIndex]);
                    break;
                case 'ArrowUp':
                case 'k':
                    e.preventDefault();
                    currentNodeIndex = Math.max(currentNodeIndex - 1, 0);
                    this.focusNode(nodes[currentNodeIndex]);
                    break;
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    if (currentNodeIndex >= 0 && nodes[currentNodeIndex]) {
                        const topicId = nodes[currentNodeIndex].dataset.topic;
                        modalManager.open(topicId);
                    }
                    break;
                case 'Escape':
                    currentNodeIndex = -1;
                    this.clearFocus();
                    break;
            }
        });
    }

    focusNode(node) {
        // Eliminarea focus-ului anterior
        this.clearFocus();
        
        if (node) {
            node.classList.add('keyboard-focused');
            node.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    }

    clearFocus() {
        document.querySelectorAll('.roadmap-node.keyboard-focused').forEach(node => {
            node.classList.remove('keyboard-focused');
        });
    }
}

// Funcții utilitare
const Utils = {
    // Debounce pentru optimizarea performanței
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Formatarea datei pentru export
    formatDate(date) {
        return date.toLocaleDateString('ro-RO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    // Export progres ca JSON
    exportProgress() {
        const progress = progressManager.progress;
        const exportData = {
            progress,
            exportDate: new Date().toISOString(),
            totalTopics: progressManager.getTotalCount(),
            completedTopics: progressManager.getCompletedCount(),
            progressPercentage: progressManager.getProgressPercentage()
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `frontend-roadmap-progress-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
    },

    // Import progres din JSON
    importProgress(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data.progress) {
                    progressManager.progress = data.progress;
                    progressManager.saveProgress();
                    alert('Progresul a fost importat cu succes!');
                } else {
                    alert('Fișierul nu conține date de progres valide.');
                }
            } catch (error) {
                alert('Eroare la importul fișierului: ' + error.message);
            }
        };
        reader.readAsText(file);
    }
};

// Inițializarea îmbunătățirilor la încărcarea paginii
document.addEventListener('DOMContentLoaded', function() {
    // Inițializarea îmbunătățirilor după ce managerii principali sunt gata
    setTimeout(() => {
        new RoadmapEnhancements();
    }, 100);

    // Adăugarea butoanelor de export/import
    const navActions = document.querySelector('.nav-actions');
    if (navActions) {
        const exportBtn = document.createElement('button');
        exportBtn.className = 'btn btn-secondary';
        exportBtn.textContent = 'Export Progres';
        exportBtn.addEventListener('click', Utils.exportProgress);

        const importBtn = document.createElement('button');
        importBtn.className = 'btn btn-secondary';
        importBtn.textContent = 'Import Progres';
        
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.json';
        fileInput.style.display = 'none';
        fileInput.addEventListener('change', (e) => {
            if (e.target.files[0]) {
                Utils.importProgress(e.target.files[0]);
            }
        });

        importBtn.addEventListener('click', () => fileInput.click());

        navActions.appendChild(exportBtn);
        navActions.appendChild(importBtn);
        navActions.appendChild(fileInput);
    }
});

