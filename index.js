function openNav() {
  document.getElementById("mySidenav").style.width = "100vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navTop").style.padding = "12px 15px";
  } else {
    document.getElementById("navTop").style.padding = "10px 0px 0px 0px";
  }

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navTop").style.backgroundColor = "#1a1a1a";
  } else {
    document.getElementById("navTop").style.backgroundColor = "inherit";
  }
}
