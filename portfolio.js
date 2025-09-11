// JavaScript for navigation toggle and Lucide icons
window.addEventListener('DOMContentLoaded', function () {
    // --- Performance helpers & skeleton ---
    const qs = (s) => document.querySelector(s);

    function showSkeleton() {
        qs('#heroTitle') && (qs('#heroTitle').textContent = 'Loading profile...');
        qs('#heroSummary') && (qs('#heroSummary').textContent = 'Fetching data...');
    }

    function warnFileProtocol() {
        if (location.protocol === 'file:') {
            console.warn('Running via file:// can block fetch for data.json. Use a local server (e.g. npx serve).');
        }
    }

    function perfMark(label, fn) {
        console.time(label);
        const r = fn();
        Promise.resolve(r).finally(() => console.timeEnd(label));
        return r;
    }

    // --- Data loading with cache & timeout ---
    async function loadData() {
        // Try sessionStorage first
        const cached = sessionStorage.getItem('portfolioData');
        if (cached) {
            try { return JSON.parse(cached); } catch { /* ignore */ }
        }

        // Removed AbortController + timeout (no timeout desired)
        const res = await fetch('data.json'); // simple fetch with default browser handling
        if (!res.ok) throw new Error('Failed to fetch data.json: ' + res.status);
        const json = await res.json();
        sessionStorage.setItem('portfolioData', JSON.stringify(json));
        return json;
    }

    // Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Navigation toggle
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }

    // Contact form submission (basic example)
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message!');
            contactForm.reset();
        });
    }

    // --- Existing helpers/renderers (unchanged) ---
    const create = (tag, cls, html) => {
        const el = document.createElement(tag);
        if (cls) el.className = cls;
        if (html !== undefined) el.innerHTML = html;
        return el;
    };

    function setMeta(data) {
        if (data.meta) {
            qs('#metaTitle').textContent = data.meta.siteName || 'Portfolio';
            qs('#metaDescription').setAttribute('content', data.meta.description || '');
            qs('#metaAuthor').setAttribute('content', data.meta.author || '');
            document.title = data.meta.siteName || document.title;
        }
    }

    function renderHero(profile, contact, socialLinks) {
        if (!profile) return;
        qs('#availabilityBadge').textContent = contact?.availability || 'Available';
        qs('#heroTitle').innerHTML = `
      <span>${profile.role?.split(' ')[0] || 'Full'}</span>
      <span class="text-gradient">${profile.role?.split(' ').slice(1).join(' ') || 'Developer'}</span>`;
        const summary = (profile.summary || []).join(' ');
        qs('#heroSummary').textContent = summary;
        const socialRoot = qs('#socialLinks');
        socialRoot.innerHTML = '';
        (socialLinks || []).forEach(s => {
            const a = create('a', 'social-link');
            a.href = s.url;
            a.target = '_blank';
            a.rel = 'noopener';
            a.innerHTML = `<i data-lucide="${s.icon || 'link'}"></i>`;
            socialRoot.appendChild(a);
        });
    }

    function renderSkills(skills) {
        if (!skills) return;
        const grid = qs('#skillsDynamic');
        grid.innerHTML = '';
        const categories = [
            { title: 'Primary Skills', icon: 'code-2', color: 'primary', list: skills.primary || [] },
            { title: 'Secondary', icon: 'layers', color: 'accent', list: (skills.secondary || []).map(n => ({ name: n })) },
            { title: 'Highlighted', icon: 'star', color: 'primary', list: (skills.highlighted || []).map(n => ({ name: n })) }
        ];
        categories.forEach(cat => {
            const card = create('div', 'skill-category');
            card.innerHTML = `
      <div class="skill-header">
        <div class="skill-icon ${cat.color}"><i data-lucide="${cat.icon}"></i></div>
        <h3>${cat.title}</h3>
      </div>
      <div class="skill-tags">
        ${cat.list.map(s => `<span class="skill-tag" title="${s.level ? 'Level: ' + s.level : ''}">${s.name || s}</span>`).join('')}
      </div>`;
            grid.appendChild(card);
        });

        const toolsGrid = qs('#toolsGrid');
        toolsGrid.innerHTML = (skills.tools || ['Git', 'GitHub', 'VS Code']).map(t => `<span class="tool-tag">${t}</span>`).join('');
    }

    function renderProjects(projects) {
        if (!Array.isArray(projects)) return;
        const featuredRoot = qs('#featuredProjects');
        const othersRoot = qs('#otherProjectsGrid');
        featuredRoot.innerHTML = '';
        othersRoot.innerHTML = '';
        projects.filter(p => p.featured).forEach(p => {
            featuredRoot.appendChild(projectCard(p, true));
        });
        projects.filter(p => !p.featured).forEach(p => {
            othersRoot.appendChild(projectCard(p, false));
        });
    }

    function projectCard(p, featured) {
        const div = create('div', `project-card ${featured ? 'featured' : 'small'}`);
        const techHtml = (p.tech || []).map(t => `<span class="tech-tag">${t}</span>`).join('');
        div.innerHTML = `
    <div class="project-image">
      <img src="${(p.images && p.images[0]) || 'https://via.placeholder.com/500x300?text=Project'}" alt="${p.name}">
    </div>
    <div class="project-content">
      <${featured ? 'h3' : 'h4'} class="project-title">${p.name}</${featured ? 'h3' : 'h4'}>
      <p class="project-description">${p.description || ''}</p>
      <div class="project-tech">${techHtml}</div>
      <div class="project-links">
        ${p.live ? `<a class="btn ${featured ? 'btn-primary btn-sm' : 'btn-outline btn-xs'}" href="${p.live}" target="_blank" rel="noopener">
            <i data-lucide="play"></i><span>Live</span></a>` : ''}
        ${p.github ? `<a class="btn ${featured ? 'btn-outline btn-sm' : 'btn-outline btn-xs'}" href="${p.github}" target="_blank" rel="noopener">
            <i data-lucide="github"></i><span>Code</span></a>` : ''}
      </div>
    </div>`;
        return div;
    }

    function renderExperience(experience) {
        const root = qs('#experienceTimeline');
        if (!root) return;
        root.innerHTML = (experience || []).map(exp => `
    <div class="timeline-item">
      <div class="timeline-header">
        <div>
          <h4>${exp.role}</h4>
          <p class="company">${exp.company}</p>
        </div>
        <span class="timeline-period">${formatPeriod(exp.start, exp.end)}</span>
      </div>
      <p class="timeline-description">
        ${(exp.highlights || []).map(h => `• ${h}`).join('<br>')}
      </p>
    </div>`).join('');
    }

    function formatPeriod(start, end) {
        if (!start) return '';
        return `${start} - ${end || 'Present'}`;
    }

    function renderEducation(education, certifications) {
        qs('#educationList').innerHTML = (education || []).map(ed => `
    <div class="education-item">
      <div class="education-header">
        <div>
          <h4>${ed.degree}</h4>
          <p class="school">${ed.institution}</p>
        </div>
        <span class="education-period">${ed.start} - ${ed.end}</span>
      </div>
      <p class="education-description">${(ed.details || []).join('<br>')}</p>
    </div>`).join('');
        qs('#certificationsList').innerHTML = (certifications || []).map(c => `
    <span class="cert-tag" title="${c.issuer}">${c.title}</span>`).join('');
    }

    function renderTimeline(years) {
        const root = qs('#yearTimeline');
        if (!root) return;
        root.innerHTML = (years || []).map(y => `
    <div class="interest-item">
      <i data-lucide="calendar"></i>
      <span>${y.year}: ${(y.items || []).join(', ')}</span>
    </div>`).join('');
    }

    function renderContact(contact, socialLinks) {
        const methods = qs('#contactMethods');
        if (methods) {
            methods.innerHTML = `
      <a href="mailto:${contact.email}" class="contact-method">
        <div class="contact-icon"><i data-lucide="mail"></i></div>
        <div class="contact-details"><p class="contact-label">Email</p><p class="contact-value">${contact.email}</p></div>
      </a>
      <a href="tel:${contact.phone}" class="contact-method">
        <div class="contact-icon"><i data-lucide="phone"></i></div>
        <div class="contact-details"><p class="contact-label">Phone</p><p class="contact-value">${contact.phone}</p></div>
      </a>
      <div class="contact-method">
        <div class="contact-icon"><i data-lucide="map-pin"></i></div>
        <div class="contact-details"><p class="contact-label">Location</p><p class="contact-value">${contact.location || '—'}</p></div>
      </div>`;
        }
        const profiles = qs('#socialProfiles');
        if (profiles) {
            profiles.innerHTML = (socialLinks || []).map(s => `
      <a href="${s.url}" target="_blank" class="social-method">
        <div class="social-icon"><i data-lucide="${s.icon || 'link'}"></i></div>
        <div class="social-details">
          <p class="social-label">${s.label}</p>
          <p class="social-value">${extractHandle(s.url)}</p>
        </div>
        <i data-lucide="external-link" class="external-icon"></i>
      </a>`).join('');
        }
    }

    function extractHandle(url) {
        try {
            const u = new URL(url);
            return u.pathname.replace(/\/+/, '/').replace(/^\/|\/$/g, '') || u.host;
        } catch { return url; }
    }

    function renderFooter(footer) {
        const el = qs('#footerContent');
        if (!el || !footer) return;
        el.innerHTML = `
    <p>${footer.copyright}</p>
    <p class="footer-note">Built with ${footer.builtWith?.join(', ')}</p>`;
    }

    function enableNavToggle() {
        const toggle = document.getElementById('navToggle');
        const links = document.querySelector('.nav-links');
        if (toggle && links) {
            toggle.addEventListener('click', () => {
                links.classList.toggle('open');
            });
        }
    }

    // Slight tweak: ensure lucide icons refresh after each major batch render
    function refreshIcons() { if (window.lucide) window.lucide.createIcons(); }

    async function init() {
        warnFileProtocol();
        showSkeleton();
        let data;
        await perfMark('portfolio:init', async () => {
            try {
                data = await perfMark('portfolio:dataFetch', loadData);
                setMeta(data);
                renderHero(data.profile, data.contact, data.socialLinks);
                renderSkills(data.skills);
                renderProjects(data.projects);
                renderExperience(data.experience);
                renderEducation(data.education, data.certifications);
                renderTimeline(data.timeline);
                renderContact(data.contact, data.socialLinks);
                renderFooter(data.footer);
            } catch (e) {
                console.error(e);
                const hero = qs('#heroTitle');
                if (hero) hero.textContent = 'Failed to load data.';
            } finally {
                refreshIcons();
            }
        });
        // Warn if slow
        if (performance.getEntriesByName('portfolio:dataFetch')[0]?.duration > 2000) {
            console.warn('Data fetch exceeded 2s; check network, server, or file duplication.');
        }
        enableNavToggle();
    }

    document.addEventListener('DOMContentLoaded', init);
});