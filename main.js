(function () {

  var menu = document.querySelector('.menu__bar'),
    mMenu = document.querySelector('.menu__mobile'),
    dropDown = document.querySelector('.is-dropdown'),
    mDropDown = document.querySelector('.menu__dropdown'),
    dropDownM = document.querySelector('.is-dropdown-m'),
    mDropDownM = document.querySelector('.menu__dropdown-m');
  mMenu.addEventListener('click', function () {
    menu.classList.toggle('show')
  })
  dropDown.addEventListener('click', function () {
    mDropDown.classList.toggle('show');
    dropDown.classList.toggle('open');
  })
  dropDownM.addEventListener('click', function () {
    mDropDownM.classList.toggle('show');
    dropDownM.classList.toggle('open')
    dropDown.classList.toggle('open')
    mDropDown.classList.toggle('show');
  })

})();