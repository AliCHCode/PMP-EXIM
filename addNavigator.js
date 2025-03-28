console.log("addNavigator.js updated");

document.addEventListener("DOMContentLoaded", () =>{


    document.getElementById("upNavigator").innerHTML = "";
    document.getElementById("upNavigator").innerHTML = `<div class="languageSelectionBox">
                <a href="#" class="languageBoxes LBOX1" onclick="diliDegistir('tr')">TR</a>
                <a href="#" class="languageBoxes LBOX2" onclick="diliDegistir('ru')">RU</a>
                <a href="#" class="languageBoxes LBOX3" onclick="diliDegistir('en')">EN</a>
            </div>
            

            <div class="navbarContainer">
                <a href="./index.html">
                    <img src="./assests/SiteLogo.png" alt="Site Logo" title="PmPexim" class="siteLogo">
                </a>
                <nav id="menu" class="menu">
                    <a href="./index.html" class="menuBoxes"><span>Anasayfa</span></a>
                    <a href="./hakkimizda.html" class="menuBoxes"><span>Hakkımızda</span></a>
                    <div class="menuBoxes">
                        <div class="userSelectNone"><span>Ürünler</span></div>
                        <div class="navbarİnnerMenuContainer">
                            <a href="./PresDiskleri.html" class="innerMenuBoxes">PELET PRES DİSKLERİ</a>
                            <a href="./TahılKurutma.html" class="innerMenuBoxes">TAHIL KURUTMA MAKİNELERİ</a>
                            <a href="./TahılDepolama.html" class="innerMenuBoxes">TAHIL DEPOLAMA VE TAŞIMA SİSTEMLERİ</a>
                            <a href="./YemMakineleri.html" class="innerMenuBoxes">YEM ÜRETİM MAKİNELERİ</a>
                            <a href="./DeğirmenMakineleri.html" class="innerMenuBoxes">DEĞİRMEN MAKİNE VE EKİPMANLARI</a>
                        </div>
                    </div>
                    <a href="./nedenPMP-EXIM.html" class="menuBoxes"><span>Neden PMP-EXIM</span></a>
                    <a href="./iletisim.html" class="menuBoxes"><span>İletişim</span></a>
                    <a href="./S.S.S.html" class="menuBoxes"><span>S.S.S.</span></a>
                </nav>
            </div>`;

    document.getElementById("downNavigator").innerHTML = "";
    document.getElementById("downNavigator").innerHTML = ` <div class="socialMediaContainer">
                <a href="#" class="socialMediaIcons"><img src="./assests/Frame 19.png" alt="Linkedin sayfamıza gider"></a>
                <a href="#" class="socialMediaIcons"><img src="./assests/Frame 17.png" alt="Youtube sayfamıza gider"></a>
                <a href="#" class="socialMediaIcons"><img src="./assests/Frame 18.png" alt="Pinterest sayfamıza gider"></a>
            </div>
            <div class="locationContainer">Güven Mahallesi 1. Cadde NO : 2/1  Kaynarca / SAKARYA(DOMİOSB) <br>info@pmpexim.com <br>+90 554 700 85 88</div>`;

});