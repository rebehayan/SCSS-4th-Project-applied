function phoen() {
    const phoneBtn = document.querySelector(".phone > button");
    const phoneList = document.querySelector(".phone__list");
    // const phoneBtn = $(".phone > button"); jQuery
    // const phoneList = $(".phone__list"); jQuery
    
    const handleTelList = () => {
      phoneList.classList.toggle("--active");
      //   phoneList.toggleClass("--active"); jQuery
    };
    phoneBtn.addEventListener("click", handleTelList);
    // phoneBtn.on("click", handleTelList); jQUery
}

const openAlert = () => {
    // dialog Tag Open : show()
    // dialog Tag Open with Dimmed : showModal()
    // dialog Tag Close : close()
    const dialogAlert = document.querySelector(".dialog.alert");
    const btnAlert = document.querySelector(".open-alert");
    const closeAlert = document.querySelector(".close-alert");
  
    btnAlert.addEventListener("click", () => {
      dialogAlert.showModal()
      // setTimeout(() => {
      //   dialogAlert.close();
      // }, 3000);
    });

    closeAlert.addEventListener("click", () => {
      dialogAlert.close();
    });
  };

// 탭기능정의
const TabNav = () => {
  const naviItem = document.querySelectorAll(".tab-type1 li"); // li선택

  naviItem.forEach((el) => {
    el.addEventListener("click", () => {
      // 모든 탭에서 "--active" 클래스를 지워줌
      naviItem.forEach((item) => {
        item.classList.remove("--active");
      });

      // 클릭한 탭에 "--active" 클래스 추가
      el.classList.add("--active");
    });
  });
};

// 함수실행
  TabNav();
  openAlert();
  phone();