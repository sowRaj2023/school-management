import React, { Component } from 'react';
import axios from 'axios';

class TeacherList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
    };
  }

  componentDidMount() {
    this.fetchTeachers();
  }

  fetchTeachers = () => {
    axios.get('https://myapp-3-m27w.onrender.com/api/teachers')
      .then((res) => {
        this.setState({ teachers: res.data.teachers });
      })
      .catch((err) => console.log(err));
  };

  handleDelete = (id) => {
    axios.delete(`https://myapp-3-m27w.onrender.com/api/teachers/${id}`)
      .then(() => {
        this.fetchTeachers();
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="teacher-list">
        <h2>Teacher List</h2>
        <ul>
          {this.state.teachers.map(teacher => (
            <li key={teacher.teacher_id}>
              {teacher.name} - {teacher.subject}
              <button onClick={() => this.handleDelete(teacher.teacher_id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TeacherList;
