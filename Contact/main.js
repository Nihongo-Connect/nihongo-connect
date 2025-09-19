const navs = document.querySelectorAll(".nav");

navs.forEach((nav) => {
  nav.addEventListener("click", () => {
    navs.forEach((n) => n.classList.remove("active"));

    nav.classList.add("active");
  });
});

// Kiểm tra nếu đang dùng mobile
function setEmailLinks() {
  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=contact@nihongoconnect.org&su=Xin%20chào&body=Xin%20chào,%20tôi%20quan%20tâm%20đến%20dịch%20vụ...";
  const mailtoLink =
    "mailto:contact@nihongoconnect.org?subject=Xin%20chào&body=Xin%20chào,%20tôi%20quan%20tâm%20đến%20dịch%20vụ...";

  // Kiểm tra nếu là mobile (Android/iOS)
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  document
    .getElementById("email-link")
    .setAttribute("href", isMobile ? gmailLink : mailtoLink);
  document
    .getElementById("apply-link")
    .setAttribute("href", isMobile ? gmailLink : mailtoLink);
}

// Gọi khi load trang
setEmailLinks();
