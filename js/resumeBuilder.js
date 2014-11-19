var work = {
	"jobs":[
		{
			"employer":"AFCO Systems",
			"title":"Marketing Manager",
			"location":"Farmingdale",
			"dates":"2012 - Present",
			"description":"Managed all facets of marketing for the company"
		},
		{
			"employer":"RevampAgency",
			"title":"Owner",
			"location":"Huntington",
			"dates":"2010 - Present",
			"description":"Ran company"
		}


	]
};

var projects = {
	"projects":[
		{
			"title":"AFCO Website",
			"dates":"2012-present",
			"description":"Built company website",
			"image":"images/afco.png"
		},
		{
			"title":"Aquarela Website",
			"dates":"2012-present",
			"description":"Built company website",
			"image":"images/aquarela.png"
		}
	]
};

var bio = {
    "name": "James Weis",
    "role": "Web Ninga",
    "welcomeMessage": "Welcome",
    "pictureURL": "images/fry.jpg",
    "contacts": {
        "mobile": "631-275-2618",
        "email": "jweis131@gmail.com",
        "github": "https://github.com/jweis131",
        "twitter": "@James_Weis",
        "location": "Huntington, NY"
    },
    "skills": [
        "HTML5",
        "Business Catalyst",
        "CSS3",
        "JaveScript"
    ]
};

var education = {
    "schools": [
        {
            "name": "commack high school",
            "location": "Commack",
            "degree": "Diploma",
            "majors":"Business",
            "dates":"2001-2004"
        },
        {
            "name": "Five Towns College",
            "location": "Dix Hills",
            "degree": "Bachelors",
            "majors":"Business",
            "dates":"2007-2010"
        }
    ],
    "onlineCourses":[
    	{
    		"title":"Intro Comp Science",
    		"school":"Udacity",
    		"dates":"2012-Present",
    		"url":"www.udacity.com"
    	}
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedBioWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#topContacts").append(formattedBioWelcome);
