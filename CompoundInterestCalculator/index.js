function calculateCompoundInterest() {
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const timeInput = document.getElementById("time");
    const result = document.getElementById("result");

    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100);
    let time = Number(timeInput.value);

    if (principal < 0 || isNaN(principal)) {
        principal = 0;
        principalInput.value = 0;
    }
    if (rate < 0 || isNaN(rate)) {
        rate = 0;
        rateInput.value = 0;
    }
    if (time < 0 || isNaN(time)) {
        time = 0;
        timeInput.value = 0;
    }

    const amount = principal * Math.pow((1 + rate / 1), 1 * time);
    result.textContent = amount.toLocaleString(undefined, { style: "currency", currency: "INR" });
}