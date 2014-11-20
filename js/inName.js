function inName(name){
    var splitName = name.trim().split(" ");
    var lastName = splitName[1].toUpperCase();
    var firstName = splitName[0].slice(0,1).toUpperCase() + splitName[0].slice(1).toLowerCase();
    var newName = firstName + " " + lastName;
    var formattedNewName = HTMLheaderName.replace("%data%", newName);
    var internationalName = $("#header").prepend(formattedNewName);
    return internationalName;
};
$("#main").prepend(internationalizeButton);