
let currentPage = 1;
const blogsPerPage = 3;
const totalPages = Math.ceil(blogs.length / blogsPerPage);
let searchQuery = '';
let selectedCategory = 'all';

let blogCards, paginationContainer, randomBlogBtn, randomBlogSection, randomBlogContainer, closeRandomBlogBtn, toast, hamburger, navMenu, searchInput, categoryFilterBtns, noResults, expandedBlogSection, expandedBlogContent, backToHomeBtn;

const categoryColors = {
    'Teknologi': 'category-tech',
    'Travel': 'category-travel',
    'Kuliner': 'category-food',
    'Lifestyle': 'category-lifestyle',
    'Kesehatan': 'category-health'
};

const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
};

const getBlog = (id) => blogs.find(blog => blog.id === parseInt(id));

const getFilteredBlogs = () => {
    return blogs.filter(blog => {
        const categoryMatch = selectedCategory === 'all' || blog.category === selectedCategory;
        
        const searchLower = searchQuery.toLowerCase();
        const searchMatch = searchQuery === '' || 
            blog.title.toLowerCase().includes(searchLower) ||
            blog.description.toLowerCase().includes(searchLower) ||
            blog.category.toLowerCase().includes(searchLower);
        
        return categoryMatch && searchMatch;
    });
};

const updateBlogDisplay = () => {
    const filteredBlogs = getFilteredBlogs();
    const totalFilteredPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    
    if (currentPage > totalFilteredPages && totalFilteredPages > 0) {
        currentPage = 1;
    }
    
    if (filteredBlogs.length === 0) {
        noResults.classList.remove('hidden');
        paginationContainer.innerHTML = '';
    } else {
        noResults.classList.add('hidden');
    }
    
    blogCards.forEach(card => {
        card.style.display = 'none';
    });
    
    const start = (currentPage - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    
    filteredBlogs.slice(start, end).forEach(blog => {
        const card = Array.from(blogCards).find(c => 
            parseInt(c.dataset.blogId) === blog.id
        );
        if (card) {
            card.style.display = 'block';
        }
    });
    
    if (filteredBlogs.length > 0) {
        renderPagination(totalFilteredPages);
    }
};

const showPage = (page) => {
    currentPage = page;
    updateBlogDisplay();
};

const renderPagination = (totalFilteredPages) => {
    let html = '';
    
    html += `<button class="page-btn prev-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">« Previous</button>`;
    
    for (let i = 1; i <= totalFilteredPages; i++) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }
    
    html += `<button class="page-btn next-btn" ${currentPage === totalFilteredPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">Next »</button>`;
    
    paginationContainer.innerHTML = html;
};

const changePage = (page) => {
    const filteredBlogs = getFilteredBlogs();
    const totalFilteredPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    
    if (page < 1 || page > totalFilteredPages) return;
    currentPage = page;
    updateBlogDisplay();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const displayRandomBlog = () => {
    const randomBlog = blogs[Math.floor(Math.random() * blogs.length)];
    const categoryClass = categoryColors[randomBlog.category] || 'category-default';
    
    randomBlogContainer.innerHTML = `
        <article class="blog-card animate-scale-in" data-blog-id="${randomBlog.id}" style="cursor: pointer;">
            <div class="card-image">
                <img src="${randomBlog.image}" alt="${randomBlog.title}">
                <span class="category-badge ${categoryClass}">${randomBlog.category}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${randomBlog.title}</h3>
                <p class="card-description">${randomBlog.description}</p>
                <div class="card-meta">
                    <span class="card-author"><span>👤</span> ${randomBlog.author}</span>
                    <span class="card-date">📅 ${randomBlog.date}</span>
                </div>
                <div class="share-buttons">
                    <button class="share-btn share-whatsapp" data-id="${randomBlog.id}" data-platform="whatsapp" title="Share ke WhatsApp">
                        <span>📱</span> WhatsApp
                    </button>
                    <button class="share-btn share-twitter" data-id="${randomBlog.id}" data-platform="twitter" title="Share ke Twitter">
                        <span>🐦</span> Twitter
                    </button>
                    <button class="share-btn share-copy" data-id="${randomBlog.id}" data-platform="copy" title="Copy Link">
                        <span>🔗</span> Copy
                    </button>
                </div>
            </div>
        </article>
    `;
    
    const randomCard = randomBlogContainer.querySelector('.blog-card');
    if (randomCard) {
        randomCard.addEventListener('click', (e) => {
            if (e.target.closest('.share-btn')) {
                return;
            }
            displayExpandedBlog(randomBlog.id);
        });
        
        randomCard.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.dataset.id;
                const platform = btn.dataset.platform;
                shareBlog(id, platform);
            });
        });
    }
    
    randomBlogSection.classList.remove('hidden');
    randomBlogSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

const hideRandomBlog = () => {
    randomBlogSection.classList.add('hidden');
};

