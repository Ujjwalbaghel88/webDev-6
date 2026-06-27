export const sampleMiddleWare = async (req, res, next) => {

    console.log("I am Sample MiddleWare 1");
    next();
};
export const sampleMiddleWare2 = async (req, res, next) => {

    console.log("I am Sample MiddleWare 2");
    next();
};

