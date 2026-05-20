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