const displayExpandedBlog = (id) => {
    const blog = getBlog(id);
    if (!blog) return;
    
    const categoryClass = categoryColors[blog.category] || 'category-default';
    
    expandedBlogContent.innerHTML = `
        <div class="article-header">
            <img src="${blog.image}" alt="${blog.title}" class="article-image">
            <span class="article-category ${categoryClass}">${blog.category}</span>
            <h1 class="article-title">${blog.title}</h1>
            <div class="article-meta">
                <span class="article-meta-item">
                    <span>👤</span> ${blog.author}
                </span>
                <span class="article-meta-item">
                    <span>📅</span> ${blog.date}
                </span>
            </div>
            <div class="share-buttons" style="margin-top: 1.5rem;">
                <button class="share-btn share-whatsapp" data-id="${blog.id}" data-platform="whatsapp" title="Share ke WhatsApp">
                    <span>📱</span> WhatsApp
                </button>
                <button class="share-btn share-twitter" data-id="${blog.id}" data-platform="twitter" title="Share ke Twitter">
                    <span>🐦</span> Twitter
                </button>
                <button class="share-btn share-copy" data-id="${blog.id}" data-platform="copy" title="Copy Link">
                    <span>🔗</span> Copy
                </button>
            </div>
        </div>
        <div class="article-description">
            ${blog.description}
        </div>
        <div class="article-content">
            ${blog.fullContent}
        </div>
    `;
    
    expandedBlogContent.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = btn.dataset.id;
            const platform = btn.dataset.platform;
            shareBlog(id, platform);
        });
    });
    
    document.getElementById('home').style.display = 'none';
    document.getElementById('blogs').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    randomBlogSection.classList.add('hidden');
    
    expandedBlogSection.classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const hideExpandedBlog = () => {
    expandedBlogSection.classList.add('hidden');
    
    document.getElementById('home').style.display = 'block';
    document.getElementById('blogs').style.display = 'block';
    document.getElementById('about').style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const shareBlog = (id, platform) => {
    const blog = getBlog(id);
    if (!blog) return;
    
    const url = window.location.href;
    const text = `${blog.title} - ${blog.description}`;
    
    switch(platform) {
        case 'whatsapp':
            window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
            showToast('Membuka WhatsApp...');
            break;
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
            showToast('Membuka Twitter...');
            break;
        case 'copy':
            copyToClipboard(url + '#blog-' + id);
            break;
    }
};

const copyToClipboard = (text) => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => showToast('✓ Link berhasil disalin!'))
            .catch(() => showToast('✗ Gagal menyalin link'));
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast('✓ Link berhasil disalin!');
        } catch {
            showToast('✗ Gagal menyalin link');
        }
        document.body.removeChild(textarea);
    }
};

const initScrollAnimations = () => {
    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.animate-on-scroll').forEach(el => el.classList.add('animate-visible'));
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
        aboutSection.classList.add('animate-on-scroll');
        observer.observe(aboutSection);
    }
};

const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

const closeMenu = () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
};

const initEventListeners = () => {
    randomBlogBtn.addEventListener('click', displayRandomBlog);
    closeRandomBlogBtn.addEventListener('click', hideRandomBlog);
    hamburger.addEventListener('click', toggleMenu);

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.currentTarget.dataset.id;
            const platform = e.currentTarget.dataset.platform;
            shareBlog(id, platform);
        });
    });

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        currentPage = 1;
        updateBlogDisplay();
    });

    categoryFilterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryFilterBtns.forEach(b => b.classList.remove('active'));
            
            e.currentTarget.classList.add('active');
            
            selectedCategory = e.currentTarget.dataset.category;
            currentPage = 1;
            updateBlogDisplay();
        });
    });

    blogCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.share-btn')) {
                return;
            }
            
            const blogId = card.dataset.blogId;
            displayExpandedBlog(blogId);
        });
        
        card.style.cursor = 'pointer';
    });

    backToHomeBtn.addEventListener('click', hideExpandedBlog);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideRandomBlog();
            closeMenu();
            hideExpandedBlog();
        }
    });
};

const init = () => {
    blogCards = document.querySelectorAll('.blog-card');
    paginationContainer = document.getElementById('paginationContainer');
    randomBlogBtn = document.getElementById('randomBlogBtn');
    randomBlogSection = document.getElementById('randomBlogSection');
    randomBlogContainer = document.getElementById('randomBlogContainer');
    closeRandomBlogBtn = document.getElementById('closeRandomBlog');
    toast = document.getElementById('toast');
    hamburger = document.getElementById('hamburger');
    navMenu = document.querySelector('.nav-menu');
    searchInput = document.getElementById('searchInput');
    categoryFilterBtns = document.querySelectorAll('.category-filter-btn');
    noResults = document.getElementById('noResults');
    expandedBlogSection = document.getElementById('expandedBlogSection');
    expandedBlogContent = document.getElementById('expandedBlogContent');
    backToHomeBtn = document.getElementById('backToHome');
    
    initEventListeners();
    updateBlogDisplay(); 
    initScrollAnimations();
};

document.addEventListener('DOMContentLoaded', init);