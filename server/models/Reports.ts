import mongoose from 'mongoose'

const ReportSchema = new mongoose.Schema({
    link: { type: String, required: true },
    start: {
        lat: { type: Number, required: true },
        lon: { type: Number, required: true }
    },
    stop: {
        lat: { type: Number, required: true },
        lon: { type: Number, required: true }
    },
    distance: { type: String },
    duration: { type: String }
})

export default ReportSchema
