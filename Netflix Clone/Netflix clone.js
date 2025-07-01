//for front page movies data
const trending_movies = [
    {
        img:"url(image/0.jpg)",
        Name_Poster:"url(image/9.png)",
        Name:"DELHI CRIME",
        Date:"2019 | 2 Seasons | Drama",
        Desc:"Following the police force as they investigate high-profile crimes in Delhi, this series has seasons inspired by both real and fictional events.",
        Starring:"Starring:Shefali Shah,Rajesh Tailang,Rasika Dugal \n Creators:Richie Mehta"
    },
    {
        img:"url(image/1.jpg)",
        Name_Poster:"url(image/10.png)",
        Name:"Rana Naidu",
        Date:"2023 | 1 Season | Thrillers",
        Desc:"Rana Naidu is the go-to problem solver for the rich and famous. But when his father is released from jail, the one mess he can't handle may be his own.",
        Starring:"Starring:Venkatesh Daggubati,Rana Daggubati,Surveen Chawla"
    },
    {
        img:"url(image/2.jpg)",
        Name_Poster:"url(image/11.png)",
        Name:"Extraction 2",
        Date:"2023 | 2h 3m | Action",
        Desc:"Back from the brink of death, highly skilled commando Tyler Rake takes on another dangerous mission: saving the imprisoned family of a ruthless gangster.",
        Starring:"Starring:Chris Hemsworth,Golshifteh Farahani,Tornike Gogrichiani"
    },
    {
        img:"url(image/3.jpg)",
        Name_Poster:"url(image/12.png)",
        Name:"Money Heist",
        Date:"2017 | 5 Seasons | Thrillers",
        Desc:"Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
        Starring:"Starring:Úrsula Corberó,Álvaro Morte,Itziar Ituño Creators:Álex Pina"
    },
    {
        img:"url(image/4.jpg)",
        Name_Poster:"url(image/13.png)",
        Name:"Squid Game",
        Date:"2021 | 1 Seasons | Thrillers",
        Desc:"Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
        Starring:"Starring:Lee Jung-jae,Park Hae-soo,Wi Ha-jun Creators:Hwang Dong-hyuk"
    },
    {
        img:"url(image/5.jpg)",
        Name_Poster:"url(image/14.png)",
        Name:"Sooryavanshi",
        Date:"2021 | 2h 39m | Action ",
        Desc:"A fearless, faithful (and only slightly forgetful) Mumbai cop pulls out all the stops — and stunts — to thwart a major conspiracy to attack his city.",
        Starring:"Starring: Akshay Kumar, Katrina Kaif, and Abhimanyu Singh"
    },
    {
        img:"url(image/6.jpg)",
        Name_Poster:"url(image/15.png)",
        Name:"The Diplomat ",
        Date:"2025 | 2h 10m | Thriller/Drama",
        Desc:"An Indian diplomat maneuvers political and moral tensions to free a young woman claiming forced marriage in Pakistan. Based on true events.",
        Starring:"Starring: John Abraham, Sadia Khateeb, and Revathy"
    },
    {
        img:"url(image/7.jpg)",
        Name_Poster:"url(image/16.png)",
        Name:"Chhaava",
        Date:"2025 | 2h 41m | Adventure",
        Desc:"After the death of his father, warrior-king Sambhaji Maharaj battles Mughal forces led by Aurangzeb to keep the Maratha Empire alive.",
        Starring:"Starring: Vicky Kaushal, Akshaye Khanna, and Rashmika Mandanna"
    }
    ]

    let section = document.getElementById("section");
    var img2=document.querySelector(".img2");
    var movie_name=document.querySelector(".mainpagemovie_name");
    var date=document.querySelector(".date_sea_type");
    var desc=document.querySelector(".desc1");
    var cast=document.querySelector(".cast");
    let a = parseInt(8 * Math.random());
    console.log(a);

   
    console.log(window.location.href);
   


        window.addEventListener("load",function(){
            imgchange();
         })
    
    function imgchange(){
        if(a==0 || a==1 || a==2 || a==3 || a==4 || a==5 || a==6 || a==7){
            console.log(a);
            section.style.backgroundImage="url(image/"+a+".jpg)";
            movie_name.innerHTML=trending_movies[a].Name;
            date.innerHTML=trending_movies[a].Date;
            desc.innerHTML=trending_movies[a].Desc;
            cast.innerHTML=trending_movies[a].Starring;
            a=a+9;
           // console.log(a);
            img2.src="image/"+a+".png";

        }
    }
       Array.from(document.getElementsByTagName("span")).forEach((element)=>{
        element.addEventListener("mouseenter",function(element){
            //console.log("video");
            element.target.firstElementChild.classList.add("video2");
            element.target.firstElementChild.nextElementSibling.style="display:none";
            var element1=element.target.firstElementChild.nextElementSibling;
            element1.previousElementSibling.style="display:inline";
            var video=element1.previousElementSibling;
           // console.log(video);
            element.target.firstElementChild.nextElementSibling.nextElementSibling.classList.add("hover");
            setInterval(video1,500);
            if(video.paused){
                video.play();
                video.muted=true;
               // console.log("play");
            }
            
            function video1(){
                //console.log(video.muted);
               video.onclick=()=>{
                if(video.muted==true){
                    video.muted=false;
                }
                else{
                    video.muted=true;
                }
               }
            }
           
            video.addEventListener("timeupdate",()=>{
                var currenttime=Math.floor(video.currentTime/60)
                var currenttime2=Math.floor(video.currentTime%60) ;
                console.log(currenttime +"\t"+ currenttime2);
            })
        })
        element.addEventListener("mouseleave",function(element){
           // console.log("video");
            element.target.firstElementChild.classList.remove("video2");
            element.target.firstElementChild.nextElementSibling.style="display:inline";
            var element2=element.target.firstElementChild.nextElementSibling;
            element2.previousElementSibling.style="display:none";
            element.target.firstElementChild.nextElementSibling.nextElementSibling.classList.remove("hover");
            var video=element2.previousElementSibling;
                video.pause();
              //  console.log("pause");
                video.currentTime=0;
        })
       })

       Array.from(document.getElementsByTagName("video")).forEach((element)=>{
        element.addEventListener("dblclick",function(element){
           var index = element.target.nextElementSibling.id;
           console.log(index);
           //var video=document.getElementsByTagName("video");
          // var ab=video.length;
           localStorage.setItem("data",index);
           let url = "Netflix clone1.html";
                       window.location = url;
            
        })
       })
      

       