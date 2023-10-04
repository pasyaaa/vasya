const biodata = {
    name: "Vasya",
    age: 18,
    hobbies: ["Menggambar"],
    isMarried: false,
    schoolList: [
      {
        name: "TK R.A Bakti Suci",
        yearIn: 2010,
        yearOut: 2012,
        major: "null",
      },
      {
        name: "SDN 021 Ciporeat",
        yearIn: 2012,
        yearOut: 2018,
        major: "null",
      },
      {
        name: "SMPN 56 Bandung",
        yearIn: 2018,
        yearOut: 2021,
        major: null,
      },
      {
        name: "SMKN 13 Bandung",
        yearIn: 2021,
        yearOut: 2024,
        major: "software engineering",
      },
    ],
    skills: [
      {
        skillName: "JavaScript",
        level: "advanced",
      },
      {
        skillName: "HTML & CSS",
        level: "beginner",
      },
    ],
    interestInCoding: true,
  };
  
  console.log(biodata);

  const mtk = 80;
  const bahasaIndonesia = 90;
  const bahasaInggris = 89;
  const ipa = 69;

// Validasi: Pastikan semua nilai terisi
if (!mtk || !bahasaIndonesia || !bahasaInggris || !ipa) {
  console.log("Semua nilai harus diisi");
} else {
  // Menghitung rata-rata
  const totalNilai = mtk + bahasaIndonesia + bahasaInggris + ipa;
  const rataRata = totalNilai / 4;

  // Menentukan grade berdasarkan rata-rata
  let grade;
  if (rataRata >= 90 && rataRata <= 100) {
    grade = "A";
  } else if (rataRata >= 80 && rataRata < 90) {
    grade = "B";
  } else if (rataRata >= 70 && rataRata < 80) {
    grade = "C";
  } else if (rataRata >= 60 && rataRata < 70) {
    grade = "D";
  } else {
    grade = "E";
  }

  console.log(`Rata-rata = ${rataRata}`);
  console.log(`Grade = ${grade}`);
}

const printSegitiga = 5;

if (typeof printSegitiga === 'number') {
  for (let i = printSegitiga; i >= 1; i--) {
    let output = '';
    for (let j = 1; j <= i; j++) {
      output += j + ' ';
    }
    console.log(output);
  }
} else {
  console.log('Data harus number');
}

let data = {
    id: 1,
    name: "Vasya",
    username: "pacaa",
    email: "vasyathabarani45@gmail.com",
    address: {
      street: "jl. cilengkrang",
      suite: "no. 67",
      city: "bandung",
      zipcode: "92998-3874",
    },
    phone: "089652127450",
    website: "-",
  };
  
  // (a) Mengubah data menggunakan spread operator
  const newData = {
    ...data,
    name: "vasya",
    email: "vasyathabarani45@gmail.com",
    hobby: "menggambar",
  };
  
  console.log(newData);
  
  // (b) Mengambil data "street" dan "city" menggunakan destructuring
  const {
    address: { street, city },
  } = data;
  
  console.log(`Street: ${street}`);
  console.log(`City: ${city}`);
  