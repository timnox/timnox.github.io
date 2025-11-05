// ==================================================================
// WEBSITE CONFIGURATION
// ==================================================================
// This is the only file you need to edit to update your website.
// Just change the values below and the website will update automatically.
// ==================================================================

const config = {
    // ------------------------------------------------------------------
    // GENERAL SITE SETTINGS
    // ------------------------------------------------------------------
    bandName: "Baby's First Pistol", // Your band/artist name
    logoImage: "images/bipHead.gif", // A path to a logo image in the 'images' folder.
    
    // ------------------------------------------------------------------
    // ABOUT PAGE
    // ------------------------------------------------------------------
    about: {
        image: "images/band-photo.jpg", // Path to a band photo in the 'images' folder.
        text: `Baby's First Pistol emerged from Toronto's underground indie/punk/alternative scene, uniting a shared passion for creating an unfiltered, explosive sonic experience. Their music, described as "Fathercore" blends relentless energy with wild live performances, delving into themes of absurdity, nihilism, and societal commentary. “Edgy...angry undertones that threaten to boil over at any minute…a twitchy, tetchy, PIL, Johnny Rotten's post-Pistols post-punk pioneers, embracing hardcore.”  - Operation X-Ray. 

Baby's First Pistol is open to collaborating with a wide range of artists on their projects, including professional wrestlers and independent filmmakers. We believe in supporting creative work across different mediums and welcome inquiries from anyone interested in incorporating our music into their projects. To discuss potential collaborations, please contact us at collabs@babysfirstpistol.com - very open to discussing utilization on an attribution-basis after discussing your intended use (free music!)`},

    // ------------------------------------------------------------------
    // MUSIC PAGE
    // ------------------------------------------------------------------
    music: {
        // To get your Spotify embed code:
        // 1. Go to your playlist/album on Spotify.
        // 2. Click the "..." (More) button.
        // 3. Go to Share -> Embed Playlist.
        // 4. Copy the code and paste it between the backticks (` `) below.
        spotifyEmbed: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1CdvKgpnR03TYNR7vNFQGC?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        
        // Add links to other music platforms here. 
        // If you leave this empty, the section will not appear.
        // Format: { platform: "Platform Name", url: "https://your-link.com" }
        otherLinks: [
            { platform: "Bandcamp", url: "https://babysfirstpistol.bandcamp.com/" },
            { platform: "SoundCloud", url: "https://soundcloud.com/babysfirstpistol" },
            { platform: "Apple Music", url: "https://music.apple.com/ca/artist/babys-first-pistol/1685216511" }
        ]
    },

    // ------------------------------------------------------------------
    // VIDEOS PAGE
    // ------------------------------------------------------------------
    videos: {
        // Add the YouTube video ID for each video you want to embed.
        // The ID is the part of the URL after "v=". Example: for https://www.youtube.com/watch?v=dQw4w9WgXcQ, the ID is "dQw4w9WgXcQ".
        // If you leave this empty, the section will show a "no videos" message.
        youtubeIds: [
            "tiCBm-2WO2A",
            "p2-H1pXeEn0",
            "o_VqGEd7uJ8",
            "tG5we4rhMqM"
        ]
    },

    // ------------------------------------------------------------------
    // CONCERTS PAGE
    // ------------------------------------------------------------------
    concerts: {
        // Add your upcoming shows here. They will be automatically sorted by date.
        // The date format is "YYYY-MM-DD". Time is a simple string.
        // If a ticket link is not available, leave it as an empty string "".
        upcomingShows: [
            { date: "2025-12-19", location: "Toronto, ON", venue: "Bovine Sex Club", time: "9:00 PM", ticketLink: "" },
        ]
    },

    // ------------------------------------------------------------------
    // BOOKING PAGE
    // ------------------------------------------------------------------
    booking: {
        name: "Michael Kuhnert",
        email: "michael@soundproofagency.com",
        phone: "" // Optional
    },

    // ------------------------------------------------------------------
    // FOOTER SOCIAL LINKS
    // ------------------------------------------------------------------
    socials: [
        // Add your social media links here. The icon will be chosen automatically.
        // Supported platforms: instagram, facebook, twitter, tiktok, youtube, bandcamp, soundcloud.
        // If a URL is left empty, the icon will not be displayed.
        { platform: "instagram", url: "https://instagram.com/babysfirstpistol" },
        { platform: "facebook", url: "https://facebook.com/babysfirstpistol" },
        { platform: "twitter", url: "https://x.com/babys1stpistol" },
        { platform: "youtube", url: "https://youtube.com/@babysfirstpistol" },
        { platform: "bandcamp", url: "https://babysfirstpistol.bandcamp.com/" },
        { platform: "tiktok", url: "https://www.tiktok.com/@babysfirstpistol" },
        { platform: "soundcloud", url: "https://soundcloud.com/babysfirstpistol" },
    ]

};




