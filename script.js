const parent=document.getElementById('parentDv');
const child=document.getElementById('childDv');
const down=document.getElementById('down');
const upp=document.getElementById('upp');
const leftDv2=document.querySelector('.leftDv2')



parent.addEventListener('click', function(){
    child.style.display = child.style.display==='none' ? 'flex': 'none';
    down.style.display = down.style.display==='flex' ? 'none': 'flex';
    upp.style.display = upp.style.display==='none' ? 'flex': 'none';
})





const opener=document.getElementById('menuOpener');
const opening=document.getElementById('headMenu');
const closer=document.getElementById('menuCloser');



opener.onclick=function(){
    opening.style.display='flex';
    opener.style.display='none';
    document.body.style.background="#00000080;"
}
closer.onclick=function(){
    opening.style.display='none';
    opener.style.display='block';
}











function openAnswerToQuestion(id, imgID) {
    let answerBlockers = document.querySelectorAll('.answer-block')
    answerBlockers.forEach((block) => {
        block.style.display = 'none'
    });

    let element = document.getElementById(id);
    element.style.display = element.style.display === "none" ? "block" : "none";
    

    let arrowImages = document.querySelectorAll('.img-arrow')
    arrowImages.forEach((img) => {
        img.src = './img/arrow-to-down.png';
    })
    let imgElement = document.getElementById(imgID)
    imgElement.src = element.style.display === "none" ? './img/arrow-to-down.png' : './img/arrow-to-up.png'

}

function openAnswerToQuestion(id, imgID) { 
    let element = document.getElementById(id); 
    let currentDisplay = element.style.display; 

    let answerBlockers = document.querySelectorAll('.answer-block'); 
    answerBlockers.forEach((block) => { 
        block.style.display = 'none'; 
    }); 


    element.style.display = currentDisplay === "none" ? "block" : "none"; 


    let arrowImages = document.querySelectorAll('.img-arrow'); 
    arrowImages.forEach((img) => { 
        img.src = './img/arrow-to-down.png'; 
    }); 

    let imgElement = document.getElementById(imgID); 
    imgElement.src = element.style.display === "none" ? './img/arrow-to-down.png' : './img/arrow-to-up.png'; 
} 


function openPageApplication(page) {
    window.location.href=page
}