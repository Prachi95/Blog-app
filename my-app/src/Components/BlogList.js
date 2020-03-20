import React, {Component} from 'react';
import './Blog.css';
import Blog from './Blog';
import Navbar from './Navbar';
import Grid from '@material-ui/core/Grid'
//import { ActivityIndicator, View } from 'react-native'


const jsonResponse = [
    {
        "id": "7f1df38e-c120-499d-8806-f90ebc63b234",
        "title": "How much do you value solitude in your life?",
        "content": "Have you ever noticed how most of us automatically start browsing our cell phones whenever we feel alone at a party? There might not be anything relevant to browse, but we still keep looking at the phone. Why? Because most of us are afraid of being alone. When we are with someone, we feel occupied. When we are alone, we feel restless and start fidgeting around to find something to do, be it looking at the cell phone or watching television. I find solitude the most important and underrated aspect in life. When I am with others, I am simply passing time. But the time when I am alone is the time when I am truly making the most of my time. Solitude gives me the chance to think deep, plan and utilize my time to the most. I spend most of my free time sitting alone in cafes, when I can think and do something productive. I like taking evening walks completely alone, because that gives me a chance to just refresh my thoughts and regain energy. Being with others will always consume your energy, while being alone will give you a chance to rejuvenate that energy. When someone asks me how I find time to do so many things, I tell them to start spending less time with others and more time with yourself. You will realize that you suddenly have a lot of free time to think, plan and act. You will feel more energised and productive. There is nobody who can be a better companion for you than yourself.",
        "views": 69407,
        "upVotes": 4002,
        "createdAt": "2020-03-01T21:54:52.544+0000",
        "lastModifiedAt": "2020-03-03T21:56:25.923+0000",
        "user": {
            "id": "92ae5f19-60e7-496b-bc9f-d71de83d1ce6",
            "firstName": "Pratik",
            "lastName": "Gawali",
            "emailId": "pratik.r.gawali@gmail.com",
            "credentials": "Developer",
            "imageId": null
        }
    },
    {
        "id": "7f1df38e-c120-499d-8806-f90ebc63b234",
        "title": "How much do you value solitude in your life?",
        "content": "Have you ever noticed how most of us automatically start browsing our cell phones whenever we feel alone at a party? There might not be anything relevant to browse, but we still keep looking at the phone. Why? Because most of us are afraid of being alone. When we are with someone, we feel occupied. When we are alone, we feel restless and start fidgeting around to find something to do, be it looking at the cell phone or watching television. I find solitude the most important and underrated aspect in life. When I am with others, I am simply passing time. But the time when I am alone is the time when I am truly making the most of my time. Solitude gives me the chance to think deep, plan and utilize my time to the most. I spend most of my free time sitting alone in cafes, when I can think and do something productive. I like taking evening walks completely alone, because that gives me a chance to just refresh my thoughts and regain energy. Being with others will always consume your energy, while being alone will give you a chance to rejuvenate that energy. When someone asks me how I find time to do so many things, I tell them to start spending less time with others and more time with yourself. You will realize that you suddenly have a lot of free time to think, plan and act. You will feel more energised and productive. There is nobody who can be a better companion for you than yourself.",
        "views": 69407,
        "upVotes": 4002,
        "createdAt": "2020-03-13T21:54:52.544+0000",
        "lastModifiedAt": "2020-03-18T21:56:25.923+0000",
        "user": {
            "id": "92ae5f19-60e7-496b-bc9f-d71de83d1ce6",
            "firstName": "Pratik",
            "lastName": "Gawali",
            "emailId": "pratik.r.gawali@gmail.com",
            "credentials": "Developer",
            "imageId": null
        }
    },
    {
        "id": "7f1df38e-c120-499d-8806-f90ebc63b234",
        "title": "How much do you value solitude in your life?",
        "content": "Have you ever noticed how most of us automatically start browsing our cell phones whenever we feel alone at a party? There might not be anything relevant to browse, but we still keep looking at the phone. Why? Because most of us are afraid of being alone. When we are with someone, we feel occupied. When we are alone, we feel restless and start fidgeting around to find something to do, be it looking at the cell phone or watching television. I find solitude the most important and underrated aspect in life. When I am with others, I am simply passing time. But the time when I am alone is the time when I am truly making the most of my time. Solitude gives me the chance to think deep, plan and utilize my time to the most. I spend most of my free time sitting alone in cafes, when I can think and do something productive. I like taking evening walks completely alone, because that gives me a chance to just refresh my thoughts and regain energy. Being with others will always consume your energy, while being alone will give you a chance to rejuvenate that energy. When someone asks me how I find time to do so many things, I tell them to start spending less time with others and more time with yourself. You will realize that you suddenly have a lot of free time to think, plan and act. You will feel more energised and productive. There is nobody who can be a better companion for you than yourself.",
        "views": 69407,
        "upVotes": 4002,
        "createdAt": "2020-03-13T21:54:52.544+0000",
        "lastModifiedAt": "2020-03-13T21:56:25.923+0000",
        "user": {
            "id": "92ae5f19-60e7-496b-bc9f-d71de83d1ce6",
            "firstName": "Pratik",
            "lastName": "Gawali",
            "emailId": "pratik.r.gawali@gmail.com",
            "credentials": "Developer",
            "imageId": null
        }
    }
    
]

/*function getAPICall() {
    return fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
            isLoading : false,
            blogs : responseJson.items
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }*/

class BlogList extends Component {

    state  = {
        isLoading : false,
        blogs : jsonResponse
    }

    /*
    constructor() {
        super()
        this.getAPICall()
    }

    getAPICall = () => {
        return fetch('http://localhost:8080/api/posts',
            {mode : 'no-cors'})
          .then((response) => response)
          .then((responseJson) => {
            this.setState({
                isLoading : false,
                blogs : responseJson.items,
            })
          })
          .catch((error) => {
            console.error(error);
          });
      }
    */

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