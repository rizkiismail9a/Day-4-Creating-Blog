let datas = [];
function getData(event) {
  event.preventDefault();

  let nama = document.getElementById("name").value;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;
  let description = document.getElementById("description").value;

  let image = document.getElementById("upload").files;

  image = URL.createObjectURL(image[0]);
  let data = {
    nama,
    startDate,
    endDate,
    description,
    equipment1,
    equipment2,
    equipment3,
    equipment4,
    image,
  };
  datas.push(data);
  showData();
}

function showData() {
  for (let i; i < datas.length; i++) {
    const putContent = (document.getElementById("containerCard").innerHTML += `<div class="card">
    <!-- Akan diambil dari upload-an-->
    <div class="gambar">
      <img src="${datas[i].image}" />
    </div>
    <!-- Akan diambil dari name-->
    <div class="judulCard">
      <h3><a href="blogPage.html" style="color: black">${datas[i].name}</a></h3>
    </div>
    <!-- Asal saja di sini -->
    <div class="preview"><p>${datas[i].description}</p></div>
    <!-- Akan muncul saat alat diceklis -->
    <div class="icon"> ${cekList()}
    </div>
    <div class="buttonCard">
      <button>edit</button>
      <button>delete</button>
    </div>
  </div>`);
  }
}

function cekList() {
  let equipment1 = document.getElementById("alat1");
  let equipment2 = document.getElementById("alat2");
  let equipment3 = document.getElementById("alat3");
  let equipment4 = document.getElementById("alat4");

  let icon = (document.getElementById("icon").innerHTML = " ");
  if (equipment1.checked == true) {
    icon += <i class="fa-solid fa-image"></i>;
  }
  if (equipment2.checked == true) {
    icon += <i class="fa-solid fa-paintbrush"></i>;
  }
  if (equipment3.checked == true) {
    icon += <i class="fa-solid fa-tablet"></i>;
  }
  if (equipment4.checked == true) {
    icon += <i class="fa-brands fa-pinterest-p"></i>;
  }
}
