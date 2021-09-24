// get input from user

btn.addEventListener('click', function (e) {
    // var numbers = [];
    var numbers = nums.value.split(' ');
    var num = numbers.map((i) => Number(i));
    console.log(num)
    
    function numbersSum(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                console.log(arr[i])
                sum += arr[i];
            }
        }   
        return sum;
    }
    result.textContent = 'Sum of positive numbers: ' +  numbersSum(num);
})


// inputs added 

// var inputs = [1, -5, 16, 0, 2]

// function sumOf(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             // console.log(arr[i])
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
console.log(sumOf(inputs));


