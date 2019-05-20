var nama = 'Mikael';
var peran = '';

if(nama === '' && peran === ''){
  console.log("Nama harus diisi!");
}else if(nama === 'Mikael' && peran === ''){
  console.log("Halo Mikael, Pilih peranmu unutk memulai game!");
}else if(nama === 'Nina' && peran === ''){
  console.log("Selamat datang di Dunia Proxytia, Nina");
  console.log("Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!");
}else if(nama === 'Danu' && peran === 'Tabib'){
  console.log("Selamat datang di Dunia Proxytia, Danu");
  console.log("Halo Tabib Danu, kamu akan membantu temanmu yang terluka.");
}else if(nama === 'Zero' && peran === 'Penyihir'){
  console.log("Selamat datang di Dunia Proxytia, Zero");
  console.log("Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!");
}