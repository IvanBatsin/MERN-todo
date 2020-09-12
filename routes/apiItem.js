const {Router} = require('express');
const router = Router();
const path = require('path');

const Item = require(path.join(__dirname, '../', 'models', 'Item'));

router.get('/', async (req, res) => {
  try {
    const items = await Item.find().sort({date: -1});
    res.json(items);
  } catch (err) {
    res.status(500).json({message:'Server error'});
  }
});

router.post('/create', async (req, res) => {
  const {name} = req.body;
  try {
    const item = new Item({name});
    await item.save();
    res.status(201);
  } catch (err) {
    res.status(404).json({message:'Date error'});
  }
});

router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await Item.findByIdAndDelete(id);
    const items = await Item.find().sort({date: -1});
    res.json(items);
  } catch (err) {
    res.status(404).json({message:'Date error'});
  }
});

module.exports = router;