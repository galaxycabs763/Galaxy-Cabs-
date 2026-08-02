// Booking Form Validation
const form = document.querySelector("form");

if (form) {
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = form.querySelector('input[placeholder="Full Name"]').value;
    const mobile = form.querySelector('input[placeholder="Mobile Number"]').value;
    const travelType = form.querySelector('select[name="travel_type"]').value;
    const vehicle =
document.getElementById("vehicleName")?.value ||
form.querySelectorAll("select")[1].value;
    const pickup = form.querySelector('input[placeholder="Pickup Location"]').value;
    const drop = form.querySelector('input[placeholder="Drop Location"]').value;
    const date = form.querySelector('input[type="date"]').value;
    const time = form.querySelector('input[type="time"]').value;
  const packageName = document.getElementById("tourPackage")?.value || "";
const price = document.getElementById("tourPrice")?.value || "";
    

    if (mobile.length !== 10) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    let message;

if (packageName !== "") {

message = `🌴 New Tour Package Booking

Package: ${packageName}
Vehicle: ${vehicle}
Price: ${price}

Name: ${name}
Mobile: ${mobile}
Date: ${date}
Time: ${time}`;

} else {

message = `🚖 New Booking

Name: ${name}
Mobile: ${mobile}
Travel Type: ${travelType}
Vehicle: ${vehicle}
Pickup: ${pickup}
Drop: ${drop}
Date: ${date}
Time: ${time}`;

}
    // Replace 918082011814 with your WhatsApp number
    window.open(
        "https://wa.me/918082011814?text=" +
        encodeURIComponent(message),
        "_blank"
    );
});
}
function toggleMenu() {
    const menu = document.getElementById("menu");
    const btn = document.querySelector(".menu-btn");

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        btn.innerHTML = "✕";
    } else {
        btn.innerHTML = "☰";
    }
}

function bookTour(packageName){

    const card = event.target.closest(".package-card");

    const vehicle = card.querySelector(".vehicle-select").value;
    const price = card.querySelector(".price").innerText;

    if(vehicle==""){
        alert("Please select vehicle.");
        return;
    }

    localStorage.setItem("package", packageName);
    localStorage.setItem("vehicle", vehicle);
    localStorage.setItem("price", price);

    window.location.href = "booking.html";
}
function bookVehicle(vehicleName){

    localStorage.removeItem("package");
    localStorage.removeItem("price");

    localStorage.setItem("vehicle", vehicleName);

    window.location.href = "booking.html";
}
document.addEventListener("DOMContentLoaded", function () {
  const vehicleBox = document.getElementById("vehicleSelectBox");
if (vehicleBox) {
    vehicleBox.style.display = "none";
}

    const pkg = localStorage.getItem("package") || "";
    const vehicle = localStorage.getItem("vehicle") || "";
    if (!document.getElementById("tourPackage")) return;

    if (pkg !== "") {

        document.getElementById("packageLabel").style.display = "block";
        document.getElementById("vehicleLabel").style.display = "block";
        document.getElementById("priceLabel").style.display = "block";

        document.getElementById("tourPackage").style.display = "block";
        document.getElementById("vehicleName").style.display = "block";
        document.getElementById("tourPrice").style.display = "block";

        document.getElementById("tourPackage").value = pkg;
        document.getElementById("vehicleName").value = localStorage.getItem("vehicle");
        document.getElementById("tourPrice").value = localStorage.getItem("price");
        document.getElementById("normalBookingFields").style.display = "none";
        document.getElementById("vehicleSelectBox").style.display = "none";
        document.querySelectorAll("#normalBookingFields input, #normalBookingFields select")
.forEach(el => {
    el.required = false;
    el.disabled = true;
});
    }

else if(vehicle !== ""){

    document.getElementById("vehicleLabel").style.display = "block";
    document.getElementById("vehicleName").style.display = "block";

    document.getElementById("vehicleName").value = vehicle;
    function clearBookingData(){
    localStorage.removeItem("package");
    localStorage.removeItem("vehicle");
    localStorage.removeItem("price");
}
}
});

    

