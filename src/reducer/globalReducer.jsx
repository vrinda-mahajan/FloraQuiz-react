
export const globalInitialState = {
    quizData: [],
    answers: {},
    points: {},
    score: 0,
    selectedQuiz: "",
}

export const globalReducer = (state,action) => {
    const {type,payload} = action
    switch (type){
        case "SET_QUIZ_DATA":
            return {...state,quizData:payload};
        case "SET_ANSWERS":
            const {key,value} = payload;
            return {...state,answers:{...state.answers,[key]:value}};
        case "SET_POINTS":
            const {quesNo,currQuesScore} = payload;
            return {...state,points:{...state.points,[quesNo]:currQuesScore}}
        case "SET_SELECTED_QUIZ":
            return {...state,selectedQuiz:payload}
        case "SET_SCORE":
            return {...state,score:Object.values(state.points).reduce((acc,curr)=>acc += curr,0)}
        case "SET_INITIAL_STATE":
            return globalInitialState;
        default :
            return {...state}
    }
}