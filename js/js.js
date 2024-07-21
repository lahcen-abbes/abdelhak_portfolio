//landing page animation start
window.onload = function() {
    //console.log("You loaded this page");
    let x = 0;
    let z;
        z = setInterval(function() {
            x = x + 1;
            if(x===1){
                document.querySelector(".landing .hello").style.setProperty("display","inline-flex");
            }
            if(x===2){
                document.querySelector(".landing .container .premier-column .abdelhek .name").style.setProperty("display","inline-flex");
            }
            if(x===3){
                document.querySelector(".landing .container .premier-column .abdelhek .abdelhek_title").style.setProperty("display","block");
            }
            if(x===4){
                document.querySelector(".landing .container .premier-column .abdelhek_text").style.setProperty("display","inline-flex");
            }
            if(x===5){
                document.querySelector(".landing .container .premier-column .get_in_div").style.setProperty("display","flex");
            }
            //console.log(x);
            if(x===6){
                clearInterval(z);
            }
    }, 500);
}
//landing page animation end

//landing page scrolling start
window.onscroll = function(){
    var windowScrollTop = this.pageYOffset; //lmassaf li mchinaha b scroll flbrowser
    let x = 0;
    x = x - windowScrollTop/3;
    if(windowScrollTop >0 && windowScrollTop <= 648){
    document.querySelector(".landing .container .premier-column .abdelhek .name").style.setProperty("margin-left", x + "px");
    }
    let y = 0;
    y = y + windowScrollTop/3;
    if(windowScrollTop >0 && windowScrollTop <= 310){
    document.querySelector(".landing .container .premier-column .abdelhek .abdelhek_title").style.setProperty("margin-left", y + "px");
    }

    let z;
    z = windowScrollTop/(windowScrollTop * 4); //rana habsin hna 0.8==> scroll/scroll + 25 , 0.6==> scroll / scroll + 133, 0.4==> scroll/scroll + 450, 0.2 ==> scroll + 1600
    if(windowScrollTop <= 50){
        document.querySelector(".landing .container .premier-column").style.setProperty("opacity", 1);
    }
    else if(windowScrollTop > 50 && windowScrollTop <=100){
        document.querySelector(".landing .container .premier-column").style.setProperty("opacity", 0.8);
    }
    else if(windowScrollTop > 100 && windowScrollTop <=200){
        document.querySelector(".landing .container .premier-column").style.setProperty("opacity", 0.6);
    }
    else if(windowScrollTop > 200 && windowScrollTop <=300){
        document.querySelector(".landing .container .premier-column").style.setProperty("opacity", 0.4);
    }
    else if(windowScrollTop > 300 && windowScrollTop <=400){
        document.querySelector(".landing .container .premier-column").style.setProperty("opacity", 0.3);
    }
    else{
        document.querySelector(".landing .container .premier-column").style.setProperty("opacity", 0.2);
    }


    var windowScrollTop2 = this.pageYOffset;
    if(windowScrollTop2 >= 2050){
        document.querySelector(".create-jobs .title-create-jobs").style.display = "block";
    }
    if(windowScrollTop2 >= 2500){
        document.querySelector(".create-jobs .content .create-jobs-img-father").style.display = "grid";
    }

          if(windowScrollTop2 >= 3070){
              document.querySelector(".build-your-project .build-your-project-content h1").style.display = "block";
          }
          if(windowScrollTop2 >= 3154){
              document.querySelector(".build-your-project .content .build-your-project-link").style.display = "block";
          }
    
/*create-jobs End*/
};
//landing page scrolling end

//start about
var compval = 0;
var aboutVal = setInterval(() => {
var windowScrollTop = window.pageYOffset; //lmassaf li mchinaha b scroll flbrowser
console.log(windowScrollTop);
    if(windowScrollTop > 431){
    compval =compval + 1;
    }
if(compval === 1){
document.querySelector(".about .about-title").style.display = "block";
}
if(compval === 2){
    document.querySelector(".about .content .premier-column .about-abdelhek-information p:first-of-type").style.display = "block";
    }
if(compval === 3){
        document.querySelector(".about .content .premier-column .about-abdelhek-information p:last-of-type").style.display = "block";
}
if(compval === 4){
    document.querySelector(".about .content .premier-column .about-abdelhek-information .list").style.display = "grid";
}
}, 1000);
//end about

/*Start Skills*/
var compSkills  = 0;
var skillsVal = setInterval(() => {
var windowScrollTop = window.pageYOffset; //lmassaf li mchinaha b scroll flbrowser
console.log(windowScrollTop);
    if(windowScrollTop >= 1410){
    compSkills = compSkills + 1;
    }
if(compSkills === 1){
document.querySelector(".skills .content .skills-title-div .skills-title").style.display = "block";
}
if(compSkills === 2){
    document.querySelector(".skills .content .skills-text .do").style.display = "block";
    }
if(compSkills === 3){
        document.querySelector(".skills .content .skills-text .applications").style.display = "block";
}
if(compSkills === 4){
    document.querySelector(".skills .content .skills-text .except").style.display = "block";
}
}, 700);
/*End Skills*/

  /*create-jobs Start*/
/*
 window.onscroll = function(){
  var windowScrollTop = window.pageYOffset; //lmassaf li mchinaha b scroll flbrowser
  console.log(windowScrollTop);
      if(windowScrollTop >= 2050){
          document.querySelector(".create-jobs .title-create-jobs").style.display = "block";
      }
      if(windowScrollTop >= 2500){
          document.querySelector(".create-jobs .content .create-jobs-img-father").style.display = "grid";
      }

            if(windowScrollTop >= 3070){
                document.querySelector(".build-your-project .build-your-project-content h1").style.display = "block";
            }
            if(windowScrollTop >= 3154){
                document.querySelector(".build-your-project .content .build-your-project-link").style.display = "block";
            }
    }

 /*create-jobs End*/
