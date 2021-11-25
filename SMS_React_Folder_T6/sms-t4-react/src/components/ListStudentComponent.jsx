import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ListStudentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            students: []
        }
        this.addStudent = this.addStudent.bind(this);
    }

    addStudent(){
        this.props.history.push('add-student/add');
    }

    componentDidMount() {
        StudentService.getStudents().then((res) => {
            this.setState({ students: res.data });
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Students List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Student Fist Name</th>
                                <th>Student Last Name</th>
                                <th>Student Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.students.map(
                                    student =>
                                        <tr key={student.id}>
                                            <td> {student.firstName} </td>
                                            <td> {student.lastName} </td>
                                            <td> {student.emailId} </td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListStudentComponent;