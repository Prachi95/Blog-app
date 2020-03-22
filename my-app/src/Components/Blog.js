import React from 'react';
import './Blog.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import moment from "moment";
import { isLoggedIn } from '../Utils/UserAuthentication';
import { useHistory } from "react-router-dom";
import AppPaths from "../AppPaths";


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '60%',
    margin: `${theme.spacing(1)}px auto`,
    textAlign: 'justify',
    backgroundColor: '#FFFFFF',
    borderColor: '#DEE0E1',
    borderStyle: 'solid',
    borderWidth: 0.1,
  },
  cardSpacing: {
    marginTop: -25,
  },
  title: {
    fontSize: 20,
    color: '#000000',
  },
  username: {
    fontSize: 13,
    color: '#000000'
  },
  extras: {
    fontSize: 12,
    color: '#969691'
  },
  button: {
    margin: theme.spacing(1),
    color:'#969691',
  },
  link: {
    color: '#1F61A8',
  },
}));

//styling for tool tip
const useStylesForTooltip = makeStyles(theme => ({
  arrow: {
    color: '#000000',
  },
  tooltip: {
    backgroundColor: '#000000',
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesForTooltip();
  return <Tooltip arrow classes={classes} {...props} />;
}

//methods to calculate time difference
function getLastUpdatedTime(postUpdatedTime) {   
  var now = new Date();
  var then = Date.parse(postUpdatedTime)

  const startDate = moment(then);
  const timeEnd = moment(now);
  const diff = timeEnd.diff(startDate);
  const diffDuration = moment.duration(diff);

  //var date = moment(postUpdatedTime).utc().format('MMM d, YYYY')
  var date = moment(postUpdatedTime).utc().format('YYYY-MM-DD')
  return getTimeDuration(date, diffDuration.asDays(), diffDuration.asHours(), diffDuration.asMinutes(), diffDuration.asSeconds())
}

function getTimeDuration(date, days, hours, mins, seconds) {
  var dt = date
  var d = parseInt(days, 10)
  var h = parseInt(hours, 10)
  var m = parseInt(mins, 10)
  var s = parseInt(seconds, 10)
  var time = ""

  if (d >= 1 && d < 7) {
    time = "Updated "+ d.toString() +" days ago"
  } else if (h >= 1 && h < 24) {
    time = "Updated "+ h.toString() +" hours ago"
  } else if (m >= 1 && m< 60) {
    time = "Updated "+ m.toString() +" minutes ago"
  } else if (s >= 1 && s < 60) {
    time = "Updated "+ s.toString() +" seconds ago"
  } else {
    time = "Updated on " + dt
  }
   return time
}

function getLimitedText(contentText) {
  //showing first 300 chanracters
  var text = contentText.replace(/^(.{300}[^\s]*).*/, "$1");
  return text + "..."
}

const Blog = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const history = useHistory();

    const handleExpandClick = (event) => {
      //prevents scrolling to top when re-rendered the screen
      event.preventDefault();
      setExpanded(!expanded);
    };
    
    const handleUpvoteClick = (event) => {
      event.preventDefault();
      if (isLoggedIn()) {

      } else {
        history.push(AppPaths.SIGN_IN);
      }
    }

    return (
      <div className="wrapper">
        { props.blog ? (
            <Card className={classes.root} border={1}>
            <CardHeader
              title={ <Typography className={classes.title}><b>{props.blog['title']}</b></Typography> }
            />
            <CardHeader
                className={classes.cardSpacing} 
                avatar = { <Avatar src={require('./Images/img.jpg')}/> }
                title={ <Typography className={classes.username}>{props.blog['author']['firstName'] + " " + props.blog['author']['lastName']}</Typography> }
                subheader={ <Typography className={classes.extras}>{getLastUpdatedTime(props.blog['lastModifiedAt'])}</Typography> }
            />

            <CardContent className={classes.cardSpacing} > 
              <Typography className={classes.username}>  {expanded ? props.blog['content'] : getLimitedText(props.blog['content']) }
                <Link href="#" className={classes.link} onClick={handleExpandClick}>{expanded ? '(less)' : '(more)'}</Link>
              </Typography> 
            </CardContent>

            <CardActions disableSpacing className={classes.cardSpacing} >
              <BootstrapTooltip title="Upvotes" placement="top">
              <Button size="small" className={classes.button} onClick={handleUpvoteClick} startIcon={<ArrowUpwardIcon />}>{props.blog['upVotes']}</Button> 
            </BootstrapTooltip>
              <BootstrapTooltip title="Views" placement="top">
                  <Button size="small" className={classes.button} startIcon={<VisibilityIcon />}>{props.blog['views']}</Button> 
            </BootstrapTooltip>
          </CardActions>
          </Card>
          ) : null }
          
      </div>
    )
  
}

export default Blog;