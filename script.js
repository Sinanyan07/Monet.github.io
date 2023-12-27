const parent=document.getElementById('parentDv');
const child=document.getElementById('childDv');
const down=document.getElementById('down');
const upp=document.getElementById('upp');


// parent.addEventListener('click', function(){
//     child.style.display = child.style.display='none' ? 'block': 'none';
//     // parent.onclick=function(){
//     //     if (down.style.display === 'none') {
//     //         upp.style.display = 'block';
//     //       } if(upp.style.display === 'block'){
//     //         down.style.display = 'none'
//     //       }
//     // }
// })


const opener=document.getElementById('menuOpener');
const opening=document.getElementById('headMenu');
const closer=document.getElementById('menuCloser');
opener.onclick=function(){
    opening.style.display='flex';
    opener.style.display='none';
    document.body.style.setProperty('color', '#00000080');
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