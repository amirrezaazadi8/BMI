const height = document.querySelector("#height");
const heightW = document.getElementById("heightW");
const weight = document.getElementById("weight");
const weightW = document.getElementById("weightW");

const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (height.value.length === 0) {
        heightW.innerText = "Please enter your height in centimeters";
    } else if (height.value.length < 2 || height.value.length > 3) {
        heightW.innerText = "Please enter your height correctly";
    } else {
        heightW.innerText = "";
    }

    if (weight.value.length === 0) {
        weightW.innerText = "Please enter your weight in kilogram";
    } else if (weight.value.length < 1 || weight.value.length > 3) {
        weightW.innerText = "Please enter your weight correctly";
    } else {
        weightW.innerText = "";
    }

    if (heightW.innerText.length === 0 & weightW.innerText.length === 0) {
        const bmi = Number(weight.value) / Math.pow(Number(height.value), 2) * 10000;
        const submitW = document.getElementById("submitW");
        console.log(bmi);
        // if (BMI <= 18.5) {
        //     submitW.innerText = "under weight";
        // } else if (18.5 < BMI <= 25) {
        //     submitW.innerText = "good weight";
        // } else if (25 < BMI <= 30) {
        //     submitW.innerText = "over weight";
        // } else if (30 < BMI) {
        //     submitW.innerText = "very fat";
        // }
        switch (true) {
            case (bmi > 30):
                submitW.innerText = "fat";
                submitW.className = "text-red-600 block mt-8 py-5  text-lg font-bold";
                break;
            case (25 < bmi && bmi <= 30):
                submitW.innerText = "over weight";
                submitW.className = "text-orange-500 block mt-8 py-5  text-lg font-bold";
                break;
            case (18.5 < bmi && bmi <= 25):
                submitW.innerText = "good weight";
                submitW.className = "text-green-700 block mt-8 py-5  text-lg font-bold";
                break;
            case (bmi <= 18.5):
                submitW.innerText = "under weight";
                submitW.className = "text-yellow-500 block mt-8 py-5  text-lg font-bold";
                break;
        }

    }
})
