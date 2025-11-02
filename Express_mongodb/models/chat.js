  const mongoose = require('mongoose');


  let chatSchema=new mongoose.Schema(
    {
        from:
        {
             type:String,
             required:true
        },
        to:
        {
              type:String,
               required:true
        },
        msg:
        {
               type: String,
               maxLength:50

        },
        create_at:
        {
                   type:Date,
                    required:true
        }
    }
  );


  let chat=mongoose.model("chat",chatSchema);

  module.exports=chat;


  /**
   * This file does not connect to the database.
It’s only the blueprint that describes what a Chat looks like.
   */