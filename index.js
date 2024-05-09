function switchPage(pageId) {
    let pageUrl;
    switch(pageId) {
        case 'Traders':
            pageUrl = 'Trades.html';
            break;
        case 'FAQ':
            pageUrl = 'Tradeshub.html';
            break;    
        case 'LeaderBoard':
            pageUrl = 'LeaderBoard.html';
            break;
        case 'index':
            pageUrl = 'Tradeshub.html';
            break;
        case 'Terms':
            pageUrl = 'Terms.html';
            break;
        case 'Privacy':
            pageUrl = 'Privacy.html';
            break;
        case 'Contact':
            pageUrl = 'Contact.html';
            break;
        default:
            pageUrl = 'Tradeshub.html'; // Default to an error page if pageId is unrecognized
            break;
    }
    // Redirect to the selected page
    window.location.href = pageUrl;
}

function sendMail() {
  // Get form input values
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Validate form inputs
  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  if (email === "") {
    alert("Please enter your email address.");
    return;
  } else if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (message === "") {
    alert("Please enter your message.");
    return;
  }

  // If all inputs are valid, proceed to send email
  var params = {
    name: name,
    email: email,
    message: message,
  };

  const serviceID = "service_kdn514c"; // Replace with your EmailJS service ID
  const templateID = "template_0gxeqvi"; // Replace with your EmailJS template ID

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      // Clear form fields and show thank you message
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("thank_you").style.display = "block";
      document.getElementById("contactForm").style.display = "none";
      document.getElementById("contactform_title").style.display = "none";
      document.getElementById("contactform_desc").style.display = "none";
    })
    .catch(err => console.error("Error sending email:", err));
}

// Function to validate email format
function isValidEmail(email) {
  // Regular expression to validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// add in toast validator 



const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  const header = accordion.querySelector('.accordion-header');
  const content = accordion.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    // Close all open accordions first
    accordions.forEach(acc => {
      const accordionContent = acc.querySelector('.accordion-content');
      if (accordionContent !== content) {
        accordionContent.classList.remove('active');
        accordionContent.style.display = 'none';
      }
    });

    // Toggle the clicked accordion
    content.classList.toggle('active');
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.scroll-button');
  const target = document.querySelector('.scroll-target');

  button.addEventListener('click', function() {
    target.scrollIntoView({ behavior: 'smooth' });
  });
});




const amountInput = document.getElementById('amount');
  const monthsInput = document.getElementById('months');
  const earnedDisplay = document.getElementById('earnedDisplay');
  const interestDisplay = document.getElementById('interestDisplay');

  function calculate() {
    const amount = parseInt(amountInput.value);
    const months = parseInt(monthsInput.value);
    let earned = amount;
    for (let i = 0; i < months; i++) {
      earned += earned * 0.10; // 10% growth
    }
    const compoundInterest = ((earned - amount) / amount) * 100;
    earnedDisplay.textContent = '$' + earned.toFixed(2);
    interestDisplay.textContent = '↑' + compoundInterest.toFixed(2) + '%';
  }

  amountInput.addEventListener('input', () => {
    const amount = parseInt(amountInput.value);
    document.getElementById('amountDisplay').textContent = '$' + amount;
    calculate();
  });

  monthsInput.addEventListener('input', () => {
    const months = parseInt(monthsInput.value);
    document.getElementById('monthsDisplay').textContent = months + (months === 1 ? ' month' : ' months');
    calculate();
  });

  calculate(); // Initial calculation