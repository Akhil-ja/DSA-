function reverse(str){
   if (str.length <= 1)
    return str;


   return reverse(str.slice(1)) + str[0];
}


// Akhil
//     reverse(khil)+A
//         reverse(hil)+k.........