import React, { Component } from 'react'
import SideBar from './SideBar';

export default class Main extends Component {

    state = {
        boxes: [
            { id: 1, title: 'box 1'},
            { id: 2, title: 'box 2'},
            { id: 3, title: 'box 3'},
            { id: 4, title: 'box 4'},
        ],
        activeBoxes:[1, 2, 3, 4]
    }

    handelToggleBtn = (id) => {
        let activeBoxes = [...this.state.activeBoxes];
        if(activeBoxes.includes(id)) {
            activeBoxes.splice(activeBoxes.indexOf(id),1)
        } else {
            activeBoxes.push(id);
        }
        this.setState(state => {
            return {
                ...state,
                activeBoxes
            }
        })
    }
    


  render() {

   

    let boxes = this.state.boxes.map(box => {
        if(this.state.activeBoxes.includes(box.id)) {
            return <div className="box">{box.title}</div>
        }
        
    })
            return (
               <React.Fragment>
                   <SideBar
                   handelToggle ={this.handelToggle}
                    boxes={this.state.boxes}
                    activeBoxes={this.state.activeBoxes} />
                    <div className="box-wrapper">
                        {boxes}
                    </div>
               </React.Fragment>
            )
  }
}
