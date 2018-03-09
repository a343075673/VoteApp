import * as mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: String,
  vote: Number
});

const Item = mongoose.model('Item', itemSchema);

export default Item;


