//movies data
const trending_movies = [
    {
        Name_Poster:"url(image/9.png)",
        Name:"DELHI CRIME",
        Date:"2019 | 2 Seasons | Drama",
        Desc:"Following the police force as they investigate high-profile crimes in Delhi, this series has seasons inspired by both real and fictional events.",
        Starring:"Starring:Shefali Shah,Rajesh Tailang,Rasika Dugal \n Creators:Richie Mehta",
        Trailer1:"./Video/Delhi Crime _ Official Trailer [HD] _ Netflix_Full-HD.mp4",
        Type:"video/mp4",
        Type1:"video/mkv",
        Trailer2:"./Video/Delhi Crime _ Official Trailer [HD] _ Netflix_Full-HD.mp4",
        Desc1:"This International Emmy-winning drama series stars Shefali Shah,  Rasika Dugal, Adil Hussain and Rajesh Tailang.",
        Episode1:"./Movies/Asur/Asur S01 E01 WebRip Hnidi 480p - [Vegamovies.NL].mkv"
    },
    {
        Name_Poster:"url(image/10.png)",
        Name:"Rana Naidu",
        Date:"2023 | 1 Season | Thrillers",
        Desc:"Rana Naidu is the go-to problem solver for the rich and famous. But when his father is released from jail, the one mess he can't handle may be his own.",
        Starring:"Starring:Venkatesh Daggubati,Rana Daggubati,Surveen Chawla",
        Trailer1:"./Video/Rana Naidu Trailer.mp4",
        Type:"video/mp4",
        movietype:"Netflix Clone | Episode | Rana Naidu",
        Trailertext:"Netflix Clone | Movie | Trailer",
        Desc1:"Celebrated actor Rana Daggubati (“Baahubali”) stars with real-life uncle Venkatesh Daggubati (“Guru”) in this bold drama."
    },
    {
        Name_Poster:"url(image/11.png)",
        Name:"Extraction 2",
        Date:"2023 | 2h 3m | Action",
        Desc:"Back from the brink of death, highly skilled commando Tyler Rake takes on another dangerous mission: saving the imprisoned family of a ruthless gangster.",
        Starring:"Starring:Chris Hemsworth,Golshifteh Farahani,Tornike Gogrichiani",
        Trailer1:"./Video//EXTRACTION 2 _ Official Hindi Trailer _ Netflix India_Full-HD.mp4",
        Type:"video/mp4",
        movietype:"Netflix Clone | Movie | Extraction 2",
        Trailertext:"Netflix Clone | Movie | Trailer",
        Desc1:"Chris Hemsworth returns for a bigger, riskier and deadlier assignment in this relentlessly exciting global action thriller."
    },
    {
        Name_Poster:"url(image/12.png)",
        Name:"Money Heist",
        Date:"2017 | 5 Seasons | Thrillers",
        Desc:"Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
        Starring:"Starring:Úrsula Corberó,Álvaro Morte,Itziar Ituño Creators:Álex Pina",
        Trailer1:"./Video/Money Heist- Part 5 Vol. 1 _ Official Hindi Trailer _ हिंदी ट्रेलर_Full-HD.mp4",
        Trailer2:"./Video/Money Heist- Part 5 Vol. 1 _ Official Hindi Trailer _ हिंदी ट्रेलर_Full-HD.mp4",
        Trailer3:"./Video/Money Heist- Part 5 Vol. 1 _ Official Hindi Trailer _ हिंदी ट्रेलर_Full-HD.mp4",
        Trailer4:"./Video/Money Heist- Part 5 Vol. 1 _ Official Hindi Trailer _ हिंदी ट्रेलर_Full-HD.mp4",
        Trailer5:"./Video/Money Heist- Part 5 Vol. 1 _ Official Hindi Trailer _ हिंदी ट्रेलर_Full-HD.mp4",
        Type:"video/mp4",
        Trailertext:"Season 1 | Trailer",
        Desc1:"This riveting crime series won Best Drama at the International Emmy Awards, Premios Fénix and Premios Iris (plus six more Iris wins)."
    },
    {
        Name_Poster:"url(image/13.png)",
        Name:"Squid Game",
        Date:"2021 | 1 Seasons | Thrillers",
        Desc:"Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
        Starring:"Starring:Lee Jung-jae,Park Hae-soo,Wi Ha-jun Creators:Hwang Dong-hyuk",
        Trailer1:"./Video/Squid Game _ Official Hindi Trailer _ Netflix India_Full-HD.mp4",
        Type:"video/mp4",
        movietype:"Netflix Clone | Episode | Squid Game",
        Trailertext:"Netflix Clone | Season 1 | Trailer",
        Desc1:"A violent test of morality and humanity starring Lee Jung-jae ('Chief of Staff') and Park Hae-soo ('Prison Playbook')."
    },
    {
        Name_Poster:"url(image/14.png)",
        Name:"Sooryavanshi",
        Date:"2021 | 2h 23m | Action ",
        Desc:"A fearless, faithful (and only slightly forgetful) Mumbai cop pulls out all the stops — and stunts — to thwart a major conspiracy to attack his city.",
        Starring:"Starring: Akshay Kumar, Katrina Kaif, and Abhimanyu Singh",
        Trailer1:"./Video/Sooryavanshi _ Official Trailer _ 5th Nov _ Akshay, Ajay, Ranveer, Katrina __Full-HD.mp4",
        Type:"video/mp4",
        movietype:"Netflix Clone | Movie | Sooryavanshi",
        Trailertext:"Netflix Clone | Movie | Trailer",
        Desc1:""
    },
    {
        Name_Poster:"url(image/15.png)",
        Name:"The Diplomat",
        Date:"2025 | 2h 10m | Thriller/Drama",
        Desc:"An Indian diplomat maneuvers political and moral tensions to free a young woman claiming forced marriage in Pakistan. Based on true events.",
        Starring:"Starring: John Abraham, Sadia Khateeb, and Revathy",
        Trailer1:"./Video/THE DIPLOMAT (OFFICIAL TRAILER)- JOHN ABRAHAM _ SADIA KHATEEB _ SHIVAM NAIR _2K.mp4",
        Type:"video/mp4",
        Trailertext:"Netflix Clone | Movie | Trailer",
        movietype:"Netflix Clone | Movie | The Diplomat",
        Desc1:"The Diplomat is a 2025 Indian Hindi-language political thriller film directed by Shivam Nair and written by Ritesh Shah."
    },
    {
        Name_Poster:"url(image/16.png)",
        Name:"Chhaava",
        Date:"2025 | 2h 41m | Adventure",
        Desc:"After the death of his father, warrior-king Sambhaji Maharaj battles Mughal forces led by Aurangzeb to keep the Maratha Empire alive.",
        Starring:"Starring: Vicky Kaushal, Akshaye Khanna, and Rashmika Mandanna",
        Trailer1:"./Video/Chhaava _ Official Trailer _ Vicky K _ Rashmika M _ Akshaye K _ Dinesh Vijan_2K.mp4",
        Type:"video/mp4",
        Trailertext:"Netflix Clone | Movie | Trailer",
        movietype:"Netflix Clone | Movie | Chhaava",
        Desc1:"Chhaava (transl. Lion cub) is a 2025 Indian Hindi-language historical action film based on the life of Sambhaji Maharaj"
    }
    ]

    let section = document.getElementById("section");
    var img2=document.querySelector(".img2");
    var movie_name=document.querySelector(".mainpagemovie_name");
    var date=document.querySelector(".date_sea_type");
    var desc=document.querySelector(".desc1");
    var cast=document.querySelector(".cast");
    var title=document.querySelector("title");
    var trailer = document.querySelector(".trailer");
    var div2=document.querySelector(".div2");
    var text=document.querySelector(".text1");
    var texts = document.getElementById("text4");
    var movie = document.getElementById("movies");
    var div3 = document.getElementById("div3");
    


