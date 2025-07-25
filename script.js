const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
let yesSize = 20;

noBtn.addEventListener("click", () => {
  // เพิ่มขนาดทีละ 20px
  yesSize += 20;

  // จำกัดไม่ให้ใหญ่เกิน 95% ของจอ
  if (yesSize > window.innerWidth * 0.9) {
    yesSize = window.innerWidth * 0.9;
  }

  // ปรับขนาดปุ่ม "ให้อภัย"
  yesBtn.style.fontSize = yesSize + "px";
  yesBtn.style.padding = (yesSize / 2.5) + "px " + (yesSize) + "px";
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align: center; padding: 40px;">
      <h1>เค้าขอโทษ เค้ารักแกนะ มาง้อน้าา 🥹💖</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQG7F2GHkFEBEmb60vmr2y-MJPOSsSwGnDWAtx4_nz4Qme73ijPRGdQPhB&s=10" alt="ขอโทษ" style="width: 300px; border-radius: 15px;">
    </div>
  `;
});