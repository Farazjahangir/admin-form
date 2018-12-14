import React, { Component } from 'react'
import './addAdmin.css'

class addAdmin extends Component {
  render() {
    return (
      <div className="container-fluid my-5">
        <h1 className="text-center">Add Admin</h1>
        <form className="admin-form mx-auto">
          <div className="form-group">
            <label htmlFor="u-name">Username</label>
            <input type="text" id="u-name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Password</label>
            <input type="text" id="pass" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="conatct-num">Contact Number</label>
            <input type="text" id="conatct-num" className="form-control" />
          </div>
          <div className="form-group">
            <label>Select Role</label>
            <select className="form-control">
              <option value="s-admin">Super Admin</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <input type="submut" value="Add Admin" className="btn btn-primary" />
        </form>
      </div>
    )
  }
}

export default addAdmin
