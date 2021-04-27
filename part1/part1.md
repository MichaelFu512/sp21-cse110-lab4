##Part 1a
1) 20 is printed
2) undefined
3) 20
4) undefined
5) Causes an error because of "assignment to constant variable" since once we define a const, it can't be reassigned
6) Returns an error because of the whole "assignment to constant variable" error from 5

##Part 1b
1) Line 12 will print out 3 because it prints i, which is equal to prices.length
2) Line 13 will print out 150 because the last discountedPrice was 150, which came from the last element in the array '300'
3) Line 14 will print out 150 because the final price change is equal to discountedPrice * 100 / 100 rounded, which just equals 150.
4) The function will return an array with values [50, 100, 150] since it returns the discounted prices, which end up being 50, 100, and 150.
5) Line 12 will error because of scope issues. It doesn't think i is defined because we used let instead of var
6) Line 13 will error because of scope issues. It doesn't think discountedPrice is defined because we used let instead of var
7) Line 14 will error because of scope issues. It doesn't think finalPrice is defined because we used let instead of var
8) The function will return an array with values [50, 100, 150]  since we defined discounted with let at the beginning function block, which means that by the end of the function, the program can still see discounted.
9) Line 11 errors because i is not defined since we used let, which only defines it inside the for loop block
10) Line 12 prints out 3 because length = the length of the input array, which is 3
11) The function return array with values [50, 100, 150] because even though it was defined as const, we are pushing values into it rather than reassigning.
12a) student.name
12b) student["Grad Year"]
12c) student.greeting
12d) student["Favorite Teacher"].name
12e) student.courseLoad[0]
13a) 32 because '3' is a string and the + represents concatenation. So the 3 gets strung with the 2
13b) 1 because 3-2 is 1, since there is a minus symbol it performs 3-2 rather than string concatenation
13c) 3 because 3 + null is 3
13d) 3null because of string concatenation, it strung together 3 and null
13e) 4 because true = 1, which if we add by 3 = 4
13f) 0 because false = 0, which if we add by null = 0
13g) 3undefined because of string conatenation, it strung together 3 and undefined
13h) NaN because we can't subtract by an undefined
14a) True because sstring 2 becomes the number 2
14b) False because first char '2' is actually > first char of '12' which is '1'
14c) True because string 2 becomes the number 2
14d) False because === immediately returns false if they are not the same type, which they are not same type
14e) False because true becomes the number 1, which 1 is not equal to 2
14f) True because Boolean(2) = true, and since true is of the same type as true, this means that true === Boolean(2) is true
15) == does a type convertion, so if we had 2 == '2' it would be true since it converts the '2' into a number. === checks to see if they are the same type so 2 === '2' would return false since 2 and '2' are not even the same type.
16) Look at part1b-question16.js
17) The result will be the array [2,4,6]. First it starts the modifyArray function, then it goes into the for loop. For each element in the input array, it modifies the input to be double. So the input array [1,2,3] becomes [2,4,6]. It then returns that array.
18) Look at part1b-question18.js
19) It prints out 1 4 3 2