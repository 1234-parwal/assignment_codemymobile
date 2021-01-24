'use strict';
var dbConn = require('./../../config/db.config');

var User = function(user) {
    this.id = user.id;
    this.first_name =  user.first_name;
    this.last_name= user.last_name;
    this.avatar = user.avatar;
};
 
User.findById = function( id,result) {
    dbConn.query("Select * from users where id= ? ", id,function(err,res){
        if(err) {
            console.log("error :",err);
            result(err,null);
        }
        else {
            result(null,res);
        }
    });
};

// User.getAllFriends = function (id,result) {
//     dbConn.query("SELECT initiator_user_id,receiver_user_id  FROM friendsbook.friendships WHERE (initiator_user_id =? OR receiver_user_id=?) AND status=1", id,id,function(err,res) {
//         if(err) {
//             console.log("error:" err);
//             result(err,null);
//         }
//         else {
//             result(null,res);
//         }
//     });
// };
module.exports = User;
