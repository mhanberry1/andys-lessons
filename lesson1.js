// Print "Hello World"
console.log('Hello World')

// Create a variable
andy = 100
console.log('andy: ' + andy)

// Update a variable
andy = andy + 200
console.log(andy)
andy = andy + 200
console.log(andy)

// Functions
function add_200_to_andy(){
    andy = andy + 200
    console.log(andy)
}

add_200_to_andy()

function add_num_to_andy(num){
    andy = andy + num
    console.log(andy)
}

add_num_to_andy(500)

function get_area_of_circle(radius){
    area = Math.PI * Math.pow(radius, 2)
    return area
}

area_of_circle_radius_5 = get_area_of_circle(5)
console.log('area: ' + area_of_circle_radius_5)

// Add text to page (DOM Manipulation)
document.body.innerHTML = '<h1>Area of a circle with radius 5:</h1>'
document.body.innerHTML += '<p>' + area_of_circle_radius_5 + '</p>'

// If-then statements (Conditional statements)
if (area_of_circle_radius_5 > 5) {
    console.log("It's greater than 5!")
}

if (area_of_circle_radius_5 == 0) {
    console.log("It's zero!")
} else {
    console.log("It wasn't zero!")
}

// While loop
number_of_times_to_loop = 10
loops_so_far = 0
while (loops_so_far <= number_of_times_to_loop) {
    add_200_to_andy()
    loops_so_far++
}

// HW: look up else if statements in javascript
// Bonus: look up for loops