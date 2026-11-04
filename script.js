function bookNow(nama,harga){
let pesan=`Halo Marilea mau booking ${nama} ${harga}`;
window.open(`https://wa.me/6281234567890?text=${pesan}`,'_blank')
}
document.querySelectorAll('button').forEach(b=>{
b.addEventListener('click',()=>{bookNow('Nail Art','cek harga')})
})