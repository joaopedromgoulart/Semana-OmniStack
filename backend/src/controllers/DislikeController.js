const Dev = require('../models/Dev');

module.exports = {
    
    async store(req, res) {
        console.log(req.params.devId);
        console.log(req.headers.user);

        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);  // nesse caso todas as info do user sao guardadas (name, user, bio, avatar )
        const targetDev = await Dev.findById(devId);

        if (!targetDev) {
            return res.status(400).json( {error: 'This dev doesnt exist' });
        }
        if (targetDev.likes.includes(loggedDev.id)) {
            console.log('MATCH');
        }

        loggedDev.dislikes.push(targetDev._id);  // salvando o ID do targetDev no vetor de likes do loggedDev
        await loggedDev.save();  // salvando as modificacoes no servidor

        return res.json({loggedDev});
    }
};