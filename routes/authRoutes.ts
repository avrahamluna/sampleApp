/**
 * Created by Abe on 14/02/2017.
 */
import {Router} from 'express'

var router = Router();

router.post('/signup', function(req:Request, res:Response){
    res.send('signup called')
})

router.post('/signin', function(req, res){
    res.send('signin called')
})

router.get('/me', function(req,res){
    res.send('me called')

})

export default router;
