import React, {Component} from 'react';
import './Blog.css';
import Blog from './Blog';
import Navbar from './Navbar';
import Grid from '@material-ui/core/Grid'

class BlogList extends Component {

    state  = {
        courses : ["blog1", "blog2","blog3","blog4","blog5","blog5","blog6","blog7","blog8","blog9","blog10"]
    }
    
    render() {
        return (
            <div class="wrapper">
                <Navbar/>
                {this.state.courses ? ( 
                    <div style={{flexGrow: 1, backgroundColor: '#F1F1F1'}}>
                        <Grid container>
                            {this.state.courses.map(currentBlog => (
                                <Grid item >
                                     <Blog blog={currentBlog} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found!"}
            </div>
        )
    }
}


export default BlogList;

