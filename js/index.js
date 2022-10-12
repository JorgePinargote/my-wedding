(function () {
    let guests = {
		"normaquimi": {
			"nombre": "Sra. Norma Quimí",
			"admision": "1 persona"
		},
		"amadorodriguez": {
			"nombre": "Sr. Amado Rodríguez",
			"admision": "1 persona"
		},
		"henryquimi": {
			"nombre": "Dr. Henry Quimí y Sra. Lidia Aguilera",
			"admision": "2 personas"
		},
		"lidiasalcedo": {
			"nombre": "Srta. Lidia Salcedo y Sr. Kevin Mora",
			"admision": "2 personas"
		},
		"monicaquimi": {
			"nombre": "Sra. Monica Quimí y Sr. Jonathan Arce",
			"admision": "2 personas"
		},
		"michaelquimi": {
			"nombre": "Sr. Michael Quimí y esposa",
			"admision": "3 personas"
		},
		"rolandoquimi": {
			"nombre": "Sr. Rolando Quimí y esposa",
			"admision": "2 personas"
		},
		"liztabara": {
			"nombre": "Sra. Elizabeth Tábara y esposo",
			"admision": "2 personas"
		},
		"roggerquimi": {
			"nombre": "Sr. Rogger Quimí y Sra. Allison Navarrete",
			"admision": "2 personas"
		},
		"keykoquimi": {
			"nombre": "Srta. Keyko Quimí",
			"admision": "1 persona"
		},
		"sandraquimi": {
			"nombre": "Sra. Sandra Quimí",
			"admision": "1 persona"
		},
		"luisfernandez": {
			"nombre": "Sr. Luis Fernández",
			"admision": "1 persona"
		},
		"andresfernandez": {
			"nombre": "Sr. Andrés Fernández",
			"admision": "1 persona"
		},
		"claudiaquimi": {
			"nombre": "Sra. Claudia Quimí",
			"admision": "1 persona"
		},
		"valeriatroya": {
			"nombre": "Srta. Valeria Troya",
			"admision": "1 persona"
		},
		"kennytroya": {
			"nombre": "Sr. Kenny Troya y sra. Gabriela Hernández",
			"admision": "3 personas"
		},
		"sebastiangomez": {
			"nombre": "Sr. Sebastian Gómez y Sra. Thaly Pardo",
			"admision": "2 personas"
		},
		"neypinargote": {
			"nombre": "Sr. Ney Pinargote y Sra. Alexandra Figueroa",
			"admision": "2 personas"
		},
		"andrespinargote": {
			"nombre": "Sr. Andrés Pinargote",
			"admision": "1 persona"
		},
		"karlapardo": {
			"nombre": "Sra. Karla Pardo, esposo e hijos",
			"admision": "5 personas"
		},
		"ricardocevallos": {
			"nombre": "Sr. Ricardo Cevallos",
			"admision": "1 persona"
		},
		"jesusmora": {
			"nombre": "Sr. Jesus Mora",
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
			"nombre": "Srta. Andrea Carrascal",
			"admision": "1 persona"
		},
		"yamicano": {
			"nombre": "Srta. Yamilett Cano",
			"admision": "1 persona"
		},
		"steffanyvallejo": {
			"nombre": "Srta. Steffany Vallejo",
			"admision": "2 personas"
		},
		"emmasantos": {
			"nombre": "Sra. Emma Santos",
			"admision": "1 persona"
		},
		"vivianamendoza": {
			"nombre": "Sra. Viviana Mendoza y esposo",
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
       message.innerHTML = 'Queremos compartir la alegría de unir nuestras vidas en matrimonio civil y esperamos tener el placer de contar con su presencia.';

       let admision = document.getElementById("person_admision");
       admision.innerHTML = `Admisión: ${guest.admision || ""}.`;

       let dcode = document.getElementById("dress_code");
       dcode.innerHTML = 'El código de vestimenta es semiformal, pero cómodo, alístate para comer todo lo que puedas.';
    }else{
        let emessage = document.getElementById("else_message");
        emessage.innerHTML = `No olvides nunca que la fuerza más poderosa en la tierra es el amor.`;
    }
})();