//const Candidate = require('./model/candidate')

function f()
{
    const Candidate = require('./model/candidate')
    let candidate=document.cookie;
    let vote=0;


    const response = await Candidate.create({
        candidate,
        vote
    })

}

