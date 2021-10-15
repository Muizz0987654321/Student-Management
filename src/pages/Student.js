import React, { Component } from "react";
import { variables } from "./Variable.js";

export class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: [],
      students: [],
      modalTitle: "",
      Student_Id: 0,
      Student_Name: "",
      Student_Dateofbirth: "",
      Student_Email: "",
      Student_Age: "",
      Class_Id: "",
    };
  }

  refreshList() {
    fetch(variables.API_URL + "student")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ students: data });
      });

      fetch(variables.API_URL + "class")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ classes: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  changeStudentName = (e) => {
    this.setState({ Student_Name: e.target.value });
  };

  changeStudentDateofbirth = (e) => {
    this.setState({ Student_Dateofbirth: e.target.value });
  };

  changeStudentEmail = (e) => {
    this.setState({ Student_Email: e.target.value });
  };

  changeStudentAge = (e) => {
    this.setState({ Student_Age: e.target.value });
  };

  changeStudentClassId = (e) => {
    this.setState({ Class_Id: e.target.value });
  };

  addClick() {
    this.setState({
      modalTitle: "Add Student",
      Student_Id: 0,
      Student_Name: "",
      Student_Dateofbirth: "",
      Student_Email: "",
      Student_Age: "",
      Class_Id: "",
    });
  }
  editClick(std) {
    this.setState({
      modalTitle: "Edit Student",
      Student_Id: std.Student_Id,
      Student_Name: std.Student_Name,
      Student_Dateofbirth: std.Student_Dateofbirth,
      Student_Email: std.Student_Email,
      Student_Age: std.Student_Age,
      Class_Id: std.Class_Id,
    });
  }


  createClick() {
    fetch(variables.API_URL + "student", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Student_Name: this.state.Student_Name,
        Student_Dateofbirth: this.state.Student_Dateofbirth,
        Student_Email: this.state.Student_Email,
        Student_Age: this.state.Student_Age,
        Class_Id: this.state.Class_Id,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  updateClick() {
    fetch(variables.API_URL + "student", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Student_Id: this.state.Student_Id,
        Student_Name: this.state.Student_Name,
        Student_Dateofbirth: this.state.Student_Dateofbirth,
        Student_Email: this.state.Student_Email,
        Student_Age: this.state.Student_Age,
        Class_Id: this.state.Class_Id,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  deleteClick(id) {
    if (window.confirm("Are you sure?")) {
      fetch(variables.API_URL + "student/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            alert(result);
            this.refreshList();
          },
          (error) => {
            alert("Failed");
          }
        );
    }
  }

  render() {
    const {
      classes,
      students,
      modalTitle,
      Student_Id,
      Student_Name,
      Student_Dateofbirth,
      Student_Email,
      Student_Age,
      Class_Id,
    } = this.state;
    return (
      <div>
        <h3>This is Student page</h3>

        {/* Adding button */}
        <button
          type="button"
          className="btn btn-primary m-2 float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => this.addClick()}
        >
          Add Student
        </button>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Student Name</th>
              <th scope="col">Student Date of Birth</th>
              <th scope="col">Student Email</th>
              <th scope="col">Student Age</th>
              <th scope="col">Class</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((std) => (
              <tr key={std.Student_Id}>
                <th scope="row">{std.Student_Id}</th>
                <td>{std.Student_Name}</td>
                <td>{std.Student_Dateofbirth}</td>
                <td>{std.Student_Email}</td>
                <td>{std.Student_Age}</td>
                <td>{std.Class_Id}</td>
                <td>
                  {/* Adding button */}
                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.editClick(std)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    onClick={() => this.deleteClick(std.Student_Id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal class*/}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalTitle}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">Student Name</span>
                  <input
                    type="text"
                    className="form-control"
                    value={Student_Name}
                    onChange={this.changeStudentName}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">
                    Student Date Of Birth
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    value={Student_Dateofbirth}
                    onChange={this.changeStudentDateofbirth}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Student Email</span>
                  <input
                    type="text"
                    className="form-control"
                    value={Student_Email}
                    onChange={this.changeStudentEmail}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Student Age</span>
                  <input
                    type="text"
                    className="form-control"
                    value={Student_Age}
                    onChange={this.changeStudentAge}
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">Class</span>
                  <select
                    className="form-select"
                    onChange={this.changeStudentClassId}
                    value={Class_Id}
                  >
                    {classes.map((clss) =>
                      <option key={clss.Class_Id}>{clss.Class_Name}</option>
                    )}
                  </select>
                </div>

                {Student_Id == 0 ? (
                  <button
                    type="button"
                    className="btn btn-primary float-start"
                    onClick={() => this.createClick()}
                  >
                    Create
                  </button>
                ) : null}

                {Student_Id != 0 ? (
                  <button
                    type="button"
                    className="btn btn-primary float-start"
                    onClick={() => this.updateClick()}
                  >
                    Update
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
