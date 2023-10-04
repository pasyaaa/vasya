const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
  ];
  
  function searchName(keyword, limit, callback) {
    const filteredNames = names.filter(name => name.toLowerCase().includes(keyword.toLowerCase())).slice(0, limit);
    callback(filteredNames);
  }
  
  function displayNames(result) {
    console.log(result);
  }
  
  searchName("la", 3, displayNames);
  
//TUGAS 2, NOMER 3

function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (dataArray.length <= 5) {
      return "Jumlah angka dalam dataArray harus lebih dari 5";
    }
    if (nilaiAwal >= nilaiAkhir) {
      return "Nilai akhir harus lebih besar dari nilai awal";
    }
  
    const hasilSeleksi = dataArray.filter((nilai) => nilai >= nilaiAwal && nilai <= nilaiAkhir);
  
    if (hasilSeleksi.length === 0) {
      return "Nilai tidak ditemukan";
    }
  
    hasilSeleksi.sort((a, b) => a - b);
  
    return hasilSeleksi;
  }
  console.log(SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
  console.log(SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
  console.log(SeleksiNilai(5, 17, [2, 25, 4]));
  console.log(SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));

