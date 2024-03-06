const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestions');

const suggestions = ['Psldeal', 'Deal', 'Starter', 'Bbq', 'Karahi', 'Mocktails'];

function showSuggestions() {
  const inputValue = searchInput.value.toLowerCase();
  suggestionsList.innerHTML = '';

  if (inputValue.length === 0) {
    suggestionsList.style.display = 'none';
    return;
  }

  suggestions.forEach(suggestion => {
    if (suggestion.toLowerCase().includes(inputValue)) {
      const li = document.createElement('li');
      li.textContent = suggestion;
      li.onclick = function() {
        displayContent(suggestion);
      };
      suggestionsList.appendChild(li);
    }
  });

  suggestionsList.style.display = 'block';
}


function displayContent(keyword) {
  // Example: Redirect to a specific URL based on the keyword
  if (keyword === 'Psldeal') {
    window.location.href = '#psldeal';
  }
  if (keyword === 'Deal') {
    window.location.href = '#deal';
  }
  if (keyword === 'Starter') {
    window.location.href = '#starter';
  }
  if (keyword === 'Bbq') {
    window.location.href = '#bbq';
  }
  if (keyword === 'Karahi') {
    window.location.href = '#karahi';
  }
  if (keyword === 'Mocktails') {
    window.location.href = '#mocktails';
  }
}





// billing system place odrer button starts

function validateForm() {
   var fname = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var adr = document.getElementById("adr").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var cname = document.getElementById("cname").value;
  var ccnum = document.getElementById("ccnum").value;
  var expmonth = document.getElementById("expmonth").value;
  var expyear = document.getElementById("expyear").value;
  var cvv = document.getElementById("cvv").value;

  // Check for empty fields
  if ( fname.trim() === "" ) {
    document.getElementById("nameError").innerHTML = "Please fill out all required fields.";
    return false;
  }
  else {
    document.getElementById("nameError").innerHTML = "";
  }

    // Check email format
    if (email.trim() === "" || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
      return false;
    }
    else {
      document.getElementById("emailError").innerHTML = "";
    }
  

  // Check address format
  if ( adr.trim() === "" ) {
    document.getElementById("addressError").innerHTML = "Please fill out all required fields.";
    return false;
  }
  else {
    document.getElementById("addressError").innerHTML = "";
  }

  // Check city format
  if ( city.trim() === "" ) {
    document.getElementById("cityError").innerHTML = "Please fill out all required fields.";
    return false;
  }
  else {
    document.getElementById("cityError").innerHTML = "";
  }

    // Check state format
    if ( state.trim() === "" ) {
      document.getElementById("stateError").innerHTML = "Please fill out all required fields.";
      return false;
    }
    else {
      document.getElementById("stateError").innerHTML = "";
    }


    

  // Check ZIP code format
  if (zip.trim() === "" ||  !/^\d{5}$/.test(zip)) {
    document.getElementById("zipError").innerHTML = "Please enter a valid 5-digit ZIP code.";
    return false;
  }
  else {
    document.getElementById("zipError").innerHTML = "";
  }

  

      // Check credircard name format
   if ( cname.trim() === "" ) {
   document.getElementById("cnameError").innerHTML = "Please fill out all required fields.";
    return false;
      }
      else {
        document.getElementById("cnameError").innerHTML = "";
      }
    
      
  // Check credit card number format
  if (ccnum.trim() === "" || !/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(ccnum)) {
    document.getElementById("ccnumError").innerHTML = "Please enter a valid credit card number in the format XXXX-XXXX-XXXX-XXXX.";
    return false;
  }
  else {
    document.getElementById("ccnumError").innerHTML = "";
  }


    // Check expmonth name format
   if ( expmonth.trim() === "" ) {
    document.getElementById("expmonthError").innerHTML = "Please fill out all required fields.";
     return false;
       }
       else {
        document.getElementById("expmonthError").innerHTML = "";
      }



  // Check expiry year format and validity
  var currentYear = new Date().getFullYear();
  if (expyear.trim() === "" || !/^\d{4}$/.test(expyear) || parseInt(expyear) <= currentYear) {
    document.getElementById("expyearError").innerHTML = "Please enter a valid expiry year (after the current year) in the format YYYY.";
    return false;
  }
  else {
    document.getElementById("expyearError").innerHTML = "";
  }

    // Check CVV format
    if (cvv.trim() === "" || !/^\d{3}$/.test(cvv)) {
      document.getElementById("cvvError").innerHTML = "Please enter a valid 3-digit CVV.";
      return false;
    }
    else {
      document.getElementById("cvvError").innerHTML = "";
    }

  // Clear any existing error messages
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("addressError").innerHTML = "";
  document.getElementById("cityError").innerHTML = "";
  document.getElementById("stateError").innerHTML = "";
  document.getElementById("zipError").innerHTML = "";
  document.getElementById("cnameError").innerHTML = "";
  document.getElementById("ccnumError").innerHTML = "";
  document.getElementById("expmonthError").innerHTML = "";
  document.getElementById("expyearError").innerHTML = "";
  document.getElementById("cvvError").innerHTML = "";

  // Form is valid, allow submission
  return true;
}


