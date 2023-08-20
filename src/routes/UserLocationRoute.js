const express = require('express');
const { 
    createData, 
    updateData, 
    getUsers 
} = require('../controllers/UserLocationController');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User Location Route');
});

router.post('/create_data', createData);
router.patch('/update_data/:id', updateData);
router.get('/get_users/:N', getUsers);

module.exports = router;