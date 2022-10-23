import React, { Component } from 'react';
import {db, storage} from '../database';
import { collection, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
class GridMemes extends Component {
    gridElements=[]
    state={memes: [], gridElements: []}
    componentDidMount(){
       let meme;
        getDocs(collection(db, "memes")).then((querySnapshot)=> {
            this.setState({...this.state, memes:querySnapshot.docs
                .map(doc=>doc.data()) }) 
                console.log(this.state.memes);
                            for(meme in this.state.memes){
                 const storageRef = ref(storage)
                getDownloadURL(storageRef).then(url=>{
                    console.log(url);
                    this.gridElements=this.state.gridElements;
                    this.gridElements.push(<div className="grid-element"><img src={url}/></div>)         
                    this.setState({...this.state, gridElements: this.gridElements} );
                })
        }


        }
        
        
        )
        
                

    }
    render() {
        return (
        <div className='grid-memes'>
            {
                this.state.gridElements
            }
        </div>
        );
    }
}

export default GridMemes;
