const btn = document.querySelector("#center");

// Array to store multiple image divs
const imageDivs = [];

// Array of image URLs
const imageUrls = [
    'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D',
    'https://miro.medium.com/max/2400/0*hDAyhnOx767w5qma.jpg',
    'https://marketingaccesspass.com/wp-content/uploads/2015/10/Podcast-Website-Design-Background-Image.jpg',
    'https://th.bing.com/th/id/OIP.4d7Emr_d4fJnEE6zK7pj_wHaFK?rs=1&pid=ImgDetMain',
    'https://images.freecreatives.com/wp-content/uploads/2015/03/Huge-Backgrounds-17.jpg',
    'https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg',
    'https://cdn.mos.cms.futurecdn.net/CT9xCjqrhnPD4ivB6B8Hqe.jpg',
    'https://psdlearning.com/wp-content/uploads/2020/04/2173df74a356e89b40b18897e1b8655d.jpeg',
    'https://glasbans.com/assets/images/services/web-design-01.jpg',
    'https://th.bing.com/th/id/OIP.EHdkaHPt2i2khmRpFViE9gHaE7?rs=1&pid=ImgDetMain',
    'https://www.itl.cat/pngfile/big/194-1942065_wood-deck-at-purple-sunset-android-wallpaper-summer.jpg',

     'https://i.pinimg.com/originals/b5/6b/d8/b56bd82232328143328dd50f0307f81f.jpg',
     'https://miro.medium.com/max/1400/1*PVOhIhZ2cfFJVWI3U9WG6A.jpeg'
    

];

// Function to get a random image URL from the array
const getRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
};

// Throttling Function
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
};

btn.addEventListener("mousemove",
    throttleFunction((event) => {
        // Create a new div element
        const div = document.createElement('div');
        div.classList.add('imagediv');

        // Set the position of the div based on the mouse coordinates
        div.style.left = event.clientX + 'px';
        div.style.top = event.clientY + 'px';

        // Create and append the image element
        const img = document.createElement('img');
        img.setAttribute('src', getRandomImageUrl()); // Set a random image URL
        div.appendChild(img);

        // Append the div to the body
        document.body.appendChild(div);

        // Store the div and img in the array
        imageDivs.push({ div, img });

        // GSAP Animation for the image
        gsap.to(img, {
            y: '0%',
            ease: "power1.inOut",
            duration: 0.6
        });

        // Add a little bounce effect to the div
        gsap.fromTo(div, {
            scale: 0.8
        }, {
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1
        });

        gsap.to(img, {
            y: '100%',
            delay: 0.6,
            ease: "power2.inOut"
        });

        // Remove the div after 2 seconds
        setTimeout(() => {
            // Remove from the DOM
            div.remove();
            
            // Remove from the array
            const index = imageDivs.findIndex(item => item.div === div);
            if (index !== -1) {
                imageDivs.splice(index, 1);
            }
        }, 2000);
    }, 400)
);
