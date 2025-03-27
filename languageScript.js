console.log("script.js updated");
// Son kullanılan dili localStorage'dan al, yoksa varsayılan 'tr' olsun
let mevcutDil = localStorage.getItem("seciliDil") || "tr";

// Sayfa yüklendiğinde içerikleri güncelle
document.addEventListener("DOMContentLoaded", () => {
    icerigiGuncelle(mevcutDil);
});

// Dil değiştirme fonksiyonu
function diliDegistir(dil) {
    mevcutDil = dil;
    localStorage.setItem("seciliDil", dil);
    icerigiGuncelle(dil);
}

// İçeriği güncelleme fonksiyonu
function icerigiGuncelle(dil) {
    if(window.location.pathname === "/index.html"){
        document.querySelector(".sloganBox").textContent = diller[dil].homePage.slogan;
        document.getElementById("CBOX1").innerHTML = diller[dil].homePage.CBOX1;
        document.getElementById("CBOX2").innerHTML = diller[dil].homePage.CBOX2;
        document.getElementById("CBOX3").innerHTML = diller[dil].homePage.CBOX3;
        document.getElementById("CBOX4").innerHTML = diller[dil].homePage.CBOX4;
        document.getElementById("CBOX5").innerHTML = diller[dil].homePage.CBOX5;
    }
    else if(window.location.pathname === "/S.S.S.html"){
        document.querySelector(".pageTitleContainer").innerHTML = diller[dil].sssPage[0].pageTitleContainer;
        document.querySelectorAll(".listİtemTitle").forEach((item, index) => {
            item.innerHTML = diller[dil].sssPage[1].olList[index].listItemTitle;
        });
        document.querySelectorAll(".listİtemContent").forEach((item, index) => {
            item.innerHTML = diller[dil].sssPage[1].olList[index].listItemContent;
        });
        document.querySelector(".downConTextOne").innerHTML = diller[dil].sssPage[2].downTextContainer[0].downConTextOne;
        document.querySelector(".downConTextTwo").innerHTML = diller[dil].sssPage[2].downTextContainer[1].downConTextTwo;
        document.querySelector(".callButton").innerHTML = diller[dil].sssPage[2].downTextContainer[2].callButton;
    }
   

    // Header menüsünü güncelle
    const menu = document.getElementById("menu");
    menu.innerHTML = ""; // Önceki elemanları temizle
    diller[dil].header.forEach(item => {
        let a = document.createElement("a");
        a.href = item.link;
        a.classList.add("menuBoxes");
        a.textContent = item.metin;
        menu.appendChild(a);
    });
}
