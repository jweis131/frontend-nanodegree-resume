$("#workExperience").append(HTMLworkStart);

var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
$(".work-entry").append(formattedWorkEmployer);

var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[0].title);
$(".work-entry").append(formattedWorkTitle);

var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[0].dates);
$(".work-entry").append(formattedWorkDates);

var formattedWorkLocations = HTMLlocation.replace("%data%", work.jobs[0].location);
$(".work-entry").append(formattedWorkLocations);

var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[0].description);
$(".work-entry").append(formattedWorkDescription);

var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[1].employer);
$(".work-entry").append(formattedWorkEmployer);

var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[1].title);
$(".work-entry").append(formattedWorkTitle);

var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[1].dates);
$(".work-entry").append(formattedWorkDates);

var formattedWorkLocations = HTMLlocation.replace("%data%", work.jobs[1].location);
$(".work-entry").append(formattedWorkLocations);

var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[1].description);
$(".work-entry").append(formattedWorkDescription);