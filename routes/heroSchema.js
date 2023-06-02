const heroSchema = mongoose.Schema({
    name: { type: String },
    story: { type: String },
    image: { type: String },
    skills: {
        passiveSkill: {
            name : { type : String },
            effect : { type : String },
        },
        firstSkill: {
            name : { type : String },
            effect : { type : String },
        },
        secondSkill: {
            name : { type : String },
            effect : { type : String },
        },
        ultimateSkill: {
            name : { type : String },
            effect : { type : String },
        }
    },
    type: {
        main: { type: String },
        sub: { type: String },
    },
    itemRecommend : {
        lane : {
            1 : { type: String },
            2 : { type: String },
            3 : { type: String },
            4 : { type: String },
            5 : { type: String },
        },
        jungle : {
            1 : { type: String },
            2 : { type: String },
            3 : { type: String },
            4 : { type: String },
            5 : { type: String },
        }
    },
    roonRecommend: {
        1 : { type: String },
        2 : { type: String },
        3 : { type: String }
    },

});