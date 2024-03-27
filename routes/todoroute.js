const {Router} = require('express');
const { gettododata, savetododata, updatetododata, deletedatabyid } = require('../controller/todocontroller');
const router = Router()


router.get('/getlist' , gettododata)
router.post('/savetodo' , savetododata)
router.post('/updatedata' ,updatetododata)
router.delete('/deletebyid',deletedatabyid)
module.exports  = router;