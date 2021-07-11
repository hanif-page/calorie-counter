// making the x button, and append it to each li tag child
var calorieList = document.getElementsByTagName('li')
var calorieListClass = "flex items-center space-x-3"
for (var i = 0; i < calorieList.length; i++)
{
    var closeIcon = document.createElement('i')
    var closeIconClass = "fas fa-times duration-200 text-2xl text-red-500 hover:opacity-70 cursor-pointer"
    closeIcon.className = closeIconClass
    calorieList[i].className = calorieListClass
    calorieList[i].appendChild(closeIcon)
}

// calculate button functionality
var calculateBtn = document.getElementById('calculateBtn')
calculateBtn.addEventListener('click', () => {
    var clickedCount = 0
    var alertCount = 0
    var foodCalorieInput = document.getElementsByClassName('foodCalorieInput')
    var totalCalToEat = document.getElementById('totalCalToEat')
    var eatenCal = document.getElementById('eatenCal')
    var remainingCal = document.getElementById('remainingCal')
    var eatenCalResult = 0
    var remainingCalResult = 0

    // increment the variable (for check how many times the button clicked)
    clickedCount++

    // change the button text if its already clicked more than one times
    if (clickedCount > 0)
    {
        calculateBtn.innerHTML = "ReCalculate"
    }

    // check if all the input box is empty or not by increment the alertCount variable
    for(var i = 0; i < foodCalorieInput.length; i++)
    {
        if (foodCalorieInput[i].value == "" || totalCalToEat.value == "")
        {
            alertCount++
        } 
    }

    // if the alert count is more than 0, then it means there still an empty input box
    if (alertCount > 0)
    {
        alert("You Must Fill All The Input Box !")
    }
    // button functionality code
    else 
    {
        // parse the value to a real float data type (decimal). But if it's not an integer or decimal, then it will become NaN
        totalCalToEatValue = parseFloat(totalCalToEat.value)
        for (var i = 0; i < foodCalorieInput.length; i++)
        {
            eatenCalResult += parseFloat(foodCalorieInput[i].value)
        }
        remainingCalResult = totalCalToEatValue - eatenCalResult

        // if The Result is NaN, then alert something
        if (isNaN(remainingCalResult))
        {
            alert("You Must Fill The Input Box With Number !")
        }

        // if not NaN, then continue to displaying the result
        else
        {
            // print the eaten calorie result
            eatenCal.textContent = eatenCalResult + " Calorie"

            // check the remaining calorie result if it's negative of not
            if (remainingCalResult < 0)
            {
                remainingCal.textContent = "0 Calorie (+" + (remainingCalResult*-1) + " Calorie)"
            }
            else
            {
                remainingCal.textContent = remainingCalResult + " Calorie"
            }
        }

    }

})

// delete the list functionality (close icon)
var closeIcon = document.getElementsByClassName('fa-times')
for (var i = 0; i < closeIcon.length; i++)
{
    closeIcon[i].onclick = function () {
        var parentElement = this.parentElement
        parentElement.remove()
    }
}

// add a new list functionality (plus icon)
var addIcon = document.getElementById('addIcon')
addIcon.addEventListener('click', () => {
    var myUL = document.getElementById('myUL')
    var newLI = document.createElement('li')
    var newLIClass = "relative flex items-center space-x-3"
    var newInputLabel = document.createElement('input')
    var newInputLabelClass = "absolute -top-7 left-3 focus:outline-none placeholder-gray-600 text-gray-600 md:text-lg lg:text-xl"
    var newInput = document.createElement('input')
    var newInputClass = "foodCalorieInput block border border-black focus:border-indigo-600 focus:outline-none px-3 py-1 lg:p-3 text-xl sm:text-2xl lg:text-3xl w-11/12 sm:w-1/2 md:w-1/3"
    var closeIcon = document.createElement('i')
    var closeIconClass = "fas fa-times duration-200 text-2xl text-red-500 hover:opacity-70 cursor-pointer"
    closeIcon.className = closeIconClass
    newInputLabel.className = newInputLabelClass
    newInputLabel.placeholder = "Food Name"
    newInput.className = newInputClass
    newInput.placeholder = "Food Calorie"
    newInput.type = "tel"
    newLI.className = newLIClass
    newLI.appendChild(newInputLabel)
    newLI.appendChild(newInput)
    newLI.appendChild(closeIcon)
    myUL.appendChild(newLI)

    // delete the list functionality (close icon)
    var closeIcon = document.getElementsByClassName('fa-times')
    for (var i = 0; i < closeIcon.length; i++)
    {
    closeIcon[i].onclick = function () {
        var parentElement = this.parentElement
        parentElement.remove()
    }
    }

})
