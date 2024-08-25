const btn = document.querySelector("#center");

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
    throttleFunction((data) => {
        // Create a new div element
        const div = document.createElement('div');
        div.classList.add('imagediv');

        // Set the position of the div based on the mouse coordinates
        div.style.left = data.clientX + 'px';
        div.style.top = data.clientY + 'px';

        // Create and append the image element
        const img = document.createElement('img');
        img.setAttribute('src', 'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D');
        div.appendChild(img);

        // Append the div to the body
        document.body.appendChild(div);

        // GSAP Animation for the image
        gsap.to(img, {
            y: '0%',
            ease: Power1,
            duration: .6
        });

        // Add a little bounce effect to the div
        // gsap.fromTo(div, {
        //     scale: 0.8
        // }, {
        //     scale: 1,
        //     ease: Elastic.easeOut.config(1, 0.3),
        //     duration: 1
        // });
        gsap.to(img,{
            y:'100%',
            delay:.6,
            ease:Power2
        });

        // Remove the div after 2 seconds
        setTimeout(function() {
            div.remove();
        }, 2000);
    }, 400)
);