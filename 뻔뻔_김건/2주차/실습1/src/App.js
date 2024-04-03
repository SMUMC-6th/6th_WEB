import React from 'react';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      doneTasks: []
    };
  }

  addTask = (taskText) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, taskText]
    }));
  };

  moveTask = (index) => {
    const { tasks, doneTasks } = this.state;
    const taskToMove = tasks[index];
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task, i) => i !== index),
      doneTasks: [...prevState.doneTasks, taskToMove]
    }));
  };

  render() {
    return (
      <div id="container">
        <div id="title">UMC Study Plan</div>
        <div id="inputContainer">
          <input
            type="text"
            id="taskInput"
            placeholder="UMC 스터디 계획을 작성해보세요!"
            style={{ width: '70%' }}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                const taskText = event.target.value.trim();
                if (taskText !== '') {
                  this.addTask(taskText);
                  event.target.value = '';
                }
              }
            }}
          />
        </div>
        <div id="listsContainer">
          <div className="list" id="todoList">
            <h3>해야 할 일</h3>
            {this.state.tasks.map((task, index) => (
              <div key={index} className="task">
                {task}
                <button
                  className="completeBtn"
                  onClick={() => this.moveTask(index)}
                >
                  완료
                </button>
              </div>
            ))}
          </div>
          <div className="list" id="doneList">
            <h3>해낸 일</h3>
            {this.state.doneTasks.map((task, index) => (
              <div key={index} className="task">
                {task}
                <button
                  className="deleteBtn"
                  onClick={() =>
                    this.setState((prevState) => ({
                      doneTasks: prevState.doneTasks.filter(
                        (_, i) => i !== index
                      )
                    }))
                  }
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
