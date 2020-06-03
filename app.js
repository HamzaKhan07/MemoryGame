function game()
{
    var arr=["man.png","electronics.png","technology.png","man.png","electronics.png","technology.png"];
    var arr1=["flame.png","player.png","roll-o-plane.png","seo-and-web.png","wild-life.png","world.png",
    "flame.png","player.png","roll-o-plane.png","seo-and-web.png","wild-life.png","world.png"];

    var arr2=["ball3.png","bird3.png","jungle3.png","kite3.png","medal3.png","melon3.png","mobile3.png",
              "music3.png","ball3.png","bird3.png","jungle3.png","kite3.png","medal3.png","melon3.png","mobile3.png",
              "music3.png"];

    var img1=0,img2=0;
    var p1=0, p2=0;
    var dup=[];
    var win=-1;
    var count=0;
    var level=1;
    var select=[];
    document.querySelector(".again").addEventListener("click",function(){
        location.reload();
    });
    
    updateBox();

    function updateBox()
    {
        if(level==1)
        {
            for(var m=1; m<=6; m++)
            {
                var num=getRandom(0,5);
                var l=0;
                while(l<select.length)
                {
                    if(select[l]==num)
                    {
                        num=getRandom(0,5);
                        l=-1;
                    }
                    l++;
                }
                select.push(num);
            }
        console.log(select); 
        }
        else if(level==2)
        {
            for(var m=1; m<=12; m++)
            {
                var num=getRandom(0,11);
                var l=0;
                while(l<select.length)
                {
                    if(select[l]==num)
                    {
                        num=getRandom(0,11);
                        l=-1;
                    }
                    l++;
                }
                select.push(num);
            }
        console.log(select); 
        }
        else if(level==3)
        {
            for(var m=1; m<=16; m++)
            {
                var num=getRandom(0,15);
                var l=0;
                while(l<select.length)
                {
                    if(select[l]==num)
                    {
                        num=getRandom(0,15);
                        l=-1;
                    }
                    l++;
                }
                select.push(num);
            }
        console.log(select); 
        }
        
    }
    
    cards=document.querySelectorAll(".card");

    for(var i=0; i<cards.length; i++)
    {
        var card=cards[i];
        card.addEventListener("click",change);
    }
    function change(event)
    {
        var parent=event.target;
        var pd=parent.parentElement;
        var rand=getRandom(0,5);

        //to allow only dublicates in array
        /*rand=checkdup(rand);

        dup.push(rand);
        parent.src=arr[rand];*/

        if(level==1)
        {
            if(parent.classList.contains("image1"))
            {
                console.log("img1");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr[select[0]];
                },500);
                
               
            }
            else if(parent.classList.contains("image2"))
            {
                console.log("img2");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr[select[1]];
                },500);
                
            }
            else if(parent.classList.contains("image3"))
            {
                console.log("img3");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr[select[2]];
                },500);
            }
            else if(parent.classList.contains("image4"))
            {
                console.log("img2");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr[select[3]];
                },500);
            }
            else if(parent.classList.contains("image5"))
            {
                console.log("img1");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr[select[4]];
                },500);
            }
            else if(parent.classList.contains("image6"))
            {
                console.log("img0");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr[select[5]];
                },500);
            }
        
        }
        else if(level==2)
        {
            if(parent.classList.contains("image1"))
            {
                console.log("img1");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr1[select[0]];
                },500);
            }
            else if(parent.classList.contains("image2"))
            {
                console.log("img2");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr1[select[1]];
                },500);
            }
            else if(parent.classList.contains("image3"))
            {
                console.log("img3");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr1[select[2]];
                },500);
            }
            else if(parent.classList.contains("image4"))
            {
                console.log("img4");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr1[select[3]];
                },500);
            }
            else if(parent.classList.contains("image5"))
            {
                console.log("img5");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr1[select[4]];
                },500);
            }
            else if(parent.classList.contains("image6"))
            {
                console.log("img6");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr1[select[5]];
                },500);
            }
            else if(parent.classList.contains("image7"))
            {
                console.log("img7");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr1[select[6]];
                },500);
            }
            else if(parent.classList.contains("image8"))
            {
                console.log("img8");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr1[select[7]];
                },500);
            }
            else if(parent.classList.contains("image9"))
            {
                console.log("img9");
                parent.src=arr1[select[8]];
            }
            else if(parent.classList.contains("image10"))
            {
                console.log("img10");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr1[select[9]];
                },500);
            }
            else if(parent.classList.contains("image11"))
            {
                console.log("img11");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr1[select[10]];
                },500);
            }
            else if(parent.classList.contains("image12"))
            {
                console.log("img12");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr1[select[11]];
                },500);
            }
        }
        else if(level==3)
        {
            if(parent.classList.contains("image1"))
            {
                console.log("img1");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[0]];
                },500);
            }
            else if(parent.classList.contains("image2"))
            {
                console.log("img2");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[1]];
                },500);
            }
            else if(parent.classList.contains("image3"))
            {
                console.log("img3");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[2]];
                },500);
            }
            else if(parent.classList.contains("image4"))
            {
                console.log("img4");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[3]];
                },500);
            }
            else if(parent.classList.contains("image5"))
            {
                console.log("img5");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[4]];
                },500);
            }
            else if(parent.classList.contains("image6"))
            {
                console.log("img6");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[5]];
                },500);
            }
            else if(parent.classList.contains("image7"))
            {
                console.log("img7");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[6]];
                },500);
            }
            else if(parent.classList.contains("image8"))
            {
                console.log("img8");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[7]];
                },500);
            }
            else if(parent.classList.contains("image9"))
            {
                console.log("img9");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[8]];
                },500);
            }
            else if(parent.classList.contains("image10"))
            {
                console.log("img10");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[9]];
                },500);
            }
            else if(parent.classList.contains("image11"))
            {
                console.log("img11");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[10]];
                },500);
            }
            else if(parent.classList.contains("image12"))
            {
                console.log("img12");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[11]];
                },500);
            }
            else if(parent.classList.contains("image13"))
            {
                console.log("img13");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[12]];
                },500);
            }
            else if(parent.classList.contains("image14"))
            {
                console.log("img14");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[13]];
                },500);
            }
            else if(parent.classList.contains("image15"))
            {
                console.log("img15");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[14]];
                },500);
            }
            else if(parent.classList.contains("image16"))
            {
                console.log("img16");
                pd.style.animation="flip 1s ease";
                pd.addEventListener('animationend',function(){
                    this.style.animation='';
                });
                setTimeout(function(){
                    parent.src=arr2[select[15]];
                },500);
            }
        }
        
        setTimeout(function(){
            if(img1==0)
        {
            img1=parent.src;
            p1=parent;
        }
        else
        {
            console.log("else");
            img2=parent.src;
            p2=parent;
            win=checkwin(img1,img2);
        }
        console.log("Img1=" +img1);
        console.log("Img2="+ img2);
        
        if(win==0)
        {
            img1=0;
            img2=0;
            setTimeout(function(){
                p1.parentElement.style.animation='rflip 1s ease';
                p2.parentElement.style.animation='rflip 1s ease';
                setTimeout(function(){
                    p1.src="interface.png";
                    p2.src="interface.png";
                },300);
            },2000); 
            win=-1; 
        }
        else if(win==1)
        {
            img1=0;
            img2=0;
            win=-1;
        }
        checknext();
        },1000);
    }
    function checkdup(rand)
    {
        var i=0;
        var num=rand;

        while(i<dup.length)
        {
            if(num==dup[i])
            {
                num=getRandom(0,5);
                i=-1;
            }
            i++;
        }
        return num;
    }
    function getRandom(min,max)
    {
        var num=Math.floor(Math.random()*(max-min+1))+min;
        return num;
    }
    function checkwin(img1,img2)
    {
        obj1=img1;
        obj2=img2;

        if(obj1!=obj2)
        {
            console.log("not win");
            dup.pop();
            dup.pop();
            return 0;
        }
        else
        {
            console.log("win");
            p1=0;
            p2=0;
            count++;
            console.log(count);
            return 1;
            
        }
    }
    function checknext()
    {
        setTimeout(function(){
            if(count==3 && level==1)
             {
                 //empty select array
                 console.log(select.length);
                 var n=0;
                 while(n<select.length)
                 {
                     select.pop();
                 }
                 console.log(select.length);

                var allImg=document.querySelectorAll(".img");

                for(var i=0; i<allImg.length; i++)
                {
                    allImg[i].src="interface.png";
                }
                count=0;
                img1=0;
                img2=0;
                p1=0;
                p2=0;
                win=-1;

                document.querySelector(".card7").style.display="flex";
                document.querySelector(".card8").style.display="flex";
                document.querySelector(".card9").style.display="flex";
                document.querySelector(".card10").style.display="flex";
                document.querySelector(".card11").style.display="flex";
                document.querySelector(".card12").style.display="flex";

                level++;
                updateBox();
            }
            else if(count==6 && level==2)
            {
                console.log("Level 3");
                 //empty select array
                 console.log(select.length);
                 var n=0;
                 while(n<select.length)
                 {
                     select.pop();
                 }
                 console.log(select.length);

                var container=document.querySelector(".cards");
                container.style.gridTemplateColumns="repeat(4,1fr)";

                var allImg=document.querySelectorAll(".img");

                for(var i=0; i<allImg.length; i++)
                {
                    allImg[i].src="interface.png";
                }
                count=0;
                img1=0;
                img2=0;
                p1=0;
                p2=0;
                win=-1;

                document.querySelector(".card13").style.display="flex";
                document.querySelector(".card14").style.display="flex";
                document.querySelector(".card15").style.display="flex";
                document.querySelector(".card16").style.display="flex";

                level++;
                updateBox();
            }
            else if(count==8 && level==3)
            {
                var cont=document.querySelector(".container");
                var cont2=document.querySelector(".container2");
                cont.style.display="none";
                cont2.style.display="block";
            }
        },3000);
        

    }
    /* Work
       Animations
       Check the functionality of container2 */
}
game();