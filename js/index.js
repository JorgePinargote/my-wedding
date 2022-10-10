(function () {
    let guests = {
	    "normaquimi": {
	    	"nombre": "Sra. Norma Quimi",
	    	"admision": "1 persona"
	    },
	    "amadorodriguez": {
	    	"nombre": "Sr. Amado Rodriguez",
	    	"admision": "1 persona"
	    },
	    "henryquimi": {
	    	"nombre": "Dr. Henry Quimi y sra. Lidia Aguilera",
	    	"admision": "2 personas"
	    },
	    "lidiasalcedo": {
	    	"nombre": "Lidia Salcedo y Kevin Mora",
	    	"admision": "2 personas"
	    },
	    "monicaquimi": {
	    	"nombre": "Sra. Monica Quimi y Sr. Jonathan Arce",
	    	"admision": "2 personas"
	    },
	    "michaelquimi": {
	    	"nombre": "Sr. Michael Quimi y esposa",
	    	"admision": "3 personas"
	    },
	    "rolandoquimi": {
	    	"nombre": "Sr. Rolando Quimi y esposa",
	    	"admision": "2 personas"
	    },
	    "liztabara": {
	    	"nombre": "Sra. Elizabeth Tabara y esposo",
	    	"admision": "2 personas"
	    },
	    "roggerquimi": {
	    	"nombre": "Sr. Rogger Quimi y sra. Alisson Navarrete",
	    	"admision": "2 personas"
	    },
	    "keykoquimi": {
	    	"nombre": "Keyko Quimi",
	    	"admision": "1 persona"
	    },
	    "sandraquimi": {
	    	"nombre": "Sra. Sandra Quimi",
	    	"admision": "1 persona"
	    },
	    "luisfernandez": {
	    	"nombre": "Luis Fernandez y Andrés Fernandez",
	    	"admision": "2 personas"
	    },
	    "claudiaquimi": {
	    	"nombre": "Sra. Claudia Quimi",
	    	"admision": "1 persona"
	    },
	    "valeriatroya": {
	    	"nombre": "Valeria Troya",
	    	"admision": "1 persona"
	    },
	    "kennytroya": {
	    	"nombre": "Sr. Kenny Troya y sra. Gabriela Hernandez",
	    	"admision": "3 personas"
	    },
	    "sebastiangomez": {
	    	"nombre": "Sebastian Gomez y madre",
	    	"admision": "2 personas"
	    },
	    "neypinargote": {
	    	"nombre": "Sr. Ney Pinargote y esposa",
	    	"admision": "2 personas"
	    },
	    "andrespinargote": {
	    	"nombre": "Andres Pinargote",
	    	"admision": "1 persona"
	    },
	    "karlapardo": {
	    	"nombre": "Sra. Karla Pardo, esposo e hijos",
	    	"admision": "5 personas"
	    },
	    "ricardocevallos": {
	    	"nombre": "Ricardo Cevallos",
	    	"admision": "1 persona"
	    },
	    "jesusmora": {
	    	"nombre": "Jesus Mora",
	    	"admision": "1 persona"
	    },
	    "xavierfigueroa": {
	    	"nombre": "Sr. Xavier Figueroa y esposa",
	    	"admision": "2 personas"
	    },
	    "jorgefigueroa": {
	    	"nombre": "Sr. Jorge Figueroa y esposa",
	    	"admision": "2 personas"
	    },
	    "cristianfigueroa": {
	    	"nombre": "Sr. Cristian Figueroa y esposa",
	    	"admision": "2 personas"
	    },
	    "vanessafigueroa": {
	    	"nombre": "Sra. Vanessa Figueroa",
	    	"admision": "1 persona"
	    },
	    "glendafigueroa": {
	    	"nombre": "Sra. Glenda Figueroa e hijas",
	    	"admision": "4 personas"
	    },
	    "alfonsomora": {
	    	"nombre": "Sr. Alfonso Mora y esposa",
	    	"admision": "2 personas"
	    },
	    "angelmora": {
	    	"nombre": "Sr. Angel Mora y esposa",
	    	"admision": "2 personas"
	    },
	    "lesbiaholguin": {
	    	"nombre": "Sra. Lesbia Holguin",
	    	"admision": "1 persona"
	    },
	    "neckerespinosa": {
	    	"nombre": "Sr. Necker Espinosa",
	    	"admision": "1 persona"
	    },
	    "alexmendoza": {
	    	"nombre": "Sr. Alex Mendoza y novia",
	    	"admision": "2 personas"
	    },
	    "jorgeencalada": {
	    	"nombre": "Sr. Jorge Encalada y novia",
	    	"admision": "2 personas"
	    },
	    "andreacarrascal": {
	    	"nombre": "Andrea Carrascal",
	    	"admision": "1 persona"
	    },
	    "yamicano": {
	    	"nombre": "Yamilett Cano",
	    	"admision": "1 persona"
	    },
	    "steffanyvallejo": {
	    	"nombre": "Steffany Vallejo",
	    	"admision": "2 personas"
	    }
    }

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const guestKey = urlParams.get('guest');
    const guest = guests[guestKey];
    if(guest){  
       let name = document.getElementById("person_name"); 
       name.innerHTML = `Hola, ${guest.nombre || ""}.`;

       let message = document.getElementById("message_to");
       message.innerHTML = 'Sophia y Jorge solicitan con alegría el placer de su compañía mientras pronuncian sus votos y se unen en matrimonio en presencia de familiares y amigos.';

       let admision = document.getElementById("person_admision");
       admision.innerHTML = `Admisión, ${guest.admision || ""}.`;

       let dcode = document.getElementById("dress_code");
       dcode.innerHTML = 'El código de vestimenta, es como usted se sienta comodo, eso si, venga listo para comer todo lo que pueda.';
    }else{
        let emessage = document.getElementById("else_message");
        emessage.innerHTML = `No olvides nunca que la fuerza más poderosa en la tierra es el amor.`;
        let hopeTextNode = document.getElementById("hopetext");
        hopeTextNode.classList.add("marginbottom55");
        for (const key in guests) {
            InsertGuest(hopeTextNode, key, guests[key].nombre)
        }
    }
   
    function insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    function InsertGuest(node, key, name){
        if(!key || !name) return;
        let div = document.createElement('div');
        div.classList.add("col-md-3", "col-xs-1", "guestopt1");
        const link = `./index.html?guest=${ key || "none"}`;
        let element = document.createElement("a");
        element.setAttribute("href", link);
        element.innerHTML = name;
        div.appendChild(element);
        insertAfter(div, node);
    }
})();