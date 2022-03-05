function myFunction(x) {
    x.classList.toggle("change");
}

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

// pricing page

updateText("annuallyButton", "$30/mo", "Annuall")

updateText('monthlyButton', "$25/mo", "Monthly")

function updateText(id, doller, text) {
    const monthlyButton = document.getElementById(id);
    monthlyButton.addEventListener('click', function () {
        document.getElementById('annuallValue').innerHTML = doller;
        document.getElementById('annullText').innerHTML = text;
    })
}


const buttons = document.querySelectorAll('.featureBtn');
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        buttons.forEach(elem => {
            elem.classList.remove("active")
        })
        this.classList.add("active")
    })
})

function myFunction() {
    var x = document.getElementById("mypsw");
    if (x.type === "password") {
        x.type = "text"
        document.getElementById('hide').style.display = "inline-block";
        document.getElementById('show').style.display = "none";
    } else {
        x.type = "password";
        document.getElementById('hide').style.display = "none";
        document.getElementById('show').style.display = "inline-block";
    }

}