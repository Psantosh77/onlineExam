import React, { useEffect, useState } from "react";
import questionData from "../data/question";
import { useNavigate } from "react-router-dom";

const QuestionPage = () => {
    const navigate = useNavigate();

  const [isRadio, setIsRadio] = useState();
  const [countQuestion, setCountQuestion] = useState(1);
  const [question, setQuestion] = useState(questionData);
  const [result, setResult] = useState(0);
  const [random, setRandom] = useState([])
  const [randomStatus, setRandomStatus] = useState(false)
 



  const [unqueQuestion, setUniqueQuestion] = useState(null);




  useEffect(() => {

     if(random.length > 0) {
       let fiterQuestion = question.filter((item) => item.id === random[countQuestion-1] );
       setUniqueQuestion(fiterQuestion);
      }
  }, [countQuestion]);

  const handleChange = (e) => {
    setIsRadio(+e.currentTarget.value);
  };



  
  useEffect(() => {
    console.log("QionPage");

    function generateUniqueRandomArray(quantity, max) {
      const arr = [];
      while (arr.length < quantity) {
        const candidateInt = Math.floor(Math.random() * max) + 1;
        if (!arr.includes(candidateInt)) {
          arr.push(candidateInt);
        }
      }
      console.log("Page");
      return arr;
    }

    if (random.length === 0) {
      const randomArray = generateUniqueRandomArray(question.length, question.length);
      setRandom(randomArray);
    }
  }, [questionData, random]);
       
    

  const handleNext = () => {
    question.forEach((item) => {
      console.log(item);
      console.log(unqueQuestion[0].id - 1);
      if (item.id === unqueQuestion[0].id) {
        question[unqueQuestion[0].id - 1].userAns = isRadio;
      }
    });

    if (
      question[unqueQuestion[0].id - 1].userAns ===
      question[unqueQuestion[0].id - 1].CorrectAnswer
    ) {
      setResult(result + 1);
    }

    if (countQuestion < question.length) {
      setCountQuestion(countQuestion + 1);
    } else {
         navigate("/results" ,  {
          state: {
            result: result
          }
      })
      setCountQuestion(1);
    }
  };

  return (
    <>
      <div
        class="container-fluid d-flex justify-content-center align-items-center p-2 "
        style={{ backgroundColor: "#025464" }}
      >
        <h1 class="display-4 text-white">Online Examination</h1>
      </div>

      <div class="container-fluid">
        <div class="container text-start">
          {unqueQuestion?.map((item, index) => {
            return (
              <>
                <div class="row ">
                  <div class="col-2">Question {countQuestion}.</div>

                  <div class="col-8">
                    <div class="row justify-content-center align-items-center g-2">
                      <div class="col">{item.questionText}</div>
                    </div>
                    <div class="row justify-content-center align-items-center g-2">
                      <div class="col">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="option1"
                            id="option1"
                            value="1"
                            onChange={handleChange}
                            checked={isRadio === 1}
                          />
                          <label class="form-check-label" for="option1">
                            {item.optionText1}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center align-items-center g-2">
                      <div class="col">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            id="option2"
                            value="2"
                            name="option2"
                            onChange={handleChange}
                            checked={isRadio === 2}
                          />
                          <label class="form-check-label" for="option2">
                            {item.optionText2}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center align-items-center g-2">
                      <div class="col">
                        <div class="col">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="option3"
                              id="option3"
                              value="3"
                              onChange={handleChange}
                              checked={isRadio === 3}
                            />
                            <label class="form-check-label" for="option3">
                              {item.optionText3}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row justify-content-center align-items-center g-2">
                      <div class="col">
                        <div class="col">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="option4"
                              id="option4"
                              value="4"
                              onChange={handleChange}
                              checked={isRadio === 4}
                            />
                            <label class="form-check-label" for="option4">
                              {item.optionText4}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                {

                }
                    <button
                      className="btn btn-primary"
                      onClick={() => handleNext()}
                    >
                      Next
                    </button>

                    <button
                      className="btn btn-primary"
                      onClick={() => handleNext()}
                    >
                      Submit
                    </button>


                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
