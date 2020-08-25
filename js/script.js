$(document).ready(function(){
var nycorganicwaste = {
  projID: "nycorganicwaste",
  imgSrc: "nycorganicwaste_thumb.jpg",
  projTitle: "NYC Organic Waste 2040",
  projDescr: "supply a circular economy within a local network",
  location: "New York City, NY",
  collab: "Donghanyu An, Alexandra Burkhardt, Xiaofei Sun, Dian Yu"
};
var popsindex = {
  projID: "popsindex",
  imgSrc: "popsindex_thumb.png",
  projTitle: "The POPS Index",
  projDescr: "assess neighborhoods to incentivize the creation of higher quality public space",
  location: "New York City, NY",
  collab: "Richard Chou, David Mauricio"
};
var denguevulnerability = {
  projID: "denguevulnerability",
  imgSrc: "box.svg",
  projTitle: "Dengue Vulnerability",
  projDescr: "mapping exposure and susceptibility with the water-associated disease index",
  location: "Mekong River Delta, Vietnam",
  collab: "David Mauricio, Gabriel Vergara"
};
var drifting = {
  projID: "drifting",
  imgSrc: "drifting_thumb.png",
  projTitle: "Drifting",
  projDescr: "a 72-hour derive of New York City",
  location: "New York City, NY"
};
var pedestrianspectrum = {
  projID: "pedestrianspectrum",
  imgSrc: "pedestrianspectrum_thumb.jpg",
  projTitle: "Pedestrian Spectrum",
  projDescr: "pop-up street improvements for the pedestrian right of way",
  location: "Long Island City East, NY",
  collab: "Maria Palomares Samper, Wenjun Zhang"
};
var agrotech = {
  projID: "agrotech",
  imgSrc: "agrotech_thumb.png",
  projTitle: "AgroTech Valley",
  projDescr: "industry, income, infrastructure, inequality",
  location: "Central Valley, CA",
  collab: "Huang Qui, Gabriel Vergara"
};
var lifeaquatic = {
  projID: "lifeaquatic",
  imgSrc: "../images/lifeaquatic_01_thumb.jpg",
  projTitle: "Life Aquatic",
  projDescr: "conserving water culture for adaptive resilience",
  location: "Can Tho, Vietnam",
  collab: "Junyu Cao, Zeyi Jiang, Dian Yu"
};
var amplifyhudson = {
  projID: "amplifyhudson",
  imgSrc: "amplifyhudson_thumb.jpg",
  projTitle: "Amplify Hudson",
  projDescr: "media platform as a catalyst for an inclusive community",
  location: "Warren Street, Hudson, NY",
  collab: "Ryan Biswan Pryandana, Mariam Hattab, Berke Kalemoglu, David Mauricio"
};
var playlab = {
  projID: "playlab",
  imgSrc: "playlab_01_thumb.gif",
  projTitle: "playLab",
  projDescr: "collective interactive platform for participatory design",
  collab: "Richard Chou"
};
var conflictresolution = {
  projID: "conflictresolution",
  imgSrc: "conflictresolution_00_thumb.png",
  projTitle: "Conflict Resolution",
  projDescr: "community agency through mapping",
  location: "Puerto Rico",
  collab: "Gloria Serra Coch"
};
var dxd2019 = {
  projID: "dxd2019",
  imgSrc: "dxd2019_05_thumb.jpg",
  projTitle: "Data Through Design 2019",
  projDescr: "event identity graphics, artist display tags, and promotion material",
  location: "Brooklyn, NY"
};
var magicgrants2019 = {
  projID: "magicgrants2019",
  imgSrc: "magicgrants2019_thumb.png",
  projTitle: "2019-20 Magic Grant Posters",
  projDescr: "patent inspired digital poster design"
};
var collagescape = {
  projID: "collagescape",
  imgSrc: "collagescape_01_thumb.jpg",
  projTitle: "Collage Scape: ",
  projDescr: "Micro-planning for Social Street Scenes",
  exhibit: [{imgSrc:"exhibits/15sp_1.jpg", exDescr:"24 Hours on Broadway Street"}, {imgSrc:"exhibits/15sp_2.jpg", exDescr:"Weekly Social Activity"}, {imgSrc:"exhibits/15sp_3.jpg", exDescr:"Downtown Los Angeles Demographics"}, {imgSrc:"exhibits/15sp_4.jpg", exDescr:"Existing Street Scape"}, {imgSrc:"exhibits/15sp_5.jpg", exDescr:"Intervention A"}, {imgSrc:"exhibits/15sp_6.jpg", exDescr:"Intervention B"}, {imgSrc:"exhibits/15sp_7.jpg", exDescr:"Intervention C"}, {imgSrc:"exhibits/15sp_8.jpg", exDescr:"Section A"}, {imgSrc:"exhibits/15sp_9.jpg", exDescr:"Section B"}, {imgSrc:"exhibits/15sp_10.jpg", exDescr:"Section C"}, {imgSrc:"exhibits/15sp_11.jpg", exDescr:"Southeast Elevation"}, {imgSrc:"exhibits/15sp_12.jpg", exDescr:"Northwest Elevation"}, {imgSrc:"exhibits/15sp_13.jpg", exDescr:"Formal \"Paint By Numbers\""}, {imgSrc:"exhibits/15sp_14.jpg", exDescr:"Broadway Street: Morning"}, {imgSrc:"exhibits/15sp_15.jpg", exDescr:"Broadway Street: Morning"}, {imgSrc:"exhibits/15sp_16.jpg", exDescr:"Broadway Street: Afternoon"}, {imgSrc:"exhibits/15sp_17.jpg", exDescr:"Broadway Street: Afternoon"}, {imgSrc:"exhibits/15sp_18.jpg", exDescr:"Broadway Street: Night"}, {imgSrc:"exhibits/15sp_19.jpg", exDescr:"Broadway Street: Night"}]
};
var lines = {
  projID: "lines",
  imgSrc: "lines_00_thumb.jpg",
  projTitle: "Combined Lines",
  projDescr: "9 linocuts, 2 lines, 4 orientations, 67 combinations"
};
var thecave = {
  projID: "thecave",
  imgSrc: "thecave.jpg",
  projTitle: "The Allegory of The Cave",
  projDescr: "typesetting and printed booklet of Plato's Republic"
};

allProjects = {
  nycorganicwaste:nycorganicwaste, popsindexindex:popsindex, /*denguevulnerability:denguevulnerability,*/ drifting:drifting, pedestrianspectrum:pedestrianspectrum, agrotech:agrotech, lifeaquatic:lifeaquatic, amplifyhudson:amplifyhudson, playlab:playlab, conflictresolution:conflictresolution, dxd2019:dxd2019, magicgrants2019:magicgrants2019, collagescape:collagescape, lines:lines
};
var navHome = [playlab, conflictresolution, popsindex, amplifyhudson, /*denguevulnerability,*/ nycorganicwaste, drifting, lifeaquatic, agrotech, pedestrianspectrum, dxd2019, magicgrants2019];
var navSD = [popsindex, nycorganicwaste, /*denguevulnerability,*/ conflictresolution, agrotech, amplifyhudson, pedestrianspectrum];
var navUF = [drifting, pedestrianspectrum, agrotech, lifeaquatic, popsindex, amplifyhudson, nycorganicwaste, collagescape];
var navSA = [amplifyhudson, conflictresolution, playlab, agrotech, popsindex, /*denguevulnerability,*/ nycorganicwaste, drifting, lifeaquatic, pedestrianspectrum, dxd2019, magicgrants2019];
var navGD = [dxd2019, drifting, magicgrants2019, thecave, lines]
var navAll = [playlab, conflictresolution, popsindex, amplifyhudson, dxd2019, /*denguevulnerability,*/ nycorganicwaste, drifting, lifeaquatic, agrotech, magicgrants2019, lines, pedestrianspectrum, thecave, collagescape];

function navClick(navFilter) {
  $("#content").empty().show();
  $("#aboutcontent").hide();
  for (var i = 0; i < navFilter.length; i++) {
    var templateString = "<section class='box' id='b" + (i + 1) +"'><a href='./project/" + navFilter[i].projID + ".html'><div class='caption'><h2 class='h2'>" + navFilter[i].projTitle + "</h2></a>&emsp;" + navFilter[i].projDescr + "</div><a href='./project/" + navFilter[i].projID + ".html'><img class='img-thumb link' data-projectname=" + navFilter[i].projID + " src='./images/" + navFilter[i].imgSrc + "' alt='" + navFilter[i].projTitle + "'></a></section>";
  $("#content").append(templateString)
  };
};
navClick(navHome);

  $("#aboutcontent").hide();
  $("#about").on("click", function(){
    $("#aboutcontent").show();
  });
  $("#aboutclose").on("click", function(){
    $("#aboutcontent").hide();
  });
  $(".home").on("click", function(){
    navClick(navHome);
  });
  $(".sort-sd").on("click", function(){
    navClick(navSD);
  });
  $(".sort-uf").on("click", function(){
    navClick(navUF);
  });
  $(".sort-sa").on("click", function(){
    navClick(navSA);
  });
  $(".sort-gd").on("click", function(){
    navClick(navGD);
  });
  $(".sort-all").on("click", function(){
    navClick(navAll);
  });

  // $("#content").on('mouseenter', '.box', function(){
  //   $(this).find('.tag').show();
  // });
  // $("#content").on('mouseleave', '.box', function(){
  //   $(this).find('.tag').fadeOut(2000);
  // })

  $("#content").on("click", ".img", function(){
    var projectName = $(this).data("projectname");
    projClick(projectName);
  });
  $("#projectcontent").on("click", ".model", function(){
    var projectName = $(this).data("projectname");
    projClick(projectName);
  });
});

