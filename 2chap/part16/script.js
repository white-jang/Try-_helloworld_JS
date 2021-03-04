let req = new XMLHttpRequest();
req.open("GET", "./json/image_list.json");
req.onreadystatechange = function () {
  if (this.readyState == 4) {
    // 제이슨 데이터 불러와서 파싱
    let data = JSON.parse(this.response);
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement("div");
      div.setAttribute("class", "image");
      // img를 감싸는 div 정의
      div.onclick = function () {
        this.classList.toggle("image-selected");
      }
      // 이미지 선택시 css효과 적용
      div.onmouseover = function () {
        let element = this;
        this.timerId = setTimeout(function () {
          element.classList.add("image-magnified");
        }, 1000);
      }
      // 이미지에 마우스 호버시 css 효과 적용
      div.onmouseout = function () {
        clearTimeout(this.timerId);
        this.classList.remove("image-maginified");
      }
      // 이미지에 마우스 아웃될 시 css 효과 삭제
      let img = document.createElement("img");
      img.src = data[i];
      div.appendChild(img);
      document.body.appendChild(div);
    }
  }
}

// 이미지 전체 선택 / 전체 선택 취소 버튼 작업
function selectAll(btn) {
  let images = document.getElementsByClassName("image");
  for (var i = 0; i < images.length; i++) {
    if (btn.value === "Unselect All") {
      images[i].classList.remove("image-selected");
    } else {
      images[i].classList.add("image-selected");
    }
  }
  if (btn.value == "Unselect All")
    btn.value = "Select All";
  else
    btn.value = "Unselect All";
}

function slideshow(btn) {
  let images = document.getElementsByClassName("image");
  let index = 0;
  images[index].classList.add("image-magnified");

  let intervalId = setInterval(function () {
    images[index].classList.remove("image-magnified");
    index++;
    if (index < images.length) {
      images[index].classList.add("image-magnified");
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}
req.send();