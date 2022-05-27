var answer;
var score = 0;
var backgroundimages = [];
    function nextQuestion() {
        const n1 = Math.floor(Math.random() * 4);
        document.getElementById('n1').innerHTML = n1;
        const n2 = Math.floor(Math.random() * 5);
        document.getElementById('n2').innerHTML = n2;
        answer = n1 + n2;

    }

    function checkAnswer() {
        const prediction = predictImage();
        console.log(`Answer: ${answer}, Prediction: ${prediction}`);

        if (prediction == answer) {
            score++;
            console.log(`Score: ${score}, Correct`)
            if (score <= 6) {
            backgroundimages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundimages;
            }
        else {
            alert('Well done');
            score = 0;
            backgroundimages = [];
            document.body.style.backgroundImage = backgroundimages;
        }
        }
        else {
           if (score != 0) {
           score--;
           backgroundimages.pop();
           document.body.style.backgroundImage = backgroundimages;
           }
            console.log(`Score: ${score}, Wrong`);
        }


        }

