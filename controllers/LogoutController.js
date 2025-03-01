import {saveSessions, loadSessions} from '../helpers.js'
export default function LogoutController(Req, Res){
    let sessions = loadSessions();
    
    if (sessions[Req.sessionID]) {
        delete sessions[Req.sessionID];
        saveSessions(sessions);
    }
    Res.redirect('/login')
}