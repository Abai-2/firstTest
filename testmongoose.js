const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const schema={
    name:String,
    age:Number,
    health:String
}
const mydata = mongoose.model('cats', schema);

// const kitty = new mydata({ name: 'Zildjian2' });
// kitty.save().then(() => console.log('meow'));
// const kitty1 = new mydata({ name: 'ian3' ,age:1,health:'good'});
// kitty1.save().then(() => console.log('new schema'));

mydata.find({name:'Zildjian2'},(err,data)=>{console.log(data[0]._doc.name)})

