let datas = [
  {
    image: "aset/images/Quality time1.png",
    nama: "Ya Allah, Berilah Kemudahan",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi repudiandae explicabo recusandae aperiam sit voluptas?",
    equipment1: true,
    equipment2: true,
    equipment3: true,
    date: "25 hari",
  },
  {
    image: "aset/images/Quality time1.png",
    nama: "Ya Allah, Berilah Kemudahan",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi repudiandae explicabo recusandae aperiam sit voluptas?",
    equipment1: true,
    equipment2: true,
    date: "2 bulan",
  },
  {
    image: "aset/images/Quality time1.png",
    nama: "Ya Allah, Berilah Kemudahan",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi repudiandae explicabo recusandae aperiam sit voluptas?",
    equipment1: true,
    date: "1 Tahun",
  },
];

function getData(event) {
  event.preventDefault();

  const nama = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const equipment1 = document.getElementById("alat1").checked;
  const equipment2 = document.getElementById("alat2").checked;
  const equipment3 = document.getElementById("alat3").checked;
  const equipment4 = document.getElementById("alat4").checked;
  let image = document.getElementById("upload").files;
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);
  const date = calculateDuration(startDate, endDate);

  image = URL.createObjectURL(image[0]);
  const data = {
    nama,
    date,
    description,
    equipment1,
    equipment2,
    equipment3,
    equipment4,
    image,
  };

  console.log(date);
  datas.push(data);
  showData();
}

const showData = () => {
  document.getElementById("containerCard").innerHTML = "";

  for (let i = 0; i < datas.length; i++) {
    document.getElementById("containerCard").innerHTML += `<div class="card">
    <div class="gambar">
      <img src="${datas[i].image}" />
    </div>

    <div class="judulCard">
      <h3><a href="blogPage.html" style="color: black">${datas[i].nama}</a></h3>
    </div>

    <div class="duration">Duration: ${datas[i].date}</div>

    <div class="preview"><p>${datas[i].description}</p></div>

    <div class="icon">
    ${cekList(datas[i])}
    </div>
    <div class="buttonCard">
      <button>edit</button>
      <button>delete</button>
    </div>
  </div>`;
  }
};

function cekList(datas) {
  let icon = (document.getElementsByClassName("icon").innerHTML = " ");

  if (datas.equipment1 == true) {
    icon += `<i class="fa-solid fa-image"></i>`;
  }
  if (datas.equipment2 == true) {
    icon += `<i class="fa-solid fa-paintbrush"></i>`;
  }
  if (datas.equipment3 == true) {
    icon += `<i class="fa-solid fa-tablet"></i>`;
  }
  if (datas.equipment4 == true) {
    icon += `<i class="fa-brands fa-pinterest-p"></i>`;
  }

  return icon;
}

const calculateDuration = (startDate, endDate) => {
  if (endDate < startDate) {
    alert("End Date Should");
    return;
  }

  const durationDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
  let duration;
  if (durationDays > 365) {
    const durationYears = Math.floor(durationDays / 365);
    duration = `${durationYears} Years`;
  } else if (durationDays > 30) {
    const durationMonths = Math.floor(durationDays / 30);
    duration = `${durationMonths} Months`;
  } else {
    duration = `${durationDays} Days`;
  }

  return duration;
};

showData();
