const roonSchema = mongoose.Schema({
    img: { type: String },
    name: { type: String },
    color : { type: String },
    level : { type: Number },
    description: { type: String },
    effect: { type: String },
    type: { type: String },
    for: { type: String },
});