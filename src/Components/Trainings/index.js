import React, { Component } from 'react';
import './styles.css';
import answer1 from "../../../public/images/answer1.png";
import answer2 from "../../../public/images/answer2.png";
import answer3 from "../../../public/images/answer3.png";
import answer4 from "../../../public/images/answer4.png";

class Trainings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lesson: 1,
      course: "DC Theory",
      unitName: "Electric Basics",
      lessonTitle: "Course Start",
      mlScreen: "001",
      AnsclassName: "row col-sm-12",
      correctAnswer: "hide row col-sm-12",
      hideResetButton: 1,
    }
    this.handleClick = this.handleClick.bind(this);
    this.backClick = this.backClick.bind(this);
    this.drop = this.drop.bind(this);
    this.allowDrop = this.allowDrop.bind(this);
    this.drag = this.drag.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClick() {
    this.setState({lesson: 0});
    this.setState({lessonTitle: "Lesson 14 - Open, Closed, and Shorted Circuit"});
    this.setState({mlScreen: "006"});
    this.setState({correctAnswer: "hide row col-sm-12"});
  }
  backClick() {
    this.setState({lesson: 1});
    this.setState({lessonTitle: "Course Start"});
    this.setState({mlScreen: "001"});
    this.setState({AnsclassName: "row col-sm-12"});
    this.setState({hideResetButton: 1});
  }
  handleSubmit() {
    const answer1 = document.getElementById("spanContainer1").childNodes.length;
    const answer2 = document.getElementById("spanContainer2").childNodes.length;
    const answer3 = document.getElementById("spanContainer3").childNodes.length;
    const answer4 = document.getElementById("spanContainer4").childNodes.length;
    const allDone = answer1 + answer2 + answer3 + answer4;
    const ans1 = document.getElementById("answer1").childNodes;
    const ans2 = document.getElementById("answer2").childNodes;
    const ans3 = document.getElementById("answer3").childNodes;
    const ansArray1 = [];
    const ansArray2 = [];
    const ansArray3 = [];
    if(allDone > 4) {
      alert("Finish the lesson before submitting your answers!");
    }

    Array.prototype.containsArray = function ( array /*, index, last*/ ) {

        if( arguments[1] ) {
            var index = arguments[1], last = arguments[2];
        } else {
            var index = 0, last = 0; this.sort(); array.sort();
        };

        return index == array.length
            || ( last = this.indexOf( array[index], last ) ) > -1
            && this.containsArray( array, ++index, ++last );

    };

    //Checking what answers first container has
    for(var i=0; i < ans1.length; i++) {
      ansArray1.push(ans1[i].id);
    }
    //Checking what answers second container has
    for(var j=0; j < ans2.length; j++) {
      ansArray2.push(ans2[j].id);
    }
    //Checking what answers third container has
    for(var k=0; k < ans3.length; k++) {
      ansArray3.push(ans3[k].id);
    }

    const correctAns1 = ["drag1", "drag2"];
    const correctAns2 = ["drag4"];
    const correctAns3 = ["drag3"];
    const result1 = ansArray1.containsArray(correctAns1);
    const result2 = ansArray2.containsArray(correctAns2);
    const result3 = ansArray3.containsArray(correctAns3);

    if(result1 && result2 && result3) {
      this.setState({hideResetButton: 0});
      this.setState({AnsclassName: "hide row col-sm-12"});
      this.setState({correctAnswer: "correctAnsContainer row col-sm-12"})

    }
    console.log("Checking if answers are correct: ", result1, result2, result3);
    console.log("User answers: ", ansArray1, ansArray2, ansArray3);
    console.log("Correct answers: ", correctAns1, correctAns2, correctAns3);

    this.handleReset();
  }
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  allowDrop(ev) {
    ev.preventDefault();
  }
  drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }
  handleReset() {
    const span1 = document.getElementById("drag1");
    const span2 = document.getElementById("drag2");
    const span3 = document.getElementById("drag3");
    const span4 = document.getElementById("drag4");
    document.getElementById("spanContainer1").appendChild(span1);
    document.getElementById("spanContainer2").appendChild(span2);
    document.getElementById("spanContainer3").appendChild(span3);
    document.getElementById("spanContainer4").appendChild(span4);
  }
  render() {
    return (
      <div className="course-container row">
         <form className="form form-inline" role="form">
          <div className="hidden-xs col-sm-3 form-group">
            <label className="col-sm-3 control-label">Course: </label>
            <div>
              <input type="text" className="form-control" id="course" value={this.state.course} />
            </div>
          </div>
          <div className="hidden-xs col-sm-3 form-group">
            <label className="col-sm-4 control-label">Unit Name: </label>
            <div>
              <input type="text" className="form-control" id="course" value={this.state.unitName} />
            </div>
          </div>
          <div className="hidden-xs col-sm-3 form-group">
            <label className="col-sm-4 control-label">Lesson Title: </label>
            <div>
              <input type="text" className="form-control" id="course" value={this.state.lessonTitle} />
            </div>
          </div>
          <div className="hidden-xs col-sm-3 form-group">
            <label className="col-sm-4 control-label">ML screen: </label>
            <div>
              <input type="number" className="form-control" id="course" value={this.state.mlScreen} />
            </div>
          </div>
        </form><hr />
        { this.state.lesson  ?
          <div>
            <div className="image-container col-sm-12 row">
              <img src="./images/course.png" alt="intro" />
            </div>
            <div className="row col-sm-12">
              <button type="button" className="btn btn-primary" onClick={this.handleClick}>Skip</button>
            </div></div>
            :
            <div className="col-sm-offset-1 col-sm-10">
              <div className="row lesson-title col-sm-12">
                <h4 className="col-sm-offset-3 col-sm-6">Take a look at the four different circuit layouts. Drag and drop correct answer(A, B, C or D) onto correct category of Circuit Paths:</h4>
              </div>
              <div className={this.state.correctAnswer}>Great! All answers are correct!</div>
              <div id="lessonContainer" className={this.state.AnsclassName}>
                <div className="col-xs-3">
                  <div id="answer1" onDrop={this.drop} onDragOver={this.allowDrop}>Open Circuit</div>
                  <div id="answer2" onDrop={this.drop} onDragOver={this.allowDrop}>Closed Circuit</div>
                  <div id="answer3" onDrop={this.drop} onDragOver={this.allowDrop}>Shorted Circuit</div>
                </div>
                <div className="col-xs-9">
                  <div className="answers-row row col-xs-12">
                    <div className="col-xs-6" id="spanContainer1"><img src={answer1} alt="answer 1"/><span id="drag1" draggable="true" onDragStart={this.drag}>A </span></div>
                    <div className="col-xs-6" id="spanContainer2"><img src={answer2} alt="answer 2" /><span id="drag2" draggable="true" onDragStart={this.drag}>B </span></div>
                  </div>
                  <div className="answers-row row col-xs-12">
                    <div className="col-xs-6" id="spanContainer3"><img src={answer3} alt="answer 3" /><span id="drag3" draggable="true" onDragStart={this.drag}>C </span></div>
                    <div className="col-xs-6" id="spanContainer4"><img src={answer4} alt="answer 4" /><span id="drag4" draggable="true" onDragStart={this.drag}>D </span></div>
                  </div>
                </div>
              </div>

              <div className="button-container btn-group btn-group-justified" role="group" aria-label="...">
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-default" onClick={this.backClick}>Back</button>
              </div>
              <div className="btn-group" role="group">
              {this.state.hideResetButton ? <button type="button" className="btn btn-default" onClick={this.handleReset}>Reset</button> : null}
              </div>
              <div className="btn-group" role="group">
                {this.state.hideResetButton ? <button type="button" className="btn btn-default" onClick={this.handleSubmit}>Submit</button> : null}
                {!this.state.hideResetButton ? <button type="button" className="btn btn-default">Next</button> : null}
              </div>
            </div>
            </div>
          }
      </div>
    );
  }
}

export default Trainings;
