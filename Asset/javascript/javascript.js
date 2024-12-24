const footerIcon= document.querySelector(".footer-icon");
const shareDetails=document.querySelector(".footer-icon .share-details");
let count=0;
footerIcon.addEventListener('click', () => {
    count+=1;
    if(count%2!=0){
    shareDetails.style.display = "flex";
    }
    else{
        shareDetails.style.display="none";
    }
});
