import React, { Component } from 'react'
import "./Input.css";

class Input extends Component{
  state = {
      commentInput:"",
  }

  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
  }

    hanaudleFormSubmit = event => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      if (!this.state.commentInput) {
    //    window.M.toast({html: "Please enter a comment before submitting!", classes: 'cyan'});
        alert(`What's wrong with you.. you need to input something!`)
      } else {
          //to do .. add this to database rather than fakeComments Array above
          //when we do this, we will not need to pass id, that will come from the db
        // API.createComment({
        //     comment:this.state.commentInput,
        //     gistId: this.props._id, 
        //     author: this.props.user._id
        //   }).then(this.props.method)


        // Example GET request
        fetch('https://thisisntreal/stuff')
            .then(stuff => {
                console.log(`do stuff to ${stuff}`)
            })

        // Example POST
        fetch('https://thisisntreal/newnums', {
                method: 'POST',
                body: {
                    num1: this.state.num1,
                    num2: this.state.num2,
                    oper: this.state.oper
                    }
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                throw new Error(err)
            })
      
      }
      
      this.setState({
        commentInput: ""
      });
    };
  
  render(){
      return (
          <div>
          <div>
          <label htmlFor="comment">Enter Math Problem</label>

          <form className={"form " + this.props.hide}>
 
            <div className="form-inner">
                <input
                    value={this.state.commentInput}
                    name="commentInput"
                    onChange={this.handleInputChange}
                    type="text"
                />
           
              <button classname="btn-1"
                  type="submit"
                  name="action"
                  onClick={this.handleFormSubmit}
                  >
                    <span>Submit</span>
                 </button>
                 </div>
          
             <div>
             <button classname="btn-2"
                 type="reset"
                 name="action"
                 onClick={this.handleFormSubmit}
                 >
                   <span>Clear</span>
                 </button>
                 </div>

              </form>

              <h2 className="gist-comment">Comments </h2>
              <div>
              {/* {this.props.comments.map(comment => (
                  <Comment
                      key={comment._id}
                      comment={comment.comment}
                      authorName={comment.author.name}
                      date = {comment.date}
                  />
              ))} */}
              </div>
              
              

          </div>

    

          </div>
      )

  }
}

export default Input; 