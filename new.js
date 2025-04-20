
window.onload = function () {

    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('crop');

    const introContainer = document.getElementById('container1')
    const climateContainer = document.getElementById('container2')
    const imageContainer = document.getElementById('cropImage')
    const title = document.getElementsByClassName('heading')
    const soilContainer = document.getElementById('container3')
    const varietyContainer = document.getElementById('container4')
    const specialOperationContainer = document.getElementById('container8')
    const diseaseContainer = document.getElementById('container10')
    const yieldContainer = document.getElementById('container12')
    const landPreparationContainer = document.getElementById('container5')
    const planningContainer = document.getElementById('container14')
    const irrigationContainer = document.getElementById('container7')
    const fertilizersContainer = document.getElementById('container6')
    const interCroppingContainer = document.getElementById('container9')
    const harvestingContainer = document.getElementById('container11')
    const FarmerpreneurContainer=document.getElementById('container18')
    

    const secContainer01 = document.getElementById('sec01')
    const secContainer02 = document.getElementById('sec02')
    const secContainer03 = document.getElementById('sec03')
    const secContainer04 = document.getElementById('sec04')
    const secContainer05 = document.getElementById('sec05')
    const secContainer06 = document.getElementById('sec06')
    const imageContainer1 = document.getElementById('graphImage1')
    const imageContainer2 = document.getElementById('graphImage2')
    const imageContainer3 = document.getElementById('graphImage3')
    const imageContainer4 = document.getElementById('graphImage4')
    const imageContainer5 = document.getElementById('Prediction')
    const FarmerImage=document.getElementById('section4Image')
    const FarmerImage2=document.getElementById('section4Image2')

    introContainer.innerHTML = dataRequired[myParam].introduction
    climateContainer.innerHTML = dataRequired[myParam].climate
    imageContainer.src = dataRequired[myParam].imageSrc
    soilContainer.innerHTML = dataRequired[myParam].soil
    varietyContainer.innerHTML = dataRequired[myParam].varieties
    specialOperationContainer.innerHTML = dataRequired[myParam].specialOperations
    diseaseContainer.innerHTML = dataRequired[myParam].diseases
    yieldContainer.innerHTML = dataRequired[myParam].yield
    landPreparationContainer.innerHTML = dataRequired[myParam].landPreparation
    irrigationContainer.innerHTML = dataRequired[myParam].irrigation
    fertilizersContainer.innerHTML = dataRequired[myParam].fertilizer
    interCroppingContainer.innerHTML = dataRequired[myParam].interCropping
    harvestingContainer.innerHTML = dataRequired[myParam].harvesting
    title[0].innerText = dataRequired[myParam].title
    FarmerpreneurContainer.innerHTML=dataRequired[myParam].farmerpreneur

    secContainer01.innerHTML = dataRequired[myParam].sec11
    secContainer02.innerHTML = dataRequired[myParam].sec12
    secContainer03.innerHTML = dataRequired[myParam].sec13
    secContainer04.innerHTML = dataRequired[myParam].sec14
    secContainer05.innerHTML = dataRequired[myParam].sec15
    secContainer06.innerHTML = dataRequired[myParam].sec16
    imageContainer1.src = dataRequired[myParam].imageSrc1
    // imageContainer2.src = dataRequired[myParam].imageSrc2
    // imageContainer3.src = dataRequired[myParam].imageSrc3
    // imageContainer4.src = dataRequired[myParam].imageSrc4
    imageContainer5.src = dataRequired[myParam].imageSrc5
    FarmerImage.src=dataRequired[myParam].image_farmerpreneur
    FarmerImage2.src=dataRequired[myParam].image_farmerpreneur2
    
    
    // Hide all containers when the page loads
    var containers = document.getElementsByClassName("info-container");
    for (var i = 0; i < containers.length; i++) {
        containers[i].style.display = "none";
        containers[i].style.transition = "opacity 0.3s, transform 0.3s";
    }

    // Open Section 1
    toggleSection('section1');
};

function openSection(sectionId) {
    var section = document.getElementById(sectionId);
    var containers = section.getElementsByClassName("info-container");
    // Set section to block to show it
    section.style.display = "block";
    // Show containers smoothly
    for (var i = 0; i < containers.length; i++) {
        containers[i].style.display = "block";
        containers[i].style.margin = "25px";
        containers[i].style.opacity = 1;
        containers[i].style.transform = "translateX(auto)";
    }
}

function closeSection(sectionId) {
    var section = document.getElementById(sectionId);
    var containers = section.getElementsByClassName("info-container");
    section.style.display = "none";
    // Hide containers smoothly
    for (var i = 0; i < containers.length; i++) {
        containers[i].style.opacity = 0;
        containers[i].style.transform = "translateY(-20px)";
    }
}
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var containers = section.getElementsByClassName("info-container");

    if (section.style.display === "block") {
        closeSection(sectionId)

    } else {
        openSection(sectionId)

    }
}

function showMore(containerId, button) {
    var container = document.getElementById(containerId);
    if (container.style.maxHeight) {
        container.style.maxHeight = null;
        button.textContent = "+ Show More";
    } else {
        container.style.maxHeight = container.scrollHeight + "px";
        button.textContent = "- Show Less";
    }
}


let navItemsN = document.querySelectorAll(".navItems");
navItemsN.forEach(element => {
    element.addEventListener("mouseover", mouseOver(element));
    element.addEventListener("mouseout", mouseOut(element));
});
function mouseOver(element) {
    element.style.color = "green";
}

function mouseOut(element) {
    element.style.color = "gray";
}