const packagePrices = {

"Goa Tour":{
"Swift Dzire":7999,
"Ertiga":9499,
"Toyota Innova":10999,
"Toyota Innova Crysta":12999
},

"Mahabaleshwar Tour":{
"Swift Dzire":7999,
"Ertiga":9499,
"Toyota Innova":10999,
"Toyota Innova Crysta":12999
},

"Ganpatipule Tour":{
"Swift Dzire":6499,
"Ertiga":8499,
"Toyota Innova":10999,
"Toyota Innova Crysta":13999
},

"Pandharpur Akkalkot Tuljapur":{
"Swift Dzire":8499,
"Ertiga":10499,
"Toyota Innova":12999,
"Toyota Innova Crysta":14999
},

"Tarkarli Tour":{
"Swift Dzire":8499,
"Ertiga":10499,
"Toyota Innova":13999,
"Toyota Innova Crysta":16999
},

"Amboli Tour":{
"Swift Dzire":3999,
"Ertiga":4499,
"Toyota Innova":5499,
"Toyota Innova Crysta":6499
},

"Kolhapur Darshan":{
"Swift Dzire":2999,
"Ertiga":3999,
"Toyota Innova":5499,
"Toyota Innova Crysta":6999
},

"Shirdi Tour":{
"Swift Dzire":7999,
"Ertiga":9999,
"Toyota Innova":13499,
"Toyota Innova Crysta":16499
},

"Pandharpur Tour":{
"Swift Dzire":3999,
"Ertiga":4999,
"Toyota Innova":6499,
"Toyota Innova Crysta":7999
},

"Lonavala Tour":{
"Swift Dzire":7499,
"Ertiga":9499,
"Toyota Innova":12499,
"Toyota Innova Crysta":15499
},

"Mumbai Tour":{
"Swift Dzire":8999,
"Ertiga":10999,
"Toyota Innova":14999,
"Toyota Innova Crysta":17999
},

"Ajanta Ellora Tour":{
"Swift Dzire":9499,
"Ertiga":11499,
"Toyota Innova":15499,
"Toyota Innova Crysta":18499
},

"Tadoba Safari":{
"Swift Dzire":11999,
"Ertiga":13999,
"Toyota Innova":17999,
"Toyota Innova Crysta":20999
},

"Alibaug Tour":{
"Swift Dzire":8499,
"Ertiga":10499,
"Toyota Innova":13999,
"Toyota Innova Crysta":16999
},

"Raigad Fort Tour":{
"Swift Dzire":6999,
"Ertiga":8999,
"Toyota Innova":11999,
"Toyota Innova Crysta":14999
},

"Matheran Tour":{
"Swift Dzire":7499,
"Ertiga":9499,
"Toyota Innova":12499,
"Toyota Innova Crysta":15499
}

};
function updatePrice(select, packageName){

const vehicle = select.value;

const priceBox = select.parentElement.querySelector(".price");

if(vehicle==""){
    priceBox.innerHTML="Estimated Price : --";
    return;
}

const price = packagePrices[packageName][vehicle];

priceBox.innerHTML="Estimated Price : ₹" + price;
}
function searchPackages() {
    let input = document.getElementById("searchPackage").value.toLowerCase();
    let cards = document.querySelectorAll(".package-card");

    cards.forEach(card => {
        let title = card.querySelector("h2").textContent.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function openServiceForm(id){

    document.getElementById(id).style.display = "flex";

    document.body.style.overflow = "hidden";
}


function closeServiceForm(id){

    document.getElementById(id).style.display = "none";

    document.body.style.overflow = "auto";
}


function openWhatsApp(message){

    window.open(
        "https://wa.me/918082011814?text=" +
        encodeURIComponent(message),
        "_blank"
    );
}


function checkMobile(mobile){

    if(!/^[0-9]{10}$/.test(mobile)){

        alert("Please enter valid 10-digit mobile number.");

        return false;
    }

    return true;
}


// ONE WAY

function sendServiceBooking(event,type,form){

    event.preventDefault();

    const name = form.name.value;
    const mobile = form.mobile.value;
    const pickup = form.pickup.value;
    const drop = form.drop.value;
    const date = form.date.value;
    const time = form.time.value;
    const vehicle = form.vehicle.value;

    if(!checkMobile(mobile)) return;


    const message =
`🚖 NEW ONE WAY BOOKING

Name: ${name}
Mobile: ${mobile}

Pickup: ${pickup}
Drop: ${drop}

Date: ${date}
Time: ${time}

Vehicle: ${vehicle}

Travel Type: One Way`;


    openWhatsApp(message);
}


// ROUND TRIP

function sendRoundTrip(event,form){

    event.preventDefault();

    const name = form.name.value;
    const mobile = form.mobile.value;
    const pickup = form.pickup.value;
    const drop = form.drop.value;

    const date = form.date.value;
    const returnDate = form.returnDate.value;

    const time = form.time.value;
    const vehicle = form.vehicle.value;


    if(!checkMobile(mobile)) return;


    const message =
`🔁 NEW ROUND TRIP BOOKING

Name: ${name}
Mobile: ${mobile}

Pickup: ${pickup}
Destination: ${drop}

Going Date: ${date}
Return Date: ${returnDate}

Pickup Time: ${time}

Vehicle: ${vehicle}

Travel Type: Round Trip`;


    openWhatsApp(message);
}


// AIRPORT PICKUP

function sendAirportPickup(event,form){

    event.preventDefault();

    const name = form.name.value;
    const mobile = form.mobile.value;

    const airport = form.airport.value;
    const drop = form.drop.value;

    const flight = form.flight.value || "Not Provided";

    const date = form.date.value;
    const time = form.time.value;

    const vehicle = form.vehicle.value;


    if(!checkMobile(mobile)) return;


    const message =
`✈️ NEW AIRPORT PICKUP BOOKING

Name: ${name}
Mobile: ${mobile}

Airport: ${airport}
Drop Location: ${drop}

Flight Number: ${flight}

Pickup Date: ${date}
Pickup Time: ${time}

Vehicle: ${vehicle}

Travel Type: Airport Pickup`;


    openWhatsApp(message);
}


// AIRPORT DROP

function sendAirportDrop(event,form){

    event.preventDefault();

    const name = form.name.value;
    const mobile = form.mobile.value;

    const pickup = form.pickup.value;
    const airport = form.airport.value;

    const date = form.date.value;
    const time = form.time.value;

    const vehicle = form.vehicle.value;


    if(!checkMobile(mobile)) return;


    const message =
`🛬 NEW AIRPORT DROP BOOKING

Name: ${name}
Mobile: ${mobile}

Pickup: ${pickup}
Airport: ${airport}

Date: ${date}
Pickup Time: ${time}

Vehicle: ${vehicle}

Travel Type: Airport Drop`;


    openWhatsApp(message);
}