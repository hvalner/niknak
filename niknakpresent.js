    //SIDE BARS
//        for(i=0; i<6; i++){
//             document.getElementById("dots").innerHTML += "<img class='dot' src='niknakgraphics/dot.png'>"
//        }

    //
        //MOVE BEARINGS
        document.getElementById("bearings").addEventListener("click", function(){
        });
        
    //Center presentation   
//    var setDiv = function(screen){
//        boxes = document.querySelector(screen);
//        
//        w = document.documentElement.clientWidth
//        c = (parseFloat(w)/2) - 750
//        boxes.style.left = c;   
//    }
//    
//    for(i=0; i<7; i++){
//        a = i+1;
//        setDiv("#screen" + a);
//    }

//AUDIO STUFFS :)))
     document.getElementById("step1").onended = function(){
            document.getElementById("step2").play();
        }
        document.getElementById("step2").onended = function(){
            document.getElementById("step3").play();
        }
        document.getElementById("step3").onended = function(){
            document.getElementById("step4").play();
        }
        document.getElementById("step4").onended = function(){
            document.getElementById("step5").play();
        }
        document.getElementById("step5").onended = function(){
            document.getElementById("step6").play();
        }
    
//JQUERY STUFF
       $(document).ready(function(){
            
           $("#backgroundaudio").prop("volume",".2");
           //AUDIO TOGGLE
           $("#audiotoggle").on("click", function(){
               if ($("#audiotoggle").html() == "Audio Off"){
                   $("#audiotoggle").html("Audio On");
                   $("audio").prop("volume","0"); 
               } else if ($("#audiotoggle").html() == "Audio On"){
                   $("#audiotoggle").html("Audio Off");
                   $("audio").prop("volume","1");
                   $("#backgroundaudio").prop("volume",".2");
               };
           });
           
           
           //Pause time on screens
            p1 = 3000;
            p2 = 9000;
            p3 = 5000;
            p4 = 8000;
            p5 = 8000;
            p6 = 8000;
           
           $("#audiocaptions").css("opacity", "0.0");
           
           $(".captions").on("click", function(){
            
            if ($("#audiocaptions").css("opacity") == "0"){
               $("#audiocaptions").animate({
               opacity: "1", 
                });
                $(".captions").html("Captions Off");
//                alert("opacity added");
            } 
            
            else if ($("#audiocaptions").css("opacity") == "1"){
                $("#audiocaptions").animate({
                opacity: "0", 
                }); 
                $(".captions").html("Captions On");
//                alert("opacity gone");
            }
                
            });
        
               
 
           $("#audiocaptions").
           html("Nik nak bearings are sourced directly from factories in Shenzhen, China. We cut out the middleman to ensure the highest value for our customers.");
           
           function setcap2(){
               $("#audiocaptions").
                html("Our plastic is made of a high quality, durable, Polylactic acid - also known as PLA, which is non-toxic, biodegradable, and comes in a wide array of colors. Thus, guaranteeing safety and a wide arrange of stylization for our customers.");
           }
           setTimeout(setcap2, 5300+p1);
           
           function setcap3(){
               $("#audiocaptions").
                html("We use Fusion 360, a cloud based 3D modeling software that allows our team to collaboratively design our product. The software also enabled us to iterate frequently in the prototyping stage.");
           }
           setTimeout(setcap3, 10000+p1+p2);
           
           function setcap4(){
               $("#audiocaptions").
                html("While most spinners are produced using injection molding, the high cost of tooling and bulk orders were prohibitive to our scale. 3D printing allowed us to make small and medium sized batches to meet demand. This also allowed us to iterate throughout production.");
           }
           setTimeout(setcap4, 16400+p1+p2+p3);
           
           function setcap5(){
               $("#audiocaptions").
                html("Each spinner is built by hand to maintain quality. To maintain production efficiency we have limited batch sizes and on demand manufacturing. This ensures that we never had excess inventory.");
           }
           setTimeout(setcap5,20900+p1+p2+p3+p4);
          
           function setcap6(){
               $("#audiocaptions").
                html("Customer feedback is integral to our process. We can quickly and easily adjust our product, providing new colors and forms, which allows us to meet market demand.");
           }
           setTimeout(setcap6, 25000+p1+p2+p3+p4+p5);
           
           //ANIMATE SCREEN 1
           
           $("#bearingtext").css("opacity", "0.0");
           $("#bearingtext").
           delay(300).
           animate({
               "top": "50px",
               "opacity": "1",
           }, 1000).
            delay(3700+p1).
           animate({
               opacity: "0",
           },300);
           
           $("#china").css("opacity", "0.0");
           $("#china").
           animate({
               left: "10px",
               opacity: "1",
           }, 800).
           delay(4200+p1).
           animate({
               opacity: "0",
           },300);
           
           $("#california").css("opacity", "0.0");
           $("#california").
           animate({
               right: "10px",
               opacity: "1",
           }, 800).
           delay(4200+p1).
           animate({
               opacity: "0",
           },300);
           
           $("#bearings").css("opacity", "0.0");
           $("#bearings").
           delay(1100).
           animate({
             width: "6%",
            opacity: "1",
           }, 400).
           animate({
               width: "5%",
           }, 200).
           animate({
               left: "900px",
               top: "300px",
           }, 800).
           animate({
               left: "1280px",
               top: "650px",
           }, 1200).
           delay(1300+p1).
           animate({
               opacity: "0",
           },300); 
           
           $("#next1").css("opacity", "0.0");
           $("#next1").
           delay(3700).
           animate({
               "top": "320px",
               "opacity": "1",
           }, 1000).
           delay(300+p1).
           animate({
               opacity: "0",
           },300);
           
//ANIMATE SCREEN 2
           $("#screen2").css("opacity", "0.0");
           $("#screen2").
           delay(5300+p1).
           animate({
               opacity: "1",
           }, 1000);
           
           $("#filamenttext").css("opacity", "0.0");
           $("#filamenttext").
           delay(6300+p1).
           animate({
               opacity: "1",
               top: "20px",
           }, 400).
           delay(2900+p1+p2).
           animate({
               opacity: "0",
           },400);
           
            $(".filimg").css("opacity", "0.0");
           $(".filimg").
           delay(6300+p1).
           animate({
               opacity: "1",
               margin: "20px 30px",
           },400).
            delay(2900+p1+p2).
           animate({
               opacity: "0",
           },400);
           
           $("#filamentresult").css("opacity", "0.0");
           $("#filamentresult").
           delay(7300+p1).
           animate({
               opacity: "1",
           },400).
            delay(1900+p1+p2).
           animate({
               opacity: "0",
           },400);
           
           var random = Math.floor(Math.random()*3);
//           alert(random);
           
           if (random == 0){
               var color = "p";
               $("#filimgresult").attr("src", "niknakgraphics/pinkfilament.png");
               $("#filpink").css("width", "230px");
               $("#filtext").html("Pink, like the red spinners we offer, offers a much needed pop of lighthearted color to a potentially stressful day.");
               $("#api").attr("src","niknakgraphics/peditapi.png");
               $("#apispinner").attr("src","niknakgraphics/pedit.png");
               $("#screen3").css("background-color","#4ac1d2");
               $("#printer").attr("src", "niknakgraphics/pprinter.png");
               $("#screen4").css("background-color","#4ac1d2");
               $("#hammer").attr("src", "niknakgraphics/phammer.png");
               $("#construct").attr("src", "niknakgraphics/pconstruct.png");
//               alert("hi");
           }
           if (random == 1){
               var color = "b";
               $("#filimgresult").attr("src", "niknakgraphics/bluefilament.png");
               $("#filblue").css("width", "230px");
               $("#filtext").html("Blue, similar to our turquoise and navy colors, will help calm and focus the mind so you can get back to your important work!");
               $("#api").attr("src","niknakgraphics/beditapi.png");
               $("#apispinner").attr("src","niknakgraphics/bedit.png");
               $("#screen3").css("background-color","#ffce00");
               $("#screen4").css("background-color","#ffce00");
               $("#printer").attr("src", "niknakgraphics/bprinter.png");
               $("#hammer").attr("src", "niknakgraphics/bhammer.png");
               $("#construct").attr("src", "niknakgraphics/bconstruct.png");
           }
           if (random == 2){
               var color = "y"
               $("#filimgresult").attr("src", "niknakgraphics/yellowfilament.png");
               $("#filyellow").css("width", "230px");
               $("#filtext").html("Yellow, like our white and silver spinners, is a bright splash of fresh perspective in a day that needs some focus.");
               $("#api").attr("src","niknakgraphics/yeditapi.png");
               $("#apispinner").attr("src","niknakgraphics/yedit.png");
               $("#screen3").css("background-color","#f93d6e");
               $("#screen4").css("background-color","#f93d6e");
               $("#printer").attr("src", "niknakgraphics/yprinter.png");
               $("#hammer").attr("src", "niknakgraphics/yhammer.png");
               $("#construct").attr("src", "niknakgraphics/yconstruct.png");
           }
           $("#fildesc").css("opacity", "0.0");
           $("#fildesc").
           delay(7300+p1).
           animate({
               opacity: "1",
           },400).
           delay(1900+p1+p2).
           animate({
               opacity: "0",
           },400);

           
////  ANIMATE SCREEN 3
        $("#screen3").css("opacity", "0");
        $("#screen3").
        delay(10000+p1+p2).
        animate({
            opacity: "1",
        }, 1000);
           
        $("#api").css("opacity", "0").
        delay(11100+p1+p2).
        animate({
            opacity: "1",
            "margin-left": "30px",
        },300).
        delay(4500+p1+p2+p3).
        animate({
            opacity: "0",
        }, 500);
          
        $("#apitext").css("opacity", "0").
        delay(11400+p1+p2).
        animate({
            opacity: "1",
            "margin": "230px 10px",
        },300).
        delay(4200+p1+p2+p3).
        animate({
            opacity: "0",
        }, 500);
    
        $("#apispinner").css("opacity", "0").
        delay(11800+p1+p2).
        animate({
            opacity: "1",
        }, 400).
        animate({
            left: "600px",
        }, 500).
        animate({
            top: "300px",
        },500).
        delay(400).
        animate({
            width: "300px",
        },500).
        delay(1800+p1+p2+p3).
        animate({
            opacity: "0",
        }, 500);
           
        $("#next3").css("opacity", "0");
        $("#next3").
        delay(14000+p1+p2).
        animate({
            opacity: "1",
            right: "130px",
        }, 1000).
        delay(900+p1+p2+p3).
        animate({
            opacity: "0",
        }, 500);

//ANIMATE SCREEN 4
           $("#screen4").css("opacity", "0");
           $("#screen4").
           delay(16400+p1+p2+p3).
            animate({
                opacity: "1",
           }, 1000);
           
           $("#printer").css("opacity", "0");
           $("#printer").
           delay(17400+p1+p2+p3).
           animate({
               opacity: "1",
               margin: "30px 180px",
           }, 400).
           delay(2600+p1+p2+p3+p4).
           animate({
               opacity: "0",
           }, 500);
       
           $("#printertext").css("opacity", "0");
           $("#printertext").
           delay(17600+p1+p2+p3).
           animate({
               opacity: "1",
               right: "120px",
           }, 400).
           delay(2400+p1+p2+p3+p4).
           animate({
               opacity: "0",
           }, 500);
           
           $("#next4").css("opacity", "0");
           $("#next4").
           delay(17900+p1+p2+p3).
           animate({
               opacity: "1",
               bottom: "550px",
           }, 400).
           delay(2100+p1+p2+p3+p4).
           animate({
               opacity: "0",
           }, 500);
//ANIMATE SCREEN 5
           $("#screen5").css("opacity", "0");
           $("#screen5").
           delay(20900+p1+p2+p3+p4).
            animate({
                opacity: "1",
           }, 1000);
           
           $("#hammer").css("opacity", "0").
           delay(21900+p1+p2+p3+p4).
           animate({
               opacity: "1",
               left: "220px",
           }, 400).
           animate({
               left: "400px",
           },1000).
           animate({
               top: "300px",
           },500).
           animate({
               top: "270px",
           },700).
           animate({
               top: "300px",
           },500);
           
           $("#construct").css("opacity", "0").
           delay(21900+p1+p2+p3+p4).
           animate({
               opacity: "1",
               margin: "440px 100px",
           }, 400);
           ;
           
           $("#constructiontext").css("opacity", "0").
           delay(22200+p1+p2+p3+p4).
           animate({
               opacity: "1",
               margin: "150px 10px",
           }, 400);
           
           $("#next5").css("opacity", "0").
           delay(22600+p1+p2+p3+p4).
           animate({
               opacity: "1",
               right: "260px",
           }, 400);
           
//ANIMATE SCREEN 6
           $("#screen6").css("opacity", "0");
           $("#screen6").
           delay(25000+p1+p2+p3+p4+p5).
            animate({
                opacity: "1",
           }, 1000);
           
           $("#hands").css("opacity", "0").
           delay(26200+p1+p2+p3+p4+p5).
           animate({
               opacity: "1",
               top: "380px",
           }, 400);
           
           $("#final").css("opacity", "0").
           delay(26700+p1+p2+p3+p4+p5).
           animate({
               opacity: "1",
               top: "320px",
           }, 400);
           
           $("#handstext").css("opacity", "0").
           delay(26000+p1+p2+p3+p4+p5).
           animate({
               opacity: "1",
           }, 400);
       });
        
//        MOVE NEXT
//        document.getElementById("california").addEventListener("click", function(){
//            document.getElementById("screen1").innerHTML = '<div id="screen2"><div id="filamenttext"><h1>Step 2: Choose a Filament Color</h1> Currently our spinners come in red, white, silver, turquoise, and navy blue!</div><div id="fil"><img id="filpink" class="filimg" src="niknakgraphics/pinkfilament.png"><img id="filblue" class="filimg" src="niknakgraphics/bluefilament.png"><img id="filyellow" class="filimg" src="niknakgraphics/yellowfilament.png"></div><div id="filamentresult"><img id="filimgresult" src="niknakgraphics/pinkfilament.png" alt="Your filament of choice"></div><div id="fildesc"><button id="next2"> Next </button></div></div>'
//        })
        