//Line-Animation
const animatedElement = document.getElementById('animatedLine');
let position = 40;

function lineAnimation() {
    position += 1;  
    animatedElement.style.left = position + "px";
    // Reset the position when it reaches the right edge of the screen
    if(position >= window.innerWidth - animatedElement.offsetWidth - 60) {
        position = 40;
    }
    requestAnimationFrame(lineAnimation);
}   
lineAnimation();

// Animated Button
const voteButton = document.getElementById('animatedVoteButton');
var voteWidth = voteButton.offsetWidth;
var increasing = true;

function buttonAnimation() {
    if (increasing) {
        voteWidth += 0.5;
        voteButton.style.width = voteWidth + "px";
        if (voteWidth >= 300) {
            increasing = false;
        }
    } else {
        voteWidth -= 1;
        voteButton.style.width = voteWidth + "px";
        if (voteWidth <= 86) {
            increasing = true;
        }
    }
    requestAnimationFrame(buttonAnimation);
}
buttonAnimation();

const headerTitle = document.getElementById("header-title");
headerTitle.addEventListener("mouseover", () => {
    headerTitle.style.transform = "scale(1.6)";
    headerTitle.style.textShadow = "0px 0px 5px #fd7e14";
});

headerTitle.addEventListener("mouseout", () => {
    headerTitle.style.transform = "scale(1)";
    headerTitle.style.textShadow = "0px 0px 5px lightcoral";
});

// Define Mobile objects
const mobile1 = {
    name: "Iphone 15",
    price: 799,
};

const mobile2 = {
    name: "Iphone 15 Pro",
    price: 999,
};

const mobile3 = {
    name: "Iphone 15 Pro Max",
    price: 1199,
};

// Interactive elements
const mobileElements = document.querySelectorAll(".mobile");
mobileElements.forEach((mobile) => {
    mobile.addEventListener("mouseover", () => {
        mobile.style.backgroundColor = "lightcoral";
        mobile.style.transform = "scale(1.1)";
    });

    mobile.addEventListener("mouseout", () => {
        mobile.style.backgroundColor = "";
        mobile.style.transform = "scale(1)";
    });
});

// Create animations
function animateElement(element) {
    // Implement your animation here
}

animateElement(document.getElementById("mobile1"));
animateElement(document.getElementById("mobile2"));

//vote form object
const votes = {
    iphone15: 0,
    iphone15pro: 0,
    iphone15promax: 0,
};

//vote system
let voteSubmit = document.getElementById("vote-button");
voteSubmit.addEventListener("click", () => {
    event.preventDefault();
    let selectedPhone = document.querySelector('input[name="phone"]:checked').value;
    votes[selectedPhone]++;
    for(let phone in votes) {
        if(votes.hasOwnProperty(phone)) {
            let element = document.getElementById(phone + "Votes");
            if (element) {
                element.textContent = ` ${votes[phone]} votes`;
            }
        }
    }
})

// Event listener for form submission
// document.getElementById("voteForm").addEventListener("submit", (event) => {
//     event.preventDefault();
//     const selectedPhone = document.querySelector('input[name="phone"]:checked').value;
//     if (votes.hasOwnProperty(selectedPhone)) {
//         votes[selectedPhone]++;
//         alert(`You voted for ${selectedPhone}. Thank you for your vote!`);
//         displayVotes(); // Add this line to update the vote counts on submission
//     } else {
//         alert("Invalid selection.");
//     }
// });

//3D Animations
const mobiles = document.querySelectorAll('.mobile');

mobiles.forEach((mobile) => {
    mobile.addEventListener('click', () => {
        mobile.classList.add('jumping');

        // Reset the animation after a short delay
        setTimeout(() => {
            mobile.classList.remove('jumping');
        }, 500);
    });
});


//Tooltips
tippy('#mobile1', {
    content: 'Iphone 15',
    placement: 'top', // Change this to 'bottom', 'left', or 'right' as needed
    arrow: true, // Show an arrow on the tooltip
});

tippy('#mobile2', {
    content: 'Iphone 15 Pro',
    placement: 'top', // Change this to 'bottom', 'left', or 'right' as needed
    arrow: true, // Show an arrow on the tooltip
});

tippy('#mobile3', {
    content: 'Iphone 15 Pro Max ',
    placement: 'top', // Change this to 'bottom', 'left', or 'right' as needed
    arrow: true, // Show an arrow on the tooltip
});