import React, {Component} from 'react';
import './Blog.css';
import Blog from './Blog';
import Navbar from './Navbar';
import Grid from '@material-ui/core/Grid'
//import { ActivityIndicator, View } from 'react-native'

var token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcmF0aWsuci5nYXdhbGlAZ21haWwuY29tIiwiZXhwIjoxNTg0OTM3NjkwLCJpYXQiOjE1ODQ5MDE2OTB9.qxlQigUaMQ2cbItJ98BI7aU89mbbariR2Di6sc2loCQ'

class BlogList extends Component {

    state  = {
        isLoading : true,
        blogs : []
    }

    constructor() {
        super()
        this.getAPICall()
    }

    getAPICall = () => {
        return fetch('http://localhost:8080/api/posts', {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        })
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
                isLoading : false,
                blogs : responseJson,
            })
          })
          .catch((error) => {
            console.error(error);
          });
      }
    
    render() {
        if(this.state.isLoading) {
            return(
              <div>
                  <h1>"Wait for content to fetch"</h1>
              </div>
            )
        }
        return (
            <div className="wrapper">
                <Navbar/>
                {this.state.blogs ? ( 
                    <div style={{flexGrow: 1, backgroundColor: '#F1F1F1'}}>
                        <Grid container>
                            {this.state.blogs.map(currentBlog => (
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

/*
<View style={{flex: 1, padding: 20}}>
    <ActivityIndicator/>
</View>
*/