const navs = document.querySelectorAll(".nav");

navs.forEach((nav) => {
  nav.addEventListener("click", () => {
    navs.forEach((n) => n.classList.remove("active"));

    nav.classList.add("active");
  });
});

// Kiểm tra nếu đang dùng mobile
function openEmail() {
  const mailtoLink =
    "mailto:contact@nihongoconnect.org?subject=Xin%20chào&body=Xin%20chào,%20tôi%20quan%20tâm%20đến%20dịch%20vụ...";
  const gmailWebLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=contact@nihongoconnect.org&su=Xin%20chào&body=Xin%20chào,%20tôi%20quan%20tâm%20đến%20dịch%20vụ...";

  if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    // Nếu là điện thoại → dùng mailto (mở app Gmail)
    window.location.href = mailtoLink;
  } else {
    // Nếu là PC → mở Gmail web
    window.open(gmailWebLink, "_blank");
  }
}


