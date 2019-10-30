$(document).ready(function() {
    $("body").addClass("js");
    //dialog pop up 
    $("#character .dialog-trigger, #dialogone .closebtn").click(function(event) {
        $("body").toggleClass("show-dialogone");
        event.preventDefault();
    });

    $("#charactertwo .dialog-trigger, #dialogtwo .closebtn").click(function(event) {
        $("body").toggleClass("show-dialogtwo");
        event.preventDefault();
    });

    //scroll up
    $("#up").click(function(up){
        up.preventDefault();
        $("html, body").animate({"scrollTop": "0px"}, 1000);
    })

    //overview paragraph hiden
    $("#overview p").hide();
    $("#overview ul").hide();
    $('#overview h2').click(function(){
        $(this).next().slideToggle(300);
    });

    //Gallery Btn
    var indexNum = 0; 

    $('.block .content').hide();

    $('.block .btn').click(function(){
        $(this).next().slideToggle(100);
        $(this).text("Hide info", indexNum);
        indexNum++;
        if (indexNum%2 == 0)
        $(this).text("More Info");
    });

    //codegame trigger
    $(".crackcode #codeform").hide();
    $('.crackcode h2').click(function(){
        $('#codeform').slideToggle(300);
    });
    
    //hide answer
    $("#answer1").hide();
    $("#answer2").hide();
    //show the answer
    $('#show1').click(function(){
        $("#answer1").show();
    });
    $('#show2').click(function(){
        $("#answer2").show();
    });
    //codegame 
    $("#codeform form").submit(function(event) {
        event.preventDefault();

        var correct = false;

        var correctAnswer = $(this).attr("data-answer");

        console.log("correctAnswer", correctAnswer);

        var userGuess = $(this).find("input").val();
        console.log("User Guess" + userGuess);
        var message="";
        var messageColour="";
        if (userGuess.toLowerCase() == correctAnswer.toLowerCase()){
            message="You're genuis! Correct answer!";
            correct = true;
        }
        else {
            message="Wrong answer. Hint: Fibonacci numbers(The Renaissance Man/Artwork).";
        }

        console.log("message", message);

        if (correct) {
            // do something if correct
            alert(message)

        } else {
            // do something else if not correct
            alert(message)
        }
    });
    //tabnav
    $(".panel .tabnav button").click(function(){
        console.log("worked")
        //figure out which panel to show 
        var panelToShow = $(this).attr('rel');
       
        console.log("rel", panelToShow);
        //hide current panel 
        $('.panel .tabcontent.active').slideUp(0,showNextOne);
        function showNextOne(){
            $(this).removeClass('active');
            $('#'+panelToShow).slideDown(1000,function(){
                $(this).addClass('active');
            })
        }    
    }); 
});

