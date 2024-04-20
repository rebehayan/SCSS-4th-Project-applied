function phone() {
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

  btnAlert.addEventListener("click", () => {
    dialogAlert.showModal();
    // setTimeout(() => {
    //   dialogAlert.close();
    // }, 3000);
  });
};

openAlert();
phone();
