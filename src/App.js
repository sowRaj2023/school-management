import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import LoginWrapper from './components/LoginWrapper';
import StudentList from './components/StudentList';
import TeacherList from './components/TeacherList';
import AddStudent from './components/AddStudent';
import AddTeacher from './components/AddTeacher';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    return (
      <Router>
        <div className="App">
          {this.state.user && (
            <nav>
              <ul>
                <li><Link to="/students">Student List</Link></li>
                <li><Link to="/add-student">Add Student</Link></li>
                <li><Link to="/teachers">Teacher List</Link></li>
                <li><Link to="/add-teacher">Add Teacher</Link></li>
              </ul>
            </nav>
          )}
          <Routes>
            <Route path="/login" element={<LoginWrapper setUser={this.setUser} />} />
            {this.state.user ? (
              <>
                <Route path="/students" element={<StudentList />} />
                <Route path="/add-student" element={<AddStudent />} />
                <Route path="/teachers" element={<TeacherList />} />
                <Route path="/add-teacher" element={<AddTeacher />} />
                <Route path="*" element={<Navigate to="/students" />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;






