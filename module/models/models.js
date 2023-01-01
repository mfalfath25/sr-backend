import mongoose from 'mongoose'

const schema = mongoose.Schema

const userSchema = new schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  setting: settingSchema,
  trainings: [
    {
      type: mongoose.ObjectId,
      ref: 'training',
    },
  ],
})

const trainingSchema = new schema({
  trainingId: String,
  traineeId: String,
  mode: String,
  text: {
    textLevel: {
      type: String,
      default: '-',
    },
    textChoice: {
      type: String,
      default: '-',
    },
    // textValue: String,
    textWordCount: Number,
  },
  chunksCount: Number,
  wpm: Number,
  accuracy: {
    type: Number,
    default: 0,
  },
  readTime: Number,
  readDate: Date,
})

const settingSchema = new schema({
  isFontSerif: {
    type: Boolean,
    default: false,
  },
  fixationCount: {
    type: Number,
    default: 0,
  },
  fontColor: {
    type: String,
    default: '#000000',
  },
})

const UserModel = mongoose.model('user', userSchema)
const TrainingModel = mongoose.model('training', trainingSchema)
const SettingModel = mongoose.model('setting', settingSchema)
