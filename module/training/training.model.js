import mongoose from 'mongoose'

const schema = mongoose.Schema

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

// const trainingSchema = new schema({
//   trainingId: String,
//   traineeId: String,
//   mode: String,
//   text: [
//     {
//       textLevel: String,
//       textChoice: String,
//       textValue: String,
//       textWordCount: Number,
//       questionPairId: Number,
//       questions: [
//         {
//           allQuestions: [
//             {
//               questionText: String,
//               answerOptions: [
//                 {
//                   answerText: String,
//                   isCorrect: Boolean,
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],
//   chunksCount: Number,
//   wpm: Number,
//   accuracy: Number,
//   readTime: Number,
//   readDate: Date,
//   answers: [
//     {
//       answer: String,
//     },
//   ],
// })

const TrainingModel = mongoose.model('training', trainingSchema)
export { TrainingModel }
