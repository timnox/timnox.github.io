document.addEventListener('DOMContentLoaded', () => {
    // --- A map of social platforms to their SVG icon paths ---
    const socialIcons = {
        instagram: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>`,
        facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>`,
        twitter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.214 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>`,
        tiktok: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>`,
        youtube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.1-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.497-41.983 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 42.1 48.284 48.597C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.497 41.983-24.947 48.284-48.597C561.067 344.742 561.067 256.383 561.067 256.383s0-89.438-11.412-132.305zM232.615 358.72V153.28l153.283 102.72-153.283 102.72z"/></svg>`,
        bandcamp: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bandcamp</title><path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z"/></svg>`,
        soundcloud: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>SoundCloud</title><path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z"/></svg>`
    };

    const populateHeader = () => {
        document.title = config.bandName;
        document.querySelector('#main-header').innerHTML = `<img src="${config.logoImage}" alt="${config.bandName} Logo">`;
        document.querySelector('#main-footer p').innerHTML = `&copy; ${new Date().getFullYear()} ${config.bandName}`;
    };
    
    const populateAbout = () => {
        const content = `
            <img src="${config.about.image}" alt="${config.bandName}">
            <p>${config.about.text.replace(/\n/g, '<br>')}</p>
        `;
        document.querySelector('#about-content').innerHTML = content;
    };

    const populateMusic = () => {
        let content = config.music.spotifyEmbed;
        if (config.music.otherLinks && config.music.otherLinks.length > 0) {
            content += '<h3>// OTHER LINKS</h3><ul id="music-links-list">';
            config.music.otherLinks.forEach(link => {
                if (link.url && link.platform) {
                    content += `<li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.platform}</a></li>`;
                }
            });
            content += '</ul>';
        }
        document.querySelector('#music-content').innerHTML = content;
    };

    const populateVideos = () => {
        const container = document.querySelector('#videos-content');
        if (config.videos.youtubeIds && config.videos.youtubeIds.length > 0) {
            let content = '';
            config.videos.youtubeIds.forEach(videoId => {
                content += `
                    <div class="video-wrapper">
                        <iframe src="https://www.youtube.com/embed/${videoId}" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                        </iframe>
                    </div>
                `;
            });
            container.innerHTML = content;
        } else {
            container.innerHTML = '<p>No videos available right now. Check back soon!</p>';
        }
    };
    
    const populateConcerts = () => {
        const container = document.querySelector('#concerts-content');
        let shows = config.concerts.upcomingShows;

        if (!shows || shows.length === 0) {
            container.innerHTML = '<p id="no-shows-message">No upcoming shows scheduled. Stay tuned!</p>';
            return;
        }

        // Sort shows by date, from soonest to latest
        shows.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        let content = '';
        shows.forEach(show => {
            const showDate = new Date(show.date + 'T00:00:00'); // Treat date as local
            const formattedDate = showDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

            content += `
                <div class="concert-entry">
                    <div class="concert-info">
                        <span class="concert-date"><strong>DATE:</strong> ${formattedDate}</span>
                        <span class="concert-location"><strong>LOCATION:</strong> ${show.location}</span>
                        <span class="concert-venue"><strong>VENUE:</strong> ${show.venue} @ ${show.time}</span>
                    </div>
                    ${show.ticketLink ? `<div class="ticket-link"><a href="${show.ticketLink}" target="_blank" rel="noopener noreferrer">TICKETS</a></div>` : ''}
                </div>
            `;
        });
        container.innerHTML = content;
    };

    const populateBooking = () => {
        let
        content += `<p><strong>Email:</strong> <a href="mailto:${config.booking.email}">${config.booking.email}</a></p>`;
        if (config.booking.phone) {
            content += `<p><strong>Phone:</strong> ${config.booking.phone}</p>`;
        }
        document.querySelector('#booking-content').innerHTML = content;
    };
    
    const populateFooterSocials = () => {
        const container = document.querySelector('#social-links');
        let content = '';
        config.socials.forEach(social => {
            if (social.url && social.platform && socialIcons[social.platform.toLowerCase()]) {
                content += `
                    <a href="${social.url}" target="_blank" rel="noopener noreferrer" title="${social.platform}">
                        ${socialIcons[social.platform.toLowerCase()]}
                    </a>
                `;
            }
        });
        container.innerHTML = content;
    };
    
    // --- Initialize all content population functions per section ---
    populateHeader();
    populateAbout();
    populateMusic();
    populateVideos();
    populateConcerts();
    populateBooking();
    populateFooterSocials();

});
