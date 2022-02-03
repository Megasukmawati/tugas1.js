// 4//

let nama = ["dika", "zakwan", "raja", "bilal","risa"];
let cari = "risa";


function cariNama(nama, cari) {
    for (var i = 0; i < nama.length; i++) {
       if (cari == nama [i]) {
        console.log(` ${nama[i]} kelas: XI RPL 1`);
       }
    }   
}
cariNama(nama, cari)