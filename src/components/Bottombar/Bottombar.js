import React from 'react';
import './bottombar.css';
import { placeholder } from '@babel/types';
import { axiosInstance } from "../../config";


// function Bottombar() {
//   return (
//     <div className="bottombar">
//       <form>
//         <label>
//           <input type="text" name="name" placeholder="Type a message..."/>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }
// const username = localStorage.getItem("username");
class Bottombar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.value) {
      return
    } else {
      const { activeRoomId, username, newMessageAdded } = this.props;
      axiosInstance.post(`/rooms/${activeRoomId}/messages`,
        {
          name: username,
          message: this.state.value,
        })
        .then((res) => {

          newMessageAdded();
        })

        .catch((err) => {
          //alert(err.message);
        })
        this.setState({value: ""});
    }
  }

  render() {
    return (
      <div className="form-container">
        <form className="chat-form">
          <div class="bottomWrapper">
              <div className="left">
                <textarea value={this.state.value} placeholder="Type your message..." onChange={this.handleChange} />
              </div >
            <div className="right">
              <button type="button" className="btn btn-light" onClick={this.handleSubmit}>Send</button>
            </div>
          </div>
        </form>
      </div>

    );
  }
}

export default Bottombar;
