const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  details{
          firstName: {type: String, required: true},
          lastName: {type: String, required: true},
          email: {type: String, required: true},
          phone: {type: Number, required: true},
          password: {type: String, required: true},
          addresses: [
            {
              street: {type: String, required: true},
              city: {type: String,  required:true}
            }
          ]
          isDeleted: {
            type: Boolean,
            default: false
          }
        }
  cart[ {
          productId: {type:String, required:true},
          discount: {type:Number},
          totalPrice: {type:Number, required:true}
        }
      ]

  orders[ {
          orderId: {type:String, required:true}
          }
        ]

});

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
