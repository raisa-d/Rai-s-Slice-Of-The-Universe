# Rai's Slice Of The Universe
Codedex Mini Holiday Hackathon Submission

For this project, my intention was to follow my creativity and honor my inner child. I wanted to create my slice of the universe where whatever brings me joy can live. A place to info dump about my Autistic special interests, to be myself and let my personality shine. This site is a fortress where’s it’s okay---nay, ENCOURAGED--to be weird and queer.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Development Stage](#development-stage)
- [Lessons Learned](#lessons-learned)
- [Optimizations](#optimizations)
- [Contact](#contact)

## Features
- Portal/Intro page that takes you into the main page, complete with mermaids and a water ripple animation
- Slice of The Universe page
  - Candy heart side navigation
  - About
  - CSS Garden
  - Chatbox for users
  - Contact
  - My Collages section with 90s pop-up to expand the image
  - The 100 infodump section
  - Credits
- Custom cursors and cursor animation

## Technologies Used
HTML, CSS, Google Drawings for digital collages

## Credits
- Chatbox: [Cbox](https://www.cbox.ws)
- Water Ripples: [jQuery Ripples Plugin](https://github.com/sirxemic/jquery.ripples/tree/master)
- Fonts: [1001 Fonts](https://www.1001fonts.com/)
- Gifs: [GifCities](https://gifcities.org/) and [Giphy](https://giphy.com/)
- Mermaid Gifs: [Mermaid_Lux on Giphy](https://giphy.com/Mermaid_Lux)
- [Underwater Background Image](https://unsplash.com/)
- [Custom Cursors](https://www.cursors-4u.com/)
- [Bubbles Mouse Effect](https://www.mf2fm.com/rv/)
- [A Queer Coded This Banner](https://plasticdino.neocities.org/buttons/queer.png)

## Development Process
Phase 1: Gathering Information/Brainstorm
- I started by searching for as many 90s sites as I could and finding inspiration. My two favorites that I referenced the most were [Cameron's World](https://cameronsworld.net/) and [Plasticdino](https://plasticdino.neocities.org/). 
- I knew I wanted to create a personal site, the website of my adolescent self's dreams.
- The night before the hackathon, I was trying to go to bed early. I kept having so many ideas I had to keep going on my phone to write them down. You can find all the ideas I wasn't able to implement under [Optimizations](#optimizations). I do plan to continue this project after the hackathon and to do some or all of them!
- Before I wireframed, I found a bunch of fonts and gifs I knew I wanted to use which helped with the inspiration.
- I had sooo many ideas, the most difficult thing was scoping the project down to something achievable in two days. 

Phase 2: Wireframe & Design
- I drew out ideas/possible wireframes on my whiteboard until I came up with one I was happy with. This is the closest to what I ended up creating:
!(Wireframe)[/readMeImages/wireframe.jpeg]

Phase 3: Development
- I started development before I 100% knew my vision and next time I will do a little more planning, but in this case I was following my dopamine and going wherever it took me haha. I knew it would come together as I made it, and I am really happy with how it turned out!
- First, I developed the page/underwater portal that leads to my slice of the universe. I had so much fun animating the mermaids and finding the water ripples and am really proud of how it turned out.
- Then, I worked on the Slice Of The Universe page.
- I multitasked, coding and scouring different sites for more gifs, fonts, and inspiration.
- My friend and fellow hackathon member and I worked parallel to each other on the phone and gave each other our suggestions as we went. I really enjoyed this process and having someone to bounce ideas off of and to cheer on.

Phase 4: Testing
- This is where I started to implement some media queries that I did not originally plan on and I realized that I did not design my HTML in a way that was conducive to a mobile layout. I have a responsive layout for desktop/tablets, but it will definitely look wonky on mobile -- although that makes it all the more 90s. 
- I ran into an issue where my mermaid animations were causing automatic scrolling and I went mermaid by mermaid figuring out which part of the animation was causing that to eliminate it. It happened when they went too far on the left side offscreen, so I had to modify those keyframes so they didn't travel so far that that happened.

Phase 5: Launch
- I decided to host this on Netlify through GitHub.

## Lessons Learned
This was my first ever hackathon, and boy did I learn a LOT!
- Scoping: The first lesson was in scoping a project-- I had so many grandiose ideas which I would still love to implement eventually, but it was really hard choosing what features I wanted to prioritize. In the end, I chose to prioritize the underwater portal to the website and then to have one main page with a bunch of little sections that are almost their own world.
- Hard-coding sizes: Typically, I don't ever hard-code widths/heights, but in this project I did. It made media queries more finnicky than necessary-- in the future, I will stick to using flex proprties to size sections instead of hardcoding them to make it easier for future me.
- Animations/Keyframes: I finally learned how keyframes works and it wasn't as hard as I imagined! I used them for all of the mermaid swimming patterns!
- Project Planning: I focused more on development than planning this time around because I was just excited to get my hands dirty. In the end, I am really happy with my result but I do think it would've been easier if I had a more explicit plan.
- Mobile-First Designs: Next time, I'll draw the mobile layout out before I start coding. In this project, I initially wasn't going to do a mobile layout since it's 90s themed and the 90s sites didn't have that. But then I wanted to add media queries and it was really hard to get things looking right because I didn't write the HTML with that in mind. I will definitely be tryign mobile-first designing and building in the future.
- Demo Reels: I have never seen a hackathon demo reel before so it is brand new for me and I had to learn what is expected.

## Optimizations
Future Directions/Next Steps:
- About page. Would include:
  - Content about all of my favorite shows and my thoughts on them. List my favorite seasons of The 100 and why
  - A table of all of my special interests (including but not limited to The 100, The Hunger Games, Schitt's Creek, Lana Del Rey, Chappell Roan, the apocalypse)
- Sitemap
- Rules for my world
- Section "Enter to see your name in shining lights" where user types in their name and it outputs their name in a font that is...shining lights.
- Page of pictures of my cat, Luca
- Add description of "my heaven" section. Certain words will be bolded in certain colors, when you hover on the word the background changes
- Add kelp to the bottom of Rai's Universe page
- Greenhouse room (like "My Garden" section but much larger and more involved)
- Create a page that is a little town with buildings
- Add an audio introduction with my voice
- Poetry section
- Make it more accessible. There are some images that aren't for decoration cluttering up the HTML and I do worry that this will cause issues for users with screenreaders.
- Have music play on pageload for both the homepage and the intro/portal page.
- Have a Windows error message box pop up and ask "Would you like to go down the rabbit hole?" It will take the user to a page/room of easter eggs
- Guestbook feature
- Living Room
  - Couch, tv, coffee table, etc. Interactive.
- Library
  - Bookshelf with images of all the books I read this year. When you hover, there's a modal that pops up and talks about the book and my thoughts on it. 
- Vending machine where the candies/snacks are all links or have hover animations
- Virtual advent calendar with a bunch of cool doors
- Winter scene with snowflakes and christmas lights etc.
  - Ornaments on christmas tree as navigation
- Underwater apocalypse/abandoned city, mermaids as sole survivors.
- Fairy page/world
  - Mushroom/fairy circle
  - Mushroom houses
  - Huge mushroom or tree trunk w wooden signs like in alice in wonderland saying this way that way navigation
- Bathroom
  - Vanity with hairdryer, soap, etc. on it with modals talking about my opinions on those bathroom items. I.e., for the hairdryer: "I don't use hairdryers, they're too loud"
- Board game map where the sepcial squares are navs
- Tea party dining table set, tea cups are navs
- Page with lesbian flag colors

## Contact
<p> 
  <a href="https://raisadorzback.netlify.app/" target="blank">
    <img src="https://img.shields.io/badge/Website-563d7c?&style=for-the-badge" alt="Website">
  </a>
  <a href="https://www.linkedin.com/in/raisa-d/">
    <img src="https://img.shields.io/badge/LinkedIn-046E6D?logo=linkedin&style=for-the-badge">
  </a>
  <a href="https://twitter.com/rai__bread" target="blank">
    <img src="https://img.shields.io/badge/Twitter-563d7c?logo=twitter&style=for-the-badge&logoColor=white" alt="rai__bread" />
  </a> 
</p>