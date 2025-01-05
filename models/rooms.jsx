import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
  name: {
    type: String, // Corrected 'string' to 'String'
    required: true
  },
  maxcount: {
    type: Number,
    required: true
  },
  rentperday: {
    type: Number,
    required: true // Corrected 'reqired' to 'required'
  },
  imageurls: {
    type: [String], // Optionally define type for image URLs array
    required: false
  },
  currentbookings: {
    type: [Object], // Optionally define type for current bookings array
    required: false
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const RoomModel = mongoose.model('rooms', roomSchema);

export default RoomModel; // Export using ES module syntax
