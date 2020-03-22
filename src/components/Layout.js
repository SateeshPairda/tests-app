import React from 'react';
import Some from '../assets/css/Some.css';
import Header from './Header';
import Drag from './drag'
 class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                    <div class="sidenav">
                        <a href="#about"><i class="fa fa-th-large" aria-hidden="true" ></i></a>
                        <a href="#services"><i class="fa fa-calendar-check-o" aria-hidden="true"></i></a>
                        <a href="#clients"><i class="fa fa-suitcase" aria-hidden="true"></i></a>
                        <a href="#contact"><i class="fa fa-cog" aria-hidden="true"></i></a>
                        <a href="#contact"><i class="fa fa-bullhorn" aria-hidden="true"></i></a>
                        <a href="#contact"><i class="fa fa-truck" aria-hidden="true" ></i></a>
                        <a href="#contact" class="pie"><i class="fa fa-pie-chart" aria-hidden="true"></i></a>
                        <a href="#contact"><i class="fa fa-cog" aria-hidden="true" ></i></a>
                     </div>               
                            <div class="nav" >
                                <p style={{color:"black",fontSize:"20px"}}>create loads</p>
                                <input type="text"  value="search by load #"class="somes"></input>
                                <i class="fa fa-search" aria-hidden="true"></i>                        
                            </div>
                            <div class="navs" style={{float:"right",marginTop:"-10px"}}>
                                <input type="text"  class="tags"></input>
                                <i class="fa fa-calendar-minus-o" aria-hidden="true"></i>
                               
                                    <input type="text"  value="To"class="tags"></input>
                                    <i class="fa fa-calendar-minus-o" aria-hidden="true"></i>
                                </div>
                                <div class="nav">
                                    <i class="fa fa-eye" aria-hidden="true" style={{marginTop:"-15px"}}></i>
                                    <input type="text"  value="watch list "class="tags"></input>
                                    <i class="fa fa-chevron-down" aria-hidden="true" style={{marginTop:"-20px"}}></i>
                                    
                                </div>
                                
                 {/* <AppDragDrop/> */}
                 <Drag/>
                                 
            </div> 
                        
                
            
        )
    }
}
export default Layout;