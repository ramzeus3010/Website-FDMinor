/* ============================================
   ETERNA PORTFOLIO — JavaScript
   ============================================ */

const memories = [
    {
        id: 1,
        title: "Nightscape",
        date: "January 2025",
        preview: "A mobile game about light, shadow, and found spaces.",
        description: "This project explored the relationship between urban environments and emotional states. It was developed using Unity with custom shaders for light simulation. The process involved extensive research into nocturnal city landscapes and player navigation patterns.",
        images: [
            { src: '', alt: 'Nightscape view 1' },
            { src: '', alt: 'Nightscape view 2' },
            { src: '', alt: 'Nightscape view 3' }
        ]
    },
    {
        id: 2,
        title: "Eterna",
        date: "September 2024",
        preview: "An AI memory journaling app. Your past, made permanent.",
        description: "This project explored the intersection of artificial intelligence and personal memory preservation. It was developed using React Native with OpenAI API integration. The process involved user research on memory-keeping behaviors and designing intuitive journaling interfaces.",
        images: [
            { src: '', alt: 'Eterna app interface' },
            { src: '', alt: 'Eterna dashboard' }
        ]
    },
    {
        id: 3,
        title: "Freighthopping",
        date: "May 2024",
        preview: "An open-world narrative game about movement and borders.",
        description: "This project explored themes of migration, freedom, and the underground rail culture. It was developed using Unreal Engine 5 with photogrammetry environments. The process involved traveling to document freight yards and interviewing freight hoppers.",
        images: [
            { src: '', alt: 'Freighthopping game scene' }
        ]
    },
    {
        id: 4,
        title: "Legacy",
        date: "March 2024",
        preview: "An app that turns family photos into living biographies.",
        description: "This project explored how technology can preserve family histories across generations. It was developed using Flutter with Firebase backend. The process involved working with historians and genealogists to create meaningful connections between photographs and stories.",
        images: [
            { src: '', alt: 'Legacy app preview' },
            { src: '', alt: 'Legacy family tree' },
            { src: '', alt: 'Legacy photo gallery' }
        ]
    },
    {
        id: 5,
        title: "Yurt",
        date: "November 2023",
        preview: "A 3D environment exploring Kazakh nomadic architecture.",
        description: "This project explored the spatial design and cultural significance of traditional Kazakh yurts. It was developed using Blender for modeling and Three.js for web rendering. The process involved visiting Mongolia and Kazakhstan to study traditional construction methods.",
        images: [
            { src: '', alt: 'Yurt 3D render' },
            { src: '', alt: 'Yurt interior' }
        ]
    },
    {
        id: 6,
        title: "S-Parking",
        date: "August 2023",
        preview: "A smart city parking solution using ALPR cameras.",
        description: "This project explored urban mobility challenges and automated parking solutions. It was developed using Python with OpenALPR library and a React frontend. The process involved analyzing traffic patterns and working with city municipalities.",
        images: [
            { src: '', alt: 'S-Parking system' }
        ]
    },
    {
        id: 7,
        title: "360° Film",
        date: "April 2023",
        preview: "An immersive film experiment shot in equirectangular 360°.",
        description: "This project explored the boundaries between traditional filmmaking and immersive VR experiences. It was developed using Insta360 Pro camera with custom stitching software. The process involved experimenting with narrative structures in spherical space.",
        images: [
            { src: '', alt: '360 film still 1' },
            { src: '', alt: '360 film still 2' },
            { src: '', alt: '360 film still 3' },
            { src: '', alt: '360 film still 4' }
        ]
    }
];

let currentImageIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    initIntersectionObserver();
    initLightbox();
    generateGalleryPlaceholders();
});

function generateGalleryPlaceholders() {
    const cards = document.querySelectorAll('.memory-card');
    cards.forEach(card => {
        const memoryId = parseInt(card.dataset.memory);
        const memory = memories.find(m => m.id === memoryId);
        if (memory && memory.images.length > 1) {
            const gallery = card.querySelector('.card-gallery');
            gallery.classList.add('multi-image');
        }
    });
}

function initIntersectionObserver() {
    const cards = document.querySelectorAll('.memory-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => observer.observe(card));
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDate = document.getElementById('lightbox-date');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxThumbnails = document.getElementById('lightbox-thumbnails');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const cards = document.querySelectorAll('.memory-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const memoryId = parseInt(card.dataset.memory);
            const memory = memories.find(m => m.id === memoryId);
            
            if (memory) {
                lightboxTitle.textContent = memory.title;
                lightboxDate.textContent = memory.date;
                lightboxDescription.textContent = memory.description;
                
                currentImageIndex = 0;
                updateLightboxGallery(memory, lightboxImage, lightboxThumbnails);
                openLightbox(lightbox);
            }
        });
    });
    
    closeBtn.addEventListener('click', () => closeLightbox(lightbox));
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox(lightbox);
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox(lightbox);
        }
    });
}

function updateLightboxGallery(memory, mainImageEl, thumbnailsEl) {
    thumbnailsEl.innerHTML = '';
    
    if (memory.images.length === 1) {
        thumbnailsEl.style.display = 'none';
        mainImageEl.className = 'lightbox-placeholder';
        return;
    }
    
    thumbnailsEl.style.display = 'flex';
    
    memory.images.forEach((img, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'thumb' + (index === 0 ? ' active' : '');
        
        const placeholder = document.createElement('div');
        placeholder.className = 'lightbox-placeholder';
        
        thumb.appendChild(placeholder);
        
        thumb.addEventListener('click', () => {
            currentImageIndex = index;
            updateMainImage(mainImageEl, thumbnailsEl);
        });
        
        thumbnailsEl.appendChild(thumb);
    });
}

function updateMainImage(mainImageEl, thumbnailsEl) {
    const activeThumb = thumbnailsEl.querySelectorAll('.thumb')[currentImageIndex];
    thumbnailsEl.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    if (activeThumb) activeThumb.classList.add('active');
    
    mainImageEl.className = 'lightbox-placeholder';
}

function openLightbox(lightbox) {
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}