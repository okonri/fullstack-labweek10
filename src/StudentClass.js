import React, { Component } from 'react'

export default class StudentClass extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            email:'', 
            name:'', 
            address:'', 
            address2:'', 
            city:'', 
            province:'', 
            postal:''
        }

    }

    readData = (event) =>{
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        })
    }

    submitData = (e) => {
        e.preventDefault()
        alert("Submit")
        console.log(JSON.stringify(this.state))
    }

    provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"]

    render() {
        return (
            <div>
                <div className="result">
                    <table>
                        <tr>
                            <td className="title">Email:</td>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            <td className="title">Name:</td>
                            <td>{this.state.name}</td>
                        </tr>
                        <tr>
                            <td className="title">Address:</td>
                            <td>{this.state.address} - {this.state.address2}</td>
                        </tr>
                        <tr>
                            <td className="title">City:</td>
                            <td>{this.state.city}</td>
                        </tr>
                        <tr>
                            <td className="title">Province:</td>
                            <td>{this.state.province}</td>
                        </tr>
                        <tr>
                            <td className="title">Postal Code:</td>
                            <td>{this.state.postal}</td>
                        </tr>
                    </table>
                </div>
                

                <form onSubmit={this.submitData}>

                    <table>
                        <tr><td><h1>Data Entry Form</h1></td></tr>
                        <tr>
                            <td>
                            <label>
                                Email<br/>
                                <input name="email" onChange={this.readData} placeholder="Enter email" type="text" />
                            </label>
                            </td>
                        
                            <td>
                                <label>
                                    Name<br/>
                                    <input name="name" onChange={this.readData} placeholder="Full Name" type="text" />
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="3"> 
                                <label>
                                    Address<br/>
                                    <input name="address" onChange={this.readData} placeholder="1234 Main St" type="text" />
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="3">
                                <label>
                                    Address 2<br/>
                                    <input name="address2" onChange={this.readData} placeholder="Apartment, studio, or floor" type="text" />
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label>
                                    City<br/>
                                    <input name="city" onChange={this.readData} placeholder=" " type="text" />
                                </label>
                            </td>
                        
                            <td>
                                <label>
                                    Province<br/>
                                    <select name="province" onChange={this.readData}>
                                    <option key="">Choose...</option>
                                    {
                                        //2
                                        this.provinces.map(v => {
                                            return (<option key={v}>{v}</option>)
                                        })
                                    }
                                    </select>
                                </label>
                            </td>

                            <td>
                                <label>
                                    Postal Code<br/>
                                    <input name="postal" onChange={this.readData} placeholder=" " type="text" />
                                </label>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="2">
                                <label>
                                    <input name="agree" onChange={this.readData} placeholder="" type="checkbox" />
                                    
                                    Agree Terms & Conditions?
                                </label>
                            </td>
                        </tr>
                    </table>

                
                
                
                
                
                <input type="submit" value="Submit"/>

                </form>
            </div>
        )
    }

    //Component lifecycle methods
    componentWillMount()
    {  
        console.log('Component Will MOUNT!')  
    }

    componentDidMount()
    {  
        console.log('Component Did MOUNT!')  
    }

    componentWillReceiveProps(newProps)
    {      
        console.log('Component Will Recieve Props!')  
    }

    shouldComponentUpdate(newProps, newState)
    {  
        console.log('Component shouldComponentUpdate!' + JSON.stringify(newState))
        return true;  
    }

    componentWillUpdate(nextProps, nextState)
    {  
        console.log('Component Will UPDATE!');  
    }

    componentDidUpdate(prevProps, prevState)
    {  
        console.log('Component Did UPDATE!')  
    }

    componentWillUnmount()
    {  
        console.log('Component Will UNMOUNT!')  
    }
}
