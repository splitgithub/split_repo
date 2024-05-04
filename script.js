// Basic JavaScript for future interaction enhancements
console.log("SplitStay landing page loaded.");
document.getElementById('waitlistForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var formData = new FormData();
    formData.append('entry.670349506', email); // Replace 'entry.xxxxxxx' with the field name from your Google Form

    fetch('https://docs.google.com/forms/d/e/1FAIpQLScR9RRnepSvJRw4BxzxptoCn-ls1PTDf2aMJlh2_2zs0o1PTA/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then(response => {
        document.getElementById('message').innerText = 'Thanks for joining the waitlist!';
    }).catch(error => {
        document.getElementById('message').innerText = 'Error: Could not send data.';
    });
});
