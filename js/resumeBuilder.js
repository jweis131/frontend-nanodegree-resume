var work = {
	"jobs":[
		{
			"employer":"AFCO Systems",
			"title":"Marketing Manager",
			"location":"Farmingdale, New York",
			"dates":"2012 - Present",
			"description":"Managed all facets of marketing for the company"
		},
		{
			"employer":"RevampAgency",
			"title":"Owner",
			"location":"Huntington, New York",
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
    "pictureURL": "images/197x148.gif",
    "contacts": {
        "mobile": "631-275-2618",
        "email": "jweis131@gmail.com",
        "github": "https://github.com/jweis131",
        "twitter": "@James_Weis",
        "location": "Huntington, New York",
        "blog":"TBA"
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
            "location": "Commack, New York",
            "degree": "Diploma",
            "majors":"Business",
            "dates":"2001-2004"
        },
        {
            "name": "Five Towns College",
            "location": "Dix Hills, New York",
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

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGitHub);

var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#topContacts").append(formattedBlog);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formmattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formmattedWelcome);

var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").append(formattedPic);

if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkills);
};

function displayWork(){
    for(job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedWorkDescription);
    }
};

displayWork();

projects.display = function(){
    for(item in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
        $(".project-entry:last").append(formattedProjectDescription);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[item].images);
        $(".project-entry:last").append(formattedProjectImage);
    }
};

projects.display();

$("#mapDiv").append(googleMap);










