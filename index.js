const express = require('express')

const app = express();
const PORT = 5000;
const card =[{
    id:'1',
    number:'4466',
},{
    id:'2',
    number:'1466',
},{
    id:'3',
    number:'3456',
},{
    id:'4',
    number:'9867',
},{
    id:'5',
    number:'0978',
},{
    id:'6',
    number:'5008',
},{
    id:'7',
    number:'9008',
},{
    id:'8',
    number:'12328',
},{
    id:'9',
    number:'2348',
},{
    id:'10',
    number:'0228',
}];
app.get('/card/:id', function (req, res) {
//   res.send(JSON.stringify(card.find((card) => card.id == req.params.id)));
  const user = card.find((card) =>card.id == req.params.id);

  if (!user) {
    res.status(404).send(user);
  }
  res.status(202).json(user);
});


app.listen(PORT,(err)=>{
    if(!err){
        console.log('one')
    }
})