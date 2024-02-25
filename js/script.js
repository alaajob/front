let noti_num = document.querySelector(".noti-num");
let mark_Btn = document.querySelector(".marks a");
let parent_Content = document.querySelector(".contents div.content");
let Contents  = document.querySelectorAll(".content");
Contents = Array.from(Contents);
let Contents_array_NotOpen = [];

mark_Btn.addEventListener("click" , ()=>{
   for(let i=0; i <= Contents.length ; i++){
      Contents[i].classList.remove("not-open");
      Contents_array_NotOpen.splice(0 , Contents_array_NotOpen.length);
      noti_num.innerHTML = Contents_array_NotOpen.length;
   }
});
Contents.forEach(content => {
   if(content.classList.contains("not-open")){
      Contents_array_NotOpen.push(content);
      noti_num.innerHTML = Contents_array_NotOpen.length;
      content.addEventListener("click" , ()=>{
         content.classList.remove("not-open");
         Contents_array_NotOpen.pop();
         noti_num.innerHTML = Contents_array_NotOpen.length;
      });
   }
});


