// //web
// const footerIcon = document.querySelector(".footer-icon");
// const shareDetails = document.querySelector(".footer-icon .share-details");
// const mobileFooter = document.querySelector(".footer-mobile-screen-content-row");
// let count = 0;

// footerIcon.addEventListener("click", () => {
//     count += 1;
//     if (count % 2 !== 0) {
//         shareDetails.style.display = "flex";
//         mobileFooter.style.display = "none"; // Hide .footer-mobile
//     } else {
//         shareDetails.style.display = "none";
//         mobileFooter.style.display = "none"; // Ensure it's hidden
//     }
// });;
// //mobile
// const shareDetails1=document.querySelector(".footer-mobile");
// let count1=0;
// footerIcon.addEventListener('click', () => {
//     count1+=1;
//     if(count1%2!=0){
//         mobileevent.style.display = "block";
//     }
//     else{
//         shareDetails1.style.display="none";
//     }
// });
const footerIcon = document.querySelectorAll(".footer-icon");
const articleCard=document.querySelector(".article-card");
const articleFooter=document.querySelector(".article-footer")
const shareDetails = document.querySelector(".footer-icon .share-details");
const mobileEvent = document.querySelector(".footer-mobile");
footerIcon.forEach(footer=>{
    footer.addEventListener("click", () => {
        if (window.innerWidth > 720) { // For Web (Adjust the breakpoint if needed)
            if (shareDetails.style.display === "flex") {
                shareDetails.style.display = "none";
            } else {
                shareDetails.style.display = "flex";
                mobileEvent.style.display = "none"; // Hide mobile footer in web mode
            }
        } else { // For Mobile
            if (mobileEvent.style.display === "block") {
                mobileEvent.style.display = "none";
                articleFooter.style.display="grid";
                articleCard.style.height="445px";
            } else {
                mobileEvent.style.display = "block";
                articleFooter.style.display="none";
                articleCard.style.height="415px";
                
            }
        }
    });
});