window.addEventListener("load",function(){
    var storeddata = localStorage.getItem("data");
    // console.log(storeddata);
    section.style.backgroundImage = "url(image/"+storeddata+".jpg)";
    // image1(section,storeddata);
    
    movie_name.innerHTML = trending_movies[storeddata].Name;
    date.innerHTML=trending_movies[storeddata].Date;
    desc.innerHTML = trending_movies[storeddata].Desc;
    cast.innerHTML = trending_movies[storeddata].Starring;
    div2.innerHTML = trending_movies[storeddata].Desc1;
    text.innerHTML = trending_movies[storeddata].text;

    console.log(storeddata);


    //creating element for trailer
    if(storeddata == 0){
        trailer.classList.add("trailers");
        trailer.classList.remove("trailer");
        var trailers = document.querySelector(".trailers");
        console.log(trailer);

        var trailers1 = document.createElement("div");
        trailers1.classList.add("trailers1");
        var trailer1 = document.createElement("video");
        trailer1.src = trending_movies[storeddata].Trailer1;
        trailer1.type = trending_movies[storeddata].Type;
        trailer1.classList.add("trailer1");
        trailer1.controls=true;
        console.log(trailer1);
        trailers.appendChild(trailers1);
        trailers1.appendChild(trailer1);


        var trailers2 =document.createElement("div");
        trailers2.classList.add("trailers2");
        var trailer2 = document.createElement("video");
        trailer2.src = trending_movies[storeddata].Trailer1;
        trailer2.type = trending_movies[storeddata].Type;
        trailer2.classList.add("trailer2");
        trailer2.controls=true;
        trailers.appendChild(trailers2);
        trailers2.appendChild(trailer2);
        
        console.log(trailers);


        var text2 = document.createElement("h2");
        text2.classList.add("text2");
        text2.innerHTML = "Season 1 | Trailer";
        trailers1.appendChild(text2);

        var text3 = document.createElement("h2");
        text3.classList.add("text2");
        text3.innerHTML = "Season 2 | Trailer";
        trailers2.appendChild(text3);

        texts.innerHTML = "Episodes<select class='select'><option>Season 1</option><option>Season 2</option></select>";
        var select =document.querySelector("select");
        console.log(select.value);
        movie1();

        function movie1(){
            if(select.value == "Season 1"){
                var movie1 = document.querySelectorAll(".movie");
                movie1.forEach((e)=>{
                 e.parentElement.removeChild(e);
             })
             movie.classList.remove("movies3");
            movie.classList.add("movies");
            div3.classList.remove("div4");
            div3.classList.add("div3");
                for(var i=1;i<=7;i++){
                   
                 var movies = document.createElement("div");
                 movies.classList.add("movie");
                 var video = document.createElement("video");
                 video.classList.add("videos");
                 video.src ="./Video/"+[i]+".mkv";
                 video.type = trending_movies[storeddata].Type1;
                 video.controls = true;
                 movies.appendChild(video);
                 movie.appendChild(movies);
    
                 var text5 = document.createElement("h2");
                 text5.classList.add("text2");
                 text5.innerHTML = "Episode "+[i];
                 movies.appendChild(text5);
                
                }
                console.log(movie);
             }
             else{
               var movie1 = document.querySelectorAll(".movie");
               movie1.forEach((e)=>{
                e.parentElement.removeChild(e);
            })
            movie.classList.add("movies3");
            movie.classList.remove("movies");
            div3.classList.add("div4");
            div3.classList.remove("div3");
            for(var i=1;i<=5;i++){
                var movies = document.createElement("div");
                 movies.classList.add("movie");
                 var video = document.createElement("video");
                 video.classList.add("videos");
                 video.src = "./Video/"+[i]+".mkv";
                 video.type = trending_movies[storeddata].Type;
                 video.controls = true;
                 movies.appendChild(video);
                 movie.appendChild(movies);

                 var text5 = document.createElement("h2");
                 text5.classList.add("text2");
                 text5.innerHTML = "Episode "+[i];
                 movies.appendChild(text5);
            }
                
             }
        }

        
        select.onclick = ()=>{
            setTimeout(() => {
                movie1();
            }, 100);
        }
            

        

    }
    else if(storeddata == 3){

        trailer.classList.add("trailers5");
        trailer.classList.remove("trailer");
        var trailers = document.querySelector(".trailers5");
        console.log("hello ",trailer);

        // for(var i=1;i<=5;i++){
           
        //      trailers[i] = document.createElement("div");
        // trailers[i].classList.add("trailers4");
        //  trailer[i] = document.createElement("video");
        //  console.log("hii",trailer[i]);
        // trailer[i].src = trending_movies[storeddata].Trailer[i];
        // trailer[i].type = trending_movies[storeddata].Type;
        // trailer[i].classList.add("trailer4");
        // trailer[i].controls=true;
        
        // trailers.appendChild(trailers[i]);
        // trailers[i].appendChild(trailer[i]);
        // }
        var trailers1 = document.createElement("div");
        trailers1.classList.add("trailers4");
        var trailer1 = document.createElement("video");
        trailer1.src = trending_movies[storeddata].Trailer1;
        trailer1.type = trending_movies[storeddata].Type;
        trailer1.classList.add("trailer4");
        trailer1.controls=true;
        console.log(trailer1);
        trailers.appendChild(trailers1);
        trailers1.appendChild(trailer1);


        var trailers2 =document.createElement("div");
        trailers2.classList.add("trailers4");
        var trailer2 = document.createElement("video");
        trailer2.src = trending_movies[storeddata].Trailer2;
        trailer2.type = trending_movies[storeddata].Type;
        trailer2.classList.add("trailer4");
        trailer2.controls=true;
        trailers.appendChild(trailers2);
        trailers2.appendChild(trailer2);

        var trailers3 =document.createElement("div");
        trailers3.classList.add("trailers4");
        var trailer3 = document.createElement("video");
        trailer3.src = trending_movies[storeddata].Trailer3;
        trailer3.type = trending_movies[storeddata].Type;
        trailer3.classList.add("trailer4");
        trailer3.controls=true;
        trailers.appendChild(trailers3);
        trailers3.appendChild(trailer3);

        var trailers4 =document.createElement("div");
        trailers4.classList.add("trailers4");
        var trailer4 = document.createElement("video");
        trailer4.src = trending_movies[storeddata].Trailer4;
        trailer4.type = trending_movies[storeddata].Type;
        trailer4.classList.add("trailer4");
        trailer4.controls=true;
        trailers.appendChild(trailers4);
        trailers4.appendChild(trailer4);

        var trailers5 =document.createElement("div");
        trailers5.classList.add("trailers4");
        var trailer5 = document.createElement("video");
        trailer5.src = trending_movies[storeddata].Trailer5;
        trailer5.type = trending_movies[storeddata].Type;
        trailer5.classList.add("trailer4");
        trailer5.controls=true;
        trailers.appendChild(trailers5);
        trailers5.appendChild(trailer5);

        var text2 = document.createElement("h2");
        text2.classList.add("text2");
        text2.innerHTML = "Season 1 | Trailer";
        trailers1.appendChild(text2);

        var text3 = document.createElement("h2");
        text3.classList.add("text2");
        text3.innerHTML = "Season 2 | Trailer";
        trailers2.appendChild(text3);

        var text4 = document.createElement("h2");
        text4.classList.add("text2");
        text4.innerHTML = "Season 3 | Trailer";
        trailers3.appendChild(text4);

        var text5 = document.createElement("h2");
        text5.classList.add("text2");
        text5.innerHTML = "Season 4 | Trailer";
        trailers4.appendChild(text5);

        var text6 = document.createElement("h2");
        text6.classList.add("text2");
        text6.innerHTML = "Season 5 | Trailer";
        trailers5.appendChild(text6);

        texts.innerHTML = "Episodes<select class='select'><option>Season 1</option><option>Season 2</option><option>Season 3</option><option>Season 4</option><option>Season 5</option></select>";
        var select =document.querySelector("select");
        console.log(select.value);

        movie2();
        function movie2(){
            if(select.value == "Season 1"){
                var movie1 = document.querySelectorAll(".movie");
                movie1.forEach((e)=>{
                 e.parentElement.removeChild(e);
                })
            
            div3.classList.remove("div3");
            div3.classList.add("div5");
            movie.classList.remove("movies");
            movie.classList.add("movies8");
            for(i=1;i<=13;i++){
                var movies = document.createElement("div");
                 movies.classList.add("movie");
                 var video = document.createElement("video");
                 video.classList.add("videos");
                 video.src = trending_movies[storeddata].Trailer2;
                 video.type = trending_movies[storeddata].Type;
                 video.controls = true;
                 movies.appendChild(video);
                 movie.appendChild(movies);

                 var text5 = document.createElement("h2");
                 text5.classList.add("text2");
                 text5.innerHTML = "Episode "+[i];
                 movies.appendChild(text5);
            }
        }
            else if(select.value == "Season 2"){
                var movie1 = document.querySelectorAll(".movie");
                movie1.forEach((e)=>{
                 e.parentElement.removeChild(e);
                })
            
                div3.removeAttribute("class");
           // div3.classList.remove("div5");
            div3.classList.add("movies6");
            movie.removeAttribute("class");
          //  movie.classList.remove("movies8");
            movie.classList.add("movies7");
            for(i=1;i<=9;i++){
                var movies = document.createElement("div");
                 movies.classList.add("movie");
                 var video = document.createElement("video");
                 video.classList.add("videos");
                 video.src = trending_movies[storeddata].Trailer2;
                 video.type = trending_movies[storeddata].Type;
                 video.controls = true;
                 movies.appendChild(video);
                 movie.appendChild(movies);

                 var text5 = document.createElement("h2");
                 text5.classList.add("text2");
                 text5.innerHTML = "Episode "+[i];
                 movies.appendChild(text5);
            }
        }
        
        else if(select.value == "Season 3"){
            var movie1 = document.querySelectorAll(".movie");
            movie1.forEach((e)=>{
             e.parentElement.removeChild(e);
            })
        
            div3.removeAttribute("class");
      //  div3.classList.remove("div5");
        div3.classList.add("movies4");
        movie.removeAttribute("class");
       // movie.classList.remove("movies8");
        movie.classList.add("movies5");
        for(i=1;i<=10;i++){
            var movies = document.createElement("div");
             movies.classList.add("movie");
             var video = document.createElement("video");
             video.classList.add("videos");
             video.src = trending_movies[storeddata].Trailer2;
             video.type = trending_movies[storeddata].Type;
             video.controls = true;
             movies.appendChild(video);
             movie.appendChild(movies);

             var text5 = document.createElement("h2");
             text5.classList.add("text2");
             text5.innerHTML = "Episode "+[i];
             movies.appendChild(text5);
        }
    }

    else if(select.value == "Season 4"){
        var movie1 = document.querySelectorAll(".movie");
        movie1.forEach((e)=>{
         e.parentElement.removeChild(e);
        })
    
        div3.removeAttribute("class");
  //  div3.classList.remove("div5");
    div3.classList.add("movies9");
    movie.removeAttribute("class");
   // movie.classList.remove("movies8");
    movie.classList.add("movies10");
    for(i=1;i<=8;i++){
        var movies = document.createElement("div");
         movies.classList.add("movie");
         var video = document.createElement("video");
         video.classList.add("videos");
         video.src = trending_movies[storeddata].Trailer2;
         video.type = trending_movies[storeddata].Type;
         video.controls = true;
         movies.appendChild(video);
         movie.appendChild(movies);

         var text5 = document.createElement("h2");
         text5.classList.add("text2");
         text5.innerHTML = "Episode "+[i];
         movies.appendChild(text5);
    }
}

        }
        
        select.onclick = ()=>{
            setTimeout(() => {
                movie2();
            }, 100);
        }


    }


    else{
        console.log(trailer);
        var trailers1 = document.createElement("div");
        trailers1.classList.add("trailers3");

        var trailer1 = document.createElement("video");
        trailer1.src = trending_movies[storeddata].Trailer1;
        trailer1.type = trending_movies[storeddata].Type;
        trailer1.classList.add("trailer3");
        trailer1.controls=true;
        console.log("trailer",trailer1);
        trailers1.appendChild(trailer1);
        trailer.appendChild(trailers1);

        var text2 = document.createElement("h2");
        text2.classList.add("text2");
        text2.innerHTML = trending_movies[storeddata].Trailertext;
        trailers1.appendChild(text2);
        console.log(trailer);

           
            if(storeddata==1){
                n=10;
                div3.classList.remove("div3");
                div3.classList.add("movies4");
                movie.classList.remove("movies");
                movie.classList.add("movies5");
            }
            else if(storeddata == 4){
                n=9;
                div3.classList.remove("div3");
                div3.classList.add("movies6");
                movie.classList.remove("movies");
                movie.classList.add("movies7");
            }
        else if(storeddata==2 || storeddata==5 || storeddata==7 || storeddata == 6){
            n=1;
            div3.classList.remove("div3");
            div3.classList.add("movies1");
            movie.classList.remove("movies");
            movie.classList.add("movies2");
        }
        for(var i=1;i<=n;i++){
           
            texts.innerHTML = trending_movies[storeddata].movietype;
            // console.log(div3);
            var movies = document.createElement("div");
                 movies.classList.add("movie");
                 var video = document.createElement("video");
                 video.classList.add("videos");
                    // video.src ="./Video/"+[10+storeddata]+".mkv";
                    video.src = "./Video/102.mkv";                 
                 video.type = trending_movies[storeddata].Type1;
                 video.controls = true;
                 movies.appendChild(video);
                 movie.appendChild(movies);
    
                 var text5 = document.createElement("h2");
                 text5.classList.add("text2");
                 if(storeddata==2 || storeddata==5 || storeddata==7){
                 text5.innerHTML = "Movie";
                 }
                 if(storeddata==1 || storeddata==4){
                    text5.innerHTML = "Episode " + [i];
                 }
                 movies.appendChild(text5);
        }


        
    }
   
   

    switch(storeddata){
        case '0':
            img2.src = "image/9.png"
            text.innerHTML = "Netflix Clone | Video | Delhi Crime"
            
        break;
        case '1':
            img2.src = "image/10.png"
            title.innerHTML = "Watch Rana Naidu | Netflix Clone"
            text.innerHTML = "Netflix Clone | Video | Rana Naidu"
        break;
        case '2':
            img2.src = "image/11.png"
            title.innerHTML = "Watch Extraction 2 | Netflix Clone"
            text.innerHTML = "Netflix Clone | Video | Extraction 2"
        break;
        case '3':
            img2.src = "image/12.png"
            title.innerHTML = "Watch Money Heist | Netflix Clone"
            text.innerHTML = "Netflix Clone | Video | Money Heist"
        break;
        case '4':
            img2.src = "image/13.png"
            title.innerHTML = "Watch Squid Game | Netflix Clone"
            text.innerHTML = "Netflix Clone | Video | Squid Game "
        break;
        case '5':
            img2.src = "image/14.png"
            title.innerHTML = "Watch Sooryavanshi| Netflix Clone"
            text.innerHTML = "Netflix Clone | Video | Tu Jhoothi Main Makkar"
        break;
        case '6':
            img2.src = "image/15.png"
            title.innerHTML = "Watch The Diplomat | Netflix Clone"
            text.innerHTML = "Netflix Clone | Video | The Diplomat"
        break;
        case '7':
            img2.src = "image/16.png"
            title.innerHTML = "Watch Chhaava | Netflix Clone"
            text.innerHTML = "Netflix Clone | Video | Chhaava"
        break;
    }
    })

    