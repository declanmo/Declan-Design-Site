function projectPage() {
    $('section').fadeOut(500);
    $('#project-page').delay(400).css('display','flex').hide().fadeIn(500);
}
function homePage() {
    $('section').fadeOut(500);
    $('#home-page').delay(400).fadeIn(500);
}
function skillsPage() {
    $('section').fadeOut(500);
    $('#skills-page').delay(400).fadeIn(500);
}
function contactPage() {
    $('section').fadeOut(500);
    $('#contact-page').delay(400).fadeIn(500);
}
let portfolioItems = [
    item1 = {
    title : "Tokenomy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image1 : "assets/tokenomy-blog.png",
    image2 : "assets/hero-declan.jpg"
},
    item2 = {
    title : "DCS Digital",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image1 : "assets/tokenomy-blog.png"

}
]
let currentProjectNum = 1
function resetItem() {
    let currentProject = portfolioItems[currentProjectNum];
$('#project-page .project-title').text(currentProject.title);
$('#project-page .project-description').text(currentProject.description);
$('#project-page .project-img').attr("src",currentProject.image1);
}
resetItem();
$('.next-proj').click(function(){
    currentProjectNum++
    resetItem();
})
$('.prev-proj').click(function(){
    currentProjectNum--
    resetItem();
    console.log(currentProjectNum)
})
