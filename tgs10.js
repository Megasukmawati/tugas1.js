// 10//

const NamaArray =[
   { Nama :`Mega`, Kelas : `XIRPL1`},
   { Nama :`Dinar`, Kelas : `XIRPL1`},
   { Nama :`Wita`, Kelas : `XIRPL1`},
   { Nama :`Alifa`, Kelas : `XIRPL2`},
   { Nama :`Dewi`, Kelas : `XIRPL3`},
   { Nama :`Ega`, Kelas : `XIRPL1`},
   { Nama :`Wati`, Kelas : `XIRPL1`},
   { Nama :`Tina`, Kelas : `XIRPL1`},
   { Nama :`Tira`, Kelas : `XIRPL2`},
   { Nama :`Widi`, Kelas : `XIRPL3`},
]

const filter = NamaArray.filter(itemmap => {
   const wrapping = {};
   wrapping [itemmap.Nama] = itemmap.Kelas;
   return wrapping
})
console.log(filter);