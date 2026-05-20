// Songbird Villa - Premium Interactive Floor Plan Controller

// 1. Room Details Database (Updated to precisely match the blueprint image)
const roomDetails = {
    bedroom1: {
        badge: "Master Suite",
        title: "Bedroom 1 (Master)",
        desc: "The premier upper-level retreat of Songbird Villa. Positioned directly above the Ground Floor study wing, this Master Bedroom offers unmatched sunset views and high vaulted finishes.",
        size: "450 Sq Ft",
        view: "Panoramic Ocean / Sunset Vista",
        features: [
            "Bespoke King-size platform bed facing the sea",
            "Writing desk and designer seating area",
            "Direct pocket glass wall leading to Balcony Terrace",
            "Integrated climate and home automation control"
        ]
    },
    masterbath: {
        badge: "Master Bath",
        title: "Master Bath",
        desc: "A luxurious en-suite sanctuary tiled in natural premium stone. Features high-end designer bath fixtures and beautiful custom wood accents.",
        size: "120 Sq Ft",
        view: "Internal Ventilation & Garden Glare",
        features: [
            "Premium walk-in tiled shower with linear drain",
            "Solid stone countertop with bespoke washbasin",
            "High-end copper fixtures and hardware",
            "Concealed W.C. compartment and storage"
        ]
    },
    masterwardrobe: {
        badge: "Master Wardrobe",
        title: "Walk-in Closet",
        desc: "A custom-crafted timber closet providing ample dress storage, custom drawer dividers, and full-length dressing mirrors.",
        size: "60 Sq Ft",
        view: "Internal Storage Zone",
        features: [
            "Solid oak hanging rods and open shelves",
            "Dedicated secure safe and valets",
            "Soft atmospheric LED cabinet lighting",
            "Fully integrated laundry bin storage"
        ]
    },
    balcony: {
        badge: "Master Balcony",
        title: "Balcony Terrace",
        desc: "An elevated private deck off the Master Bedroom. Designed with travertine tiling and glass railings to present clear sightlines to the sea.",
        size: "80 Sq Ft",
        view: "Endless Sea & Ocean Horizon",
        features: [
            "Travertine stone tiled flooring",
            "Frameless glass structural balustrades",
            "Bespoke woven outdoor lounger chairs",
            "Concealed night-time accent wash lights"
        ]
    },
    bedroom2: {
        badge: "VIP Bedroom & Study",
        title: "Bedroom 2 / Study",
        desc: "Situated on the ground floor right wing. Designed as a dual-purpose VIP suite and study, featuring custom writing desks, lounging sofa, and a cozy sleeping layout.",
        size: "320 Sq Ft",
        view: "East Garden & Cliff Views",
        features: [
            "Bespoke King-size bed (convertible to twin configuration)",
            "Integrated custom timber executive desk",
            "Comfortable reading and meeting sofa area",
            "Double doors out to the East Terrace pathways"
        ]
    },
    bed2wc: {
        badge: "En-suite W.C.",
        title: "Bedroom 2 W.C.",
        desc: "An elegant private guest bathroom serving the Bedroom 2/Study, styled with solid teak and brass.",
        size: "40 Sq Ft",
        view: "Cliffside Venting",
        features: [
            "Travertine vanity with vessel sink",
            "Modern wall-mounted ceramic water closet",
            "Warm mirror-integrated LED backlight",
            "Polished luxury brass hardware details"
        ]
    },
    bed2store: {
        badge: "Storage Closet",
        title: "Bedroom 2 Store",
        desc: "An internal secured storage room holding VIP guests' luggage, travel trunks, and seasonal items.",
        size: "30 Sq Ft",
        view: "Internal Security Zone",
        features: [
            "Built-in heavy-duty luggage racks",
            "Combination keyless security lock system",
            "Adjustable ventilated utility shelving",
            "Staff backup linen stock corner"
        ]
    },
    bedroom3: {
        badge: "Guest Suite",
        title: "Bedroom 3",
        desc: "Positioned on the ground floor top-left wing (right room). Beautifully styled with natural local materials and enjoying direct access out into the Screened Porch hallway.",
        size: "280 Sq Ft",
        view: "Tropical Landscaped Planters",
        features: [
            "Bespoke twin-size platform beds (can combine)",
            "Solid oak writing desk and chair set",
            "Sliding doors directly facing the garden planter",
            "Access to the central shared shower wing"
        ]
    },
    bedroom4: {
        badge: "Guest Suite",
        title: "Bedroom 4",
        desc: "Located in the top-left wing (left room). Bedroom 4 is surrounded by coastal palms and has its own private entry door swinging from the main terrace walkway.",
        size: "280 Sq Ft",
        view: "West Cliff & Garden View",
        features: [
            "Designer Queen-size bed with fabric headboard",
            "Natural rattan lounge chair and reading light",
            "Built-in floor-to-ceiling closet cabinet",
            "Acoustically insulated shared corridor walls"
        ]
    },
    topwc: {
        badge: "Shared Wing W.C.",
        title: "Shared Wing Toilet Room",
        desc: "A beautifully appointed standalone washroom serving the Guest Bedroom 3 and 4 wing.",
        size: "30 Sq Ft",
        view: "Corridor Venting",
        features: [
            "Designer wall-hung ceramic toilet",
            "Mini stone basin and floating brass faucet",
            "Polished concrete floor finishes",
            "Soft recessed spot downlights"
        ]
    },
    topshower: {
        badge: "Shared Wing Bath",
        title: "Shared Shower Room",
        desc: "A dedicated standalone walk-in glass shower room serving the Guest Bedrooms 3 & 4.",
        size: "30 Sq Ft",
        view: "Internal Garden Glaze",
        features: [
            "Spacious glass-partitioned walk-in shower",
            "Large overhead rainfall showerhead fixture",
            "Slip-resistant mosaic tile flooring",
            "Handheld shower wand and thermostatic controls"
        ]
    },
    porch: {
        badge: "Screened Lounge",
        title: "Screened Porch",
        desc: "An outdoor room clad in structural insect-proof bronze mesh. Merges the comfort of the main living room with the gentle coastal trade winds.",
        size: "220 Sq Ft",
        view: "Central Pool & Travertine Terrace",
        features: [
            "Bespoke teak coffee table and armchair set",
            "Integrated overhead natural fiber ceiling fans",
            "Direct sliding door into the central Living Room",
            "Premium weather-resistant flooring"
        ]
    },
    living: {
        badge: "Social Lounge",
        title: "Grand Living Room",
        desc: "The architectural centerpiece of Songbird Villa. Boasting massive high-clearance ceilings and a giant vanishing glass wall that slides fully out of sight, opening directly to the pool deck.",
        size: "450 Sq Ft",
        view: "Infinity Pool & Sea Horizon",
        features: [
            "Bespoke modular custom linen sofa layout",
            "Solid live-edge local wood dining/coffee table",
            "Hidden integrated multi-speaker surround audio",
            "Custom-designed stone fireplace element"
        ]
    },
    guestwcg: {
        badge: "Guest W.C.",
        title: "Ground Guest W.C.",
        desc: "A high-end powder room located immediately off the grand entrance hallway, serving dining and living room guests.",
        size: "35 Sq Ft",
        view: "Entry Terrace Exposure",
        features: [
            "Bespoke hand-carved stone pedestal washbasin",
            "Concealed luxury wall-mounted toilet",
            "Designer accent brass wall sconces",
            "Organic textured paint wall finishes"
        ]
    },
    kitchen: {
        badge: "Culinary Suite",
        title: "Kitchen & Dining Room",
        desc: "A premium Chef's kitchen hosting high-capacity Sub-Zero appliances, custom cabinetry, a grand prep island, and an elegant circular dining table looking onto the East Terrace.",
        size: "350 Sq Ft",
        view: "East Garden & Stepping Stone Path",
        features: [
            "Professional Wolf cooktop and Sub-Zero refrigeration",
            "Bespoke quartz waterfall kitchen island",
            "Elegant circular dining layout with seating for 6",
            "Direct service doorway out to the entry terrace"
        ]
    },
    pool: {
        badge: "Infinity Pool",
        title: "Infinity Pool",
        desc: "A beautifully sculpted, organic bean-shaped swimming pool. Features an endless vanishing edge that merges with the Anguillan ocean, plus shallow entry steps.",
        size: "850 Sq Ft",
        view: "Panoramic Caribbean Horizon",
        features: [
            "Vanishing infinity edge rim system",
            "Built-in shallow circular access steps",
            "Custom natural stone interior plaster finish",
            "Color-changing underwater fiber-optic lighting"
        ]
    },
    poolterrace: {
        badge: "Outdoor Living",
        title: "Main Travertine Terrace",
        desc: "An expansive 2,500 sq ft travertine terrace. Accommodates multiple zones: a sunken fire pit beach lounge, premium sunbeds, outdoor umbrellas, and stone stepping pathways.",
        size: "2,500 Sq Ft",
        view: "Panoramic 180° Sea View",
        features: [
            "Premium light-colored travertine tiling (heats-resistant)",
            "Large structural parasols/umbrellas",
            "Sunken coastal beach lounge seating",
            "Direct masonry staircase leading down to beach"
        ]
    },
    jacuzzi: {
        badge: "Wellness Amenity",
        title: "Hot Tub (Jacuzzi)",
        desc: "A circular built-in spa tub positioned directly between the Screened Porch and the Infinity Pool. Lined with organic stone and fitted with high-efficiency massage jets.",
        size: "50 Sq Ft",
        view: "Pool and Sunset Horizon",
        features: [
            "Deep circular concrete structural shell",
            "Thermostatic water heating controls",
            "High-capacity hydro-massage jets",
            "Integrated circular seating bench"
        ]
    },
    bedroom5: {
        badge: "Lower Suite",
        title: "Guest Bedroom 5",
        desc: "A highly secluded guest bedroom situated on the lower level. Features absolute quiet, private sliding doors to the Lower Level Porch, and its own private shower en-suite.",
        size: "300 Sq Ft",
        view: "Lower Level Porch & Planters",
        features: [
            "Bespoke King-size platform bed",
            "Integrated study desk area and library shelves",
            "Direct pocket doors out to the porch area",
            "En-suite private tiled shower bathroom"
        ]
    },
    wdcloset: {
        badge: "Service Closet",
        title: "W/D Laundry Closet",
        desc: "An utility laundry closet in the lower hallway housing heavy-duty stacked commercial washing and drying units.",
        size: "20 Sq Ft",
        view: "Internal Utility Zone",
        features: [
            "Stacked high-speed washer and drier",
            "Overhead detergent and iron organizers",
            "Ductless ventilation system",
            "Staff utility backup storage"
        ]
    },
    guestwc: {
        badge: "Lower Guest W.C.",
        title: "Guest W.C.",
        desc: "A separate guest powder room on the lower floor serving bedroom 5 and corridor users.",
        size: "40 Sq Ft",
        view: "Internal Ventilation",
        features: [
            "Teak vanity cabinet with ceramic sink",
            "Wall-hung water closet toilet",
            "Natural stone floor tiling",
            "Ductless ventilation air-exchanger"
        ]
    },
    staff: {
        badge: "Service / Staff",
        title: "Laundry & Mechanicals",
        desc: "The critical utility center of the villa. Labeled private and secure, housing mechanical systems, filtration, electrical panels, and housekeeping reserves.",
        size: "250 Sq Ft",
        view: "Restricted Staff Only Access",
        features: [
            "Primary commercial laundry operations center",
            "Desalination water management plant controls",
            "Villa high-speed fiber routers and backup server",
            "Locked inventory closets for housekeeping staff"
        ]
    },
    lowerporch: {
        badge: "Lower Terrace",
        title: "Lower Level Porch",
        desc: "A shaded ground-contact terrace running across the lower level. Sheltered from the afternoon sun and looking onto lush landscaping planters.",
        size: "280 Sq Ft",
        view: "Lush Lower Level Planters",
        features: [
            "Travertine tiling in a textured finish",
            "Integrated structural support columns",
            "Steps up to the main pool terrace deck",
            "Beautiful concrete garden planter boxes"
        ]
    }
};

