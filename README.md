# trello-web-clone
This is a frontend practice to clone trello website,
make with:
1. Vite
2. React
3. Typescript
4. Tailwind
5. Framer Motion
6. Responsive Design


<h3>Notes:</h3>

<h4>[SVG wave background]</h4>
add layer wave svg background generate from haikei.app as hero section background image to width screen size,
horizontal scrollbar appear in large screen size

<h4>[Drag Slideshow]</h4>
The testimonials section is a slideshow make with framer motion package
follow the instruction from:
1. youtube - 
    https://www.youtube.com/watch?v=OgXXSixKIqQ
2. framer motion documentation example - 
    https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?from-embed=&file=/src/styles.css

each slide is an individual div instead of image,
and applying drag gesture behavior to the slides.

the problem is:
need to make slides an absolute, and parent <div> to relative
when make a parent div to relative, need to specify how much pixel height it need,
but the slide is a div contain text inside, 
so when smaller the screen, if the height is not enough,
the text inside will be cut off,
so i make couple different height along with the screen-wide
but it's feel like not a prefect solution,
because some screen size will have too much height and cause extra spaces below the slide