function projClick(projectName) {
  $("#projectcontent").show();
  $("#exhibitbox, #dotbox, #projectcaption").empty();
  var project = allProjects[projectName];
  for (var i = 0; i < project.exhibit.length; i++) {
    var exhibitString = "<div class='exhibit'><img class='eximg link' src=" + project.exhibit[i].imgSrc + "></img><div class='excapt'>" + project.exhibit[i].exDescr + "</div></div>";
    var dotBox = "<div class='dot link'></div>";
    $("#exhibitbox").append(exhibitString);
    $(".exhibit").not(".exhibit:first").hide();
    $("#dotbox").append(dotBox);
    $(".dot").css("background-color", "#aaa");
    $(".dot:first").css("background-color", "#000");
    $(".dot:first").addClass("currentexhibit");
  };
  var projectCapt = "<span class='subtitle2'>" + project.projectTitle.toUpperCase() + "</span><br/>" + project.projectDescr;
  $("#projectcaption").append(projectCapt)
};
projClick(projectName);

var showExhibit = function(index, nextIndex){
  var exhibitCount = $(".exhibit").length;
  if(nextIndex >= exhibitCount){
    nextIndex = 0;
  }
  else if(nextIndex < 0){
    nextIndex = exhibitCount - 1;
  }
  $(".exhibit:eq(" + index + ")").hide();
  $(".exhibit:eq(" + nextIndex + ")").show();
  $(".dot:eq(" + index + ")").css("background-color", "#aaa").removeClass("currentexhibit");
  $(".dot:eq(" + nextIndex + ")").css("background-color", "#000").addClass("currentexhibit");
};

var currentExhibit = function(){
  return $(".currentexhibit").index();
};

$(".img").on("click", function(){
  $("#content").hide();
  $("#projectcontent").show();
});
$("#exhibitbox").on("mouseenter", ".exhibit", function(){
  $(this).find(".excapt").show();
});
$("#exhibitbox").on("mouseleave", ".exhibit", function(){
  $(this).find(".excapt").fadeOut(2000);
});
$("#dotbox").on("click", ".dot", function(){
  var currentIndex = currentExhibit();
  var nextIndex = $(this).index();
  showExhibit(currentIndex, nextIndex);
});
$("#exhibitbox").on("click", ".exhibit", function(){
  var currentIndex = currentExhibit();
  var nextIndex = currentIndex + 1;
  showExhibit(currentIndex, nextIndex);
});
$("#right").on("click", function(){
  var currentIndex = currentExhibit();
  var nextIndex = currentIndex + 1;
  showExhibit(currentIndex, nextIndex);
});
$("#left").on("click", function(){
  var currentIndex = currentExhibit();
  var nextIndex = currentIndex - 1;
  showExhibit(currentIndex, nextIndex);
});