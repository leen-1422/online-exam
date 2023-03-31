document.getElementsByClassName('question-content')[0].style.display ="block";
        function next(id){
            document.getElementsByClassName('question-content')[id-1].style.display ="none";
            document.getElementsByClassName('question-content')[id].style.display ="block";

        }
        function result(){
            var score=0;
            if(document.getElementById('correct1').checked)
            {
                score++;
            }
            if(document.getElementById('correct2').checked)
            {
                score++;
            }
            if(document.getElementById('correct3').checked)
            {
                score++;
            }

            document.write("you got:"+score+"answers correct");
        }