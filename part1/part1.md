1. The value of 3 will be printed for console.log(i) because the value of i is created as a var and this variables scope can live outside of the for loop therefore work when outside the for loop where it was made.
2. The value of 150 for discountedPrice will be printed because var variable scope lives outside of the for loop as well.
3. The value of 150 for finalPrice will be printed because var variable scope will live throughout the function.
4. The value will return the discounted array variable. This array will contain [ 50, 100, 150 ], inside of it. It is returned because it is initialized inside the function as a var and this works to return it as well. The values are updated and pushed inside the for loop as well. 
5. An error would occur because i only lives in the for loop since it was made with a let statment. Therefore it can not be called or used outside this for loop as it has no meaning.
6. An error since discountedPrice was made with let inside of the for loop so it will only exist inside the for loop. It does not exist outside of the for loop and is not defined so it can not be used.
7. Value of 150 for finalPrice will be printed because it was made with let inside the function and we are calling the value inside the same function. Therefore the variable finalPrice still exists and is defined inside the function so it will work with the value of 150.
8. If the code is made with the let statements and the console.log() statements are still there for let variables that are out of scope like i and discountedPrice then an error will occur. Other than that if the console.log() statement is not there for the variables that are out of scope then the function will work properly similar to #4.
9. There will be an error because i does not live outside the for loop since it was made with a let statement. Therefore it is not defined and will cause an error when called with the console.log(i).
10. There will be an error because the value discountedPrice was made inside the for loop with a const type, so calling it outside the for loop it is undefined and therefore does not exist. 
11. There will be an error because at line 7 we are trying to change the value of finalPrice when it is a const variable, so we can not change it. 
12. The fuction will have errors since we are changing const variables throughout, but if all the console.log declarations were fixed it would return the array [ 50, 100, 150 ]. This is because the array discounted is a const type but adding elements into it does not reassign it a value. therefore it would work and return that array discounted as [ 50, 100, 150 ]. Given that the above errors were all fixed. 
13 A. student.name
   B. student['Grad year']
   C. student.greeting()
   D. student['Favorite Teacher']['name']
   E. student.courseLoad[0]
14 A. '32', because it was a string and a number the result was a string with '32' as the two was concatenated to the 3. 
   B. 1, because the '-' operator is always subtraction so the '3' is as a number 3 getting subtracted by the number 2 and therefore getting the number 1.
   C. 3, becasue the number was "+" with null so the result would be a number. 
   D. '3null', because the string '3' was + with null then the result would be a string
   E. 4, because a bool evaluates to a 1 for a number and this gets added to 3 giving a number 4.
   F. 0, because a boolean+null, will give a number and since it is false the number will be 0.
   G. '3undefined', because a string+undefined is a string and so the string will be "3" and "undefined" concatenated together resulting in'3undefined'
   H. NaN, because the operation becomes a math operation with the '-' and a number minus undefined will become NaN
15 A. true, since the types are different javascript will convert them into numbers and compare. Therefor '2'>1 becomes 2>1 which is true.
   B. false, Since the types are both strings it compares them lexicographically to see which is bigger. Since 2 is bigger than 1, which is the first string from '12' it would be false.
   C. true, since the string '2' becomes 2 and therfore 2 == 2 is true.
   D. false, since the '===' is a strict equality operator it will check the equality without type conversion. Therfore since this is a number and a string it will immediately return false.
   E. false, since the true will evaluate to 1 and this is not equal to 2
   F. true, since Boolean(2) becomes a boolean value of true and it is getting strictly compared to another boolean type that is true it will return true.
16. The difference between '==' and '===' is that the '===' operator checks the equality without type conversion. While '==' will type convert and then check equality. That is why '2' == 2 is true but '2'===2 is false 
17. How are you? will get printed because the "else if (2)" statement will evaluate to true. This is because when doing "2==true" the true becomes a 1 so 1 and 2 are not equal so that condition will get skipped. Then the if (2) will be true because truthy values are pretty much any number other than 0. 
18. Code found in part1-question18.js
19. The result will be [ 6, 8, 10 ]. I arrived at this result by......EXPLAIN
20. Code found in part1-question20,js
21. The output of this code is: \
    1 \
    4 \
    3 \
    2 

