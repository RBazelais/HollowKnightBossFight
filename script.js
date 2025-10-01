// Handle routing logic
class Router {
    constructor(routes) {
        this.routes = routes;
    }

    getCurrentPath() {
        return window.location.pathname;
    }

    parsePath(path) {
        const pathParts = path.split('/').filter(part => part !== '');
        
        // Check for home route
        if (pathParts.length === 0 || (pathParts.length === 1 && pathParts[0] === 'bosses')) {
            return { route: '/', params: {} };
        }
        
        // Check if it's a boss detail route
        if (pathParts.length === 2 && pathParts[0] === 'bosses') {
            return {
                route: '/bosses/:id',
                params: { id: pathParts[1] }
            };
        }
        
        // Default to 404 for any other invalid routes
        return { route: '/404', params: {} };
    }

    async render() {
        const path = this.getCurrentPath();
        const { route, params } = this.parsePath(path);
        
        const renderFunction = this.routes[route] || this.routes['/404'];
        await renderFunction(params);
        
        AnimationHelper.addFadeIn();
    }

    async navigateTo(path) {
        window.history.pushState({}, '', path);
        await this.render();
    }
}

// Handle UI animations
class AnimationHelper {
    static addFadeIn() {
        const app = document.getElementById('app');
        app.classList.add('fade-in');
        setTimeout(() => app.classList.remove('fade-in'), 500);
    }
}

class DOMHelper {
    static getElement(selector) {
        return document.getElementById(selector) || document.querySelector(selector);
    }
    
    static showElement(selector) {
        const element = this.getElement(selector);
        if (element) element.style.display = 'block';
    }
    
    static hideElement(selector) {
        const element = this.getElement(selector);
        if (element) element.style.display = 'none';
    }
    
    static setContent(selector, content) {
        const element = this.getElement(selector);
        if (element) element.innerHTML = content;
    }
}

// Template Builder
class TemplateBuilder {
    static buildBossCard(boss) {
        return `
            <article class="boss-card" onclick="router.navigateTo('/bosses/${boss.id}')" tabindex="0" role="button" aria-label="View details for ${boss.name}">
                <img src="${boss.image}" alt="${boss.name}">
                <div class="boss-card-content">
                    <h3>${boss.name}</h3>
                    <div class="boss-location">${boss.location}</div>
                    <p>${boss.description}</p>
                    <button class="read-more">Read More</button>
                </div>
            </article>
        `;
    }
    
    static buildBossGrid(bosses) {
        return `
            <div class="boss-grid">
                ${bosses.map(boss => this.buildBossCard(boss)).join('')}
            </div>
        `;
    }
    
    static buildBreadcrumb(boss) {
        return `
            <nav class="breadcrumb" aria-label="Breadcrumb">
                <ul>
                    <li><a onclick="router.navigateTo('/')">Home</a></li>
                    <li><a onclick="router.navigateTo('/bosses')">Bosses</a></li>
                    <li>${boss.name}</li>
                </ul>
            </nav>
        `;
    }
    
    static buildBossDetail(boss) {
        return `
            <div class="boss-detail">
                ${this.buildBreadcrumb(boss)}
                
                <h2>${boss.name}</h2>
                <div class="boss-location">${boss.location}</div>
                <img src="${boss.image}" alt="${boss.name}">
                
                <div class="boss-stats">
                    <div class="stat-card">
                        <h4>Health</h4>
                        <p>${boss.health}</p>
                    </div>
                    <div class="stat-card">
                        <h4>Difficulty</h4>
                        <p><span class="difficulty ${boss.difficulty.toLowerCase().replace(' ', '-')}">${boss.difficulty}</span></p>
                    </div>
                    <div class="stat-card">
                        <h4>Location</h4>
                        <p>${boss.location}</p>
                    </div>
                </div>
                
                <h3>Description</h3>
                <p>${boss.description}</p>
                
                <h3>Lore</h3>
                <p>${boss.lore}</p>
                
                <h3>Strategy</h3>
                <p>${boss.strategy}</p>
                
                <h3>Rewards</h3>
                <ul>
                    ${boss.rewards.map(reward => `<li>${reward}</li>`).join('')}
                </ul>
                
                <button class="back-button" onclick="router.navigateTo('/bosses')">Back to Boss List</button>
            </div>
        `;
    }
    
