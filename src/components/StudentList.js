import React, { Component } from 'react';
import axios from 'axios';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents = () => {
    axios.get('https://myapp-3-m27w.onrender.com/api/students')
      .then((res) => {
        this.setState({ students: res.data.students });
      })
      .catch((err) => console.log(err));
  };

  handleDelete = (id) => {
    axios.delete(`https://myapp-3-m27w.onrender.com/api/students/${id}`)
      .then(() => {
        this.fetchStudents();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="student-list">
        <h2>Student List</h2>
        <ul>
          {this.state.students.map(student => (
            <li key={student.student_id}>
              {student.name} - {student.grade}
              <button onClick={() => this.handleDelete(student.student_id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentList;
