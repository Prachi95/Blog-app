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
import Collapse from '@material-ui/core/Collapse';


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


const username = 'Pratik Gawali'
const title = 'Title of Blog'
const lastModified = 'Last updated: 9 th March,2020'
const message = `SAP Labs are SAP's core R&D entities, developing and constantly improving key SAP 
solutions. These research and development locations are strategically located in high-tech clusters 
around the globe and reflect SAP's culture of diversity and innovation. SAP Labs are SAP's core R&D 
entities, developing and constantly improving key SAP solutions.`
const otherInfo = `SAP Labs are SAP's core R&D entities, developing and constantly improving key SAP 
solutions. These research and development locations are strategically located in high-tech clusters 
around the globe and reflect SAP's culture of diversity and innovation.`
const upvotes = '50+'
const views = '60'
/*
return (
      <div class="wrapper">
        <card className={classes.root} border={1}>
          <CardHeader
            title={ <Typography className={classes.title}><b>{title}</b></Typography> }
          />
          <CardHeader
              className={classes.cardSpacing} 
              avatar = { <Avatar src={require('./Images/img.jpg')}/> }
              title={ <Typography className={classes.username}>{username}</Typography> }
              subheader={ <Typography className={classes.extras}>{lastModified}</Typography> }
          />
          <CardContent className={classes.cardSpacing} >
            <Typography className={classes.username}> {message} 
              <Link href="#" className={classes.link} onClick={handleExpandClick}>(more)</Link>
            </Typography>     
          </CardContent>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography className={classes.username} paragraph>
                {otherInfo}
              </Typography>
            </CardContent>
          </Collapse>
          <CardActions disableSpacing className={classes.cardSpacing} >
            <BootstrapTooltip title="Upvotes" placement="top">
            <Button size="small" className={classes.button} startIcon={<ArrowUpwardIcon />}>{upvotes}</Button> 
          </BootstrapTooltip>
            <BootstrapTooltip title="Views" placement="top">
                <Button size="small" className={classes.button} startIcon={<VisibilityIcon />}>{views}</Button> 
          </BootstrapTooltip>
        </CardActions>
        </card>
      </div>
    )
    */

const Blog = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
      <div class="wrapper">
        { props.blog ? (
            <card className={classes.root} border={1}>
            <CardHeader
              title={ <Typography className={classes.title}><b>{props.blog['title']}</b></Typography> }
            />
            <CardHeader
                className={classes.cardSpacing} 
                avatar = { <Avatar src={require('./Images/img.jpg')}/> }
                title={ <Typography className={classes.username}>{props.blog['user']['firstName'] + " " + props.blog['user']['lastName']}</Typography> }
                subheader={ <Typography className={classes.extras}>{props.blog['lastModifiedAt']}</Typography> }
            />
            <CardContent className={classes.cardSpacing} >
              <Typography className={classes.username}> {props.blog['content']} 
                <Link href="#" className={classes.link} onClick={handleExpandClick}>(more)</Link>
              </Typography>     
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography className={classes.username} paragraph>
                  {otherInfo}
                </Typography>
              </CardContent>
            </Collapse>
            <CardActions disableSpacing className={classes.cardSpacing} >
              <BootstrapTooltip title="Upvotes" placement="top">
              <Button size="small" className={classes.button} startIcon={<ArrowUpwardIcon />}>{props.blog['upVotes']}</Button> 
            </BootstrapTooltip>
              <BootstrapTooltip title="Views" placement="top">
                  <Button size="small" className={classes.button} startIcon={<VisibilityIcon />}>{props.blog['views']}</Button> 
            </BootstrapTooltip>
          </CardActions>
          </card>
          ) : null }
          
      </div>
    )
  
}

export default Blog;