    static build404Page() {
        return `
            <div class="not-found">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The page you're looking for doesn't exist.</p>
                <button class="back-button" onclick="router.navigateTo('/')">Return to Home</button>
            </div>
        `;
    }
}

// Handle data operations
class DataService {
    static async getAllBosses() {
        const response = await fetch('/api/bosses');
        if (!response.ok) throw new Error('Failed to fetch bosses');
        return response.json();
    }

    static async getBossById(id) {
        const bosses = await this.getAllBosses();
        return bosses.find(b => b.id === id);
    }
}

class SearchHandler {
    static filterBosses(bosses, searchTerm) {
        if (!searchTerm.trim()) {
            return bosses;
        }
        
        const term = searchTerm.toLowerCase().trim();
        return bosses.filter(boss => 
            boss.name.toLowerCase().includes(term) ||
            boss.location.toLowerCase().includes(term) ||
            boss.description.toLowerCase().includes(term) ||
            boss.difficulty.toLowerCase().includes(term)
        );
    }

    static setupSearchListener(bosses) {
        const searchInput = document.getElementById('boss-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const filteredBosses = this.filterBosses(bosses, e.target.value);
                
                // Show no results using 404 page if needed
                if (filteredBosses.length === 0 && e.target.value.trim()) {
                    DOMHelper.setContent('app', TemplateBuilder.build404Page());
                } else {
                    DOMHelper.setContent('app', TemplateBuilder.buildBossGrid(filteredBosses));
                }
            });
        }
    }
}

// Handle page rendering
async function renderHome() {
    DOMHelper.showElement('bosses');
    DOMHelper.showElement('#bosses h2');
    DOMHelper.showElement('#bosses .subtitle');
    DOMHelper.showElement('.search-container');
    
    try {
        const bossData = await DataService.getAllBosses();
        DOMHelper.setContent('app', TemplateBuilder.buildBossGrid(bossData));
        
        // Setup search functionality
        SearchHandler.setupSearchListener(bossData);
        
        // Clear search input when returning to home
        const searchInput = document.getElementById('boss-search');
        if (searchInput) {
            searchInput.value = '';
        }
    } catch (error) {
        console.error('Error loading bosses:', error);
        DOMHelper.setContent('app', '<p>Error loading boss data</p>');
    }
}

// Render the boss detail page
async function renderBossDetail(params) {
    try {
        const boss = await DataService.getBossById(params.id);
        
        if (!boss) {
            render404();
            return;
        }
        
        DOMHelper.hideElement('#bosses h2');
        DOMHelper.hideElement('#bosses .subtitle');
        DOMHelper.hideElement('.search-container');
        
        DOMHelper.setContent('app', TemplateBuilder.buildBossDetail(boss));
    } catch (error) {
        console.error('Error loading boss details:', error);
        DOMHelper.setContent('app', '<p>Error loading boss details</p>');
    }
}

// Render the 404 page
function render404() {
    DOMHelper.hideElement('#bosses h2');
    DOMHelper.hideElement('#bosses .subtitle');
    DOMHelper.hideElement('.search-container');
    DOMHelper.setContent('app', TemplateBuilder.build404Page());
}

// Initialize the app
const routes = {
    '/': renderHome,
    '/bosses': renderHome,
    '/bosses/:id': renderBossDetail,
    '/404': render404
};

// Create router instance
const router = new Router(routes);

// Handle browser back/forward buttons
window.addEventListener('popstate', () => router.render());

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Focus the main heading for screen readers
    setTimeout(() => {
        const mainHeading = document.querySelector('h1');
        if (mainHeading) {
            mainHeading.focus();
        }
    }, 500);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', async () => {
    window.router = router;
    // Initial render
    await router.render();
});