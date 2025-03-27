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
                     <!-- languageScript.js ten menü geliyor -->
                </nav>
            </div>`;

    document.getElementById("downNavigator").innerHTML = "";
    document.getElementById("downNavigator").innerHTML = ` <div class="socialMediaContainer">
                <a href="#" class="socialMediaIcons"><img src="./assests/Frame 19.png" alt="Linkedin sayfamıza gider"></a>
                <a href="#" class="socialMediaIcons"><img src="./assests/Frame 17.png" alt="Youtube sayfamıza gider"></a>
                <a href="#" class="socialMediaIcons"><img src="./assests/Frame 18.png" alt="Pinterest sayfamıza gider"></a>
            </div>
            <div class="locationContainer">Güven Mahallesi 1. Cadde NO : 2/1  Kaynarca / SAKARYA <br>info@pmpexim.com <br>+90 554 700 85 88</div>`;

});