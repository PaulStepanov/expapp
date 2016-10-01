/**
 * Created by pili on 9/28/16.
 */
var mongoose = require('mongoose');
let conf = require('../config/config');
mongoose.connect(conf.get('mongodb:uri'));
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    var pepaSchema = mongoose.Schema({
        name: {
            type: String,
            unique: true,
            index: true,
        },
        kitty: {
            type: String,
            ref: 'kittens'
        },
        age: {type: Number, min: 18, max: 65}
    });

    pepaSchema.methods.mymeth = function () {
        // console.log(this.name+'\n'+this);
    };
    var kittyShema = mongoose.Schema({
        name: String,
        age: Number
    });
    var Kitty = mongoose.model('kittens', kittyShema)
    pepaSchema.virtual('getname').get(function () {
        return this.name;
    });
    var dima;
    var query = Kitty.where({name: 'dima'});
    query.findOne((err, data)=> {
        console.log(data);
        dima = new Pepas({
            name: 'new2',
            age: 38,
            kitty: data
        });
        dima.save((err)=>console.log(err));
        Pepas.find(function (err, obj) {
            if (err) throw err;
            console.log(obj);
        })
    });
    var Pepas = mongoose.model('pepas', pepaSchema);
    ;


    // console.log(Kitten.find());
});