import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

// As with other collections
export const SimpleTasks = new Mongo.Collection('simpleTasks');

if(Meteor.isServer){
  Meteor.publish('simpleTasks', function simpleTasksPublication(){
    return SimpleTasks.find();
  })
}

let Schemas = {};

// We create a schema for our new task collection
Schemas.SimpleTask = new SimpleSchema({
  name: {
    type: String,
    label: "Task name",
    max: 200
  },
  details: {
    type: String,
    label: "Details"
  }
});

// Attach...
SimpleTasks.attachSchema(Schemas.SimpleTask);
// ... and allow insert operations
SimpleTasks.allow({
  insert: function(){
    return true;
  }
})
