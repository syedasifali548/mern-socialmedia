import React from "react";
import { Card,CardActions,CardContent,Button,Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizonIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import useStyles from './styles'
import { useDispatch } from "react-redux";
import { deletePost,likePost } from '../../../actions/posts'

const Post = ({post,setCurrentId})=>{
  const dispatch = useDispatch();  
  const classes = useStyles();
    return(
    <Card className={classes.card}>
        {/* <CardMedia className={classes.media}  /> */}
        <img src={post.selectedFile || 'https://cdn.wallpapersafari.com/1/17/ZMBC10.jpg' } title={post.title}/>
        <div className={classes.overlay}>
          <Typography variant='h6'>{post.creater}</Typography>
          <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizonIcon fontSize="medium" /></Button>
        </div>
        <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
          <CardActions className={classes.cardActions}>
              <Button size='small' color='secondary' onClick={()=>dispatch(likePost(post._id))}>
            <ThumbUpAltIcon fontSize='small'/>
            &nbsp; Like &nbsp;
             {post.likeCount}
              </Button>
              <Button size='small' color='secondary' onClick={()=>dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize='small'/>
            Delete
           
              </Button>
          </CardActions>
    </Card>

    );
};
export default Post;