// 2. Active State Management
let currentFloor = 'ground';
let activeFilter = 'all';

// Floor Canvas Tracking for Zoom and Pan
const floorStates = {
    ground: { x: 0, y: 0, scale: 1 },
    lower: { x: 0, y: 0, scale: 1 },
    second: { x: 0, y: 0, scale: 1 }
};

// 3. Document Element References
const themeBtn = document.getElementById('theme-btn');
const currentFloorTitle = document.getElementById('current-floor-title');
const defaultInfoBox = document.getElementById('room-info-default');
const selectedInfoBox = document.getElementById('room-info-selected');

// Details elements
const detailBadge = document.getElementById('details-badge');
const detailTitle = document.getElementById('details-title');
const detailDesc = document.getElementById('details-desc');
const detailSize = document.getElementById('details-size');
const detailView = document.getElementById('details-view');
const detailFeatures = document.getElementById('details-features');
const mapTooltip = document.getElementById('map-tooltip');

// Zoom elements
const zoomInBtn = document.getElementById('zoom-in-btn');
const zoomOutBtn = document.getElementById('zoom-out-btn');
const zoomResetBtn = document.getElementById('zoom-reset-btn');

// 4. Initial Launch
document.addEventListener('DOMContentLoaded', () => {
    initFloorInteractivity();
    initZoomPanSystem();
    initThemeManager();
    initTooltipTracker();
    initScrollHeader();
    initMobileNav();
    initGalleryLightbox();
    initBookingCalendar();
    initReservationDrawer();
    initAmbientSoundscape();
    initJournalSlider();
});

