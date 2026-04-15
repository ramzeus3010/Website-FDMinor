/* ============================================
   ETERNA PORTFOLIO — JavaScript
   ============================================ */

const memories = [
    {
        id: 1,
        title: "Senior Year",
        date: "April 2026",
        preview: "My last semester and I am taking Intro to Acting hahaha",
        description: "So last year, huh? I am taking Intro to Acting and most of my class are seniors, isn't it funny? I enjoy it, to be honest, because I am learning new things and I am getting more confident in performing and presenting in front of the audience. Unfortunately, I do not have my own photos, but I have photos of my friends from this class and isn't that a memory as well? I also added some photos from the Fall semester where we all took a class with Professor Marco (I am so glad I had a chance to take his class) to make web series in the span of 14 weeks. Even though the final result was not something super polished or Oscar-ready (unlike Cookie short film, wink), but the experience and the classes and the professor -- all made this class amazing. I ultimately think my senior year, even if difficult and tough, was a nice one. I learned a lot, I came back to filmmaking through this class and I have achieved many things I have not even thought of before.",
        images: [
            { src: 'memory 7/photo_2026-04-15_19-37-48.webp', alt: 'Nightscape view 2' },
            { src: 'memory 7/photo_2026-04-15_19-37-45.webp', alt: 'Nightscape view 1' },
            { src: 'memory 7/photo_2026-04-15_19-37-53.webp', alt: 'Nightscape view 3' },
            { src: 'memory 7/photo_2026-04-15_19-37-55.webp', alt: 'Nightscape view 4' }
        ]
    },
    {
        id: 2,
        title: "Boba Tea Rhythm Game",
        date: "April 2025",
        preview: "I participated in a Game Jam for the first time and it was in Evanston!",
        description: "I am at the Comm Exchange now and I just came back home from the game jam. We have been working on this game for like 6 weeks and even though my coding skills are very low, thanks to AI I managed to help with the animation in the beginning and I made some 3D objects using Blender. I think it was nice cuz I made friends with similar interests and we, in my opinion, made the best game there (there were no prizes and awards this game jam except for t-shirts, but I am not complaining cuz damn I made a game). In any way, I also had an exposure to the game development community in Chicago and I liked it but also felt off because I am not super experienced yet. It's okay though, the guys in my team were also not super experience so all good.",
        images: [
            { src: 'memory 6/image_2026-04-15_14-01-28.webp', alt: 'Game Jam photo 1' },
            { src: 'memory 6/image_2026-04-15_14-01-39.webp', alt: 'Game Jam photo 2' },
            { src: 'memory 6/image_2026-04-15_14-02-36.webp', alt: 'Eterna app interface' },
            { src: 'memory 6/image_2026-04-15_14-03-02.webp', alt: 'Eterna dashboard' }
        ]
    },
    {
        id: 3,
        title: "Simulsomnia -- a game I would want to make irl.",
        date: "December 2024",
        preview: "I made a professional level GDD for a game I want to play.",
        description: "So for this project I had to make a Game Design Document as a final project, but since the beginning of the course we were thinking step by step (mechanics, features, playability, etc). Professor Spencer is very passionate for games so I think this class is perfect because of his teaching style. We also all got a VR headset for the whole semester and I played a lot of games lol. But anyways, the game design document I made using Generative AI tools to show screenshots, UI, menus, items from the game and honestly I am really impressed with the level of AI now. You need to make sure your prompts are perfect, but still the output I had is amazing. Still, takes a bit too much time to wait for a generation of a video -- oh yeah, I forgot to mention that I made a trailer for the game, it is a nice cool game.",
        images: [
            { src: 'memory 5/image_2026-04-15_14-03-20.webp', alt: 'Freighthopping game scene 1' },
            { src: 'memory 5/image_2026-04-15_14-03-30.webp', alt: 'Freighthopping game scene 2' },
            { src: 'memory 5/image_2026-04-15_14-03-37.webp', alt: 'Freighthopping game scene 3' },
            { src: 'memory 5/image_2026-04-15_14-04-26.webp', alt: 'Freighthopping game scene 4' }
        ]
    },
    {
        id: 4,
        title: "Woah, real documentary now!",
        date: "December 2024",
        preview: "Damn, now I finally made the documentary I wanted to make.",
        description: "I took a documentary class with Professor Joao (I wanted to take this class since freshman year) and it was a cool class for real because I learned so much and made so many things jsut to prepare for the final project, which came out to be this documentary (which I am really proud of). And it is about something I am passionate about -- boardgames (very rarely I have a chance to play them now, unfortunately...). Of course, there were some problems (like sneaking into the Geekdom and pretending I am media or begging professor to let me work alone). Nevertheless, with the help of my friends I managed to produce it and so far I think this is the most professional work I have done (The cookie short film had a better story though not gonna lie).",
        images: [
            { src: 'memory 4/image_2026-04-15_19-23-07.webp', alt: 'Legacy app preview' },
            { src: 'memory 4/image_2026-04-15_19-23-39.webp', alt: 'Legacy family tree' },
            { src: 'memory 4/image_2026-04-15_19-23-55.webp', alt: 'Legacy photo gallery 1' },
            { src: 'memory 4/image_2026-04-15_19-24-44.webp', alt: 'Legacy photo gallery 2' },
            { src: 'memory 4/image_2026-04-15_19-24-59.webp', alt: 'Legacy photo gallery 3' }
        ]
    },
    {
        id: 5,
        title: "News Package (almost a doc?)",
        date: "October 2024",
        preview: "I made a news package that I like to believe is kind of a documentary.",
        description: "For this class I needed to make a package on one person and show their life/story. I chose to do it with Olzhasbek cuz literally this summer he went to Jordan to learn Arabic and now he is taking a coding class. In a way, both are new languages that he is learning, so I thought it is nice and niche angle. It is a super short, almost a social media style package on him, and let's be honest, I made him say some of the lines to make it sound cooler lol. But I am lowkey proud of the work done cuz it turned out really good and this is the first time my work was on that huge screen in NUQ yay!!!",
        images: [
            { src: 'memory 3/image_2026-04-15_19-22-11.webp', alt: 'Yurt 3D render' },
            { src: 'memory 3/image_2026-04-15_19-22-23.webp', alt: 'Yurt interior 1' },
            { src: 'memory 3/image_2026-04-15_19-22-42.webp', alt: 'Yurt interior 2' }
        ]
    },
    {
        id: 6,
        title: "20Q Films and Lighting&Cinematography",
        date: "March 2024",
        preview: "I became part of 20Q films and had a chance to register for Lighting & Cinematography!!",
        description: "Damn, this year was tough but I am glad I made it through because I learned so much and I think I am getting really good at camera. I was camera assistant for some of the 20Q movies and even made my own film with RED for a class that is the most in-deman lol. We did not fully fully edited it yet but it's okay lowkey, haha. I am getting very into camera but this last 20Q set was so difficult... WE GOT STUCK IN THE DESERT FOR THE NIGHT??? I mean it is no one's fault but damn, takes a toll on my health this filmmaking.",
        images: [
            { src: 'memory 2/image_2026-04-15_19-30-42.webp', alt: 'S-Parking system 1' },
            { src: 'memory 2/image_2026-04-15_19-30-58.webp', alt: 'S-Parking system 2' },
            { src: 'memory 2/image_2026-04-15_19-31-07.webp', alt: 'S-Parking system 3' },
            { src: 'memory 2/image_2026-04-15_19-31-36.webp', alt: 'S-Parking system 4' }
        ]
    },
    {
        id: 7,
        title: "My first short film shot with a camera!",
        date: "April 2023",
        preview: "MIT-190 was the best class in my freshman year and I took it with my future close friends!",
        description: "During this class we had to come up with an idea, write a script, film, and edit a whole short film. WOW! I did it with my friends in school but it was much more superficial and we did not even think of the character's main goal, obstacles, and other things. I was in a group with Olzhasbek, Shrijan, Mansoor, and Mohammed. Initially, I thought it is going to be a very difficult class, but in the end I enjoyed it the most and, honestly, with other groups having issues and beef, our experience was for real the best. I think this movie is an Oscar-worthy!!!",
        images: [
            { src: 'memory 1/image_2026-04-15_19-20-23.webp', alt: '360 film still 1' },
            { src: 'memory 1/image_2026-04-15_19-20-42.webp', alt: '360 film still 2' },
            { src: 'memory 1/image_2026-04-15_19-21-21.webp', alt: '360 film still 3' }
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
        if (memory && memory.images.length > 0) {
            const galleryMain = card.querySelector('.gallery-main');
            galleryMain.innerHTML = `<img src="${memory.images[0].src}" alt="${memory.images[0].alt}" class="card-thumbnail">`;
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

                updateLightboxGallery(memory);
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

function updateLightboxGallery(memory) {
    const track = document.getElementById('lightbox-track');
    track.innerHTML = '';
    track.style.animation = 'none';

    // Fallback if no images
    if (!memory.images || memory.images.length === 0) return;

    const count = memory.images.length;
    track.style.setProperty('--img-count', count);

    // Duplicate images for infinite loop if more than 1
    const displayImages = count > 1 ? [...memory.images, ...memory.images] : memory.images;

    displayImages.forEach(img => {
        const slide = document.createElement('img');
        slide.src = img.src;
        slide.alt = img.alt;
        slide.className = 'lightbox-slide';
        track.appendChild(slide);
    });

    if (count > 1) {
        // Trigger reflow to restart animation from the beginning
        void track.offsetWidth;
        // The speed is relative to the number of images to maintain constant visual speed
        track.style.animation = `marquee-right ${count * 12}s linear infinite`;
    }
}

function openLightbox(lightbox) {
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox(lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}