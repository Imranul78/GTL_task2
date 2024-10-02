function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
  
  
}

  
  function playVideo() {
    document.getElementById("video").style.display = "block";
    document.getElementById("video").play();
    document.getElementById("overlay").style.display = "none";
}