// 5. Theme Manager (Light/Dark Mode toggle)
function initThemeManager() {
    const savedTheme = localStorage.getItem('songbird-theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeBtn.addEventListener('click', () => {
        const activeTheme = document.body.getAttribute('data-theme');
        const nextTheme = activeTheme === 'light' ? 'dark' : 'light';
        
        document.body.setAttribute('data-theme', nextTheme);
        localStorage.setItem('songbird-theme', nextTheme);
        updateThemeIcon(nextTheme);
    });
}

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeBtn.innerHTML = `
            <!-- Dark Mode Icon (Moon) -->
            <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        `;
    } else {
        themeBtn.innerHTML = `
            <!-- Light Mode Icon (Sun) -->
            <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
            </svg>
        `;
    }
}

// 6. Interactive Room Navigation
function initFloorInteractivity() {
    const roomGroups = document.querySelectorAll('.room-group');
    
    roomGroups.forEach(group => {
        // Double-check element holds data attribute
        const roomId = group.getAttribute('data-room');
        if (!roomId || !roomDetails[roomId]) return;

        // Hover events
        group.addEventListener('mouseenter', (e) => {
            const data = roomDetails[roomId];
            mapTooltip.innerHTML = `${data.title} <span>Click to explore details</span>`;
            mapTooltip.classList.add('visible');
        });

        group.addEventListener('mouseleave', () => {
            mapTooltip.classList.remove('visible');
        });

        // Click selection events
        group.addEventListener('click', (e) => {
            e.stopPropagation();
            selectRoom(roomId, group);
        });
    });

    // Clicking elsewhere on the map resets selection
    document.querySelectorAll('.floor-plan-wrapper').forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            deselectAllRooms();
        });
    });
}

function selectRoom(roomId, element) {
    // 1. Remove active styles from previous choices
    deselectAllRooms();

    // 2. Select this room
    element.classList.add('selected');

    // 3. Render content inside info hub drawer
    const data = roomDetails[roomId];
    if (!data) return;

    detailBadge.innerText = data.badge;
    detailTitle.innerText = data.title;
    detailDesc.innerText = data.desc;
    detailSize.innerText = data.size;
    detailView.innerText = data.view;

    // Reset list
    detailFeatures.innerHTML = '';
    data.features.forEach(feat => {
        const li = document.createElement('li');
        li.innerText = feat;
        detailFeatures.appendChild(li);
    });

    // 4. Show drawer content
    defaultInfoBox.style.display = 'none';
    selectedInfoBox.style.display = 'flex';
}

function deselectAllRooms() {
    document.querySelectorAll('.room-group.selected').forEach(el => {
        el.classList.remove('selected');
    });
    defaultInfoBox.style.display = 'block';
    selectedInfoBox.style.display = 'none';
}

// 7. Interactive Floating Tooltip Tracker
function initTooltipTracker() {
    document.addEventListener('mousemove', (e) => {
        if (!mapTooltip.classList.contains('visible')) return;
        
        // Offset tooltip positioning from cursor slightly
        const offset = 12;
        mapTooltip.style.left = `${e.clientX}px`;
        mapTooltip.style.top = `${e.clientY - offset}px`;
    });
}

// 8. Switching floors
window.switchFloor = function(floorId) {
    if (floorId === currentFloor) return;
    
    // Manage tab active status shifting
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });

    const activeTab = document.getElementById(`tab-${floorId}`);
    if (activeTab) {
        activeTab.classList.add('active');
        activeTab.setAttribute('aria-selected', 'true');
    }

    // Switch floor map frames with micro scale shifts
    const oldWrapper = document.getElementById(`floor-${currentFloor}`);
    const newWrapper = document.getElementById(`floor-${floorId}`);

    if (oldWrapper) oldWrapper.classList.remove('active');
    if (newWrapper) {
        newWrapper.classList.add('active');
        // Let transitions fire then reset zoom state
        setTimeout(() => {
            resetZoomForFloor(floorId);
        }, 50);
    }

    // Update active variables & heading Title Text
    currentFloor = floorId;
    
    const namesMap = {
        'ground': 'Villa Ground Floor',
        'lower': 'Lower Floor',
        'second': 'Second Floor'
    };
    currentFloorTitle.innerText = namesMap[floorId];

    // Reset Selection & filter
    deselectAllRooms();
    setFilter(activeFilter);
};

// 9. Dynamic Filter Engine
window.setFilter = function(category) {
    activeFilter = category;
    
    // Toggle active classes on filter buttons
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
    });

    const activeChip = document.getElementById(`filter-${category}`);
    if (activeChip) activeChip.classList.add('active');

    // Handle SVG highlights and dims
    const mapContainer = document.querySelector('.map-viewport');
    
    if (category === 'all') {
        mapContainer.classList.remove('map-filtered');
        document.querySelectorAll('.room-group').forEach(group => {
            group.classList.remove('filter-match');
        });
    } else {
        mapContainer.classList.add('map-filtered');
        document.querySelectorAll('.room-group').forEach(group => {
            const roomType = group.getAttribute('data-type');
            if (roomType === category) {
                group.classList.add('filter-match');
            } else {
                group.classList.remove('filter-match');
            }
        });
    }
};

