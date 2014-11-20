if(projects.projects[item].images.length > 0){
            for(image in projects.projects[item].images){
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[item].images[image]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }