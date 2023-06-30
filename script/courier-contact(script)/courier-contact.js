 document.addEventListener('DOMContentLoaded', function() {
  let courierBtn = document.getElementById('courier-button');
  let contactContainer = document.getElementById('contact-container');
  let closeContacts = []; // Initialize an empty array
  let courierConfirmation = document.getElementById('courierConfirmation');
 

  courierBtn.addEventListener('click', function() {
    let courierBrand = document.getElementById('input-courier-brand');
    let courierNumber = document.getElementById('input-courier-number');
    let courierCountry = document.getElementById('input-courier-country');
    let courierAddress = document.getElementById('input-courier-address');
    let courierCity = document.getElementById('input-city-country');
    let courierImage = document.getElementById('input-courier-image');

    let file = courierImage.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
      let courierInfoContainer = document.createElement('div');
      courierInfoContainer.className = 'subHeader-contact-container';
      courierInfoContainer.setAttribute('data-id', Date.now());

      // String template to be added to html
      courierInfoContainer.innerHTML =
        ` <div class="close-contacts">&times;</div>
        <div class="contact-contents">
          <div class="courier-contact-images">
            <img id="display-courier-image" src="${e.target.result}" alt="">
            <p id="display-courier-name">${courierBrand.value}</p>
          </div>
          <div class="bottom-courier-info">
            <div class="way-contact-container">
              <img src="../images/courier-contact/telephone-icon.png" alt="">
              <p id="display-courier-number">${courierNumber.value}</p>
            </div>
            <div class="way-contact-container">
              <img src="../images/courier-contact/address-icon.png" alt="">
              <div class="way-text">
                <p id="display-courier-address">${courierAddress.value}</p>
                  <div class = "complete-address">
                      <p class="contact-country-city">${courierCountry.value}, </p>
                      <p class="contact-country-city">${courierCity.value}</p>
                   </div>
            </div>
          </div>
        </div>
        </div>`;

      // append the inputs
      contactContainer.appendChild(courierInfoContainer);

      // Add the newly created close button to the closeContacts array
      closeContacts.push(courierInfoContainer.querySelector('.close-contacts'));

      // Clear the input fields
      courierBrand.value = '';
      courierNumber.value = '';
      courierCountry.value = '';
      courierAddress.value = '';
      courierImage.value = '';
      courierCity.value = '';
    };

    reader.readAsDataURL(file);
  });

  let elementToRemove = null; // Declare the variable outside the event listener

  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('close-contacts')) {
      courierConfirmation.style.display = "flex";
  
      let courierInfoContainer = e.target.parentNode;
      elementToRemove = courierInfoContainer;
      courierInfoContainer.style.outline = "2px solid lightgreen";
  
      // Function to handle clearing contact details and removing courierInfoContainer
      function clearContactDetail() {
        let closeBtn = elementToRemove.querySelector('.close-contacts');
        let contactContainer = closeBtn.parentNode;
        contactContainer.remove();
        closeContacts = closeContacts.filter(btn => btn !== closeBtn);
  
        // Hide the confirmation dialog
        courierConfirmation.style.display = "none";
      }
  
      // Call the clearContactDetail() function when "Yes" button is clicked
      courierConfirmation.querySelector('.contact-option-1').onclick = function() {
        courierInfoContainer.style.outline = "none";
        clearContactDetail();
      };
  
      // Call the closeContactDetail() function when "No" button is clicked
      courierConfirmation.querySelector('.contact-option-2').onclick = function() {
        courierInfoContainer.style.outline = "none";
        closeContactDetail();
      };
  
      // Function to handle hiding the confirmation dialog without removing courierInfoContainer
      function closeContactDetail() {
        courierConfirmation.style.display = "none";
      }
    }
  });

});