// 10. Zoom and Drag-Pan Controls System
function initZoomPanSystem() {
    const wrappers = document.querySelectorAll('.floor-plan-wrapper');
    
    wrappers.forEach(wrapper => {
        const floorId = wrapper.id.replace('floor-', '');
        const canvas = wrapper.querySelector('.zoom-canvas');
        
        let isDragging = false;
        let startX = 0;
        let startY = 0;

        // Mouse Drag Controls
        wrapper.addEventListener('mousedown', (e) => {
            // Only primary mouse click initiates drag
            if (e.button !== 0) return;
            
            isDragging = true;
            wrapper.style.cursor = 'grabbing';
            
            // Calc starting coordinates
            startX = e.clientX - floorStates[floorId].x;
            startY = e.clientY - floorStates[floorId].y;
            
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging || currentFloor !== floorId) return;
            
            floorStates[floorId].x = e.clientX - startX;
            floorStates[floorId].y = e.clientY - startY;
            
            applyCanvasTransform(floorId, canvas);
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                wrapper.style.cursor = 'grab';
            }
        });

        wrapper.addEventListener('mouseleave', () => {
            if (isDragging) {
                isDragging = false;
                wrapper.style.cursor = 'grab';
            }
        });

        // Touch Drag Controls for Mobile & Tablets
        wrapper.addEventListener('touchstart', (e) => {
            if (e.touches.length !== 1) return;
            
            isDragging = true;
            const touch = e.touches[0];
            startX = touch.clientX - floorStates[floorId].x;
            startY = touch.clientY - floorStates[floorId].y;
        });

        wrapper.addEventListener('touchmove', (e) => {
            if (!isDragging || currentFloor !== floorId || e.touches.length !== 1) return;
            
            const touch = e.touches[0];
            floorStates[floorId].x = touch.clientX - startX;
            floorStates[floorId].y = touch.clientY - startY;
            
            applyCanvasTransform(floorId, canvas);
            e.preventDefault(); // Stop mobile scroll bounces while panning
        }, { passive: false });

        wrapper.addEventListener('touchend', () => {
            isDragging = false;
        });

        // Mouse Wheel Zooming
        wrapper.addEventListener('wheel', (e) => {
            e.preventDefault();
            
            const zoomFactor = 0.08;
            const currentScale = floorStates[floorId].scale;
            let nextScale = currentScale - e.deltaY * zoomFactor * 0.01;
            
            // Impose boundary checks
            nextScale = Math.min(Math.max(0.6, nextScale), 4);
            
            // Adjust coordinates to zoom toward mouse pointer
            const rect = wrapper.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const zoomRatio = nextScale / currentScale;
            floorStates[floorId].x = mouseX - (mouseX - floorStates[floorId].x) * zoomRatio;
            floorStates[floorId].y = mouseY - (mouseY - floorStates[floorId].y) * zoomRatio;
            floorStates[floorId].scale = nextScale;
            
            applyCanvasTransform(floorId, canvas);
        }, { passive: false });
    });

    // Zoom Button Handlers
    zoomInBtn.addEventListener('click', () => adjustScale(0.2));
    zoomOutBtn.addEventListener('click', () => adjustScale(-0.2));
    zoomResetBtn.addEventListener('click', () => resetZoomForFloor(currentFloor));
}

function adjustScale(amount) {
    const floorId = currentFloor;
    const canvas = document.getElementById(`canvas-${floorId}`);
    if (!canvas) return;

    const wrapper = document.getElementById(`floor-${floorId}`);
    const rect = wrapper.getBoundingClientRect();
    
    // Zoom relative to center of viewport
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const currentScale = floorStates[floorId].scale;
    let nextScale = currentScale + amount;
    nextScale = Math.min(Math.max(0.6, nextScale), 4);

    const zoomRatio = nextScale / currentScale;
    floorStates[floorId].x = centerX - (centerX - floorStates[floorId].x) * zoomRatio;
    floorStates[floorId].y = centerY - (centerY - floorStates[floorId].y) * zoomRatio;
    floorStates[floorId].scale = nextScale;

    applyCanvasTransform(floorId, canvas);
}

function resetZoomForFloor(floorId) {
    const canvas = document.getElementById(`canvas-${floorId}`);
    if (!canvas) return;

    floorStates[floorId].scale = 1;
    floorStates[floorId].x = 0;
    floorStates[floorId].y = 0;

    applyCanvasTransform(floorId, canvas);
}

function applyCanvasTransform(floorId, canvas) {
    const state = floorStates[floorId];
    canvas.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
}

// ==========================================================================
// 2026 Luxury Marketing Website Custom Interactive Controllers
// ==========================================================================

// 11. Sticky Nav Scroll Compressor & Hero Parallax
function initScrollHeader() {
    const header = document.getElementById('global-nav');
    const heroBg = document.querySelector('.hero-parallax-bg');
    
    const handleScroll = () => {
        // Sticky Header Compression
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        // Hero Background Parallax Pan
        if (heroBg) {
            let scrollPos = window.scrollY;
            heroBg.style.transform = `translateY(${scrollPos * 0.35}px)`;
        }
        
        // Dynamic Active Navigation Link Highlights
        highlightActiveNavLink();
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Execute once at launch to synchronize scroll state on reload
    handleScroll();
}

function highlightActiveNavLink() {
    const sections = document.querySelectorAll('.scroll-target, #hero-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSectionId = 'hero-section';
    let minDiff = Infinity;
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Calculate which section is currently centered/prominent in viewport
        const diff = Math.abs(rect.top - 120); 
        if (rect.top < window.innerHeight * 0.4 && rect.bottom > 120 && diff < minDiff) {
            minDiff = diff;
            currentSectionId = section.id;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === '#' + currentSectionId || (currentSectionId === 'hero-section' && href === '#hero-section')) {
            link.classList.add('active');
        }
    });
}

