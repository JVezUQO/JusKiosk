//By Jean Vézina
//V2.0

var time_full = new Date()
var current_hour = time_full.getHours()

const body_text = document.querySelector("#textbody");
var number = 0 // Number in array for text
var opa = 1 // Opacity from 0 to 1
var time = 3000 //Time in ms

var text_array_l1 = []
var text_array_l2 = []
var text_array_l3 = []
var text_array_l4 = []
var text_array_l5 = []
var text_array_l6 = []
var text_array_l7 = [] //Placeholder
var text_array_l8 = [] //Placeholder

//Line1
text_array_l1[0] = "Besoin d'assistance IT ?"
text_array_l1[1] = "Vous organisez un événement ?"
text_array_l1[2] = "Laptop en fin de vie ?"
text_array_l1[3] = "Heures ouverture kiosk"
text_array_l1[4] = "TEST4"
text_array_l1[5] = "TEST5"

//Line2
text_array_l2[0] = "Need IT assistance ?"
text_array_l2[1] = "Contactez le centre de service"
text_array_l2[2] = "Nous allons vous contacter pour"
text_array_l2[3] = "Kiosk's opening hours"
text_array_l2[4] = "TEST4"
text_array_l2[5] = "TEST5"

//Line3
text_array_l3[0] = ""
text_array_l3[1] = "et remplissez le document pour celui-ci!"
text_array_l3[2] = "coordoner le tout avec un tech!"
text_array_l3[3] = ""
text_array_l3[4] = "TEST4"
text_array_l3[5] = "TEST5"

//Line4
text_array_l4[0] = "Tel : 1-855-222-6688"
text_array_l4[1] = "Organising an event ?"
text_array_l4[2] = "Laptop is reaching end of life ?"
text_array_l4[3] = "8:00 - 12:00 & 13:00 - 16:00"
text_array_l4[4] = "TEST4"
text_array_l4[5] = "TEST5"

//Line5
text_array_l5[0] = "Email : servicedesk-centredeservices@justice.gc.ca"
text_array_l5[1] = "Please contact service desk and"
text_array_l5[2] = "We will contact you to"
text_array_l5[3] = "Monday/Lundi - Friday/Vendredi"
text_array_l5[4] = "TEST4"
text_array_l5[5] = "TEST5"

//Line6
text_array_l6[0] = ""
text_array_l6[1] = "submit a form detailling your needs!"
text_array_l6[2] = "coordinate with a tech !"
text_array_l6[3] = ""
text_array_l6[4] = "TEST4"
text_array_l6[5] = "TEST5"



async function change_text() {

    console.log(current_hour)
    textbody_1.textContent = text_array_l1[number];
    textbody_2.textContent = text_array_l2[number];
    textbody_3.textContent = text_array_l3[number];
    textbody_4.textContent = text_array_l4[number];
    textbody_5.textContent = text_array_l5[number];
    textbody_6.textContent = text_array_l6[number];



    if (opa <= 0) {

        fade_in();
        await sleep(15000)
        console.log("in")
    }

    if (opa >= 1) {

        fade_out();
        await sleep(3000)
        console.log("out")
    }

    
    console.log("Switch")

    if (number == 3) { number = 0 }
    else { number = number + 1 }
    change_text()
}


 async function fade_out() {
     while (opa > -0.05) {
         document.getElementById("textbody_1").style.opacity = opa
         document.getElementById("textbody_2").style.opacity = opa
         document.getElementById("textbody_3").style.opacity = opa
         document.getElementById("textbody_4").style.opacity = opa
         document.getElementById("textbody_5").style.opacity = opa
         document.getElementById("textbody_6").style.opacity = opa
         opa = opa - 0.05
         await sleep(50)
     }
     
}

async function fade_in() {
    
    while (opa < 1.05) {
        document.getElementById("textbody_1").style.opacity = opa
        document.getElementById("textbody_2").style.opacity = opa
        document.getElementById("textbody_3").style.opacity = opa
        document.getElementById("textbody_4").style.opacity = opa
        document.getElementById("textbody_5").style.opacity = opa
        document.getElementById("textbody_6").style.opacity = opa
        opa = opa + 0.05
        await sleep(50)
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

change_text()






