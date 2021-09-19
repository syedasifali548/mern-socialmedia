import { useState,useEffect } from 'react';
import {Container,Grow,Grid} from '@material-ui/core'
import Form from '../Form/Form' 
import Posts from '../Posts/Posts';
import {useDispatch} from 'react-redux'
import {getPosts} from '../../actions/posts'
const Home = () =>{ 
    const dispatch = useDispatch();
    const [currentId , setCurrentId] = useState(0)
    useEffect(()=>{
      dispatch(getPosts());
    },[currentId,dispatch])
    
    return(
        <Grow in>
        <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={1}>
              <Grid xs={12} sm={4} >
                  <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
                <Grid xs={12} sm={7} >
                    <Posts  setCurrentId={setCurrentId}/>
                    </Grid> 
            </Grid>
        </Container>
    </Grow>

    );
}
export default Home;