// 12. Mobile Menu Toggle Controller
function initMobileNav() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileNav.classList.toggle('active');
            const isOpen = mobileNav.classList.contains('active');
            
            // Toggle body scroll lock
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            
            // Swap icons between hamburger and close X
            mobileToggle.innerHTML = isOpen ? `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            ` : `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            `;
        });
        
        // Clicking mobile links closes menu
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
        
        // Prevent background clicks from doing weird things
        mobileNav.addEventListener('click', (e) => {
            if (e.target === mobileNav) {
                closeMobileMenu();
            }
        });
    }
}

window.closeMobileMenu = function() {
    const mobileNav = document.getElementById('mobile-nav');
    const mobileToggle = document.getElementById('mobile-toggle');
    if (mobileNav) {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
        if (mobileToggle) {
            mobileToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            `;
        }
    }
};

// 13. Editorial Gallery & Glassmorphic Lightroom Lightbox
let lightboxImages = [];
let currentLightboxIndex = 0;

function initGalleryLightbox() {
    const items = document.querySelectorAll('.masonry-item');
    
    // Automatically harvest URLs and descriptions from HTML structure
    lightboxImages = Array.from(items).map(item => {
        const img = item.querySelector('img');
        return {
            src: img ? img.getAttribute('src') : '',
            caption: img ? img.getAttribute('alt') : ''
        };
    });
    
    // Lightbox Arrow Key Listeners
    document.addEventListener('keydown', (e) => {
        const overlay = document.getElementById('lightbox-overlay');
        if (!overlay || !overlay.classList.contains('active')) return;
        
        if (e.key === 'ArrowRight') {
            navigateLightbox(1);
        } else if (e.key === 'ArrowLeft') {
            navigateLightbox(-1);
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

window.filterGallery = function(category) {
    const filterChips = document.querySelectorAll('.gallery-filter-chip');
    
    // Deactivate previous chips
    filterChips.forEach(chip => chip.classList.remove('active'));
    
    // Find active chip via click event source
    const event = window.event;
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    const items = document.querySelectorAll('.masonry-item');
    items.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
            item.style.display = 'block';
            // Smooth micro-fade in transition
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0) scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(10px) scale(0.96)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
};

window.openLightbox = function(index) {
    currentLightboxIndex = index;
    const overlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const contentBox = document.querySelector('.lightbox-content-box');
    
    if (!overlay || !lightboxImg || !lightboxCaption) return;
    
    lightboxImg.src = lightboxImages[index].src;
    lightboxCaption.textContent = lightboxImages[index].caption;
    
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (contentBox) {
        contentBox.classList.remove('loaded');
        lightboxImg.onload = () => {
            contentBox.classList.add('loaded');
        };
    }
};

window.closeLightbox = function() {
    const overlay = document.getElementById('lightbox-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.navigateLightbox = function(direction) {
    let nextIndex = currentLightboxIndex + direction;
    if (nextIndex >= lightboxImages.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = lightboxImages.length - 1;
    
    currentLightboxIndex = nextIndex;
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const contentBox = document.querySelector('.lightbox-content-box');
    
    if (!lightboxImg || !lightboxCaption) return;
    
    if (contentBox) {
        contentBox.classList.remove('loaded');
    }
    
    // Beautiful cross-fade timings
    setTimeout(() => {
        lightboxImg.src = lightboxImages[nextIndex].src;
        lightboxCaption.textContent = lightboxImages[nextIndex].caption;
        
        lightboxImg.onload = () => {
            if (contentBox) contentBox.classList.add('loaded');
        };
    }, 150);
};

// 14. Availability Grid Calendar Rendering (June 2026 Focus)
let calendarCurrentDate = new Date(2026, 5, 1); // June 2026

function initBookingCalendar() {
    renderCalendarDays();
}

function renderCalendarDays() {
    const daysGrid = document.getElementById('calendar-days-grid');
    const monthYearTitle = document.getElementById('calendar-month-year');
    
    if (!daysGrid || !monthYearTitle) return;
    
    daysGrid.innerHTML = '';
    
    const year = calendarCurrentDate.getFullYear();
    const month = calendarCurrentDate.getMonth();
    
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    
    monthYearTitle.innerText = `${monthNames[month]} ${year}`;
    
    const firstDayIndex = new Date(year, month, 1).getDay(); // Sunday=0, Monday=1, etc.
    const lastDayDate = new Date(year, month + 1, 0).getDate();
    
    // Draw leading empty cells
    for (let i = 0; i < firstDayIndex; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('calendar-day', 'empty');
        daysGrid.appendChild(emptyCell);
    }
    
    // Define exact booked dates array for luxury realism (June 2026 / July 2026)
    let reservedDays = [];
    if (year === 2026 && month === 5) { // June 2026
        reservedDays = [4, 5, 6, 7, 14, 15, 16, 17, 24, 25, 26];
    } else if (year === 2026 && month === 6) { // July 2026
        reservedDays = [2, 3, 4, 10, 11, 12, 18, 19, 20, 25, 26, 27];
    } else {
        // Fallback: reserved slots on specific days matching weekend models
        for (let d = 1; d <= lastDayDate; d++) {
            const dayOfWeek = new Date(year, month, d).getDay();
            if (dayOfWeek === 5 || dayOfWeek === 6 || dayOfWeek === 0) { // Fri, Sat, Sun
                reservedDays.push(d);
            }
        }
    }
    
    // Render the numerical day cells
    for (let day = 1; day <= lastDayDate; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('calendar-day');
        dayCell.innerText = day;
        
        const isReserved = reservedDays.includes(day);
        if (isReserved) {
            dayCell.classList.add('reserved');
            dayCell.title = "This slot is booked";
        } else {
            dayCell.classList.add('available');
            dayCell.title = "Select to inquire check-in";
            
            // Micro-interaction: clicking available day opens reservation and pre-fills check-in!
            dayCell.addEventListener('click', () => {
                const checkInDateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                openDrawerWithCheckIn(checkInDateString);
            });
        }
        
        daysGrid.appendChild(dayCell);
    }
}

window.prevMonth = function() {
    calendarCurrentDate.setMonth(calendarCurrentDate.getMonth() - 1);
    renderCalendarDays();
};

window.nextMonth = function() {
    calendarCurrentDate.setMonth(calendarCurrentDate.getMonth() + 1);
    renderCalendarDays();
};

function openDrawerWithCheckIn(dateString) {
    toggleDrawer(true);
    const checkInInput = document.getElementById('book-checkin');
    if (checkInInput) {
        checkInInput.value = dateString;
        
        // Auto-focus check-out for seamless UX
        const checkOutInput = document.getElementById('book-checkout');
        if (checkOutInput) {
            // Set minimum check-out to check-in date + 1 day
            const checkInDate = new Date(dateString);
            const nextDay = new Date(checkInDate);
            nextDay.setDate(nextDay.getDate() + 1);
            const checkOutMin = `${nextDay.getFullYear()}-${String(nextDay.getMonth() + 1).padStart(2, '0')}-${String(nextDay.getDate()).padStart(2, '0')}`;
            
            checkOutInput.min = checkOutMin;
            checkOutInput.value = checkOutMin;
            setTimeout(() => checkOutInput.focus(), 400);
        }
    }
}

// 15. Reservation Drawer and Headcount Stepper Controller
let guestCounts = { adults: 2, children: 0, infants: 0 };

function initReservationDrawer() {
    // Synchronize stepper values with UI at launch
    updateStepperUI('adults');
    updateStepperUI('children');
    updateStepperUI('infants');
    
    // Set minimum date picker inputs to today's date
    const checkInInput = document.getElementById('book-checkin');
    const checkOutInput = document.getElementById('book-checkout');
    const today = new Date();
    const dateFormatted = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    
    if (checkInInput) {
        checkInInput.min = dateFormatted;
        checkInInput.addEventListener('change', () => {
            if (checkOutInput) {
                // Set minimum checkout limit based on selected checkin
                const checkInDate = new Date(checkInInput.value);
                const nextDay = new Date(checkInDate);
                nextDay.setDate(nextDay.getDate() + 1);
                const minCheckout = `${nextDay.getFullYear()}-${String(nextDay.getMonth() + 1).padStart(2, '0')}-${String(nextDay.getDate()).padStart(2, '0')}`;
                
                checkOutInput.min = minCheckout;
                if (!checkOutInput.value || checkOutInput.value < minCheckout) {
                    checkOutInput.value = minCheckout;
                }
            }
        });
    }
    
    if (checkOutInput) {
        checkOutInput.min = dateFormatted;
    }
}

window.toggleDrawer = function(show) {
    const overlay = document.getElementById('drawer-overlay');
    const drawer = document.getElementById('reservation-drawer');
    const loader = document.getElementById('drawer-loader');
    const successScreen = document.getElementById('drawer-success');
    
    if (!overlay || !drawer) return;
    
    if (show) {
        // Reset loader/success states before opening
        if (loader) loader.classList.remove('active');
        if (successScreen) successScreen.classList.remove('active');
        
        overlay.classList.add('active');
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent main page scroll
    } else {
        overlay.classList.remove('active');
        drawer.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.adjustCount = function(type, amount) {
    if (!guestCounts.hasOwnProperty(type)) return;
    
    let nextVal = guestCounts[type] + amount;
    
    // Impose strict bounds based on luxury requirements
    if (type === 'adults') {
        if (nextVal < 1) nextVal = 1;
        if (nextVal > 10) nextVal = 10;
    } else if (type === 'children') {
        if (nextVal < 0) nextVal = 0;
        if (nextVal > 10) nextVal = 10;
    } else if (type === 'infants') {
        if (nextVal < 0) nextVal = 0;
        if (nextVal > 5) nextVal = 5;
    }
    
    guestCounts[type] = nextVal;
    updateStepperUI(type);
};

function updateStepperUI(type) {
    const valSpan = document.getElementById(`count-${type}`);
    if (valSpan) {
        valSpan.innerText = guestCounts[type];
    }
}

window.handleReservationSubmit = function(event) {
    event.preventDefault();
    
    const form = document.getElementById('reservation-form');
    const loader = document.getElementById('drawer-loader');
    const successScreen = document.getElementById('drawer-success');
    
    const checkin = document.getElementById('book-checkin').value;
    const checkout = document.getElementById('book-checkout').value;
    const fullname = document.getElementById('book-fullname').value;
    const email = document.getElementById('book-email').value;
    const phone = document.getElementById('book-phone').value;
    
    // Core check date integrity
    if (new Date(checkout) <= new Date(checkin)) {
        alert("Check-Out date must be strictly after Check-In date.");
        return;
    }
    
    // Activating 1.5s visual premium loader
    if (loader) {
        loader.classList.add('active');
    }
    
    setTimeout(() => {
        // Clear inputs inside form
        if (form) form.reset();
        
        // Reset steppers to initial values
        guestCounts = { adults: 2, children: 0, infants: 0 };
        updateStepperUI('adults');
        updateStepperUI('children');
        updateStepperUI('infants');
        
        // Swap loaders for Success screen
        if (loader) loader.classList.remove('active');
        if (successScreen) successScreen.classList.add('active');
    }, 1500);
};

// ==========================================================================
// 16. Ambient Procedural Web Audio Soundscape
// ==========================================================================
let audioCtx = null;
let isAudioPlaying = false;
let waveSource = null;
let waveGain = null;
let lfo = null;
let birdTimeout = null;
let masterGain = null;

function initAmbientSoundscape() {
    const soundDock = document.getElementById('sound-dock');
    const soundToggle = document.getElementById('sound-toggle');
    const mutedIcon = document.getElementById('audio-icon-muted');
    const playingIcon = document.getElementById('audio-icon-playing');
    const soundStatus = document.getElementById('sound-status');
    
    if (!soundToggle) return;
    
    soundToggle.addEventListener('click', () => {
        if (!audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContextClass();
        }
        
        if (isAudioPlaying) {
            fadeAudioOut(() => {
                isAudioPlaying = false;
                mutedIcon.classList.remove('hidden');
                playingIcon.classList.add('hidden');
                soundStatus.innerText = "Soundscape Off";
                soundDock.classList.remove('active-playing');
                clearTimeout(birdTimeout);
            });
        } else {
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            
            startAudioSynth();
            isAudioPlaying = true;
            mutedIcon.classList.add('hidden');
            playingIcon.classList.remove('hidden');
            soundStatus.innerText = "Somatic Waves Live";
            soundDock.classList.add('active-playing');
        }
    });
}

function startAudioSynth() {
    if (!audioCtx) return;
    
    if (!masterGain) {
        masterGain = audioCtx.createGain();
        masterGain.connect(audioCtx.destination);
    }
    masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.35, audioCtx.currentTime + 1.5);
    
    const bufferSize = 4 * audioCtx.sampleRate;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
    }
    
    waveSource = audioCtx.createBufferSource();
    waveSource.buffer = noiseBuffer;
    waveSource.loop = true;
    
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.value = 1.0;
    filter.frequency.value = 350;
    
    waveGain = audioCtx.createGain();
    waveGain.gain.value = 0.2;
    
    lfo = audioCtx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.08; // ~12.5 second cycles
    
    const lfoGainVol = audioCtx.createGain();
    lfoGainVol.gain.value = 0.12;
    
    const lfoGainFilter = audioCtx.createGain();
    lfoGainFilter.gain.value = 200;
    
    lfo.connect(lfoGainVol);
    lfoGainVol.connect(waveGain.gain);
    
    lfo.connect(lfoGainFilter);
    lfoGainFilter.connect(filter.frequency);
    
    waveSource.connect(filter);
    filter.connect(waveGain);
    waveGain.connect(masterGain);
    
    waveSource.start(0);
    lfo.start(0);
    
    scheduleBirdCall();
}

function playChirp(time) {
    if (!audioCtx || !masterGain) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(3200 + Math.random() * 400, time);
    osc.frequency.exponentialRampToValueAtTime(4800 + Math.random() * 400, time + 0.07);
    osc.frequency.exponentialRampToValueAtTime(3600, time + 0.14);
    
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.015, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.14);
    
    osc.connect(gain);
    gain.connect(masterGain);
    
    osc.start(time);
    osc.stop(time + 0.15);
}

function scheduleBirdCall() {
    if (!isAudioPlaying || !audioCtx) return;
    const now = audioCtx.currentTime;
    const chirps = 3 + Math.floor(Math.random() * 3);
    let startTime = now;
    
    for (let i = 0; i < chirps; i++) {
        playChirp(startTime);
        startTime += 0.15 + Math.random() * 0.08;
    }
    
    const nextCallDelay = 8000 + Math.random() * 12000; // Chirps every 8-20s
    birdTimeout = setTimeout(scheduleBirdCall, nextCallDelay);
}

function fadeAudioOut(callback) {
    if (masterGain && audioCtx) {
        const now = audioCtx.currentTime;
        masterGain.gain.setValueAtTime(masterGain.gain.value, now);
        masterGain.gain.linearRampToValueAtTime(0, now + 1.0);
        
        setTimeout(() => {
            if (waveSource) {
                try { waveSource.stop(); } catch(e){}
                waveSource.disconnect();
                waveSource = null;
            }
            if (lfo) {
                try { lfo.stop(); } catch(e){}
                lfo.disconnect();
                lfo = null;
            }
            if (callback) callback();
        }, 1050);
    } else {
        if (callback) callback();
    }
}

// ==========================================================================
// 17. Sensory Itinerary Timeline & Floor Plan Sync Crossover
// ==========================================================================
window.setTimelinePoint = function(index) {
    const nodes = document.querySelectorAll('.timeline-node');
    nodes.forEach((node, idx) => {
        if (idx === index) {
            node.classList.add('active');
        } else {
            node.classList.remove('active');
        }
    });

    const timelineData = [
        {
            time: "08:00 AM",
            title: "Somatic Awakening",
            desc: "Sunrise espresso on the Master Suite Balcony, watching the morning light catch the turquoise waves of Rendezvous Bay. The soft trade winds carry the fragrance of salt and wild frangipani.",
            sync: "Auto-focusing: Upper Floor Balcony",
            img: "https://d2ma42g52r8agz.cloudfront.net/eyJidWNrZXQiOiJsYWN1cmUtYmFja29mZmljZSIsImtleSI6InVwbG9hZHNcL2ltYWdlc1wvNjlhMjJjNTNlMWUwNC5qcGciLCJvcHRpb25zIjp7InByb2dyZXNzaXZlIjp0cnVlfSwiZm9ybWF0Ijoid2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJoZWlnaHQiOm51bGwsIndpZHRoIjo4MDAsImZpdCI6ImNvdmVyIn19fQ==",
            floor: "second",
            room: "balcony"
        },
        {
            time: "11:00 AM",
            title: "Powdery Sands",
            desc: "A gentle five-minute stroll along the estate's private, manicured sand path down to Rendezvous Bay. Warm white sands meet crystal clear water for a swim before lunch.",
            sync: "Auto-focusing: Beach Path / Travertine Terrace",
            img: "https://d2ma42g52r8agz.cloudfront.net/eyJidWNrZXQiOiJsYWN1cmUtYmFja29mZmljZSIsImtleSI6InVwbG9hZHNcL2ltYWdlc1wvNjlhMjJjNTNhYzM4ZS5qcGciLCJvcHRpb25zIjp7InByb2dyZXNzaXZlIjp0cnVlfSwiZm9ybWF0Ijoid2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJoZWlnaHQiOm51bGwsIndpZHRoIjo4MDAsImZpdCI6ImNvdmVyIn19fQ==",
            floor: "ground",
            room: "poolterrace"
        },
        {
            time: "02:00 PM",
            title: "Pool Deck Sojourn",
            desc: "Lazing on the poolside travertine terrace under shaded umbrellas, followed by a cooling dip in the heated infinity-edge pool, soaking in the endless sea view.",
            sync: "Auto-focusing: Heated Infinity Pool",
            img: "https://d2ma42g52r8agz.cloudfront.net/eyJidWNrZXQiOiJsYWN1cmUtYmFja29mZmljZSIsImtleSI6InVwbG9hZHNcL2ltYWdlc1wvNjlhMjJjNTQ0MWMwYi5qcGciLCJvcHRpb25zIjp7InByb2dyZXNzaXZlIjp0cnVlfSwiZm9ybWF0Ijoid2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJoZWlnaHQiOm51bGwsIndpZHRoIjo4MDAsImZpdCI6ImNvdmVyIn19fQ==",
            floor: "ground",
            room: "pool"
        },
        {
            time: "05:00 PM",
            title: "Sunset Fire-Pit Rituals",
            desc: "Gathering in the screened outdoor porch for refreshing rum punches as the warm tropical breeze cools, watching St. Martin turn into gold in the distance.",
            sync: "Auto-focusing: Screened Porch",
            img: "https://d2ma42g52r8agz.cloudfront.net/eyJidWNrZXQiOiJsYWN1cmUtYmFja29mZmljZSIsImtleSI6InVwbG9hZHNcL2ltYWdlc1wvNjlhMjJnNjlhYzQ2OS5qcGciLCJvcHRpb25zIjp7InByb2dyZXNzaXZlIjp0cnVlfSwiZm9ybWF0Ijoid2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJoZWlnaHQiOm51bGwsIndpZHRoIjo4MDAsImZpdCI6ImNvdmVyIn19fQ==",
            floor: "ground",
            room: "porch"
        },
        {
            time: "08:00 PM",
            title: "Epicurean Dining",
            desc: "A custom multi-course gourmet dinner designed and prepared by our Michelin-trained chef, served inside the high-ceilinged teak kitchen and elegant dining salon.",
            sync: "Auto-focusing: Teak Chef's Kitchen",
            img: "https://d2ma42g52r8agz.cloudfront.net/eyJidWNrZXQiOiJsYWN1cmUtYmFja29mZmljZSIsImtleSI6InVwbG9hZHNcL2ltYWdlc1wvNjlhMjJjNTRkMDVlMi5qcGciLCJvcHRpb25zIjp7InByb2dyZXNzaXZlIjp0cnVlfSwiZm9ybWF0Ijoid2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJoZWlnaHQiOm51bGwsIndpZHRoIjo4MDAsImZpdCI6ImNvdmVyIn19fQ==",
            floor: "ground",
            room: "kitchen"
        }
    ];

    const data = timelineData[index];
    if (!data) return;

    const card = document.getElementById('timeline-card');
    if (card) {
        card.style.opacity = '0.4';
        card.style.transform = 'translateY(10px)';
        setTimeout(() => {
            document.getElementById('timeline-card-time').innerText = data.time;
            document.getElementById('timeline-card-title').innerText = data.title;
            document.getElementById('timeline-card-desc').innerText = data.desc;
            document.getElementById('timeline-card-sync').innerText = data.sync;
            document.getElementById('timeline-card-img').style.backgroundImage = `url('${data.img}')`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200);
    }

    triggerFloorPlanFocus(data.floor, data.room);
};

function triggerFloorPlanFocus(floorId, roomId) {
    if (typeof window.switchFloor === 'function') {
        window.switchFloor(floorId);
    }
    
    setTimeout(() => {
        const roomElement = document.querySelector(`.room-group[data-room="${roomId}"]`);
        if (roomElement) {
            selectRoom(roomId, roomElement);
            
            roomElement.classList.add('beacon-flash');
            setTimeout(() => {
                roomElement.classList.remove('beacon-flash');
            }, 3000);
            
            const floorPlansSection = document.getElementById('floor-plans-section');
            if (floorPlansSection) {
                floorPlansSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }, 450);
}

// ==========================================================================
// 18. Guestbook memoirs journal testimonial slider
// ==========================================================================
let currentJournalSlide = 0;
let journalInterval = null;

function initJournalSlider() {
    startJournalAutoPlay();
    
    const container = document.querySelector('.journal-slider-container');
    if (container) {
        container.addEventListener('mouseenter', stopJournalAutoPlay);
        container.addEventListener('mouseleave', startJournalAutoPlay);
    }
}

function startJournalAutoPlay() {
    stopJournalAutoPlay();
    journalInterval = setInterval(() => {
        window.nextJournalSlide();
    }, 7000);
}

function stopJournalAutoPlay() {
    if (journalInterval) {
        clearInterval(journalInterval);
        journalInterval = null;
    }
}

window.setJournalSlide = function(index) {
    const slides = document.querySelectorAll('.journal-slide');
    const dots = document.querySelectorAll('.journal-dot');
    
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    currentJournalSlide = index;
    
    slides.forEach((slide, idx) => {
        if (idx === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    dots.forEach((dot, idx) => {
        if (idx === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
};

window.nextJournalSlide = function() {
    window.setJournalSlide(currentJournalSlide + 1);
};

window.prevJournalSlide = function() {
    window.setJournalSlide(currentJournalSlide - 1);
};

// ==========================================================================
// 19. Curated Concierge Services Package click drawer link
// ==========================================================================
window.selectConciergePackage = function(packageName) {
    if (typeof window.toggleDrawer === 'function') {
        window.toggleDrawer(true);
    }
    
    const chefCheck = document.getElementById('add-chef');
    const yachtCheck = document.getElementById('add-yacht');
    const jetCheck = document.getElementById('add-jet');
    const staffCheck = document.getElementById('add-staff');
    
    if (chefCheck) chefCheck.checked = false;
    if (yachtCheck) yachtCheck.checked = false;
    if (jetCheck) jetCheck.checked = false;
    if (staffCheck) staffCheck.checked = false;
    
    if (packageName.includes('Epicurean')) {
        if (chefCheck) chefCheck.checked = true;
    } else if (packageName.includes('Oceanic')) {
        if (yachtCheck) yachtCheck.checked = true;
    } else if (packageName.includes('Wellness') || packageName.includes('Sanctuary')) {
        if (staffCheck) staffCheck.checked = true;
    }
};

// ==========================================================================
// 20. Logistical Travel FAQ Accordion dynamic height transition
// ==========================================================================
window.toggleFaq = function(index) {
    const items = document.querySelectorAll('.faq-item');
    
    items.forEach((item, idx) => {
        const content = item.querySelector('.faq-content');
        
        if (idx === index) {
            const isActive = item.classList.contains('active');
            if (isActive) {
                item.classList.remove('active');
                if (content) {
                    content.style.maxHeight = null;
                    content.style.paddingTop = null;
                    content.style.paddingBottom = null;
                }
            } else {
                item.classList.add('active');
                if (content) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.style.paddingTop = '15px';
                    content.style.paddingBottom = '15px';
                }
            }
        } else {
            item.classList.remove('active');
            if (content) {
                content.style.maxHeight = null;
                content.style.paddingTop = null;
                content.style.paddingBottom = null;
            }
        }
    });
};
