/* =========================================================
   PORTOFOLIO DIGITAL KELAS XII
   File: script.js
   ========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("show");

    });


    const navLinks = navMenu.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("show");

        });

    });

}


/* =========================================================
   2. CURRENT YEAR
   ========================================================= */

const currentYear = document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* =========================================================
   3. CONTACT FORM
   ========================================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const kategori = document.getElementById("kategori").value;
        const pesan = document.getElementById("pesan").value.trim();


        if (
            nama === "" ||
            email === "" ||
            kategori === "" ||
            pesan === ""
        ) {

            if (formMessage) {

                formMessage.textContent =
                    "Harap isi semua kolom formulir.";

            }

            return;

        }


        if (formMessage) {

            formMessage.textContent =
                "Pesan berhasil dipersiapkan. Terima kasih atas pesannya!";

        }


        contactForm.reset();

    });

}