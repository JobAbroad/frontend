import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table } from 'reactstrap'

import './Job.css';
import Applied from '../assets/applied.svg'
import { getJobs } from './JobActions'

export class JobList extends Component {

    componentWillMount() {
        this.props.getJobs()
    }

    renderList() {
        const jobList = this.props.jobList || []
        return jobList.map(job => (
            <tr key={job.id}>
                {job.status === 'APPLIED' ? <td><img src={Applied} className="applied-icon" alt="applied" /></td> : <td></td> }
                <td> {job.description} </td>
                <td> {job.title} </td>
                <td> {job.companyId} </td>
                <td>
                    <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal" onClick={() => this.showUpdate(job)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    &nbsp;
                    <button type="button" className='btn btn-danger' onClick={() => this.props.remove(job)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                    &nbsp;
                    <button type="button" className='btn btn-primary' data-toggle="modal" data-target="#myModal" onClick={() => this.addjob()}>
                        <i className='fa fa-plus'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <Table dark>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Job</th>
                            <th>Title</th>
                            <th>Company</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ jobList: state.job.jobList })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getJobs }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(JobList)
