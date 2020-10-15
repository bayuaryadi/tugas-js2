function ubahAngka(n){

    var angkaInput = document.getElementById("input")
    var angka = parseInt(angkaInput.value)
    angka += n
    angkaInput.value = angka
}

document.getElementById("kurang10").onclick = function() {
    ubahAngka(-10)
}
document.getElementById("kurang1").onclick = function() {
    ubahAngka(-1)
}
document.getElementById("tambah1").onclick = function() {
    ubahAngka(1)
}
document.getElementById("tambah10").onclick = function() {
    ubahAngka(10)
}




/*var nama = ['gde','bayu','aryadi']
console.log(nama)

var umur = [25]

var nama_umur = nama.concat(umur)
console.log(nama_umur.toString())

nama_umur.splice(3,0, '1995')
console.log(nama_umur.toString())

var perulangan =""
for( var i = 0; i <nama_umur.length; )



/*var kumpulan_buah = ['apel', 'nanas','semangka']

document.getElementById("array_buah").innerHTML = kumpulan_buah;

 console.log(kumpulan_buah)
 console.log("menambah array")
 kumpulan_buah.push("jeruk")
 var x = kumpulan_buah.push("melon")
 console.log(kumpulan_buah)
 console.log(x)

 console.log("mrnghapus array")
 kumpulan_buah.pop()
 console.log(kumpulan_buah)
 var y = kumpulan_buah.pop()
 console.log(y)
 console.log(kumpulan_buah.length)

 harga_buah = [300,200,100]

 gabungan_buah_harga = kumpulan_buah.concat(harga_buah)

 console.log(gabungan_buah_harga)*/





