import mongoose from "mongoose";

const PostPgAccommodationSchema = new mongoose.Schema({
  photos: {
    type: [String],
    required: false,
  },
  address: {
    type: String,
    required: true,
  },
  roomTypes: {
    type: String,
    required: true,
  },
  amenities: {
    type: [String],
    enum: [
      "WiFi",
      "AC",
      "Laundry",
      "Parking",
      "Meals Included",
      "24x7 Security",
    ],
  },
  price: {
    type: Number,
    required: true,
  },
  contactName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\+?[0-9]{10,15}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
});

export default mongoose.models.PostPgAccommodation ||
  mongoose.model("PostPgAccommodation", PostPgAccommodationSchema);
