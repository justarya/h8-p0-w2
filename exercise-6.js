// 1. Melakukan Looping Menggunakan While
console.log('=== 1. Melakukan Looping Menggunakan While ===');
console.log('LOOPING PERTAMA');
var counter = 0;
while(counter < 20){
  counter+=2;
  console.log(counter+' - I love coding');
}
console.log('LOOPING KEDUA');
while(counter > 0){
  console.log(counter+' - I will become fullstack developer');
  counter-=2;
}


// 2. Melakukan Looping Menggunakan For
console.log('=== 2. Melakukan Looping Menggunakan For ===');
console.log('LOOPING PERTAMA');
for(var i=1;i<=20;i++){
  console.log(i+' - I love coding');
}
console.log('LOOPING KEDUA');
for(var i=20;i>=1;i--){
  console.log(i+' - I will become fullstack developer');
}

// 3. Angka Ganjil dan Genap
console.log('=== 3. Angka Ganjil dan Genap ===');
for(var i=1;i<=100;i++){
  if(i%2 == 1){
    console.log('GANJIL');
  }else{
    console.log('GENAP');
  }
}

for(var i=1;i<=100;i+=2){
  if(i%3 == 0){
    console.log(i+' kelipatan 3');
  }
}
for(var i=1;i<=100;i+=5){
  if(i%6 == 0){
    console.log(i+' kelipatan 6');
  }
}
for(var i=1;i<=100;i+=9){
  if(i%10 == 0){
    console.log(i+' kelipatan 10');
  }
}