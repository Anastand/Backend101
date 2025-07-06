import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "enter the name of the subscription"],
    trim: true,
    minLength: 4,
    maxLength: 50,
  },
  price: {
    type: Number,
    required: [true, "enter the price of the subscription"],
    min:[0,"price can't be zero"]
  },
  currency: {
    type: String,
    enum: ["USD", "EUR", "GBP", "INR"],
    required: [true, "enter the currency"],
    default: "INR",
  },
  frequency: {
    type: String,
    enum: ["monthly", "weekly", "yearly"],
    default: "monthly",
  },
  category: {
    type: String,
    required:[true,"enter the category for the subscription"],
    enum: ["basic", "premium", "enterprise"],
    default: "basic",
  },
  paymentMethod: {
    type: String,
    required: [true, "enter the payment method"],
    trim: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive", "cancelled", "expired"],
    default: "active",
  },
  startDate: {
    type: Date,
    required: true,
    validate: {
      validator: (value) => { value <= new Date() },
      message: "Start date must be in the past or present",
    },
  },
  renwealDate: {
    type: Date,
    validate: {
      validator: function(value) { value >= this.startDate },
      message: "Renewal date must be in the future",
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  }
}, { timestamps: true });

subscriptionSchema.pre("save", function () {
  if (!this.renwealDate) {
    const renewablePeriod = {
      daily: 1,
      weeekly: 7,
      monthly: 30,
      yearly: 365,
    };
    this.renewableDate = new Date(this.startDate);
    this.renewableDate.setDate(this.renewableDate.getDate() + renewablePeriod(this.frequency)); 
  }

  if (this.renewableDate < new Date()) {
    this.status="expired"
  }
  next();
})

const subscription = mongoose.model('subscription', subscriptionSchema);

export default subscription;