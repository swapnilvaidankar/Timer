import React from "react";
import Component from "react";

class TimerDashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <EditableTimerList />
          <ToggableTimerForm isOpen={true} />
        </div>
      </div>
    );
  }
}
class EditableTimerList extends Component{
  render(){
    return(
      <div id="timers">
        <EditableTImer
          title="Learn React"
          project="Web Domiation"
          elapsed="8986300"
          runningSince = {null}
          editFormOpen = {false}
      />
        <EditableTImer
          title="Learn Extreme ironing"
          project = "world domination"
        />
      </div>
    );
  }
}
export module TimerDashboard;
