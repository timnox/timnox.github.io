# Band Website - Management Guide

This website is designed to be very easy to update. You only need to edit **one file** to change almost everything on the site: `js/config.js`.

## How to Update the Website

### 1. Changing Text, Links, and Concerts
1.  Open the file `/js/config.js` in a text editor (like VS Code, Sublime Text, or even Notepad).
2.  Find the section you want to change (e.g., `about`, `concerts`, `socials`).
3.  Edit the text or links inside the quotes (`""`).
4.  Save the file.
5.  Upload the changed file to your web host (or commit and push if using GitHub).

**Example: Adding a Concert**
To add a new show, find the `upcomingShows` section in `js/config.js` and add a new block inside the `[]` brackets:

```javascript
{ 
    date: "2025-12-10", 
    location: "Philadelphia, PA", 
    venue: "Johnny Brenda's", 
    time: "8:00 PM", 
    ticketLink: "[https://link-to-tickets.com](https://link-to-tickets.com)" 
},
// <-- Don't forget the comma after the curly brace!
```

**The website will automatically sort the concerts by date.**

### 2. Changing Images
1.  Place your new image file inside the `/images/` folder.
2.  Open `/js/config.js`.
3.  Find the image setting you want to change (e.g., `logoImage` or `about.image`).
4.  Update the file path to match your new image's name. For example, change `"images/band-photo.jpg"` to `"images/new-cool-photo.png"`.
5.  Save the file and upload the changes.

### 3. Changing the Color Scheme
1.  Open the file `/css/style.css`.
2.  At the very top, you will see this section:
    ```css
    :root {
        --background-color: #000000; /* Black */
        --foreground-color: #39FF14; /* Lime Green */
    }
    ```
3.  Change the hex codes (`#000000` and `#39FF14`) to any colors you want. You can use an online color picker to find hex codes.
4.  Save the file and upload the change.

### 4. Deploying to GitHub Pages
1.  Create a new public repository on GitHub (e.g., `your-band-name.github.io`).
2.  Upload all the website files (`index.html`, `css/`, `js/`, `images/`) to this repository.
3.  In your repository's settings, go to the "Pages" section.
4.  Under "Source", select the `main` (or `master`) branch and the `/ (root)` folder, then click "Save".
5.  Wait a few minutes, and your site will be live at `https://your-username.github.io/your-repository-name/` or `https://your-band-name.github.io` if you named the repository correctly.