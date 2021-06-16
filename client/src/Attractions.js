import React, { Component } from 'react';
import axios from 'axios';
import {BACKEND_URL} from './config'
import './Viewattrac.css'


const Attraction = (props) => {
    return (
        <div className='allAttractions'>
            <div className='attractionsCard'>
                <div className='cardImage'> 
                <div className='attraction-h2'>{props.attraction.name}</div>
                    <img className='attractionImage' src={props.attraction.imageURL} alt='attraction' />
                </div>
                <div>
                   
                    <div className='attractionDescription'>{props.attraction.description}</div>
                    <a className='website' href={props.attraction.website} target="_blank" rel="noreferrer">Visit</a>
                </div>
            </div>
        </div>
    )
}

     
 
export default class Attractions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attractions:[],
            loading: true
        };
    }
    componentDidMount() {
        axios.get(BACKEND_URL + 'attractions/')
        .then(response => {
            this.setState({
                attractions: response.data,
                loading: false
            })
            console.log('this is the list of attractions')
        })
        .catch((error) => {
            console.log(error)
        });
    }
    attractionsList() {
        return this.state.attractions.map((currentAttraction) => {
            return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
        })
    }

    render() {
        return (
            this.state.loading === false ? (
                <div className='attractionsr'>
           
                <div className='attractionsContainer'>
                         
  
                    <div className='attractionsInnerContainer'>
  
   <div className='jumbotron-fluid'>
                          <div className='headerz'>                   
  
                        <h1 className='display-4'>Atrractions Around The Queen City</h1>  </div>
                        </div>
                        {this.attractionsList()}
                    </div>
                </div>
                </div>
            ) : (
                <div>
                    <h1 className="loading-spinner">Loading...</h1>
                </div>
            )
        )
    }
}