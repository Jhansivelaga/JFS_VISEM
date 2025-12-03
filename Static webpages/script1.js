function showInventor() {
    const inventor = document.getElementById("inventorList").value;

    const data = {
        gosling: {
            img: "https://upload.wikimedia.org/wikipedia/commons/1/14/James_Gosling_2008.jpg",
            info: "James Gosling is the creator of Java, developed at Sun Microsystems in 1995."
        },
        rossum: {
            img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Guido_van_Rossum_OSCON_2006.jpg",
            info: "Guido van Rossum created Python in 1991 and is known as the 'Benevolent Dictator For Life' of Python."
        },
        ritchie: {
            img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Dennis_Ritchie_2011.jpg",
            info: "Dennis Ritchie created the C programming language at Bell Labs in 1972."
        },
        stroustrup: {
            img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Bjarne-stroustrup_%28cropped%29.jpg",
            info: "Bjarne Stroustrup developed C++ as an extension of C beginning in 1979."
        },
        eich: {
            img: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg",
            info: "Brendan Eich created JavaScript in 1995 while working at Netscape."
        },
        lerdorf: {
            img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Rasmus_Lerdorf_-_PHP_07-2012.jpg",
            info: "Rasmus Lerdorf created PHP in 1994 originally as CGI scripts."
        },
        matsumoto: {
            img: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Yukihiro_Matsumoto.jpg",
            info: "Yukihiro 'Matz' Matsumoto created Ruby in 1995 focusing on simplicity and productivity."
        },
        hejlsberg: {
            img: "https://upload.wikimedia.org/wikipedia/commons/0/02/Anders_Hejlsberg.jpg",
            info: "Anders Hejlsberg developed C# for Microsoft in 2000."
        },
        hopper: {
            img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper.jpg",
            info: "Grace Hopper created COBOL and pioneered compiler technology."
        },
        mccarthy: {
            img: "https://upload.wikimedia.org/wikipedia/commons/7/70/John_McCarthy_Stanford.jpg",
            info: "John McCarthy created Lisp in 1958 and is considered one of the founders of AI."
        }
    };

    const imgElement = document.getElementById("inventorImage");
    const infoBox = document.getElementById("infoBox");

    if (!inventor) {
        imgElement.src = "";
        infoBox.innerText = "Select an inventor to view details";
    } else {
        // Fade-in animation
        imgElement.style.opacity = 0;
        infoBox.style.opacity = 0;

        setTimeout(() => {
            imgElement.src = data[inventor].img;
            infoBox.innerText = data[inventor].info;
            imgElement.style.transition = "opacity 0.5s";
            infoBox.style.transition = "opacity 0.5s";
            imgElement.style.opacity = 1;
            infoBox.style.opacity = 1;
        }, 100);
    }
}
